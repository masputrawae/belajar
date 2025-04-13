importScripts(
  "https://cdn.bootcdn.net/ajax/libs/workbox-sw/7.3.0/workbox-sw.js"
);

function generateCacheVersion() {
  const d = new Date();
  return `v${d.getFullYear().toString().slice(-2)}${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}${d.getDate().toString().padStart(2, "0")}`;
}

const CACHE_VERSION = generateCacheVersion();
const CACHE_NAME = `${CACHE_VERSION}-site`;

if (workbox) {
  console.log("[SW] Workbox berhasil dimuat.");

  workbox.core.clientsClaim();
  self.skipWaiting();

  // Caching file statis (CSS dan JS)
  workbox.routing.registerRoute(
    ({ request }) => ["style", "script"].includes(request.destination),
    new workbox.strategies.CacheFirst({
      cacheName: `${CACHE_NAME}-static`,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 86400, // 30 hari
        }),
      ],
    })
  );

  self.addEventListener("install", (event) => {
    const JSON_INDEX_URL = `/belajar/news.json?v=${CACHE_VERSION}`;

    event.waitUntil(
      (async () => {
        const htmlCache = await caches.open(`${CACHE_NAME}-html`);

        try {
          const response = await fetch(JSON_INDEX_URL);
          if (!response.ok) throw new Error("Gagal fetch news.json");

          const allUrls = await response.json();
          const urls = allUrls.slice(0, 1000);

          for (const rawUrl of urls) {
            try {
              const url = new URL(rawUrl, self.location.origin).toString();
              const fetchResponse = await fetch(url);

              if (!fetchResponse.ok) {
                console.warn(`[SW] Skip (status ${fetchResponse.status}): ${url}`);
                continue;
              }

              await htmlCache.put(url, fetchResponse.clone());
              console.log(`[SW] Cached: ${url}`);
            } catch (err) {
              console.warn(`[SW] Gagal cache: ${rawUrl}`, err);
            }
          }
        } catch (err) {
          console.warn("[SW] Gagal mengambil atau parsing news.json:", err);
        }
      })()
    );
  });

  // Aktivasi: bersihkan cache lama
  self.addEventListener("activate", (event) => {
    const keep = [`${CACHE_NAME}-html`, `${CACHE_NAME}-static`];

    event.waitUntil(
      caches.keys().then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (!keep.includes(key)) {
              console.log(`[SW] Menghapus cache lama: ${key}`);
              return caches.delete(key);
            }
          })
        )
      )
    );
  });
} else {
  console.warn("[SW] Workbox gagal dimuat.");
}

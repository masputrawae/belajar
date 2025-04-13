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
  workbox.core.clientsClaim();
  self.skipWaiting();

  // HTML Pages
  workbox.routing.registerRoute(
    ({ request }) => request.destination === "document",
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: `${CACHE_NAME}-html`,
    })
  );

  // CSS & JS Files
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
    const JSON_INDEX_URL = "/test/news.json";
  
    event.waitUntil(
      (async () => {
        const htmlCache = await caches.open(`${CACHE_NAME}-html`);
  
        try {
          const response = await fetch(JSON_INDEX_URL);
          if (!response.ok) throw new Error("Gagal fetch pages.json");
  
          const urls = await response.json();
  
          for (const rawUrl of urls) {
            try {
              // Normalisasi dan pastikan trailing slash (Hugo default)
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
          console.warn("[SW] Gagal mengambil atau parsing pages.json:", err);
        }
      })()
    );
  });
  

  // Cleanup old caches
  self.addEventListener("activate", (event) => {
    const keep = [
      `${CACHE_NAME}-html`,
      `${CACHE_NAME}-static`,
    ];
    event.waitUntil(
      caches
        .keys()
        .then((keys) =>
          Promise.all(
            keys.map((key) => (keep.includes(key) ? null : caches.delete(key)))
          )
        )
    );
  });
}

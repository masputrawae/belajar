const SIDEBAR_FIRST_ID = "sidebarFirst";
const SIDEBAR_FIRST_KEY = "sidebarFirstState";
const sidebarFirst = document.getElementById(SIDEBAR_FIRST_ID);

// Pulihkan status sidebarFirst
if (sidebarFirst) {
  const saved = localStorage.getItem(SIDEBAR_FIRST_KEY);
  sidebarFirst.classList.toggle("is-active", saved === "show");
}

document.body.addEventListener("click", (e) => {
  const toggle = e.target.closest("[data-toggle-offcanvas]");
  const isInsideSidebar = sidebarFirst && sidebarFirst.contains(e.target);

  // Fungsi bantu untuk toggle icon tombol
  const toggleIcon = (btn, active) => {
    const icon = btn?.querySelector("i");
    if (!icon) return;

    icon.classList.toggle("bi-x", active);
    icon.dataset.original =
      icon.dataset.original ||
      [...icon.classList].find(
        (cls) => cls.startsWith("bi-") && cls !== "bi-x"
      );

    if (!active && icon.dataset.original) {
      icon.classList.add(icon.dataset.original);
      icon.classList.remove("bi-x");
    } else {
      icon.classList.remove(icon.dataset.original);
    }
  };

  if (toggle) {
    const key = toggle.dataset.toggleOffcanvas;
    const target = document.querySelector(`[data-offcanvas="${key}"]`);
    if (!target) return;

    const isSidebarFirst = target.id === SIDEBAR_FIRST_ID;

    if (isSidebarFirst) {
      const active = target.classList.toggle("is-active");
      localStorage.setItem(SIDEBAR_FIRST_KEY, active ? "show" : "hidden");
      toggleIcon(toggle, active);
    } else {
      document.querySelectorAll("[data-offcanvas]").forEach((el) => {
        if (el !== target && el.id !== SIDEBAR_FIRST_ID)
          el.classList.remove("is-active");
      });
      const active = target.classList.toggle("is-active");
      toggleIcon(toggle, active);
    }
    return;
  }

  // Klik di luar semua offcanvas: tutup semua (kecuali sidebarFirst)
  if (!e.target.closest("[data-offcanvas]") && !isInsideSidebar) {
    document.querySelectorAll("[data-offcanvas]").forEach((el) => {
      if (el.id !== SIDEBAR_FIRST_ID) {
        el.classList.remove("is-active");

        // Reset icon jika ada tombol toggle yang tertaut
        const btn = document.querySelector(
          `[data-toggle-offcanvas="${el.dataset.offcanvas}"]`
        );
        if (btn) toggleIcon(btn, false);
      }
    });
  }
});

// === Collapsible Folder Tree ===
const FOLDER_STATE_KEY = "collapsedFolders";
const ALL_COLLAPSE_KEY = "allCollapsed";
const toggleAllBtn = document.getElementById("toggle-all-collapse");
const collapsedMap = JSON.parse(localStorage.getItem(FOLDER_STATE_KEY) || "{}");

function updateFolderIcon(key, collapsed) {
  const btn = document.querySelector(`[data-toggle-collapse="${key}"]`);
  const icon = btn?.querySelector("i.bi");
  if (!icon) return;
  icon.classList.toggle("bi-folder2", collapsed);
  icon.classList.toggle("bi-folder2-open", !collapsed);
}

function updateGlobalIcon(allCollapsed) {
  const icon = toggleAllBtn?.querySelector("i.bi");
  if (!icon) return;
  icon.classList.toggle("bi-arrows-expand", allCollapsed);
  icon.classList.toggle("bi-arrows-collapse", !allCollapsed);
}

document.querySelectorAll("[data-collapse]").forEach((ul) => {
  const key = ul.dataset.collapse;
  const isCollapsed = key in collapsedMap ? collapsedMap[key] : true; // Default to collapsed
  ul.classList.toggle("is-collapse", isCollapsed);
  updateFolderIcon(key, isCollapsed);
});

document.body.addEventListener("click", (e) => {
  const toggle = e.target.closest("[data-toggle-collapse]");
  if (!toggle) return;

  const key = toggle.dataset.toggleCollapse;
  const target = document.querySelector(`[data-collapse="${key}"]`);
  if (!target) return;

  const collapsed = target.classList.toggle("is-collapse");
  collapsedMap[key] = collapsed;
  localStorage.setItem(FOLDER_STATE_KEY, JSON.stringify(collapsedMap));

  updateFolderIcon(key, collapsed);
});

toggleAllBtn?.addEventListener("click", () => {
  const allCollapsed = toggleAllBtn.classList.toggle("collapsed-mode");
  document.querySelectorAll("[data-collapse]").forEach((ul) => {
    const key = ul.dataset.collapse;
    ul.classList.toggle("is-collapse", allCollapsed);
    collapsedMap[key] = allCollapsed;
    updateFolderIcon(key, allCollapsed);
  });
  localStorage.setItem(FOLDER_STATE_KEY, JSON.stringify(collapsedMap));
  localStorage.setItem(ALL_COLLAPSE_KEY, allCollapsed ? "1" : "0");
  updateGlobalIcon(allCollapsed);
});

if (localStorage.getItem(ALL_COLLAPSE_KEY) === "1") {
  toggleAllBtn?.classList.add("collapsed-mode");
  updateGlobalIcon(true);
}

// === Theme Switcher ===
const THEME_KEY = "user-theme";
const htmlEl = document.documentElement;
const switchBtn = document.getElementById("switchTheme");
const iconEl = switchBtn?.querySelector("i.bi");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(mode) {
  let theme;
  if (mode === "auto") {
    theme = prefersDark.matches ? "dark" : "light";
    localStorage.removeItem(THEME_KEY);
  } else {
    theme = mode;
    localStorage.setItem(THEME_KEY, mode);
  }
  htmlEl.setAttribute("data-theme", theme);
  updateIcon(mode);
}

function updateIcon(mode) {
  iconEl?.classList.remove("bi-sun", "bi-moon-stars-fill", "bi-circle-half");
  iconEl?.classList.add(
    mode === "light"
      ? "bi-sun"
      : mode === "dark"
      ? "bi-moon-stars-fill"
      : "bi-circle-half"
  );
}

function getNextMode(current) {
  return current === "auto" ? "light" : current === "light" ? "dark" : "auto";
}

switchBtn?.addEventListener("click", () => {
  const current = localStorage.getItem(THEME_KEY) || "auto";
  applyTheme(getNextMode(current));
});

applyTheme(localStorage.getItem(THEME_KEY) || "auto");

prefersDark.addEventListener("change", () => {
  if (!localStorage.getItem(THEME_KEY)) applyTheme("auto");
});

// === Nav Link Highlight ===
const navLinks = document.querySelectorAll("[data-href]");
const currentPath = window.location.pathname.replace(/\/+\$/, "");

let bestMatch = null;
let bestLength = 0;

navLinks.forEach((link) => {
  const href = link.getAttribute("data-href").replace(/\/+\$/, "");
  if (
    (currentPath === href || currentPath.startsWith(href + "/")) &&
    href.length > bestLength
  ) {
    bestMatch = link;
    bestLength = href.length;
  }
});

bestMatch?.classList.add("nav__link--active");

// === TOC Link Observer ===
const tocLinks = document.querySelectorAll(".nav__link--toc");
const headingTargets = Array.from(tocLinks)
  .map((link) => {
    const id = decodeURIComponent(link.hash.slice(1));
    const target = document.getElementById(id);
    return target ? { id, target } : null;
  })
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries.find(
      (e) => e.isIntersecting && e.intersectionRatio > 0
    );
    if (!entry) return;
    const id = entry.target.id;
    tocLinks.forEach((link) => {
      const match = decodeURIComponent(link.hash.slice(1)) === id;
      link.classList.toggle("nav__link--active", match);
    });
  },
  {
    rootMargin: "0px 0px -70% 0px",
    threshold: [0.1, 0.5, 1.0],
  }
);

headingTargets.forEach(({ target }) => observer.observe(target));

// === Back To Top ===
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    backToTopBtn?.classList.add("show");
  } else {
    backToTopBtn?.classList.remove("show");
  }
});

backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

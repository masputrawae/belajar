// === Sidebar Logic ===
const BREAKPOINT = 48 * 16; // 48em in pixels
const SIDEBAR_ATTR = 'data-sidebar';
const TOGGLE_ATTR = 'data-toggle-sidebar';
const HIDE_BTN_ATTR = 'data-button-hidden';
const CLASS_OPEN = 'is-open';
const CLASS_BTN_HIDDEN = 'btn--sidebar-hidden';

const sidebars = Array.from(document.querySelectorAll(`[${SIDEBAR_ATTR}]`));
const toggles = Array.from(document.querySelectorAll(`[${TOGGLE_ATTR}]`));
const toggleMap = new Map();

function isDesktop() {
  return window.innerWidth >= BREAKPOINT;
}

// Mapping tombol ke sidebar
toggles.forEach(btn => {
  const target = btn.getAttribute(TOGGLE_ATTR);
  if (!toggleMap.has(target)) toggleMap.set(target, []);
  toggleMap.get(target).push(btn);
});

// Update class tombol toggle (sembunyikan jika perlu)
function updateButtonVisibility(targetName, isOpen) {
  const buttons = toggleMap.get(targetName) || [];
  buttons.forEach(btn => {
    const shouldHide = btn.getAttribute(HIDE_BTN_ATTR) === 'true';
    if (!shouldHide) return;
    btn.classList.toggle(CLASS_BTN_HIDDEN, isOpen);
  });
}

// Buka sidebar
function openSidebar(el, targetName) {
  el.classList.add(CLASS_OPEN);
  if (isDesktop()) localStorage.setItem(`sidebar:${targetName}`, 'open');
  updateButtonVisibility(targetName, true);
}

// Tutup sidebar
function closeSidebar(el, targetName) {
  el.classList.remove(CLASS_OPEN);
  if (isDesktop()) localStorage.setItem(`sidebar:${targetName}`, 'closed');
  updateButtonVisibility(targetName, false);
}

// Toggle sidebar
function toggleSidebar(targetName) {
  const el = document.querySelector(`[${SIDEBAR_ATTR}="${targetName}"]`);
  if (!el) return;

  const isOpen = el.classList.contains(CLASS_OPEN);
  if (isOpen) {
    closeSidebar(el, targetName);
  } else {
    openSidebar(el, targetName);
  }
}

// Inisialisasi state saat load
function initSidebarState() {
  sidebars.forEach(el => {
    const name = el.getAttribute(SIDEBAR_ATTR);
    const savedState = localStorage.getItem(`sidebar:${name}`);

    if (isDesktop()) {
      if (savedState === 'closed') {
        closeSidebar(el, name);
      } else {
        openSidebar(el, name);
      }
    } else {
      closeSidebar(el, name);
    }
  });
}

// Event listener tombol toggle
toggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute(TOGGLE_ATTR);
    toggleSidebar(target);
  });
});

// Responsif terhadap resize
let lastIsDesktop = isDesktop();
window.addEventListener('resize', () => {
  const nowIsDesktop = isDesktop();
  if (nowIsDesktop !== lastIsDesktop) {
    lastIsDesktop = nowIsDesktop;
    initSidebarState(); // Reset state sesuai mode
  }
});

// Klik di luar sidebar untuk tutup (mobile)
document.addEventListener('click', (event) => {
  if (isDesktop()) return;

  sidebars.forEach(el => {
    const name = el.getAttribute(SIDEBAR_ATTR);
    if (!el.classList.contains(CLASS_OPEN)) return;

    const clickedInsideSidebar = el.contains(event.target);
    const clickedToggleButton = toggles.some(btn =>
      btn.getAttribute(TOGGLE_ATTR) === name && btn.contains(event.target)
    );

    if (!clickedInsideSidebar && !clickedToggleButton) {
      closeSidebar(el, name);
    }
  });
});

// Tambahkan class js-ready & jalankan init saat dokumen siap
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-ready');
  initSidebarState();
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
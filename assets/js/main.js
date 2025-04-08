document.addEventListener("DOMContentLoaded", () => {
  const SIDEBAR_FIRST_ID = "sidebarFirst";
  const SIDEBAR_FIRST_KEY = "sidebarFirstState";
  const sidebarFirst = document.getElementById(SIDEBAR_FIRST_ID);

  // Pulihkan status sidebarFirst dari localStorage
  if (sidebarFirst) {
    const saved = localStorage.getItem(SIDEBAR_FIRST_KEY);
    sidebarFirst.classList.toggle("is-active", saved === "show");
  }

  document.body.addEventListener("click", e => {
    const toggle = e.target.closest("[data-toggle-offcanvas]");
    const isInsideSidebar = sidebarFirst && sidebarFirst.contains(e.target);

    if (toggle) {
      const key = toggle.dataset.toggleOffcanvas;
      const target = document.querySelector(`[data-offcanvas="${key}"]`);
      if (!target) return;

      const isSidebarFirst = target.id === SIDEBAR_FIRST_ID;

      if (isSidebarFirst) {
        const active = target.classList.toggle("is-active");
        localStorage.setItem(SIDEBAR_FIRST_KEY, active ? "show" : "hidden");
      } else {
        // Tutup semua offcanvas lain kecuali sidebarFirst dan target saat ini
        document.querySelectorAll("[data-offcanvas]").forEach(el => {
          if (el !== target && el.id !== SIDEBAR_FIRST_ID) el.classList.remove("is-active");
        });
        target.classList.toggle("is-active");
      }
      return;
    }

    // Klik di luar semua offcanvas dan tombol: tutup semua (kecuali sidebarFirst)
    if (!e.target.closest("[data-offcanvas]") && !isInsideSidebar) {
      document.querySelectorAll("[data-offcanvas]").forEach(el => {
        if (el.id !== SIDEBAR_FIRST_ID) el.classList.remove("is-active");
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const FOLDER_STATE_KEY = "collapsedFolders";
  const ALL_COLLAPSE_KEY = "allCollapsed";
  const toggleAllBtn = document.getElementById("toggle-all-collapse");
  const collapsedMap = JSON.parse(localStorage.getItem(FOLDER_STATE_KEY) || "{}");

  // Pulihkan status collapse per folder
  document.querySelectorAll("[data-collapse]").forEach(ul => {
    const key = ul.dataset.collapse;
    const isCollapsed = collapsedMap[key];

    if (isCollapsed) {
      ul.classList.add("is-collapse");
      updateFolderIcon(key, true);
    }
  });

  // Fungsi: ubah icon folder sesuai status
  function updateFolderIcon(key, collapsed) {
    const btn = document.querySelector(`[data-toggle-collapse="${key}"]`);
    if (!btn) return;

    const icon = btn.querySelector("i.bi");
    if (!icon) return;

    icon.classList.toggle("bi-folder2", collapsed);
    icon.classList.toggle("bi-folder2-open", !collapsed);
  }

  // Fungsi: toggle icon tombol global
  function updateGlobalIcon(allCollapsed) {
    const icon = toggleAllBtn?.querySelector("i.bi");
    if (!icon) return;

    icon.classList.toggle("bi-arrows-expand", allCollapsed);
    icon.classList.toggle("bi-arrows-collapse", !allCollapsed);
  }

  // Klik tombol per-folder
  document.body.addEventListener("click", e => {
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

  // Klik tombol global collapse all
  toggleAllBtn?.addEventListener("click", () => {
    const allCollapsed = toggleAllBtn.classList.toggle("collapsed-mode");
    const items = document.querySelectorAll("[data-collapse]");

    items.forEach(ul => {
      const key = ul.dataset.collapse;
      ul.classList.toggle("is-collapse", allCollapsed);
      collapsedMap[key] = allCollapsed;
      updateFolderIcon(key, allCollapsed);
    });

    localStorage.setItem(FOLDER_STATE_KEY, JSON.stringify(collapsedMap));
    localStorage.setItem(ALL_COLLAPSE_KEY, allCollapsed ? "1" : "0");

    updateGlobalIcon(allCollapsed);
  });

  // Pulihkan icon tombol global
  const globalState = localStorage.getItem(ALL_COLLAPSE_KEY) === "1";
  if (globalState) {
    toggleAllBtn?.classList.add("collapsed-mode");
    updateGlobalIcon(true);
  }
});

// SWITCH THEMES
document.addEventListener("DOMContentLoaded", () => {
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

    switch (mode) {
      case "light":
        iconEl?.classList.add("bi-sun");
        break;
      case "dark":
        iconEl?.classList.add("bi-moon-stars-fill");
        break;
      default:
        iconEl?.classList.add("bi-circle-half");
        break;
    }
  }

  function getNextMode(current) {
    return current === "auto" ? "light"
         : current === "light" ? "dark"
         : "auto";
  }

  // Event listener toggle
  switchBtn?.addEventListener("click", () => {
    const current = localStorage.getItem(THEME_KEY) || "auto";
    const next = getNextMode(current);
    applyTheme(next);
  });

  // Apply theme on load
  const stored = localStorage.getItem(THEME_KEY);
  applyTheme(stored || "auto");

  // Responsif terhadap perubahan sistem saat mode = auto
  prefersDark.addEventListener("change", () => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (!storedTheme) {
      applyTheme("auto");
    }
  });
});

// LINK HEILIGHT
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('[data-href]');
  const currentPath = window.location.pathname.replace(/\/+$/, '');

  let bestMatch = null;
  let bestLength = 0;

  navLinks.forEach(link => {
    const href = link.getAttribute('data-href').replace(/\/+$/, '');

    if (currentPath === href || currentPath.startsWith(href + '/')) {
      if (href.length > bestLength) {
        bestMatch = link;
        bestLength = href.length;
      }
    }
  });

  if (bestMatch) {
    bestMatch.classList.add('nav__link--active');
  }
});

// LINK HEILIGHT TOC
document.addEventListener('DOMContentLoaded', () => {
  const tocLinks = document.querySelectorAll('.nav__link--toc');
  const headingTargets = [];

  tocLinks.forEach(link => {
    const id = decodeURIComponent(link.hash.slice(1));
    const target = document.getElementById(id);
    if (target) {
      headingTargets.push({ id, target });
    }
  });

  const observer = new IntersectionObserver((entries) => {
    let visibleEntry = null;

    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        visibleEntry = entry;
      }
    });

    if (visibleEntry) {
      const id = visibleEntry.target.id;

      tocLinks.forEach(link => {
        link.classList.toggle('nav__link--active', decodeURIComponent(link.hash.slice(1)) === id);
      });
    }
  }, {
    rootMargin: '0px 0px -70% 0px',
    threshold: [0.1, 0.5, 1.0]
  });

  headingTargets.forEach(({ target }) => observer.observe(target));
});
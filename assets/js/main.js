/*!
 * Custom Script for [Belajar (https://masputrawae.github.io/official/)]
 * Author: Putra Jaya
 * License: MIT
 */

// == Global Variables == //
const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const COLLAPSE_CLASS = 'collapse';
const OPEN_CLASS = 'collapse--open';
const TOGGLE_OPEN_CLASS = 'is-open';

const toggles = $$("[data-toggle]");
const sidebars = $$("[data-sidebar]");

// == Sidebar Function == //
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const target = toggle.getAttribute("data-toggle");
    const sidebar = $(`[data-sidebar="${target}"]`);
    sidebar?.classList.toggle("sidebar--open");
  });
});

if (sidebars.length) {
  document.addEventListener("click", (e) => {
    sidebars.forEach((sidebar) => {
      if (!sidebar.classList.contains("sidebar--open")) return;

      const targetKey = sidebar.getAttribute("data-sidebar");
      const toggle = $(`[data-toggle="${targetKey}"]`);

      if (
        !sidebar.contains(e.target) &&
        !toggle?.contains(e.target)
      ) {
        sidebar.classList.remove("sidebar--open");
      }
    });
  });
}

// Restore state dari sessionStorage
$$('[data-collapse]').forEach(ul => {
  const key = ul.getAttribute('data-collapse');
  const state = sessionStorage.getItem(`collapse:${key}`);
  if (state === 'open') {
    ul.classList.add(OPEN_CLASS);
    const toggle = $(`[data-toggle-collapse="${key}"]`);
    toggle?.classList.add(TOGGLE_OPEN_CLASS);
  }
});

// Toggle per-section
$$('[data-toggle-collapse]').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const key = toggle.getAttribute('data-toggle-collapse');
    const target = $(`[data-collapse="${key}"]`);
    if (!target) return;

    const isOpen = target.classList.toggle(OPEN_CLASS);
    toggle.classList.toggle(TOGGLE_OPEN_CLASS, isOpen);
    sessionStorage.setItem(`collapse:${key}`, isOpen ? 'open' : 'closed');
  });
});

// Global toggle
const allCollapseBtn = $('#allCollapse');
if (allCollapseBtn) {
  allCollapseBtn.addEventListener('click', () => {
    const collapses = $$('[data-collapse]');
    const toggles = $$('[data-toggle-collapse]');
    const anyOpen = Array.from(collapses).some(el => el.classList.contains(OPEN_CLASS));
    const action = anyOpen ? 'closed' : 'open';

    collapses.forEach(el => {
      const key = el.getAttribute('data-collapse');
      el.classList.toggle(OPEN_CLASS, action === 'open');
      sessionStorage.setItem(`collapse:${key}`, action);
    });

    toggles.forEach(toggle => {
      toggle.classList.toggle(TOGGLE_OPEN_CLASS, action === 'open');
    });
  });
}

// == SWITCH THEMES == //
const themeToggle = document.getElementById('switchThemes');
const html = document.documentElement;

const THEMES = {
  DARK: 'dark',
  LIGHT: 'light'
};

function applyTheme(theme) {
  html.classList.add('theme-transition');
  html.setAttribute('data-theme', theme);
  sessionStorage.setItem('theme', theme);
  setTimeout(() => html.classList.remove('theme-transition'), 500);
}

function getPreferredTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? THEMES.DARK
    : THEMES.LIGHT;
}

// Inisialisasi tema saat pertama kali halaman dimuat
(function initTheme() {
  const savedTheme = sessionStorage.getItem('theme');
  applyTheme(savedTheme || getPreferredTheme());
})();

// Toggle tema saat tombol diklik
themeToggle?.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const newTheme = current === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
  applyTheme(newTheme);
});

// == ACTIVE LINK == //
const links = $$('[data-href]');

// Fungsi untuk memperbarui link aktif
function updateActiveLink() {
  const currentPath = window.location.pathname;

  links.forEach(link => {
    const linkHref = link.getAttribute('data-href');

    if (linkHref === currentPath) {
      link.classList.add('nav__link--active');
    } else {
      link.classList.remove('nav__link--active');
    }
  });
}

// Panggil fungsi saat halaman dimuat
updateActiveLink();
window.addEventListener('popstate', updateActiveLink);

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

// === Search ===
const initSearch = async () => {
  const $ = (s) => document.querySelector(s);
  const searchForm = $("#search");
  const searchInput = $("#search-input");
  const resultsPanel = $("#resultsPanel");
  const resultsContainer = $("#results");

  if (!searchForm || !searchInput || !resultsPanel || !resultsContainer) {
    console.error("Elemen pencarian tidak lengkap.");
    return;
  }

  const searchUrl = searchForm.getAttribute("data-search-url");
  if (!searchUrl) return console.error("Data URL pencarian tidak ditemukan.");

  try {
    const response = await fetch(searchUrl);
    const store = await response.json();

    if (!Array.isArray(store))
      throw new Error("Format data pencarian tidak valid.");

    const idx = lunr(function () {
      this.ref("id");
      this.field("title", { boost: 40 });
      this.field("tags", { boost: 30 });
      this.field("description", { boost: 20 });
      this.field("category", { boost: 10 });
      this.field("content");
      store.forEach((doc) => this.add(doc));
    });

    const displayResults = (results, query) => {
      if (!query) {
        resultsPanel.style.display = "none";
        resultsContainer.innerHTML = "";
        return;
      }

      resultsPanel.style.display = "block";
      resultsContainer.innerHTML = results.length
        ? results
            .map((r) => {
              const doc = store.find((d) => d.id === r.ref);
              return doc
                ? `<li class="nav__item"><a class="nav__link nav__link--file" href="${doc.url}"><i class="bi bi-file-earmark-text"></i>${doc.title}</a></li>`
                : "";
            })
            .join("")
        : '<li class="nav__item">No results found.</li>';
    };

    const doSearch = (query) => {
      const trimmed = query.trim();
      const results = trimmed ? idx.search(`*${trimmed}* ${trimmed}~1`) : [];
      displayResults(results, trimmed);
    };

    const debounce = (fn, delay = 300) => {
      let t;
      return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), delay);
      };
    };

    // Listen to input events
    searchInput.addEventListener(
      "input",
      debounce(() => {
        doSearch(searchInput.value);
      })
    );

    // Support for query from URL
    const urlQuery = new URLSearchParams(window.location.search).get("query");
    if (urlQuery) {
      searchInput.value = urlQuery;
      doSearch(urlQuery);
    }
  } catch (err) {
    console.error("Gagal memuat index pencarian:", err);
  }
};

document.addEventListener("DOMContentLoaded", initSearch);
/* --- Next.js compatibility shim ---------------------------------------
   By the time next/script executes this file, the browser's real
   "DOMContentLoaded" event has already fired (it fires once, right after
   the initial HTML parse — long before React hydrates and injects this
   script). Any `document.addEventListener("DOMContentLoaded", fn)` call
   below would register a listener for an event that will never fire again,
   so `fn` would silently never run. This shim makes those calls run `fn`
   immediately (async) instead, restoring the original static-site timing. */
if (document.readyState !== "loading") {
  var __rcOrigAddEventListener = document.addEventListener.bind(document);
  document.addEventListener = function (type, listener, options) {
    if (type === "DOMContentLoaded") {
      setTimeout(listener, 0);
      return;
    }
    return __rcOrigAddEventListener(type, listener, options);
  };
}
/* ------------------------------------------------------------------------ */

/**
 * Realcognita – Theme (Light/Dark) Controller
 * Persists preference in localStorage, applies via [data-theme] on <html>.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "rc-theme";

  function getStored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
    document.querySelectorAll("#themeToggleBtn, #drawerThemeToggleBtn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    });
  }

  function current() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  var transitionTimer = null;

  function toggle() {
    // Briefly enable a global color-transition (see css/premium-enhancements.css)
    // so the light/dark swap crossfades smoothly instead of jumping.
    var root = document.documentElement;
    root.classList.add("theme-transitioning");
    if (transitionTimer) clearTimeout(transitionTimer);
    transitionTimer = setTimeout(function () {
      root.classList.remove("theme-transitioning");
    }, 500);

    apply(current() === "dark" ? "light" : "dark");
  }

  // Apply stored/system preference as early as possible (also mirrored by
  // the inline anti-flash snippet in <head>, this just keeps state in sync
  // once the full script runs).
  var stored = getStored();
  if (stored) {
    apply(stored);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    apply("dark");
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("#themeToggleBtn, #drawerThemeToggleBtn").forEach(function (btn) {
      btn.addEventListener("click", toggle);
    });
  });

  // Keep in sync with OS-level changes for visitors who never made an
  // explicit choice (no stored preference yet).
  if (window.matchMedia) {
    var mql = window.matchMedia("(prefers-color-scheme: dark)");
    var onSystemChange = function (e) {
      if (!getStored()) apply(e.matches ? "dark" : "light");
    };
    if (mql.addEventListener) mql.addEventListener("change", onSystemChange);
    else if (mql.addListener) mql.addListener(onSystemChange);
  }

  window.RCTheme = { toggle: toggle, apply: apply, current: current };
})();

"use client";

import { useEffect } from "react";

/**
 * Runs the preloader reveal logic (originally an inline <script> next to the
 * #preloader markup inside NAV_HTML in js/components.js).
 */
export default function PreloaderScript() {
  useEffect(() => {
    const preloaderEl = document.getElementById("preloader");
    if (!preloaderEl) return;

    const revealDelay = 2600;
    const timer = setTimeout(() => {
      preloaderEl.classList.add("is-hidden");
      const onEnd = (e) => {
        if (e.target === preloaderEl) {
          preloaderEl.style.display = "none";
          preloaderEl.removeEventListener("transitionend", onEnd);
        }
      };
      preloaderEl.addEventListener("transitionend", onEnd);
    }, revealDelay);

    return () => clearTimeout(timer);
  }, []);

  return null;
}

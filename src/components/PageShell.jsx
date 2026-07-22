"use client";

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Script from "next/script";

/**
 * PageShell — single source of truth for "Header + page content + Footer +
 * page-specific scripts", used by every route in app/. Keeps each
 * app/<slug>/page.jsx down to just its metadata + HTML + script list instead
 * of repeating this structure 23 times.
 *
 * @param {string} html - the page's inner HTML (rendered between Header/Footer)
 * @param {Array<{src?: string, code?: string, id?: string}>} scripts
 *   - {src}: external/local script, loaded via next/script
 *   - {code, id}: inline script, loaded via next/script (id required by Next)
 */
export default function PageShell({ html, scripts = [] }) {
  return (
    <>
      <Header />
      <main id="main-content" dangerouslySetInnerHTML={{ __html: html }} />
      <Footer />
      {scripts.map((s, i) =>
        s.src ? (
          <Script key={s.src + i} src={s.src} strategy="afterInteractive" />
        ) : (
          <Script key={s.id || i} id={s.id || `inline-script-${i}`} strategy="afterInteractive">
            {s.code}
          </Script>
        )
      )}
    </>
  );
}

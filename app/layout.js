import "./globals.css";
import Script from "next/script";
import PreloaderScript from "@/src/components/PreloaderScript";

export const metadata = {
  title: "Realcognita Expert Construction & Engineering Consulting",
  description:
    "Realcognita offers premier construction consulting, outsource estimating services, and project management. Partner with our consultants today.",
  icons: { icon: "/assets/logo/icon.png" },
};

// Same page-CSS list every original .html file pulled in (main + inner-pages +
// premium-enhancements globally, then all page-specific stylesheets — safe to
// load everywhere since each is scoped to its own page classes/ids).
const PAGE_CSS = [
  "/css/pages/3d-rendering-and-visualization.css",
  "/css/pages/administrative-support.css",
  "/css/pages/architectural_drafting.css",
  "/css/pages/bim-modelling-services.css",
  "/css/pages/blog.css",
  "/css/pages/careers.css",
  "/css/pages/case_studies.css",
  "/css/pages/commercial-services.css",
  "/css/pages/drafting.css",
  "/css/pages/infrastructure-support.css",
  "/css/pages/production-scheduling.css",
  "/css/pages/production_estimating.css",
  "/css/pages/project-management.css",
  "/css/pages/rebar-services.css",
  "/css/pages/residential-engineering.css",
  "/css/pages/testimonials.css",
  "/css/pages/white-papers.css",
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/inner-pages.css" />
        <link rel="stylesheet" href="/css/premium-enhancements.css" />
        {PAGE_CSS.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        {/* theme + region restore, run before paint to avoid flash */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('rc-theme');if(!t&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)t='dark';if(t)document.documentElement.setAttribute('data-theme',t);var r=localStorage.getItem('rc-region')||'us';document.documentElement.setAttribute('data-region',r);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <PreloaderScript />
        <Script src="/js/main.js" strategy="afterInteractive" />
        <Script src="/js/theme.js" strategy="afterInteractive" />
        <Script src="/js/chatbot.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

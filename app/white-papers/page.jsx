import PageShell from "@/src/components/PageShell";

export const metadata = {
  title: 'Realcognita Commercial Construction White Papers',
  description: 'Access Realcognita white papers on commercial construction trends, contractor challenges, and insights for better project delivery.',
};

const html = `
 Nav + Footer injected by components.js 
<main class="res-main">
<!-- ============================== HERO ============================== -->
<section class="res-hero">
<div class="res-container" style="position:relative;">
<h1 class="res-hero-title">Commercial Construction &amp;<span class="accent"> White Papers</span></h1>
<p class="res-hero-desc">
        In-depth guides for commercial construction companies and contractors working through structural detailing, BIM adoption, estimating, and construction documentation trends. </p>
</div>
</section>
<!-- ============================== CONTROLS ============================== -->
<div class="res-library">
<div class="res-controls">
<div class="res-container" style="display:flex;flex-wrap:wrap;align-items:center;gap:0.9rem;width:100%;">
<div class="res-search">
<svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.35-4.35"></path></svg>
<input aria-label="Search white papers" data-doc-search="" placeholder="Search white papers…" type="text"/>
</div>
<div class="res-chips">
<button class="res-chip is-active" data-filter="all">All Papers</button>
<button class="res-chip" data-filter="structural">Structural</button>
<button class="res-chip" data-filter="bim">BIM &amp; Coordination</button>
<button class="res-chip" data-filter="estimating">Estimating</button>
<button class="res-chip" data-filter="residential">Residential</button>
<button class="res-chip" data-filter="commercial">Commercial</button>
</div>
<span class="res-count" data-doc-count=""></span>
</div>
</div>
<!-- ============================== GRID ============================== -->
<section class="res-grid-section">
<div class="res-container">
<div class="doc-grid" data-doc-grid="">
<!-- 1 -->
<article class="doc-card" data-abstract="A field study of rebar placement tolerances across 40 seismic-zone pours, comparing as-designed schedules against as-built survey data to establish practical variance thresholds for review teams." data-category="structural" data-category-label="Structural" data-search="rebar detailing tolerances seismic zones structural" data-toc="Study Scope &amp; Methodology|Tolerance Bands by Element Type|Seismic Zone Comparisons|Review Workflow Recommendations|Appendix: Raw Variance Data">
<div class="doc-head">
<span class="doc-format">PDF · 18pp</span>
<svg class="doc-fold" fill="none" viewbox="0 0 30 30"><path d="M6 4h13l5 5v17H6z" stroke="currentColor" stroke-width="1.4"></path><path d="M19 4v5h5" stroke="currentColor" stroke-width="1.4"></path></svg>
</div>
<div class="doc-body">
<p class="doc-category">Structural / Rebar</p>
<h3 class="doc-title">Rebar Detailing Tolerances for Seismic Zones</h3>
<p class="doc-desc">As-built variance data across 40 seismic-zone pours, with recommended tolerance bands by element type.</p>
</div>
<div class="doc-titleblock">
<div class="doc-tb-row">
<div class="doc-tb-cell"><div class="doc-tb-label">Rev</div><div class="doc-tb-value">C</div></div>
<div class="doc-tb-cell"><div class="doc-tb-label">Updated</div><div class="doc-tb-value">Jun 2026</div></div>
<div class="doc-tb-cell"><div class="doc-tb-label">Sheet No.</div><div class="doc-tb-value">WP‑014</div></div>
</div>
</div>
<div class="doc-actions">
<button class="doc-btn-download" data-doc-title="Rebar Detailing Tolerances for Seismic Zones">
<svg class="doc-dl-icon" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"></path></svg>
<svg class="doc-dl-check" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
<span>Download</span>
</button>
<button aria-label="Preview abstract" class="doc-btn-preview"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
</div>
</article>
<!-- 2 -->
<article class="doc-card" data-abstract="Benchmark data on clash volumes across architectural, structural and MEP models at three coordination maturity levels, with a proposed scoring model for tracking model health over a project's lifecycle." data-category="bim" data-category-label="BIM &amp; Coordination" data-search="bim clash detection benchmarks disciplines coordination" data-toc="Why Benchmark Clash Volume|Sample Set &amp; Maturity Tiers|Findings by Discipline Pair|A Model Health Scoring Framework|Using This Data on Your Project">
<div class="doc-head">
<span class="doc-format">PDF · 22pp</span>
<svg class="doc-fold" fill="none" viewbox="0 0 30 30"><path d="M6 4h13l5 5v17H6z" stroke="currentColor" stroke-width="1.4"></path><path d="M19 4v5h5" stroke="currentColor" stroke-width="1.4"></path></svg>
</div>
<div class="doc-body">
<p class="doc-category">BIM / Coordination</p>
<h3 class="doc-title">BIM Clash Detection Benchmarks Across Disciplines</h3>
<p class="doc-desc">Clash volume data across architectural, structural and MEP models, scored against three coordination maturity tiers.</p>
</div>
<div class="doc-titleblock">
<div class="doc-tb-row">
<div class="doc-tb-cell"><div class="doc-tb-label">Rev</div><div class="doc-tb-value">B</div></div>
<div class="doc-tb-cell"><div class="doc-tb-label">Updated</div><div class="doc-tb-value">May 2026</div></div>
<div class="doc-tb-cell"><div class="doc-tb-label">Sheet No.</div><div class="doc-tb-value">WP‑011</div></div>
</div>
</div>
<div class="doc-actions">
<button class="doc-btn-download" data-doc-title="BIM Clash Detection Benchmarks Across Disciplines">
<svg class="doc-dl-icon" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"></path></svg>
<svg class="doc-dl-check" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
<span>Download</span>
</button>
<button aria-label="Preview abstract" class="doc-btn-preview"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
</div>
</article>
<!-- 3 -->
<article class="doc-card" data-abstract="A side-by-side comparison of structural steel connection standards under AISC and AS 4100, highlighting the detailing differences that most often cause rework when documentation crosses jurisdictions." data-category="structural" data-category-label="Structural" data-search="structural steel connection standards us au codes comparison" data-toc="Scope of Comparison|Bolted Connection Differences|Welded Connection Differences|Common Rework Triggers|Cross-Jurisdiction Checklist">
<div class="doc-head">
<span class="doc-format">PDF · 31pp</span>
<svg class="doc-fold" fill="none" viewbox="0 0 30 30"><path d="M6 4h13l5 5v17H6z" stroke="currentColor" stroke-width="1.4"></path><path d="M19 4v5h5" stroke="currentColor" stroke-width="1.4"></path></svg>
</div>
<div class="doc-body">
<p class="doc-category">Structural / Steel</p>
<h3 class="doc-title">Structural Steel Connection Standards: US vs AU Codes</h3>
<p class="doc-desc">A detailing comparison between AISC and AS 4100 connection standards, and where cross-border rework tends to originate.</p>
</div>
<div class="doc-titleblock">
<div class="doc-tb-row">
<div class="doc-tb-cell"><div class="doc-tb-label">Rev</div><div class="doc-tb-value">D</div></div>
<div class="doc-tb-cell"><div class="doc-tb-label">Updated</div><div class="doc-tb-value">Apr 2026</div></div>
<div class="doc-tb-cell"><div class="doc-tb-label">Sheet No.</div><div class="doc-tb-value">WP‑009</div></div>
</div>
</div>
<div class="doc-actions">
<button class="doc-btn-download" data-doc-title="Structural Steel Connection Standards: US vs AU Codes">
<svg class="doc-dl-icon" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"></path></svg>
<svg class="doc-dl-check" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
<span>Download</span>
</button>
<button aria-label="Preview abstract" class="doc-btn-preview"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
</div>
</article>
<!-- 4 -->
<article class="doc-card" data-abstract="Establishes accuracy thresholds for as-built model capture by element type, based on laser-scan comparisons across 15 completed structures, and recommends tolerance flags for automated QA passes." data-category="bim" data-category-label="BIM &amp; Coordination" data-search="as-built modeling accuracy thresholds survey capture" data-toc="Capture Methodology|Accuracy by Element Type|Laser-Scan Comparison Results|Recommended QA Tolerance Flags|Limitations">
<div class="doc-head">
<span class="doc-format">PDF · 16pp</span>
<svg class="doc-fold" fill="none" viewbox="0 0 30 30"><path d="M6 4h13l5 5v17H6z" stroke="currentColor" stroke-width="1.4"></path><path d="M19 4v5h5" stroke="currentColor" stroke-width="1.4"></path></svg>
</div>
<div class="doc-body">
<p class="doc-category">BIM / As-Built</p>
<h3 class="doc-title">As-Built Modeling Accuracy Thresholds</h3>
<p class="doc-desc">Laser-scan comparisons across 15 structures, translated into practical accuracy thresholds by element type.</p>
</div>
<div class="doc-titleblock">
<div class="doc-tb-row">
<div class="doc-tb-cell"><div class="doc-tb-label">Rev</div><div class="doc-tb-value">A</div></div>
<div class="doc-tb-cell"><div class="doc-tb-label">Updated</div><div class="doc-tb-value">Mar 2026</div></div>
<div class="doc-tb-cell"><div class="doc-tb-label">Sheet No.</div><div class="doc-tb-value">WP‑006</div></div>
</div>
</div>
<div class="doc-actions">
<button class="doc-btn-download" data-doc-title="As-Built Modeling Accuracy Thresholds">
<svg class="doc-dl-icon" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"></path></svg>
<svg class="doc-dl-check" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
<span>Download</span>
</button>
<button aria-label="Preview abstract" class="doc-btn-preview"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
</div>
</article>
<!-- 5 -->
<article class="doc-card" data-abstract="Tracks cost estimate variance across multi-phase residential builds from concept through final costing, isolating which project phases contribute the most drift and why." data-category="estimating" data-category-label="Estimating" data-search="estimating variance multi-phase residential builds cost" data-toc="Dataset &amp; Project Sample|Variance by Project Phase|Drivers of Estimate Drift|Phase-Gate Recommendations|Appendix: Regional Breakdown">
<div class="doc-head">
<span class="doc-format">PDF · 20pp</span>
<svg class="doc-fold" fill="none" viewbox="0 0 30 30"><path d="M6 4h13l5 5v17H6z" stroke="currentColor" stroke-width="1.4"></path><path d="M19 4v5h5" stroke="currentColor" stroke-width="1.4"></path></svg>
</div>
<div class="doc-body">
<p class="doc-category">Estimating / Residential</p>
<h3 class="doc-title">Estimating Variance in Multi-Phase Residential Builds</h3>
<p class="doc-desc">Where cost estimates drift most across concept-to-final costing, and the phase gates that keep variance in check.</p>
</div>
<div class="doc-titleblock">
<div class="doc-tb-row">
<div class="doc-tb-cell"><div class="doc-tb-label">Rev</div><div class="doc-tb-value">B</div></div>
<div class="doc-tb-cell"><div class="doc-tb-label">Updated</div><div class="doc-tb-value">Feb 2026</div></div>
<div class="doc-tb-cell"><div class="doc-tb-label">Sheet No.</div><div class="doc-tb-value">WP‑004</div></div>
</div>
</div>
<div class="doc-actions">
<button class="doc-btn-download" data-doc-title="Estimating Variance in Multi-Phase Residential Builds">
<svg class="doc-dl-icon" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"></path></svg>
<svg class="doc-dl-check" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
<span>Download</span>
</button>
<button aria-label="Preview abstract" class="doc-btn-preview"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
</div>
</article>
<!-- 6 -->
<article class="doc-card" data-abstract="Examines load path continuity in mixed-use podium structures where residential towers transfer load through commercial podium levels, with validation checkpoints for transfer-beam heavy designs." data-category="commercial" data-category-label="Commercial" data-search="load path validation mixed-use podium structures commercial" data-toc="Podium Load Transfer Overview|Common Failure Points in Documentation|Validation Checkpoints|Case Comparisons|Recommendations for Detailing Teams">
<div class="doc-head">
<span class="doc-format">PDF · 27pp</span>
<svg class="doc-fold" fill="none" viewbox="0 0 30 30"><path d="M6 4h13l5 5v17H6z" stroke="currentColor" stroke-width="1.4"></path><path d="M19 4v5h5" stroke="currentColor" stroke-width="1.4"></path></svg>
</div>
<div class="doc-body">
<p class="doc-category">Structural / Commercial</p>
<h3 class="doc-title">Load Path Validation for Mixed-Use Podium Structures</h3>
<p class="doc-desc">Validation checkpoints for transfer-beam heavy podium designs where towers sit above commercial levels.</p>
</div>
<div class="doc-titleblock">
<div class="doc-tb-row">
<div class="doc-tb-cell"><div class="doc-tb-label">Rev</div><div class="doc-tb-value">C</div></div>
<div class="doc-tb-cell"><div class="doc-tb-label">Updated</div><div class="doc-tb-value">Jan 2026</div></div>
<div class="doc-tb-cell"><div class="doc-tb-label">Sheet No.</div><div class="doc-tb-value">WP‑001</div></div>
</div>
</div>
<div class="doc-actions">
<button class="doc-btn-download" data-doc-title="Load Path Validation for Mixed-Use Podium Structures">
<svg class="doc-dl-icon" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"></path></svg>
<svg class="doc-dl-check" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
<span>Download</span>
</button>
<button aria-label="Preview abstract" class="doc-btn-preview"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
</div>
</article>
</div>
<div class="res-empty" data-doc-empty="">
<svg fill="none" stroke="currentColor" stroke-width="1.5" viewbox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.35-4.35"></path></svg>
<p>No white papers match that search. Try another term or clear the filters.</p>
</div>
</div>
</section>
</div>
<!-- ^ closes .res-library — was missing, letting the sticky bar drift past the grid into the CTA banner. -->
<!-- ============================== PREVIEW DRAWER ============================== -->
<div class="res-overlay" data-res-overlay="">
<aside aria-label="Document preview" aria-modal="true" class="res-drawer" data-res-drawer="" role="dialog">
<div class="res-drawer-head">
<div>
<p class="doc-format" data-drawer-category="" style="display:inline-block;">Category</p>
</div>
<button aria-label="Close preview" class="res-drawer-close" data-drawer-close="">
<svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"></path></svg>
</button>
</div>
<div class="res-drawer-body">
<h3 class="doc-title" data-drawer-title="">Document title</h3>
<p class="doc-desc" data-drawer-desc="">Abstract</p>
<div class="res-drawer-meta" data-drawer-meta="">
<div class="doc-tb-cell"><div class="doc-tb-label">Rev</div><div class="doc-tb-value">—</div></div>
<div class="doc-tb-cell"><div class="doc-tb-label">Updated</div><div class="doc-tb-value">—</div></div>
</div>
<div class="res-drawer-toc">
<h4>Inside this paper</h4>
<ol data-drawer-toc=""></ol>
</div>
<div class="res-drawer-cta">
<button class="doc-btn-download" data-drawer-download="" style="flex:1;">
<svg class="doc-dl-icon" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"></path></svg>
<span>Download PDF</span>
</button>
</div>
</div>
</aside>
</div>
<!-- ============================== TOAST ============================== -->
<div class="res-toast" data-res-toast="">
<svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
<span data-toast-text="">Download started</span>
</div>
<!-- ===================== CTA BANNER ===================== -->
<section class="inner-section inner-cta reveal-section">
<div class="container">
<div class="inner-cta-box reveal-item">
<h2>Let's Start With A Conversation<br/><span class="accent">Browse All White Papers Here!</span></h2>
<p>Looking for a smarter way to scale your building business? Let’s talk about how Realcognita can support your team.</p>
<button class="btn-contact" id="contactTrigger2">
          See Related Articles 
          <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</button>
</div>
</div>
</section>
</main>






`;

const scripts = [
  { src: "/js/pages/white-papers.js" },
  { id: "inline-white-papers-0", code: `
    // Wire up the in-page CTA triggers to the shared modal
    document.getElementById('contactTrigger2')?.addEventListener('click', () => {
      if (window.openContactModal) window.openContactModal();
    });
  ` },
];

export default function Page() {
  return <PageShell html={html} scripts={scripts} />;
}

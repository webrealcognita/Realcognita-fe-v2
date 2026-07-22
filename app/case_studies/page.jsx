import PageShell from "@/src/components/PageShell";

export const metadata = {
  title: 'Realcognita Commercial Construction Case Studies',
  description: 'Explore Realcognita case studies showing commercial construction companies and contractors how expert support drives better project outcomes.',
};

const html = `
 Nav + Footer injected by components.js 
 ===================== HERO + PROOF STATEMENT + FILTERS ===================== 
<section aria-label="Our Experience" class="exp-hero reveal-section">
<div class="container">
<h1 class="exp-hero-title">Commercial Construction <span class="accent">Case Studies.</span></h1>
<p class="exp-hero-desc">
        From high-density residential towers to complex commercial infrastructure, Realcognita has
        helped tier-1 builders and contractors deliver with confidence across four global regions. <br/><br/>
        Real examples of how we've supported builders, contractors and developers by discipline and region. 
      </p>
<!-- Filter Bar -->
<div aria-label="Filter case studies" class="exp-filter-bar" id="filterBar">
<div class="exp-filter-pill" data-pill="service">
<select aria-label="Filter by service" class="exp-filter-select" data-filter-type="service" id="filterService">
<option value="all">Browse by Service:</option>
<option value="Steel Detailing">Structural Steel Detailing</option>
<option value="BIM Coordination">BIM Modelling &amp; Coordination</option>
<option value="Construction Estimating">Construction Estimating</option>
<option value="3D Rendering &amp; Visualization">3D Rendering &amp; Visualization</option>
</select>
</div>
<div class="exp-filter-pill" data-pill="region">
<select aria-label="Filter by region" class="exp-filter-select" data-filter-type="region" id="filterRegion">
<option value="all">Browse by Region:</option>
<option value="United States">United States</option>
<option value="Australia">Australia</option>
</select>
</div>
<div class="exp-filter-pill" data-pill="sector">
<select aria-label="Filter by build type" class="exp-filter-select" data-filter-type="sector" id="filterBuildType">
<option value="all">Filter: Build Type</option>
<option value="residential">Residential</option>
<option value="commercial">Commercial</option>
</select>
</div>
<button class="exp-filter-clear" id="filterClear" type="button">✕ Clear filters</button>
</div>
<p class="exp-results-count" id="resultsCount"></p>
</div>
</section>
 ===================== FEATURED CASE ===================== 
<section aria-label="Featured case study" class="exp-featured reveal-section">
<div class="container">
<article class="exp-featured-card reveal-item" data-region="Singapore" data-sector="commercial" data-service="Steel Detailing">
<div class="exp-featured-media">
<img alt="Mixed-use tower structural steel" loading="lazy" src="/assets/case_studies_images/image_1.png"/>
<span class="exp-case-tag">Featured case study</span>
</div>
<div class="exp-featured-body">
<h2 class="exp-featured-title">Tier-1 Builder · Singapore · Commercial Tower</h2>
<p class="exp-featured-text">Delivered 100% clash-free coordination with zero major RFIs across 42 storeys.</p>
<a class="exp-case-link" data-case="case-2" href="#case-2">Read the full case study
            <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
</a>
</div>
</article>
</div>
</section>
 ===================== FEATURED PROJECTS ===================== 
<section aria-label="Case studies" class="exp-cases reveal-section" id="cases">
<div class="container">
<div class="group-header reveal-item">
<div class="header-split-row">
<div class="header-left-col">
<h2 class="section-title">Featured Projects</h2>
<p class="section-sub">
              Filter above to review representative engagements by service, region, or build type.
            </p>
</div>
</div>
</div>
<!-- Case Grid -->
<div class="exp-cases-grid" id="casesGrid">
<!-- Card 01 -->
<article class="exp-case-card reveal-item" data-region="Australia" data-sector="residential" data-service="Revit Drafting">
<div class="exp-case-thumb">
<img alt="High-Volume Residential Drafting" loading="lazy" src="/assets/case_studies_images/image_2.jpg"/>
<span class="exp-case-tag">Residential</span>
</div>
<div class="exp-case-body">
<h3 class="exp-case-title">High-Volume Residential Drafting Program</h3>
<ul class="exp-case-meta">
<li><strong>Client type:</strong> Volume Home Builder</li>
<li><strong>Service used:</strong> Revit Drafting</li>
</ul>
<a class="exp-case-link" data-case="case-1" href="#case-1">Read case study
              <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
</a>
</div>
</article>
<!-- Card 02 -->
<article class="exp-case-card reveal-item" data-region="Singapore" data-sector="commercial" data-service="Steel Detailing">
<div class="exp-case-thumb">
<img alt="Structural Steel Detailing" loading="lazy" src="/assets/case_studies_images/image_3.jpg"/>
<span class="exp-case-tag">Commercial</span>
</div>
<div class="exp-case-body">
<h3 class="exp-case-title">Structural Steel Detailing for Mixed-Use Tower</h3>
<ul class="exp-case-meta">
<li><strong>Client type:</strong> Tier-1 General Contractor</li>
<li><strong>Service used:</strong> Steel Detailing</li>
</ul>
<a class="exp-case-link" data-case="case-2" href="#case-2">Read case study
              <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
</a>
</div>
</article>
<!-- Card 03 -->
<article class="exp-case-card reveal-item" data-region="United States" data-sector="infrastructure" data-service="BIM Coordination">
<div class="exp-case-thumb">
<img alt="Civil &amp; Infrastructure Modeling" loading="lazy" src="/assets/case_studies_images/image_4.webp"/>
<span class="exp-case-tag">Infrastructure</span>
</div>
<div class="exp-case-body">
<h3 class="exp-case-title">Civil &amp; Infrastructure BIM Coordination</h3>
<ul class="exp-case-meta">
<li><strong>Client type:</strong> Civil Infrastructure Firm</li>
<li><strong>Service used:</strong> BIM Coordination</li>
</ul>
<a class="exp-case-link" data-case="case-3" href="#case-3">Read case study
              <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
</a>
</div>
</article>
<!-- Card 04 -->
<article class="exp-case-card reveal-item" data-region="Philippines" data-sector="residential" data-service="Architectural Design">
<div class="exp-case-thumb">
<img alt="Custom Facade Design" loading="lazy" src="/assets/case_studies_images/image_5.webp"/>
<span class="exp-case-tag">Residential</span>
</div>
<div class="exp-case-body">
<h3 class="exp-case-title">Custom Facade &amp; Floor Plan Configurations</h3>
<ul class="exp-case-meta">
<li><strong>Client type:</strong> Boutique Developer</li>
<li><strong>Service used:</strong> Architectural Design</li>
</ul>
<a class="exp-case-link" data-case="case-4" href="#case-4">Read case study
              <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
</a>
</div>
</article>
<!-- Card 05 -->
<article class="exp-case-card reveal-item" data-region="Australia" data-sector="commercial" data-service="Precast Detailing">
<div class="exp-case-thumb">
<img alt="Precast Concrete Detailing" loading="lazy" src="/assets/case_studies_images/image_6.jpg"/>
<span class="exp-case-tag">Commercial</span>
</div>
<div class="exp-case-body">
<h3 class="exp-case-title">Precast Concrete Panel Detailing at Scale</h3>
<ul class="exp-case-meta">
<li><strong>Client type:</strong> Precast Manufacturer</li>
<li><strong>Service used:</strong> Precast Detailing</li>
</ul>
<a class="exp-case-link" data-case="case-5" href="#case-5">Read case study
              <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
</a>
</div>
</article>
<!-- Card 06 -->
<article class="exp-case-card reveal-item" data-region="Singapore" data-sector="infrastructure" data-service="Rebar &amp; Estimating">
<div class="exp-case-thumb">
<img alt="Rebar &amp; Quantity Takeoffs" loading="lazy" src="/assets/case_studies_images/image_7.jpg"/>
<span class="exp-case-tag">Infrastructure</span>
</div>
<div class="exp-case-body">
<h3 class="exp-case-title">Rebar Services &amp; Quantity Takeoffs</h3>
<ul class="exp-case-meta">
<li><strong>Client type:</strong> Rebar Subcontractor</li>
<li><strong>Service used:</strong> Rebar &amp; Estimating</li>
</ul>
<a class="exp-case-link" data-case="case-6" href="#case-6">Read case study
              <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
</a>
</div>
</article>
</div>
<!-- Empty state -->
<p class="exp-cases-empty" hidden="" id="casesEmpty">No case studies found for this filter.</p>
</div>
</section>
 ===================== FEATURED CASE MODAL ===================== 
<div aria-hidden="true" aria-labelledby="caseModalTitle" aria-modal="true" class="exp-modal-overlay" id="caseModal" role="dialog">
<div class="exp-modal-window">
<button aria-label="Close case study" class="exp-modal-close" id="caseModalClose">
<svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</button>
<div class="exp-modal-inner" id="caseModalInner">
<!-- Populated by JS -->
</div>
</div>
</div>
  
  <section class="exp-stats reveal-section" aria-label="Track record">
    <div class="container">
      <div class="exp-stats-grid" id="statsGrid">
        <div class="exp-stat">
          <span class="exp-stat-num" data-target="180">0</span>
          <span class="exp-stat-label">Projects Delivered</span>
        </div>
        <div class="exp-stat">
          <span class="exp-stat-num" data-target="4">0</span>
          <span class="exp-stat-label">Regions Served</span>
        </div>
        <div class="exp-stat">
          <span class="exp-stat-num exp-stat-text">8 wks</span>
          <span class="exp-stat-label">Avg. Turnaround</span>
        </div>
      </div>
    </div>
  </section> 
 FAQS 
<section class="faq-section reveal-section" id="faq">
<div class="container">
<div class="group-header reveal-item">
<h2 class="section-title">Frequently Asked Questions</h2>
</div>
<div class="faq-list" id="faqList">
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>What types of commercial construction projects has Realcognita supported?  </span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>Realcognita supports builders, contractors and developers with drafting, BIM modelling, estimating and 3D rendering support for commercial construction projects. Project examples should be added only once confirmed details are available. </p>
</div>
</div>
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>Can project names or client names be included in a case study? </span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>Yes, but only when the client has approved the use of their name and project details. If approval is not available, describe the project by type, region, scope and deliverables without naming the client.  </p>
</div>
</div>
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>What information does each case study include?</span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>Project type, region, scope of Realcognita's involvement, services delivered, and final deliverables produced. Any performance claims are included only if approved by the client. </p>
</div>
</div>
</div>
</div>
</section>
 ===================== CTA BANNER ===================== 
<section class="inner-section inner-cta reveal-section">
<div class="container">
<div class="inner-cta-box reveal-item">
<h2>Let's Start With A Conversation<br/><span class="accent">See How We Can Support Your Project!</span></h2>
<p>Looking for a smarter way to scale your building business? Let’s talk about how Realcognita can support your team.</p>
<button class="btn-contact" id="contactTrigger2">
          Talk To Us Today!
          <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</button>
</div>
</div>
</section>



 EmailJS: sends the case-study PDF link to the requester's inbox,
       no backend needed. Configure IDs/key in js/pages/case_studies.js. 




`;

const scripts = [
  { src: "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js" },
  { src: "/js/pages/case_studies.js" },
  { id: "inline-case_studies-0", code: `
    // Wire up the in-page CTA triggers to the shared modal
    document.getElementById('contactTrigger2')?.addEventListener('click', () => {
      if (window.openContactModal) window.openContactModal();
    });
  ` },
];

export default function Page() {
  return <PageShell html={html} scripts={scripts} />;
}

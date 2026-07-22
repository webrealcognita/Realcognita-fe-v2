import PageShell from "@/src/components/PageShell";

export const metadata = {
  title: 'Realcognita Expert-Driven Residential Construction Services',
  description: 'Realcognita supports residential construction services with building design, drafting, engineering, and builder support for home projects. Book an Expert Today!',
};

const html = `
 Nav + Footer injected by components.js 
 PAGE HERO 
<section class="page-hero page-hero--res">
<div class="container">
<div class="page-hero-inner">
<h1 class="page-hero-title">Expert-Driven Residential <br/><span class="accent">Construction Services</span></h1>
<p class="page-hero-desc">Building design services, residential drafting, and architectural design support for Australian residential builders and developers, from new homes to renovations. </p>
<a class="btn-hero" href="#services">
          Learn More
          <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
</a>
</div>
</div>
</section>
 VALUE PROP 
<section class="inner-section reveal-section">
<div class="container">
<div class="value-intro reveal-item">
<h2 class="section-title">Built for AU Residential Standards</h2>
<p class="page-hero-desc">Residential builders and developers need documentation and estimating capacity without expanding an in-house team.</p>
</div>
<div class="pill-list reveal-item">
<span class="value-pill">IRC-aware documentation for residential permitting</span>
<span class="value-pill">Coordinated with your licensed engineer of record</span>
<span class="value-pill">Single-family to multi-family project capacity</span>
<span class="value-pill">Permit-ready architectural drafting</span>
<span class="value-pill">Consistent QA from scope through delivery</span>
<span class="value-pill">Builder and developer staff augmentation</span>
</div>
</div>
</section>
 SERVICES WE PROVIDE 
<section class="inner-section reveal-section" id="services">
<div class="container">
<div class="section-header reveal-item">
<h2 class="section-title">Services We Provide</h2>
<p class="page-hero-desc">
          We support residential projects from single-family custom homes through multi-family developments with building design support, structural documentation, architectural drafting, and cost estimating. <br/><br/>
          Every deliverable is coordinated with your project's licensed engineer of record. </p>
</div>
<div class="service-detail-row reveal-item">
<div class="service-detail-img">
<img alt="Building Design and Architectural Drafting" loading="lazy" src="/assets/images/subpages-images/residential_imgs/residential-images-1.webp"/>
</div>
<div class="service-detail-body">
<h3>Building Design and Architectural Drafting Support</h3>
<p>Turning early concepts and builder requirements into clear, permit-ready architectural drawings for single-family and multi-family residential projects.</p>
<ul class="detail-checklist">
<li>Floor plans, elevations, and sections</li>
<li>Permit and construction drawing sets</li>
<li>Design revisions coordinated with your team</li>
</ul>
</div>
</div>
<div class="service-detail-row service-detail-row--flip reveal-item">
<div class="service-detail-img">
<img alt="Structural Documentation Support" loading="lazy" src="/assets/images/subpages-images/residential_imgs/residential-images-2.webp"/>
</div>
<div class="service-detail-body">
<h3>Structural Documentation Support</h3>
<p>Structural documentation prepared to IRC-aware standards for US residential permitting, coordinated closely with your project's licensed engineer of record.</p>
<ul class="detail-checklist">
<li>Framing and structural detail drawings</li>
<li>Documentation coordinated with the engineer of record</li>
<li>Permit-ready structural packages</li>
</ul>
</div>
</div>
<div class="service-detail-row reveal-item">
<div class="service-detail-img">
<img alt="Residential Cost Estimating" loading="lazy" src="/assets/images/subpages-images/residential_imgs/residential-images-3.webp"/>
</div>
<div class="service-detail-body">
<h3>Residential Cost Estimating</h3>
<p>Clear, costed plans that forecast labor, materials, and timelines to support budgeting and scope decisions on residential projects.</p>
<ul class="detail-checklist">
<li>Quantity take-offs and cost breakdowns</li>
<li>Budgeting support for scope decisions</li>
<li>Available to builders, developers, and, depending on project scope, individual homeowners</li>
</ul>
</div>
</div>
</div>
</section>
 RESIDENTIAL VS COMMERCIAL 
<section class="inner-section reveal-section" id="residential-vs-commercial">
<div class="container">
<div class="sector-compare-callout reveal-item">
<div class="sector-compare-body">
<span class="section-tag-label">▪ SCOPE</span>
<h2 class="section-title">Residential vs. Commercial Support</h2>
<p class="page-hero-desc">Residential projects differ from commercial work in scale, applicable code (IRC vs. IBC), and typical deliverable sets.</p>
</div>
<a class="explore-btn" href="/commercial-services">See Our Commercial Construction Services <span class="square-dot">▪</span></a>
</div>
</div>
</section>
 OUR PROCESS 
<section class="inner-section steel-process-section reveal-section" id="process">
<div class="container">
<div class="section-header reveal-item">
<h2 class="section-title">Our Process</h2>
</div>
<div class="steel-process-list">
<div class="steel-process-item reveal-item">
<span class="steel-process-num">01</span>
<div aria-hidden="true" class="steel-process-line"></div>
<div class="steel-process-content">
<h3>Scope Review</h3>
<p>An initial evaluation of project requirements, drawings, and specifications to fully understand the scope of work. This step ensures all expectations, deliverables, and technical details are clearly defined before execution begins.</p>
</div>
</div>
<div class="steel-process-item reveal-item">
<span class="steel-process-num">02</span>
<div aria-hidden="true" class="steel-process-line"></div>
<div class="steel-process-content">
<h3>Discipline Assignment</h3>
<p>Allocation of tasks to the appropriate disciplines such as architectural, structural, civil, or MEP. This ensures that each aspect of the project is handled by the right expertise for accuracy and efficiency.</p>
</div>
</div>
<div class="steel-process-item reveal-item">
<span class="steel-process-num">03</span>
<div aria-hidden="true" class="steel-process-line"></div>
<div class="steel-process-content">
<h3>Drafting, Documentation, and Estimating Production</h3>
<p>Preparation of detailed drawings, supporting documents, and material quantity estimates based on the defined scope. This stage translates project requirements into actionable outputs for construction and planning.</p>
</div>
</div>
<div class="steel-process-item reveal-item">
<span class="steel-process-num">04</span>
<div aria-hidden="true" class="steel-process-line"></div>
<div class="steel-process-content">
<h3>QA and Delivery</h3>
<p>A final quality assurance check is performed to verify accuracy, completeness, and compliance with standards. Once validated, all deliverables are issued to the client in the required formats, ready for use.</p>
</div>
</div>
</div>
</div>
</section>
 ===================== FAQ ===================== 
<section aria-label="Frequently Asked Questions" class="faq-section reveal-section" id="faq">
<div class="container">
<div class="group-header reveal-item">
<h2 class="section-title">Frequently Asked Questions</h2>
</div>
<div class="faq-list" id="faqList">
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>Does Realcognita work with individual homeowners or only with builders and developers?</span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>We primarily support builders and developers, though some services such as residential cost estimating can extend to individual homeowners depending on project scope.</p>
</div>
</div>
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>What residential project sizes does Realcognita typically support?</span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>From single-family custom homes through multi-family developments.</p>
</div>
</div>
</div>
</div>
</section>
 CTA 
<section class="inner-section inner-cta reveal-section">
<div class="container">
<div class="inner-cta-box reveal-item">
<h2>Discuss a Residential Project<br/><span class="accent">Book an Expert Today!</span></h2>
<p>Our teams can be onboarded within days. Let's talk about your residential project requirements.</p>
<button class="btn-contact" id="contactTrigger2">
          Book an Expert Today!
          <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</button>
</div>
</div>
</section>





`;

const scripts = [
  { id: "inline-residential-services-0", code: `
    document.getElementById('contactTrigger2')?.addEventListener('click', () => {
      if (window.openContactModal) window.openContactModal();
    });
  ` },
];

export default function Page() {
  return <PageShell html={html} scripts={scripts} />;
}

import PageShell from "@/src/components/PageShell";

export const metadata = {
  title: 'Realcognita Australia Residential Services',
  description: 'Realcognita offers building design services, residential drafting, plans, and architectural design support for Australian home projects. Book an Expert Today!',
};

const html = `
 ===================== AMBIENT BACKGROUND ===================== 
<div aria-hidden="true" class="canvas-bg">
<div class="blueprint-grid"></div>
</div>
 ===================== HERO ===================== 
<section class="page-hero page-hero--res">
<div class="container">
<div class="page-hero-inner">
<span class="section-tag-label">▪ AUSTRALIA</span>
<h1 class="page-hero-title">
          Building Design <span class="accent">Services</span>
</h1>
<p class="page-hero-desc">
          Building design services, residential drafting, and architectural design support for Australian residential builders and developers, from new homes to renovations.
        </p>
<a class="btn-hero" href="#" onclick="window.openContactModal &amp;&amp; window.openContactModal(); return false;">
          Book an Expert Today!
          <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
</a>
</div>
</div>
</section>
 ===================== WHAT THIS COVERS / SERVICES WE PROVIDE ===================== 
<section class="inner-section reveal-section">
<div class="container">
<div class="service-detail-row reveal-item">
<div class="service-detail-img reveal-image-frame">
<img alt="Australian residential building design and drafting" loading="lazy" src="/assets/images/subpages-images/residential-services-au/residential-drafting-au.jpg"/>
</div>
<div class="service-detail-body">
<span class="section-tag-label">▪ WHAT THIS COVERS</span>
<h3>Building Design, Drafting &amp; Cost Estimating</h3>
<p>
            We support new homes, renovations, and multi-unit residential projects with building design services, residential drafting, and cost estimating, coordinated with your project's licensed engineer of record and building certifier.
          </p>
<p>
<strong>Who needs this:</strong> Australian residential builders and developers needing building design and drafting capacity.
          </p>
<ul class="detail-checklist">
<li>Building design services</li>
<li>Residential drafting and plans</li>
<li>Residential cost estimating</li>
</ul>
<p style="margin-top: 0.5rem;">
            Documented to NCC/BCA-aware standards, with coordination support for council and certifier requirements.
          </p>
</div>
</div>
</div>
</section>
 ===================== RESIDENTIAL VS. COMMERCIAL ===================== 
<section class="inner-section reveal-section">
<div class="container">
<div class="sector-compare-callout reveal-item">
<div class="sector-compare-body">
<span class="section-tag-label">▪ SCOPE</span>
<h3 style="font-size: 1.3rem; font-weight: 700; color: var(--color-text); margin: 0.35rem 0 0.6rem;">Residential vs. Commercial Support</h3>
<p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
            Residential projects differ from commercial work in scale, applicable code, and typical deliverable set. See our commercial construction services for larger-scale projects.
          </p>
</div>
<a class="explore-btn" href="/commercial-services">
          Commercial Services
          <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
</a>
</div>
</div>
</section>
 ===================== OUR PROCESS ===================== 
<section class="inner-section reveal-section">
<div class="container">
<div class="group-header reveal-item">
<span class="section-tag-label">▪ HOW IT WORKS</span>
<h2 class="section-title">Our Process</h2>
</div>
<div class="process-steps reveal-item">
<div class="process-step">
<span class="process-step-num">01</span>
<h3>Scope Review</h3>
<p>We review your project brief, drawings, and timeline to confirm the right disciplines and deliverables.</p>
</div>
<div class="process-step">
<span class="process-step-num">02</span>
<h3>Discipline Assignment</h3>
<p>Your work is matched to drafters, designers, and estimators experienced with Australian residential standards.</p>
</div>
<div class="process-step">
<span class="process-step-num">03</span>
<h3>Production</h3>
<p>Drafting, documentation, and cost estimating move forward with regular check-ins against your schedule.</p>
</div>
<div class="process-step">
<span class="process-step-num">04</span>
<h3>QA &amp; Delivery</h3>
<p>Every deliverable is reviewed for quality and coordination before it's handed back to your team.</p>
</div>
</div>
</div>
</section>
 ===================== FAQ ===================== 
<section aria-label="Frequently Asked Questions" class="faq-section reveal-section" id="faq">
<div class="container">
<div class="group-header reveal-item">
<span class="section-tag-label">▪ FAQS</span>
<h2 class="section-title">Frequently Asked Questions</h2>
</div>
<div class="faq-list" id="faqList">
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>Does Realcognita provide building design services for individual homeowners?</span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>We primarily support builders and developers, though residential drafting and building design support can extend to individual homeowners depending on project scope.</p>
</div>
</div>
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>What residential project sizes does Realcognita typically support in Australia?</span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>From single dwellings and renovations through multi-unit residential developments.</p>
</div>
</div>
</div>
</div>
</section>
 ===================== FINAL CTA ===================== 
<section class="inner-cta reveal-section">
<div class="container">
<div class="inner-cta-box">
<h2>Discuss a <span class="accent">Residential Project</span></h2>
<p>Tell us about your Australian residential project and we'll match you with the right drafting, design, and estimating support.</p>
<a class="btn-contact" href="#" onclick="window.openContactModal &amp;&amp; window.openContactModal(); return false;">
<span>Book an Expert Today!</span>
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewbox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</a>
</div>
</div>
</section>
`;

const scripts = [];

export default function Page() {
  return <PageShell html={html} scripts={scripts} />;
}

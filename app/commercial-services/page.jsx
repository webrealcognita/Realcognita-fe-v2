import PageShell from "@/src/components/PageShell";

export const metadata = {
  title: 'Commercial Construction Services by Realcognita',
  description: 'Realcognita helps builders and commercial construction companies and contractors with expert engineering, drafting, estimating, and project support services. Consult Now!',
};

const html = `
 Nav + Footer injected by components.js 
 PAGE HERO 
<section class="page-hero page-hero--comm">
<div class="container">
<div class="page-hero-inner">
<h1 class="page-hero-title">Commercial Construction <br/><span class="accent">Services</span></h1>
<p class="page-hero-desc">Drafting, structural detailing, BIM modelling, and estimating support for commercial construction companies and contractors coordinated across disciplines, not handled piecemeal. </p>
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
<h2 class="section-title">Built for US Project Standards</h2>
</div>
<div class="pill-list reveal-item">
<span class="value-pill">AISC-aware conventions for structural documentation</span>
<span class="value-pill">Industry-standard steel detailing practices</span>
<span class="value-pill">IBC (International Building Code) guidelines</span>
<span class="value-pill">IRC (International Residential Code) requirements</span>
<span class="value-pill">Permit-ready architectural documentation</span>
<span class="value-pill">Consistency across structural and architectural drawings</span>
</div>
</div>
</section>
 SERVICES 
<section class="inner-section reveal-section" id="services">
<div class="container">
<div class="section-header reveal-item">
<h2 class="section-title">Services We Provide </h2>
<p class="page-hero-desc">
          Commercial construction support covers the documentation and coordination work of a project need between design and construction: structural detailing, architectural drafting, BIM modelling, cost estimating, scheduling, and administrative coordination. <br/><br/>
          We support the project's licensed engineer of record and general contractor without replacing either. </p>
</div>
<div class="service-detail-row reveal-item">
<div class="service-detail-img">
<img alt="Structural Steel Detailing" loading="lazy" src="/assets/images/pages/commercial-services-images/commercial_images_1.webp"/>
</div>
<div class="service-detail-body">
<h3 class="accent-comm">Steel Detailing and Engineering Documentation</h3>
<p>Precise steel detailing services that ensure fabrication accuracy, structural integrity, and seamless coordination across all project stakeholders.</p>
<ul class="detail-checklist">
<li>Shop drawings and fabrication details</li>
<li>Connection detailing and bolt schedules</li>
<li>Material take-offs and reports</li>
</ul>
</div>
</div>
<div class="service-detail-row service-detail-row--flip reveal-item">
<div class="service-detail-img">
<img alt="Architectural drafting and documentation" loading="lazy" src="/assets/images/pages/commercial-services-images/commercial_images_2.webp"/>
</div>
<div class="service-detail-body">
<h3>Architectural Drafting and Documentation</h3>
<p>Comprehensive architectural drawings that translate design concepts into clear, buildable construction documentation.</p>
<ul class="detail-checklist">
<li>Floor plans, elevations, and sections</li>
<li>Permit and construction drawings</li>
<li>As-built documentation</li>
</ul>
</div>
</div>
<div class="service-detail-row reveal-item">
<div class="service-detail-img">
<img alt="BIM Modelling Services " loading="lazy" src="/assets/images/pages/commercial-services-images/commercial_images_3.webp"/>
</div>
<div class="service-detail-body">
<h3>BIM Modelling Services</h3>
<p>Advanced BIM solutions that enhance collaboration, clash detection, and project visualization across all disciplines.</p>
<ul class="detail-checklist">
<li>3D coordinated models</li>
<li>Clash detection and resolution</li>
<li>Model-based quantity extraction</li>
</ul>
</div>
</div>
<div class="service-detail-row service-detail-row--flip reveal-item">
<div class="service-detail-img">
<img alt="Rebar Detailing" loading="lazy" src="/assets/images/pages/commercial-services-images/commercial_images_4.webp"/>
</div>
<div class="service-detail-body">
<h3>Rebar Detailing</h3>
<p>Accurate reinforcement detailing that ensures structural compliance and efficient on-site installation.</p>
<ul class="detail-checklist">
<li>Bar bending schedules (BBS)</li>
<li>Reinforcement shop drawings</li>
<li>Rebar quantity take-offs</li>
</ul>
</div>
</div>
<div class="service-detail-row reveal-item">
<div class="service-detail-img">
<img alt="Infrastructure and Data Center Support" loading="lazy" src="/assets/images/pages/commercial-services-images/commercial_images_5.webp"/>
</div>
<div class="service-detail-body">
<h3>Infrastructure and Data Center Support</h3>
<p>Specialized drafting and coordination services tailored for complex infrastructure and high-performance data center projects.</p>
<ul class="detail-checklist">
<li>Cable routing and layout plans</li>
<li>Equipment and rack coordination</li>
<li>MEP integration drawings</li>
</ul>
</div>
</div>
<div class="service-detail-row service-detail-row--flip reveal-item">
<div class="service-detail-img">
<img alt="CAD Drafting" loading="lazy" src="/assets/images/pages/commercial-services-images/commercial_images_6.webp"/>
</div>
<div class="service-detail-body">
<h3>CAD Drafting</h3>
<p>High-quality CAD drafting services delivering precise and standardized technical drawings for various disciplines.</p>
<ul class="detail-checklist">
<li>2D drafting and detailing</li>
<li>Drawing conversions (PDF to CAD)</li>
<li>Layering and standards compliance</li>
</ul>
</div>
</div>
<div class="service-detail-row reveal-item">
<div class="service-detail-img">
<img alt="Construction scheduling" loading="lazy" src="/assets/images/pages/commercial-services-images/commercial_images_7.webp"/>
</div>
<div class="service-detail-body">
<h3>Construction Scheduling</h3>
<p>Strategic project scheduling to optimize timelines, resource allocation, and project delivery efficiency.</p>
<ul class="detail-checklist">
<li>CPM schedule development</li>
<li>Resource loading and tracking</li>
<li>Look-ahead planning</li>
</ul>
</div>
</div>
<div class="service-detail-row service-detail-row--flip reveal-item">
<div class="service-detail-img">
<img alt="Construction Estimating" loading="lazy" src="/assets/images/pages/commercial-services-images/commercial_images_8.webp"/>
</div>
<div class="service-detail-body">
<h3>Construction Estimating</h3>
<p>Accurate cost estimation services that support budgeting, bidding, and financial planning.</p>
<ul class="detail-checklist">
<li>Quantity take-offs</li>
<li>Cost breakdown and analysis</li>
<li>Bid preparation support</li>
</ul>
</div>
</div>
<div class="service-detail-row reveal-item">
<div class="service-detail-img">
<img alt="Administrative and Project Management Support" loading="lazy" src="/assets/images/pages/commercial-services-images/commercial_images_9.webp"/>
</div>
<div class="service-detail-body">
<h3>Administrative and Project Management Support</h3>
<p>Reliable administrative and coordination support to streamline workflows and enhance project efficiency.</p>
<ul class="detail-checklist">
<li>Document control and reporting</li>
<li>Meeting coordination and minutes</li>
<li>Project tracking and updates</li>
</ul>
</div>
</div>
<div class="service-detail-row service-detail-row--flip reveal-item">
<div class="service-detail-img">
<img alt="3D Rendering and Visualization" loading="lazy" src="/assets/images/pages/commercial-services-images/commercial_images_10.webp"/>
</div>
<div class="service-detail-body">
<h3>3D Rendering and Visualization</h3>
<p>High-quality 3D visuals that bring designs to life, supporting presentations, approvals, and marketing efforts.</p>
<ul class="detail-checklist">
<li>Photorealistic renderings</li>
<li>Walkthrough animations</li>
<li>Concept visualization</li>
</ul>
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
<span>What commercial construction services does Realcognita provide?</span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>Structural detailing, architectural drafting, BIM modelling, estimating, scheduling, and administrative coordination support. </p>
</div>
</div>
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>Does Realcognita replace the project's licensed engineer of record? </span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p data-i18n-au="We support residential and commercial projects across Australia and the United States, tailored to local council and building code requirements." data-i18n-us="We support residential and commercial projects across the United States and Australia.">No. We support the documentation and coordination work around your licensed engineer and general contractor, but we don't replace either. </p>
</div>
</div>
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>Can Realcognita support commercial projects across different US states? </span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>Yes. We provide remote drafting, BIM, detailing, estimating, and coordination support for commercial projects across the united states, aligned with the project team's standards and local requirements. </p>
</div>
</div>
</div>
</div>
</section>
 CTA 
<section class="inner-section inner-cta reveal-section">
<div class="container">
<div class="inner-cta-box reveal-item">
<h2>Need Commercial Detailing<br/><span class="accent">Request Commercial Project Support</span></h2>
<p>Our teams can be onboarded within days. Let's talk about your project requirements.</p>
<button class="btn-contact" id="contactTrigger2">
          Consult Our Building Experts Now! 
          <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</button>
</div>
</div>
</section>





`;

const scripts = [
  { id: "inline-commercial-services-0", code: `
    document.getElementById('contactTrigger2')?.addEventListener('click', () => {
      if (window.openContactModal) window.openContactModal();
    });
  ` },
];

export default function Page() {
  return <PageShell html={html} scripts={scripts} />;
}

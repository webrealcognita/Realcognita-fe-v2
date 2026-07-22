import PageShell from "@/src/components/PageShell";

export const metadata = {
  title: 'Residential Engineering - Realcognita',
  description: 'Residential Engineering– Structural documentation support for US residential projects, working alongside licensed structural engineers.',
};

const html = `
 Nav + Footer injected by components.js 
 PAGE HERO 
<section class="page-hero page-hero--steel">
<div class="container">
<div class="page-hero-inner">
<h1 class="page-hero-title">Residential Structural <span class="accent">Documentation Support</span></h1><br/>
<p class="page-hero-desc">Structural documentation and detailing support for residential builders and engineers working alongside your licensed structural engineer of record, not in place of one. <br/><br/>
</p>
</div>
<a class="btn-hero" href="#stage-1-overview">
        Learn More
        <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24">
<path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
</svg>
</a>
</div>
</section>
 CARD 1 
<section class="inner-section scroll-reveal-section" id="stage-1-overview">
<div class="container">
<div class="reveal-split-layout">
<div class="reveal-left-text scroll-trigger-left">
<!-- <p class="section-eyebrow"><span class="dot"></span> 01 / STEEL & TIMBER</p> -->
<h2 class="section-title">The Structural Backbone of Safe and Beautiful Homes</h2>
<p class="reveal-desc">
            Residential engineering is the specialized discipline of applying structural, civil, and mechanical engineering principles directly to the design, construction, and renovation of homes. <br/> <br/>
</p>
<p class="reveal-subtext">
</p>
</div>
<div class="reveal-right-image scroll-trigger-right">
<div class="reveal-image-frame">
<img alt="Residential 1" class="scroll-img" loading="lazy" src="/assets/images/residential_engineering_images/residential_images_2.jpg"/>
<div class="reveal-image-border-decoration"></div>
</div>
</div>
</div>
</div>
</section>
 CARD 2 
<section class="inner-section scroll-reveal-section" id="stage-2-application">
<div class="container">
<div class="reveal-split-layout reveal-split-layout--reverse">
<div class="reveal-right-image scroll-trigger-left">
<div class="reveal-image-frame">
<img alt="Residential 2" class="scroll-img" loading="lazy" src="/assets/images/residential_engineering_images/residential_images_3.jpg"/>
<div class="reveal-image-border-decoration"></div>
</div>
</div>
<div class="reveal-left-text scroll-trigger-right">
<!--  <p class="section-eyebrow"><span class="dot"></span> 02 / Construction Drawings & Shop Drawings</p> -->
<h2 class="section-title">Custom Structural Blueprints</h2>
<p class="reveal-desc">
            Get highly detailed, mathematically calculated structural drawings. From roof framing to floor joists, these blueprints dictate exactly how the home's skeleton must be built to safely support all dead and live loads, ensuring the architect's vision stands strong.<br/><br/>
</p>
</div>
</div>
</div>
</section>
 CARD 3 
<section class="inner-section scroll-reveal-section" id="stage-3-capabilities">
<div class="container">
<div class="reveal-split-layout">
<div class="reveal-left-text scroll-trigger-left">
<!-- <p class="section-eyebrow"><span class="dot"></span> 03 / Capabilities</p> -->
<h2 class="section-title">Comprehensive Foundation and Site Analysis</h2>
<p class="reveal-desc">
            Every great home starts from the ground up. You receive expert analysis of soil composition, drainage patterns, and topography to determine the safest and most effective foundation type preventing future settling, flooding, or cracking.<br/><br/>
</p>
</div>
<div class="reveal-right-image scroll-trigger-right">
<div class="reveal-image-frame">
<img alt="Residential 3" class="scroll-img" loading="lazy" src="/assets/images/residential_engineering_images/residential_images_4.jpg"/>
<div class="reveal-image-border-decoration"></div>
</div>
</div>
</div>
</div>
</section>
 CARD 4 
<section class="inner-section scroll-reveal-section" id="stage-4-technology">
<div class="container">
<div class="reveal-split-layout reveal-split-layout--reverse">
<div class="reveal-right-image scroll-trigger-left">
<div class="reveal-image-frame">
<img alt="Residential 4" class="scroll-img" loading="lazy" src="/assets/images/residential_engineering_images/residential_images_5.jpg"/>
<div class="reveal-image-border-decoration"></div>
</div>
</div>
<div class="reveal-left-text scroll-trigger-right">
<!-- <p class="section-eyebrow"><span class="dot"></span> 04 / Technology</p> -->
<h2 class="section-title">Integrated MEP Systems Planning</h2>
<p class="reveal-desc">
            Obtain efficient, cohesive layouts for Mechanical, Electrical, and Plumbing (MEP) systems. Residential engineering ensures that HVAC ducts, electrical panels, and plumbing lines are seamlessly integrated into the home’s framework without compromising structural integrity or aesthetic flow.<br/><br/>
</p>
</div>
</div>
</div>
</section>
 WHAT IS RESIDENTIAL ENGINEERING 
<section class="services-overview" id="overview">
<div class="container">
<div class="overview-header reveal-item">
<h2 class="overview-title">Our Role, Clearly Stated </h2><br/>
<h3 class="card-title"><strong>Who Needs This</strong></h3>
<p class="overview-desc">
          Residential builders and licensed structural engineers needing documentation capacity for framing plans, connection details, and related structural drawings. <br/><br/>

          Realcognita is not a licensed engineering firm. We provide structural documentation support framing plans, connection details, and calculations support produced for review, and where required, stamping, by your project's licensed structural engineer. 
        </p>
</div>
<div class="services-grid">
<div class="service-card reveal-item">
<div class="card-meta"></div>
<h3 class="card-title">Framing plans</h3>
<p class="card-text">Are highly detailed structural layouts that specify the exact size, spacing, and placement of all wood, steel, or engineered lumber components needed to build a roof, floor, or wall system.</p>
</div>
<div class="service-card reveal-item">
<div class="card-meta"></div>
<h3 class="card-title">Connection Detail Drawings</h3>
<p class="card-text">Are large-scale, close-up structural diagrams that show exactly how different building components must be fastened together to resist wind, gravity, and seismic forces.</p>
</div>
<div class="service-card reveal-item">
<div class="card-meta"></div>
<h3 class="card-title">Calculations support, produced under or alongside the engineer's direction </h3>
<p class="card-text">Involves performing the math-heavy loading, stress, and span evaluations that justify a building's design, completed in strict coordination with a licensed professional engineer.</p>
</div>
</div>
</div>
</section>
 Supporting Builders and Manufacturers 
<section class="inner-section reveal-section" id="sectors">
<div class="container">
<div class="section-header reveal-item">
<!-- <p class="section-eyebrow"><span class="dot"></span> 02 / Target Sector Analysis</p> -->
<h2 class="section-title">What's Included &amp; Our Process </h2><br/>
<p class="section-desc">Framing plans, connection details, and calculation support documentation — always reviewed and, where required by jurisdiction, stamped by the licensed engineer of record.   <br/><br/>
</p>
</div>
<div class="sector-list">
<div class="sector-card reveal-item">
<div class="sector-img-wrap">
<img alt="Residential 1" loading="lazy" src="/assets/images/residential_engineering_images/residential_images_9.jpg"/>
</div>
<div class="sector-body">
<div class="feature-icon">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24">
<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
<line x1="9" x2="17" y1="7" y2="7"></line>
<line x1="9" x2="15" y1="11" y2="11"></line>
<line x1="9" x2="13" y1="15" y2="15"></line>
</svg>
</div>
<h3>Scope Confirmation with the Engineer of Record </h3>
<p>Aligning project requirements, responsibilities, and technical scope with the engineer to ensure clarity before work begins.</p>
</div>
</div>
<div class="sector-card reveal-item">
<div class="sector-img-wrap">
<img alt="Residential 2" loading="lazy" src="/assets/images/residential_engineering_images/residential_images_10.jpg"/>
</div>
<div class="sector-body">
<div class="feature-icon">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24">
<polygon points="12 2 2 7 12 12 22 7"></polygon>
<polyline points="2 17 12 22 22 17"></polyline>
<polyline points="2 12 12 17 22 12"></polyline>
</svg>
</div>
<h3>Documentation Production</h3>
<p>Preparation of detailed drawings, plans, and supporting documents based on agreed project specifications.</p>
</div>
</div>
<div class="sector-card reveal-item">
<div class="sector-img-wrap">
<img alt="Residential 3 " loading="lazy" src="/assets/images/residential_engineering_images/residential_images_11.jpg"/>
</div>
<div class="sector-body">
<div class="feature-icon">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
<line x1="16" x2="20" y1="16" y2="20"></line>
</svg>
</div>
<h3>Engineer Review</h3>
<p>Evaluation of all documents by the engineer of record to verify accuracy, compliance, and technical integrity.</p>
</div>
</div>
<div class="sector-card reveal-item">
<div class="sector-img-wrap">
<img alt="Residential 4 " loading="lazy" src="/assets/images/residential_engineering_images/residential_images_12.webp"/>
</div>
<div class="sector-body">
<div class="feature-icon">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<circle cx="9" cy="15" r="2"></circle>
<path d="M12 15h3"></path>
</svg>
</div>
<h3>Revisions and Final Stamped Set</h3>
<p>Incorporating feedback and finalizing documents, followed by official approval and stamping by the engineer of record.</p>
</div>
</div>
</div>
</div>
</section>
 SOFTWARE STACK 
<section class="inner-section reveal-section" id="software">
<div class="container">
<div class="section-header reveal-item">
<h2 class="section-title">Software We Work In</h2>
</div>
<div class="software-split-wrapper">
<div class="software-image-block reveal-item">
<!-- Frame 1 (Left): Static Vector Corporate Platform Logo -->
<div class="sw-frame sw-frame--logo">
<img alt="Software Logo Platform" class="sw-showcase-img" id="showcaseImgLeft" loading="lazy" src="/assets/images/softwares_images/tekla_image.webp"/>
</div>
<!-- Frame 2 (Right): Dynamic Blueprint Screenshot Sample Deck -->
<div class="sw-frame sw-frame--sample">
<img alt="Structural Engineering Sample Model" class="sw-showcase-img" id="showcaseImgRight" loading="lazy" src="/assets/images/softwares_images/software_image.png"/>
</div>
</div>
<div class="software-rows-block reveal-item">
<!-- Row 1: Tekla Structures -->
<div class="sw-row-item is-active" data-logo="assets/images/softwares_images/tekla_image.webp" data-sample="assets/images/softwares_images/software_image.png" data-software="tekla">
<div class="sw-row-header">
<h3>Tekla Structures</h3>
<div class="sw-row-indicator"></div>
</div>
<p class="sw-row-body">Tekla Structures is a BIM (Building Information Modeling) software used to design and detail building structures especially steel and concrete. <br/><br/>
              It helps engineers create accurate 3D models, manage structural components, generate drawings, and produce fabrication-ready details through real-time model updates and configurable templates.</p>
</div>
<!-- Row 2: Revit -->
<div class="sw-row-item" data-logo="assets/images/softwares_images/revit_logo.png" data-sample="assets/images/softwares_images/revit_structure.jpg" data-software="revit">
<div class="sw-row-header">
<h3>Revit</h3>
<div class="sw-row-indicator"></div>
</div>
<p class="sw-row-body">Revit (Autodesk Revit) is a BIM software used to design building projects with intelligent 3D models covering architecture, MEP, and structure. <br/><br/>
              It supports parametric families, clash coordination, schedules, and documentation (plans, sections, elevations) where changes to the model automatically update drawings and quantities.</p>
</div>
<!-- Row 3: AutoCAD -->
<div class="sw-row-item" data-logo="assets/images/softwares_images/autocad_logo.png" data-sample="assets/images/softwares_images/autocad_image.jpg" data-software="autocad">
<div class="sw-row-header">
<h3>AutoCAD</h3>
<div class="sw-row-indicator"></div>
</div>
<p class="sw-row-body">AutoCAD is a CAD software used to create precise 2D drawings and (optionally) 3D models. <br/><br/>
              It’s commonly used for drafting plans, layouts, details, and technical diagrams, with tools for dimensions, layers, blocks, and annotating drawings for manufacturing, construction, and engineering work.</p>
</div>
<!-- Row 4: Navisworks -->
<div class="sw-row-item" data-logo="assets/images/softwares_images/naviswork_logo.jpg" data-sample="assets/images/softwares_images/naviswork_image.png" data-software="navisworks">
<div class="sw-row-header">
<h3>Navisworks</h3>
<div class="sw-row-indicator"></div>
</div>
<p class="sw-row-body">Navisworks is a BIM coordination and construction review tool used to combine models from different disciplines (and formats) into one “federated” model for clash detection, scheduling/time-based walkthroughs, and 4D simulations.</p>
</div>
</div>
</div>
</div>
</section>
 FAQS 
<section class="faq-section reveal-section" id="faq">
<div class="container">
<div class="group-header reveal-item">
<span class="section-tag-label">▪ FAQ</span>
<h2 class="section-title">Frequently Asked Questions</h2>
</div>
<div class="faq-list" id="faqList">
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>Does Realcognita provide licensed structural engineering services, or support to a licensed structural engineer?</span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>We support your project's licensed structural engineer by preparing structural documentation, drawings, and coordination deliverables as part of the design process. Where local regulations require it, final review and approval remain with the licensed engineer of record.</p>
</div>
</div>
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>Can Realcognita produce structural drawings for permit submission?</span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>Yes — we can prepare structural drawings suitable for permit documentation. Where required by law or project jurisdiction, these drawings are intended for review and stamping by your project's licensed structural engineer before submission.</p>
</div>
</div>
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>Can Realcognita work from an existing structural design or engineer's markups?</span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>Yes — we can develop drawings and supporting documentation based on your existing structural design package, calculations, or engineer's markups, helping streamline coordination and documentation through to submission stage.</p>
</div>
</div>
</div>
</div>
</section>
 CTA 
<section class="inner-section inner-cta reveal-section">
<div class="container">
<div class="inner-cta-box reveal-item">
<h2>Let's Start With A Conversation<br/><span class="accent">Discuss Residential Structural Support Today! </span></h2>
<p>Looking for a smarter way to scale your building business? Let’s talk about how Realcognita can support your team.</p>
<button class="btn-contact" id="contactTrigger2">
          Talk To Us
          <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</button>
</div>
</div>
</section>





`;

const scripts = [
  { id: "inline-residential-engineering-0", code: `
    // Wire up the in-page CTA triggers to the shared modal
    document.getElementById('contactTrigger2')?.addEventListener('click', () => {
      if (window.openContactModal) window.openContactModal();
    });
  ` },
];

export default function Page() {
  return <PageShell html={html} scripts={scripts} />;
}

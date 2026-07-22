import PageShell from "@/src/components/PageShell";

export const metadata = {
  title: '3D Rendering and Visualisation Services (US) | Realcognita',
  description: 'Architectural 3D rendering and visualisation support for US builders and developers, from real-time walkthroughs to photorealistic renders.',
};

const html = `
 Nav + Footer injected by components.js 
 PAGE HERO 
<section class="page-hero page-hero--steel">
<div class="container">
<div class="page-hero-inner">
<h1 class="page-hero-title">3D Rendering and Visualisation<br/><span class="accent">Services</span></h1><br/>
<p class="page-hero-desc">Architectural renders and walkthroughs for US builders and developers, from fast real-time visuals to photorealistic marketing renders. <br/><br/>
        We produce still renders, walkthrough animations, and real-time interactive visualisations, typically built directly from an existing architectural or BIM model. <br/><br/>
        Developers and builders needing marketing visuals, and design teams needing client presentation renders. </p>
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
<h2 class="section-title">Visualizing Reality</h2>
<p class="reveal-desc">
            Our 3D rendering services bridge the gap between flat architectural drawings and immersive real-world environments by delivering stunningly accurate photorealistic renderings. <br/> <br/>
            Turns complex architectural plans into flawless, detailed spatial experiences. We eliminate design uncertainty, accelerate client sign-offs, and protect your project timeline before breaking ground.<br/><br/>
</p>
<p class="reveal-subtext">
</p>
</div>
<div class="reveal-right-image scroll-trigger-right">
<div class="reveal-image-frame">
<img alt="3D Rendering 1" class="scroll-img" loading="lazy" src="/assets/images/3d_rendering_images/3d_images_2.jpg"/>
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
<img alt="3D Rendering 2" class="scroll-img" loading="lazy" src="/assets/images/3d_rendering_images/3d_images_3.jpeg"/>
<div class="reveal-image-border-decoration"></div>
</div>
</div>
<div class="reveal-left-text scroll-trigger-right">
<!--  <p class="section-eyebrow"><span class="dot"></span> 02 / Construction Drawings & Shop Drawings</p> -->
<h2 class="section-title">Immersive Design</h2>
<p class="reveal-desc">
            Our advanced visualization systems break down complex blueprints into exact, multi-angle digital environments and highly detailed internal walkthrough simulations. <br/><br/>
            Data-Driven Previews for Frictionless Construction convert dynamic design concepts into clear, market-accurate visual frameworks.<br/><br/>
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
<h2 class="section-title">Clarity in Design</h2>
<p class="reveal-desc">
            Our architectural visualization services bridge the gap between abstract line drawings and real-world spatial perception by delivering highly engaging three-dimensional environments.<br/><br/>
            Turns complex structural blueprints into flawless, detailed visual presentations. We eliminate spatial confusion, speed up municipal approvals, and protect your design intent before breaking ground.
          </p>
</div>
<div class="reveal-right-image scroll-trigger-right">
<div class="reveal-image-frame">
<img alt="3D Rendering 3" class="scroll-img" loading="lazy" src="/assets/images/3d_rendering_images/3d_images_4.jpg"/>
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
<img alt="3D Rendering 4" class="scroll-img" loading="lazy" src="/assets/images/3d_rendering_images/3d_images_5.webp"/>
<div class="reveal-image-border-decoration"></div>
</div>
</div>
<div class="reveal-left-text scroll-trigger-right">
<!-- <p class="section-eyebrow"><span class="dot"></span> 04 / Technology</p> -->
<h2 class="section-title">Flawless Previews</h2>
<p class="reveal-desc">
            Our advanced rendering systems break down complex material specifications into exact, texture-accurate surface finishes and highly reliable lighting simulations. <br/><br/>
            Visual-First Previews for Frictionless Construction convert dynamic design concepts into clear, market-ready presentation frameworks.<br/><br/>
            We eliminate construction re-work, streamline aesthetic choices, and give your building teams total visual alignment before pouring concrete.
          </p>
</div>
</div>
</div>
</section>
 WHAT IS ARCHITECTURAL DRAFTING 
<section class="services-overview" id="overview">
<div class="container">
<div class="overview-header reveal-item">
<h2 class="overview-title">Services We Provide </h2><br/>
<p class="overview-desc">
          Using real-time engines (Enscape, Lumion, Twinmotion) for fast iterative review, path-tracing renderers (V-Ray, Corona) for photorealistic final output, and Photoshop for post-production. <br/><br/>
<strong>Real-Time vs. Photorealistic Rendering</strong> - Real-time engines offer fast, live viewport rendering linked directly to your model — ideal for design review. Path-tracing renderers take longer to set up and render but produce higher photorealism, better suited to final marketing material. 
        </p>
</div>
<div class="services-grid">
<div class="service-card reveal-item">
<div class="card-meta"></div>
<h3 class="card-title">Still Renders</h3>
<p class="card-text">Producing high-quality, photorealistic images of architectural designs for presentations, marketing, and client approvals.</p>
</div>
<div class="service-card reveal-item">
<div class="card-meta"></div>
<h3 class="card-title">Walkthrough Animations</h3>
<p class="card-text">Creating animated sequences that simulate movement through a space, helping stakeholders visualize design flow and spatial experience.</p>
</div>
<div class="service-card reveal-item">
<div class="card-meta"></div>
<h3 class="card-title">Real-Time Interactive Visualisation</h3>
<p class="card-text">Delivering interactive 3D environments that allow users to explore designs in real time, commonly using game-engine technology for US projects.</p>
</div>
</div>
</div>
</section>
 Supporting Builders and Manufacturers 
<section class="inner-section reveal-section" id="sectors">
<div class="container">
<div class="section-header reveal-item">
<!-- <p class="section-eyebrow"><span class="dot"></span> 02 / Target Sector Analysis</p> -->
<h2 class="section-title">Our Process</h2><br/>
<p class="section-desc">For clients, we design high-performance environments tailored to your daily life and workflows. <br/>
        For contractors, we eliminate on-site guesswork with highly detailed, clash-free drawing packages. <br/>
        Fewer structural revisions, accelerated project approvals, and flawless execution from day one.
        </p>
</div>
<div class="sector-list">
<div class="sector-card reveal-item">
<div class="sector-img-wrap">
<img alt="3D Rendering 1" loading="lazy" src="/assets/images/3d_rendering_images/3d_images_9.jpg"/>
</div>
<div class="sector-body">
<div class="feature-icon">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
<circle cx="12" cy="12" r="1"></circle>
</svg>
</div>
<h3>Model or Scene Setup</h3>
<p>Preparing 3D models and organizing the scene with proper geometry, scale, and composition for accurate visualization.</p>
</div>
</div>
<div class="sector-card reveal-item">
<div class="sector-img-wrap">
<img alt="3D Rendering 2 " loading="lazy" src="/assets/images/3d_rendering_images/3d_images_10.avif"/>
</div>
<div class="sector-body">
<div class="feature-icon">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24">
<circle cx="12" cy="5" r="3"></circle>
<line x1="12" x2="12" y1="1" y2="2"></line>
<line x1="5.64" x2="7.05" y1="5.64" y2="7.05"></line>
<line x1="18.36" x2="16.95" y1="5.64" y2="7.05"></line>
<polygon points="12 11 4 15 12 19 20 15"></polygon>
<polyline points="4 19 12 23 20 19"></polyline>
</svg>
</div>
<h3>Lighting and Materials</h3>
<p>Applying realistic lighting conditions and material textures to enhance visual quality and reflect design intent.</p>
</div>
</div>
<div class="sector-card reveal-item">
<div class="sector-img-wrap">
<img alt="3D Rendering 3 " loading="lazy" src="/assets/images/3d_rendering_images/3d_images_11.webp"/>
</div>
<div class="sector-body">
<div class="feature-icon">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<path d="M3 8l9 5 9-5M12 22V13"></path>
<circle cx="12" cy="9" r="2"></circle>
</svg>
</div>
<h3>Rendering</h3>
<p>Generating high-resolution images or animations using industry-standard rendering engines.</p>
</div>
</div>
<div class="sector-card reveal-item">
<div class="sector-img-wrap">
<img alt="3D Rendering 4 " loading="lazy" src="/assets/images/3d_rendering_images/3d_images_12.jpg"/>
</div>
<div class="sector-body">
<div class="feature-icon">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24">
<line x1="18" x2="22" y1="2" y2="6"></line>
<line x1="6" x2="19" y1="14" y2="1"></line>
<rect height="4" rx="1" width="4" x="2" y="18"></rect>
<path d="M11 6h.01M16 11h.01M7 2h.01"></path>
<polyline points="9 17 12 20 18 13"></polyline>
</svg>
</div>
<h3>Post-Production and Delivery</h3>
<p>Refining rendered outputs with color correction, effects, and final edits before delivering presentation-ready visuals.</p>
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
 FAQ 
<section class="faq-section reveal-section" id="faq">
<div class="container">
<div class="group-header reveal-item">
<span class="section-tag-label">▪ FAQ</span>
<h2 class="section-title">Frequently Asked Questions</h2>
</div>
<div class="faq-list" id="faqList">
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>What's the difference between real-time and photorealistic rendering, and which does Realcognita offer? </span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>Real-time rendering is faster and better for iterative review; photorealistic rendering takes longer but produces higher-quality final output. We offer both, matched to your purpose. </p>
</div>
</div>
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>Can rendering be produced directly from an existing Revit model?</span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>Yes — we typically render directly from your existing Revit or BIM model rather than rebuilding geometry from scratch.</p>
</div>
</div>
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>Can Realcognita produce both quick concept visuals and high-end marketing renders?</span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>Yes — we provide both fast real-time visuals for design review and fully photorealistic renders for presentations, approvals, and marketing use, depending on the outcome you need. </p>
</div>
</div>
</div>
</div>
</section>
 CTA 
<section class="inner-section inner-cta reveal-section">
<div class="container">
<div class="inner-cta-box reveal-item">
<h2>Let's Start With A Conversation<br/><span class="accent">Request a Rendering Quote Today!</span></h2>
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
  { id: "inline-3d-rendering-and-visualizations-0", code: `
    // Wire up the in-page CTA triggers to the shared modal
    document.getElementById('contactTrigger2')?.addEventListener('click', () => {
      if (window.openContactModal) window.openContactModal();
    });
  ` },
];

export default function Page() {
  return <PageShell html={html} scripts={scripts} />;
}

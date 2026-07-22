import PageShell from "@/src/components/PageShell";

export const metadata = {
  title: 'Realcognita Expert Construction & Engineering Consulting',
  description: 'Realcognita offers premier construction consulting, outsource estimating services, and project management. Partner with our consultants today.',
};

const html = `<section aria-label="Hero" class="hero">
<!-- Background Video -->
<div class="hero-video-wrap">
<video autoplay="" class="hero-video" data-index="1" id="heroVideo" muted="" playsinline="">
<source src="/assets/videos/3d_render.mp4" type="video/mp4"/>
</video>
<div aria-hidden="true" class="hero-overlay"></div>
</div>
<!-- Content -->
<div class="hero-content">
<span class="hero-subtitle" data-i18n-au="Trusted Construction Services — Australia · United States · Philippines · Singapore" data-i18n-us="Trusted Construction Services — United States · Australia · Philippines · Singapore">Trusted Global Construction Services — Australia · United States</span>
<h1 class="hero-title">Expert Construction &amp; Engineering Consulting</h1>
<p class="hero-desc">
        Realcognita is a construction consulting partner for builders, contractors, architects, and engineering firms delivering outsourced estimating, project management, drafting, and engineering documentation as one coordinated team. <br/><br/>
        Most projects need several disciplines working together design, drafting, structural detailing, estimating, and scheduling. Instead of coordinating separate vendors for each, our consultants sit across all of them, so standards stay consistent, and nothing gets lost between handoffs. 
      </p>
<a class="btn-hero" href="#whyChooseUs">
        Learn More
        <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
</a>
</div>
<!-- Video Controls -->
<div aria-label="Video controls" class="hero-controls">
<div class="pager-dots" id="heroPager" role="tablist">
<button aria-label="Video 1" aria-selected="true" class="pager-dot active" data-video="1" role="tab"></button>
<button aria-label="Video 2" aria-selected="false" class="pager-dot" data-video="2" role="tab"></button>
<button aria-label="Video 3" aria-selected="false" class="pager-dot" data-video="3" role="tab"></button>
<button aria-label="Video 4" aria-selected="false" class="pager-dot" data-video="4" role="tab"></button>
<button aria-label="Video 5" aria-selected="false" class="pager-dot" data-video="5" role="tab"></button>
</div>
<button aria-label="Pause video" class="video-toggle" id="videoToggle">
<svg fill="currentColor" id="pauseIcon" viewbox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>
<svg fill="currentColor" hidden="" id="playIcon" viewbox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
</button>
</div>
</section><section class="skender-split-section reveal-section" id="whyChooseUs">
<div class="skender-split-inner">
<!-- LEFT PANEL: Static Editorial Brand Block -->
<div class="skender-left-editorial">
<h2 class="editorial-headline">Our Construction<br/>Consulting Services</h2>
<p class="editorial-paragraph">We support projects in both the United States and Australia, with documentation and consulting practices adapted to each region's standards and building codes. </p>
<a class="editorial-cta-btn" href="/about-us">
<span class="cta-text-label">About Realcognita</span>
</a>
</div>
<!-- RIGHT PANEL: Slider Viewport & Dynamic Description Area -->
<div class="skender-right-showcase">
<!-- Horizontal Media Viewport Track Container -->
<div class="showcase-slider-viewport">
<div class="showcase-slider-track" id="skenderSliderTrack">
<div class="showcase-media-slide">
<img alt="Outsourced Construction Estimating and Takeoff" onerror="this.onerror=null; this.src='https://unsplash.com';" src="/assets/images/pages/index-images/our-construction-consulting/construction-images-1.webp">
</img></div>
<div class="showcase-media-slide">
<img alt="Offshore Project Management and Coordination" onerror="this.onerror=null; this.src='https://unsplash.com';" src="/assets/images/pages/index-images/our-construction-consulting/construction-images-2.webp">
</img></div>
<div class="showcase-media-slide">
<img alt="Structural Steel Detailing and Engineering Documentation" onerror="this.onerror=null; this.src='https://unsplash.com';" src="/assets/images/pages/index-images/our-construction-consulting/construction-images-3.webp"/>
</div>
<div class="showcase-media-slide">
<img alt="Architectural Drafting and Documentation" onerror="this.onerror=null; this.src='https://unsplash.com';" src="/assets/images/pages/index-images/our-construction-consulting/construction-images-4.webp"/>
</div>
<div class="showcase-media-slide">
<img alt="BIM Modeling and Coordination" onerror="this.onerror=null; this.src='https://unsplash.com';" src="/assets/images/pages/index-images/our-construction-consulting/construction-images-5.webp"/>
</div>
<div class="showcase-media-slide">
<img alt="3D Rendering and Visualization" onerror="this.onerror=null; this.src='https://unsplash.com';" src="/assets/images/pages/index-images/our-construction-consulting/construction-images-7.webp"/>
</div>
<div class="showcase-media-slide">
<img alt="Dedicated Teams" onerror="this.onerror=null; this.src='https://unsplash.com';" src="/assets/images/pages/index-images/our-construction-consulting/construction-images-8.webp"/>
</div>
<div class="showcase-media-slide">
<img alt="Scalable Delivery" onerror="this.onerror=null; this.src='https://unsplash.com';" src="/assets/images/pages/index-images/our-construction-consulting/construction-images-9.webp"/>
</div>
</div>
</div>
<div class="showcase-control-footer">
<!-- Live Content Text Descriptors Panel (Controlled via Switcher IDs) -->
<div class="showcase-text-details">
<div class="pillar-text-node active" data-slide-index="0">
<h3>Outsourced Construction Estimating and Takeoff</h3>
<p>Accurate and efficient estimating and quantity takeoff services to support budgeting, bidding, and cost control across all project stages.</p>
</div>
<div class="pillar-text-node" data-slide-index="1">
<h3>Offshore Project Management and Coordination</h3>
<p>Reliable offshore project management and coordination to streamline workflows, maintain schedules, and ensure seamless communication across global teams.</p>
</div>
<div class="pillar-text-node" data-slide-index="2">
<h3>Structural Steel Detailing and Engineering Documentation</h3>
<p>Comprehensive structural steel detailing and engineering documentation to ensure precision, compliance, and efficient fabrication and installation.</p>
</div>
<div class="pillar-text-node" data-slide-index="3">
<h3>Architectural Drafting and Documentation</h3>
<p>We provide fabrication-ready detailing for fabricators, ensuring precision, clarity, and efficiency in manufacturing and assembly processes.</p>
</div>
<div class="pillar-text-node" data-slide-index="4">
<h3>Structural Steel Detailing</h3>
<p>We deliver precise structural steel detailing and engineering documentation to support accurate fabrication and efficient construction workflows.</p>
</div>
<div class="pillar-text-node" data-slide-index="5">
<h3>Architectural Drafting and Documentation</h3>
<p>Professional architectural drafting and documentation services that deliver clear, accurate drawings aligned with project requirements and standards.</p>
</div>
<div class="pillar-text-node" data-slide-index="6">
<h3>BIM Modelling and Coordination</h3>
<p>Advanced BIM modeling and coordination to improve design accuracy, detect clashes, and enhance collaboration across all disciplines.</p>
</div>
<div class="pillar-text-node" data-slide-index="7">
<h3>3D Rendering and Visualization</h3>
<p>High-quality 3D rendering and visualization services to bring designs to life and support client presentations and decision-making.</p>
</div>
</div>
<!-- Minimalist Micro-Circle Tracking Arrows Group -->
<div class="showcase-action-row">
<div class="showcase-progress-wrapper">
<div class="showcase-progress-bar" id="skenderProgressBar"></div>
</div>
<div class="showcase-nav-arrows">
<button aria-label="Previous slide" class="circle-nav-btn" id="skenderPrev">
<svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="19" x2="5" y1="12" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
</button>
<button aria-label="Next slide" class="circle-nav-btn" id="skenderNext">
<svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section><section class="who-we-work-with-section reveal-section" id="whoWeWorkWith">
<div class="container">
<div class="wwww-inner">
<h2 class="editorial-headline">Who We Work With</h2>
<ul class="wwww-list">
<li class="wwww-item reveal-item">
<span aria-hidden="true" class="wwww-icon">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
</span>
<p>Builders and general contractors needing outsourced estimating or drafting capacity</p>
</li>
<li class="wwww-item reveal-item">
<span aria-hidden="true" class="wwww-icon">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
</span>
<p>Architects and engineers needing documentation and coordination support</p>
</li>
<li class="wwww-item reveal-item">
<span aria-hidden="true" class="wwww-icon">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
</span>
<p>Developers scoping multi-phase residential or commercial projects</p>
</li>
<li class="wwww-item reveal-item">
<span aria-hidden="true" class="wwww-icon">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
</span>
<p>Fabricators needing accurate, fabrication-ready detailing</p>
</li>
</ul>
</div>
</div>
</section><section class="one-team-section reveal-section" id="whyOneTeam">
<div class="one-team-inner">
<div class="one-team-icon-wrap">
<span aria-hidden="true" class="one-team-icon-glow"></span>
<svg class="one-team-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" viewbox="0 0 24 24">
<circle cx="6" cy="6" r="2.4"></circle>
<circle cx="18" cy="6" r="2.4"></circle>
<circle cx="12" cy="18" r="2.4"></circle>
<path d="M7.8 7.6L11 16.4M16.2 7.6L13 16.4M8.4 6h7.2"></path>
</svg>
</div>
<h2 class="one-team-title">Why Partner with <span class="accent">One Consulting Team</span></h2>
<span aria-hidden="true" class="one-team-underline"></span>
<p class="one-team-text">When estimating, drafting, and project management sit under one consultant, revisions move faster and every deliverable goes through the same internal QA process before it reaches you whichever discipline it comes from.</p>
</div>
</section><section class="groups-section">
<div class="container">
<!-- ===================== RESIDENTIAL SERVICES GROUP ===================== -->
<div class="group-block">
<!-- Top Layout Structure: Clean Headline Left, Action Button Right -->
<div class="group-header reveal-item">
<div class="header-split-row">
<div class="header-left-col">
<span class="section-tag-label">▪ RESIDENTIAL SERVICES</span>
<h2 class="section-title">Masterfully Crafting Your Ideal Living and Working Spaces</h2>
</div>
<div class="header-right-col">
<a class="explore-btn" href="/residential-services">EXPLORE RESIDENTIAL SERVICES<span class="square-dot">▪</span></a>
</div>
</div>
</div>
<!-- Stacked Dynamic List Layout (Replacing the slider grid) -->
<div class="stacked-services-list">
<!-- Row 01 -->
<div class="service-row-item reveal-item">
<div class="row-left-meta">
<span class="row-number"></span>
<div class="growth-metric">
<span class="metric-num">1x</span>
<span class="metric-txt">RESIDENTIAL</span>
</div>
</div>
<div class="row-center-thumb">
<img alt="Project Management" loading="lazy" src="/assets/images/pages/index-images/residential_services/residential-images-1.webp"/>
</div>
<div class="row-right-body">
<div class="body-header">
<h3 class="card-title">Complete Home Care &amp; Service Experts</h3>
<a aria-label="Learn more about Residential Home Builders" class="arrow-link" href="#">↴</a>
</div>
<p class="card-desc">
                Your home is your sanctuary, and our residential services are designed to keep it safe, comfortable, and running smoothly. We provide tailored, non-intrusive service solutions that respect your space and your schedule. Whether you need a routine touch-up, preventative maintenance, or a complete overhaul, our trusted technicians treat your home with the same care and attention to detail as they would their own.
              </p>
<!-- Custom Tag Pills array matching design -->
<div class="tag-pills-wrapper">
<span class="pill-tag">Personalized Approach</span>
<span class="pill-tag">Flexible Scheduling</span>
<span class="pill-tag">Peace of Mind</span>
</div>
</div>
</div>
<!-- Row 02 -->
<div class="service-row-item reveal-item">
<div class="row-left-meta">
<span class="row-number"></span>
<div class="growth-metric">
<span class="metric-num">2x</span>
<span class="metric-txt">TRUSTED</span>
</div>
</div>
<div class="row-center-thumb">
<img alt="Trusted Residential Service for Your Home" loading="lazy" src="/assets/images/pages/index-images/residential_services/residential-images-2.webp"/>
</div>
<div class="row-right-body">
<div class="body-header">
<h3 class="card-title">Trusted Residential Service for Your Home</h3>
<a aria-label="Learn more about Trusted Residential Service for Your Home" class="arrow-link" href="#">↴</a>
</div>
<p class="card-desc">
                We believe your home should be your safe haven. Our residential Service team is dedicated to providing reliable, non-intrusive care that respects your family’s routine and personal space. We treat every home like it’s our own, delivering results you can feel good about.
              </p>
<!-- Custom Tag Pills array matching design -->
<div class="tag-pills-wrapper">
<span class="pill-tag">Family-First Safety</span>
<span class="pill-tag">Respect for Your Space</span>
<span class="pill-tag">Clear Communication</span>
</div>
</div>
</div>
<!-- Row 03 -->
<div class="service-row-item reveal-item">
<div class="row-left-meta">
<span class="row-number"></span>
<div class="growth-metric">
<span class="metric-num">3x</span>
<span class="metric-txt">PREMIUM</span>
</div>
</div>
<div class="row-center-thumb">
<img alt="Premium Home Service Solutions" loading="lazy" src="/assets/images/pages/index-images/residential_services/residential-images-3.webp"/>
</div>
<div class="row-right-body">
<div class="body-header">
<h3 class="card-title">Premium Home Service Solutions</h3>
<a aria-label="Learn more about Premium Home Service Solutions" class="arrow-link" href="#">↴</a>
</div>
<p class="card-desc">
                Elevate your living space with our meticulous, luxury-grade residential services. Designed for homeowners who demand the best, we combine top-tier materials, advanced techniques, and an obsessive attention to detail to ensure your home looks and functions flawlessly.
              </p>
<!-- Custom Tag Pills array matching design -->
<div class="tag-pills-wrapper">
<span class="pill-tag">Uncompromising Quality</span>
<span class="pill-tag">White-Glove Service</span>
<span class="pill-tag">Custom Tailored</span>
</div>
</div>
</div>
<!-- Row 04 -->
<div class="service-row-item reveal-item">
<div class="row-left-meta">
<span class="row-number"></span>
<div class="growth-metric">
<span class="metric-num">4x</span>
<span class="metric-txt">CONVENIENT</span>
</div>
</div>
<div class="row-center-thumb">
<img alt="Quick &amp; Convenient Residential" loading="lazy" src="/assets/images/pages/index-images/residential_services/residential-images-4.webp"/>
</div>
<div class="row-right-body">
<div class="body-header">
<h3 class="card-title">Quick &amp; Convenient Residential</h3>
<a aria-label="Learn more about Quick &amp; Convenient Residential" class="arrow-link" href="#">↴</a>
</div>
<p class="card-desc">
                Life is busy enough without waiting around for home maintenance. Our streamlined residential services are designed to be fast, efficient, and entirely hassle-free. Book with ease, get quick turnarounds, and enjoy a perfectly maintained home without the headache.
              </p>
<!-- Custom Tag Pills array matching design -->
<div class="tag-pills-wrapper">
<span class="pill-tag">On-Time Guarantee</span>
<span class="pill-tag">Rapid Execution</span>
<span class="pill-tag">Easy Booking</span>
</div>
</div>
</div>
<!-- Row 05 -->
<div class="service-row-item reveal-item">
<div class="row-left-meta">
<span class="row-number"></span>
<div class="growth-metric">
<span class="metric-num">5x</span>
<span class="metric-txt">COMPREHENSIVE</span>
</div>
</div>
<div class="row-center-thumb">
<img alt="Comprehensive Home Care &amp; Maintenance" loading="lazy" src="/assets/images/pages/index-images/residential_services/residential-images-5.webp"/>
</div>
<div class="row-right-body">
<div class="body-header">
<h3 class="card-title">Comprehensive Home Care &amp; Maintenance</h3>
<a aria-label="Learn more about Comprehensive Home Care &amp; Maintenance" class="arrow-link" href="#">↴</a>
</div>
<p class="card-desc">
                A well-maintained home saves you money. Our preventative Service solutions are designed to stop problems before they start. We focus on the long-term health of your property, protecting your biggest investment from unnecessary wear, tear, and costly emergency repairs.
              </p>
<!-- Custom Tag Pills array matching design -->
<div class="tag-pills-wrapper">
<span class="pill-tag">Cost-Saving Prevention</span>
<span class="pill-tag">Property Value Protection</span>
<span class="pill-tag">Seasonal Tune-Ups</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section class="groups-section">
<div class="container">
<!-- ===================== COMMERCIAL SERVICES GROUP ===================== -->
<div class="group-block">
<!-- Top Layout Structure: Clean Headline Left, Action Button Right -->
<div class="group-header reveal-item">
<div class="header-split-row">
<div class="header-left-col">
<span class="section-tag-label">▪ COMMERCIAL SERVICES</span>
<h2 class="section-title">Full-scale crafting for modern business environments.</h2>
</div>
<div class="header-right-col">
<a class="explore-btn" href="/commercial-services">EXPLORE COMMERCIAL SERVICES <span class="square-dot">▪</span></a>
</div>
</div>
</div>
<!-- Stacked Dynamic List Layout (Replacing the slider grid) -->
<div class="stacked-services-list">
<!-- Row 01 -->
<div class="service-row-item reveal-item">
<div class="row-left-meta">
<span class="row-number"></span>
<div class="growth-metric">
<span class="metric-num">1x</span>
<span class="metric-txt">UNINTERRUPTED</span>
</div>
</div>
<div class="row-center-thumb">
<img alt="Uninterrupted Commercial Service Solutions" loading="lazy" src="/assets/images/pages/index-images/commercial_services/commercial-image-1.webp"/>
</div>
<div class="row-right-body">
<div class="body-header">
<h3 class="card-title">Uninterrupted Commercial Service Solutions</h3>
<a aria-label="Learn more about Uninterrupted Commercial Service Solutions" class="arrow-link" href="#">↴</a>
</div>
<p class="card-desc">
                In business, downtime is not an option. Our commercial Service team is built around your operating hours, delivering rapid, stealthy, and highly efficient maintenance that never gets in the way of your staff or your customers. We keep your facility running so you can focus on your business.
              </p>
<!-- Custom Tag Pills array matching design -->
<div class="tag-pills-wrapper">
<span class="pill-tag">After-Hours Availability</span>
<span class="pill-tag">Rapid Response Fleet</span>
<span class="pill-tag">Discreet Execution</span>
</div>
</div>
</div>
<!-- Row 02 -->
<div class="service-row-item reveal-item">
<div class="row-left-meta">
<span class="row-number"></span>
<div class="growth-metric">
<span class="metric-num">2x</span>
<span class="metric-txt">ENTERPRISE LEVEL</span>
</div>
</div>
<div class="row-center-thumb">
<img alt="Enterprise-Level Facility" loading="lazy" src="/assets/images/pages/index-images/commercial_services/commercial-image-2.webp"/>
</div>
<div class="row-right-body">
<div class="body-header">
<h3 class="card-title">Enterprise-Level Facility</h3>
<a aria-label="Learn more about Enterprise-Level Facility" class="arrow-link" href="#">↴</a>
</div>
<p class="card-desc">
                Big buildings require big capabilities. Our heavy-duty commercial division is equipped to handle massive square footage, complex industrial systems, and multi-site portfolios. We have the workforce, the industrial-grade equipment, and the logistics to manage your largest projects with ease.
              </p>
<!-- Custom Tag Pills array matching design -->
<div class="tag-pills-wrapper">
<span class="pill-tag">High Capacity</span>
<span class="pill-tag">Industrial-Grade Equipment</span>
<span class="pill-tag">Multi-Site Management</span>
</div>
</div>
</div>
<!-- Row 03 -->
<div class="service-row-item reveal-item">
<div class="row-left-meta">
<span class="row-number"></span>
<div class="growth-metric">
<span class="metric-num">3x</span>
<span class="metric-txt">STRATEGIC</span>
</div>
</div>
<div class="row-center-thumb">
<img alt="Strategic Commercial Service Partners" loading="lazy" src="/assets/images/pages/index-images/commercial_services/commercial-image-3.webp"/>
</div>
<div class="row-right-body">
<div class="body-header">
<h3 class="card-title">Strategic Commercial Service Partners</h3>
<a aria-label="Learn more about Strategic Commercial Service Partners" class="arrow-link" href="#">↴</a>
</div>
<p class="card-desc">
                We do more than just fix problems we partner with property managers and business owners to optimize facility performance.Our strategic approach to commercial Service is designed to extend the lifespan of your assets, reduce overhead costs, and deliver a measurable return on investment.
              </p>
<!-- Custom Tag Pills array matching design -->
<div class="tag-pills-wrapper">
<span class="pill-tag">Dedicated Account Managers</span>
<span class="pill-tag">Predictable Budgeting</span>
<span class="pill-tag">Asset Lifespan Extension</span>
</div>
</div>
</div>
<!-- Row 04 -->
<div class="service-row-item reveal-item">
<div class="row-left-meta">
<span class="row-number"></span>
<div class="growth-metric">
<span class="metric-num">4x</span>
<span class="metric-txt">CERTIFIED</span>
</div>
</div>
<div class="row-center-thumb">
<img alt="Certified Commercial &amp; Industrial" loading="lazy" src="/assets/images/pages/index-images/commercial_services/commercial-image-4.webp"/>
</div>
<div class="row-right-body">
<div class="body-header">
<h3 class="card-title">Certified Commercial &amp; Industrial</h3>
<a aria-label="Learn more about Certified Commercial &amp; Industrial" class="arrow-link" href="#">↴</a>
</div>
<p class="card-desc">
                Navigating building codes and health regulations is complex. Our compliance-focused commercial services guarantee that your facility meets or exceeds all local laws, OSHA standards, and industry-specific regulations. We absorb the liability of facility maintenance so you don't have to.
              </p>
<!-- Custom Tag Pills array matching design -->
<div class="tag-pills-wrapper">
<span class="pill-tag">Code Compliant</span>
<span class="pill-tag">Rigorous Safety Standards</span>
<span class="pill-tag">Thorough Documentation</span>
</div>
</div>
</div>
<!-- Row 05 -->
<div class="service-row-item reveal-item">
<div class="row-left-meta">
<span class="row-number"></span>
<div class="growth-metric">
<span class="metric-num">5x</span>
<span class="metric-txt">AS-BUILT MODELING</span>
</div>
</div>
<div class="row-center-thumb">
<img alt="Specialized B2B Service Solutions" loading="lazy" src="/assets/images/pages/index-images/commercial_services/commercial-image-5.webp"/>
</div>
<div class="row-right-body">
<div class="body-header">
<h3 class="card-title">Specialized B2B Service Solutions</h3>
<a aria-label="Learn more about Specialized B2B Service Solutions" class="arrow-link" href="#">↴</a>
</div>
<p class="card-desc">
                A retail storefront does not have the same needs as a medical clinic or a corporate office. We design specialized, industry-specific Service protocols tailored entirely to the unique demands of your sector. Tell us what your business does, and we will build a maintenance plan around it.
              </p>
<!-- Custom Tag Pills array matching design -->
<div class="tag-pills-wrapper">
<span class="pill-tag">Sector-Specific Expertise</span>
<span class="pill-tag">Flexible Service Agreements</span>
<span class="pill-tag">Brand Protection</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section class="collaboration-section" id="partners">
<div class="collaboration-inner-wrap">
<!-- Top Header Layout Structure -->
<div class="testimonial-header">
<div class="header-left">
<span class="section-tag-label">▪ TESTIMONIALS</span>
<h2 class="collaboration-title">Our Clients Feedbacks</h2>
</div>
<div class="header-right">
<p class="header-context-text">We help clients transform their ideas into reality, providing expert guidance, &amp; innovative solutions for every project.</p>
</div>
</div>
<!-- Infinite Looping Logo Ribbon Track -->
<div class="logo-marquee-wrapper">
<div class="logo-marquee-track">
<!-- ==================== SET 1 ==================== -->
<div class="logo-capsule-tile">
<img alt="Highland Homes" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" src="/assets/images/pages/index-images/client-logo/client-image-1.webp"/>
<span class="matrix-logo-fallback" style="display:none;">Highland Homes</span>
</div>
<div class="logo-capsule-tile">
<img alt="Mi Homes" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" src="/assets/images/pages/index-images/client-logo/client-image-2.webp"/>
<span class="matrix-logo-fallback" style="display:none;">Mi Homes</span>
</div>
<div class="logo-capsule-tile">
<img alt="Simonds" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" src="/assets/images/pages/index-images/client-logo/client-image-3.webp"/>
<span class="matrix-logo-fallback" style="display:none;">Simonds</span>
</div>
<div class="logo-capsule-tile">
<img alt="Toll Brothers" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" src="/assets/images/pages/index-images/client-logo/client-image-4.webp"/>
<span class="matrix-logo-fallback" style="display:none;">Toll Brothers</span>
</div>
<!-- ==================== SET 2 (CLONE GROUP) ==================== -->
<div class="logo-capsule-tile">
<img alt="Highland Homes" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" src="/assets/images/pages/index-images/client-logo/client-image-1.webp"/>
<span class="matrix-logo-fallback" style="display:none;">Highland Homes</span>
</div>
<div class="logo-capsule-tile">
<img alt="Mi Homes" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" src="/assets/images/pages/index-images/client-logo/client-image-2.webp"/>
<span class="matrix-logo-fallback" style="display:none;">Mi Homes</span>
</div>
<div class="logo-capsule-tile">
<img alt="Simonds" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" src="/assets/images/pages/index-images/client-logo/client-image-3.webp"/>
<span class="matrix-logo-fallback" style="display:none;">Simonds</span>
</div>
<div class="logo-capsule-tile">
<img alt="Toll Brothers" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" src="/assets/images/pages/index-images/client-logo/client-image-4.webp"/>
<span class="matrix-logo-fallback" style="display:none;">Toll Brothers</span>
</div>
</div>
</div>
<!-- Interactive Testimonial Content Block -->
<div class="testimonial-slider-block">
<!-- Left Controls -->
<div class="slider-left-controls">
<button aria-label="Previous testimonial" class="arrow-btn" id="reviewPrev">←</button>
<button aria-label="Next testimonial" class="arrow-btn" id="reviewNext">→</button>
</div>
<!-- Center Card Content Body -->
<div class="slider-center-body">
<p class="testimonial-quote-text" id="quoteText">
            Collaborating with your team was seamless from concept to completion. Your attention to spatial flow and material selection brought our shared vision to life in a way that exceeded expectations.
          </p>
<div class="testimonial-author-profile">
<div class="author-avatar-wrap">
<!-- Fallback SVG Profile Icon -->
<img alt="Profile" id="authorAvatar" src="/assets/team/client_image_1.avif">
</img></div>
<div class="author-meta-info">
<h4 class="author-name" id="authorName">Joseph Mckinley</h4>
<span class="author-role" id="authorRole">INTERIOR DESIGNER</span>
</div>
</div>
</div>
<!-- Right Metadata Details Layout -->
<div class="slider-right-details">
<span class="timeline-stamp">2020-2026</span>
<div class="rating-stars-row">★★★★★</div>
</div>
</div>
</div>
</section><section class="news-section reveal-section" id="news">
<div class="container">
<div class="news-header reveal-item">
<div class="header-title-block">
<span class="news-category-tag">▪ BLOGS</span>
<h2 class="section-title">Daily Insights for Smarter Living and Better Spaces</h2>
</div>
<div class="slider-nav">
<div aria-label="News pages" class="pagination-dots" id="newsDots"></div>
<button aria-label="Previous news" class="arrow-btn" id="newsPrev">
<svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><line x1="19" x2="5" y1="12" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
</button>
<button aria-label="Next news" class="arrow-btn" id="newsNext">
<svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</button>
</div>
</div>
<!-- Cards injected by JS -->
<div class="news-track-wrap">
<div class="news-track" id="newsTrack"></div>
</div>
</div>
</section><section class="showcase-section" id="showcase">
<div class="container">
<!-- STAGE 1: Centered Header Block (Triggers first) -->
<div class="showcase-header reveal-header-item">
<h2 class="showcase-title">Where Inspired Design Meets Structural Perfection</h2>
<!-- <a href="#" class="explore-dark-btn">EXPLORE PROPERTIES <span class="square-dot-white">▪</span></a> -->
</div>
<!-- STAGE 2: Asymmetric Image Grid Container (Triggers on subsequent scroll) -->
<div class="showcase-grid sequential-grid-trigger">
<div class="showcase-item panel-low grid-image-element">
<div class="showcase-img-wrap">
<img alt="Commercial 1" loading="lazy" src="/assets/images/pages/index-images/gallery-images/gallery-image-1.webp">
</img></div>
</div>
<div class="showcase-item panel-high grid-image-element">
<div class="showcase-img-wrap">
<img alt="Residential 1" loading="lazy" src="/assets/images/pages/index-images/gallery-images/gallery-image-2.webp">
</img></div>
</div>
<div class="showcase-item panel-mid grid-image-element">
<div class="showcase-img-wrap">
<img alt="Commercial 2" loading="lazy" src="/assets/images/pages/index-images/gallery-images/gallery-image-3.webp">
</img></div>
</div>
<div class="showcase-item panel-base grid-image-element">
<div class="showcase-img-wrap">
<img alt="Residential 2" loading="lazy" src="/assets/images/pages/index-images/gallery-images/gallery-image-4.webp">
</img></div>
</div>
</div>
</div>
</section><section class="cta-section reveal-section" id="contact">
<div aria-hidden="true" class="cta-glow cta-glow-a"></div>
<div aria-hidden="true" class="cta-glow cta-glow-b"></div>
<div class="container">
<div class="cta-inner">
<div class="cta-left reveal-item">
<h2 class="cta-title">
            Talk to a<br/>
<span class="accent">Construction</span><br/>
            Consultant.
          </h2>
</div>
<div class="cta-right reveal-item">
<div class="cta-card">
<h3>Schedule a Strategy Call Today!</h3>
<form class="cta-form" id="ctaForm" novalidate="">
<div class="cta-field-wrap">
<input class="field-input" id="ctaEmail" placeholder=" " required="" type="email"/>
<label class="field-label" for="ctaEmail">Business Email</label>
</div>
<button class="btn-submit" disabled="" id="ctaSubmit" type="submit">
<span>Submit</span>
<svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</button>
</form>
<!-- ENHANCED DYNAMIC REGION SELECTION TOOL -->
<div class="region-dropdown-wrap">
<button aria-expanded="false" class="region-toggle" id="regionToggle">
                Tell us about your project and we'll help you scope the right support.
                <svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
</button>
<!-- List wrapper panel pops out cleanly upon click actions -->
<div class="region-menu" id="regionMenu">
<a class="region-item" href="tel:+61419043009">
<span class="region-flag">🇦🇺</span>
<div class="region-text">
<span class="region-name">Australia</span>
<strong class="region-phone">+61 419 043 009</strong>
</div>
</a>
<a class="region-item" href="tel:+639175190137">
<span class="region-flag">🇵🇭</span>
<div class="region-text">
<span class="region-name">Philippines</span>
<strong class="region-phone">+63 917 519 0137</strong>
</div>
</a>
<a class="region-item" href="tel:+6563778000">
<span class="region-flag">🇸🇬</span>
<div class="region-text">
<span class="region-name">Singapore</span>
<strong class="region-phone">+65 6377 8000</strong>
</div>
</a>
<a class="region-item" href="tel:+14696480750">
<span class="region-flag">🇺🇸</span>
<div class="region-text">
<span class="region-name">United States</span>
<strong class="region-phone">+1 469-648-0750</strong>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section aria-label="Frequently Asked Questions" class="faq-section reveal-section" id="faq">
<div class="container">
<div class="group-header reveal-item">
<span class="section-tag-label">▪ FAQS</span>
<h2 class="section-title">Frequently Asked Questions</h2>
</div>
<div class="faq-list" id="faqList">
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>What does construction consulting with Realcognita include?</span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>Outsourced estimating, project management, drafting, BIM, engineering documentation, steel detailing, and modeling delivered by one team instead of several disconnected vendors. </p>
</div>
</div>
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>Which regions and project types does Realcognita support? </span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p data-i18n-au="We support residential and commercial projects across Australia and the United States, tailored to local council and building code requirements." data-i18n-us="We support residential and commercial projects across the United States and Australia.">We support residential and commercial projects across the United States and Australia.</p>
</div>
</div>
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>Can Realcognita support a single service, or only full consulting partnerships? </span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>Both. Some clients bring us in one service, such as estimating or project management, while others work with us across an entire project lifecycle. </p>
</div>
</div>
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>Why Work With One Partner Instead of Several</span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>When drafting, BIM, and estimating sit under one workflow, standards stay consistent, revisions move faster, and nothing gets lost between vendors. Every deliverable goes through the same internal QA process before it reaches you, whichever discipline it comes from.</p>
</div>
</div>
</div>
</div>
</section><section class="locations-section reveal-section" id="locations">
<div class="container">
<div class="section-header reveal-item">
<h2 class="section-title left-aligned">Office Locations</h2>
</div>
<div class="locations-grid">
<div class="location-card reveal-item" style="--city-bg: url('../assets/flags/australia-ofc.png')">
<div aria-hidden="true" class="loc-bg"></div>
<div class="loc-flag">
<img alt="Australia" loading="lazy" src="/assets/flags/australia.png">
</img></div>
<div class="loc-body">
<h3>Australia</h3>
<p>11 Cressall Road, Balcatta WA 6021, Australia</p>
<a class="loc-phone" href="tel:+61419043009">+61 419 043 009</a>
<a class="loc-map-btn" href="https://maps.app.goo.gl/xfWckVWbYQTbTvEL7" rel="noopener" target="_blank">
<svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              View Google Maps
            </a>
</div>
</div>
<div class="location-card reveal-item" style="--city-bg: url('../assets/flags/manila-ofc.png')">
<div aria-hidden="true" class="loc-bg"></div>
<div class="loc-flag">
<img alt="Philippines" loading="lazy" src="/assets/flags/ph.jpg">
</img></div>
<div class="loc-body">
<h3>Philippines</h3>
<p>15F Four/Neo, 4th Avenue cor. 30th &amp; 31st St., Bonifacio Global City, Taguig, Manila 1634</p>
<a class="loc-phone" href="tel:+639175190137">+63 917 519 0137</a>
<a class="loc-map-btn" href="https://maps.app.goo.gl/F4J4f1E86jVtobns8" rel="noopener" target="_blank">
<svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              View Google Maps
            </a>
</div>
</div>
<div class="location-card reveal-item" style="--city-bg: url('../assets/flags/singapore-ofc.png')">
<div aria-hidden="true" class="loc-bg"></div>
<div class="loc-flag">
<img alt="Singapore" loading="lazy" src="/assets/flags/singapore.webp">
</img></div>
<div class="loc-body">
<h3>Singapore</h3>
<p>1003 Bukit Merah Central, No. 04-35 Inno Centre, Singapore 159836</p>
<a class="loc-phone" href="tel:+6563778000">+65 6377 8000</a>
<a class="loc-map-btn" href="https://maps.app.goo.gl/4dLMrwWMyDeQmFrPA" rel="noopener" target="_blank">
<svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              View Google Maps
            </a>
</div>
</div>
<div class="location-card reveal-item" style="--city-bg: url('../assets/flags/us-ofc.png')">
<div aria-hidden="true" class="loc-bg"></div>
<div class="loc-flag">
<img alt="United States" loading="lazy" src="/assets/flags/us.png"/>
</div>
<div class="loc-body">
<h3>United States</h3>
<p>5816 West Plano Parkway, Plano, TX 75093</p>
<a class="loc-phone" href="tel:+14696480750">+1 469-648-0750</a>
<a class="loc-map-btn" href="https://maps.app.goo.gl/RjcQwygw1FTcpi419" rel="noopener" target="_blank">
<svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              View Google Maps
            </a>
</div>
</div>
</div>
</div>
</section>`;

const scripts = [
  { id: "inline-index-0", code: `
    // Wire up the in-page CTA triggers to the shared modal
    document.getElementById('contactTrigger2')?.addEventListener('click', () => {
      if (window.openContactModal) window.openContactModal();
    });
  ` },
];

export default function Page() {
  return <PageShell html={html} scripts={scripts} />;
}

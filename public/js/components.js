/**
 * Realcognita – Shared Components
 * Injects reusable nav + footer HTML into every page.
 * Import this BEFORE main.js.
 */

(function injectSharedComponents() {

  /* ── NAV HTML ─────────────────────────────────────────────── */
  const NAV_HTML = `
<a href="#main-content" class="skip-link">Skip to content</a>

  <div class="canvas-bg" aria-hidden="true">
    <div class="blueprint-grid"></div>
    <canvas id="particleCanvas"></canvas>
  </div>

    <!-- ===================== PRELOADER ===================== -->
  <div id="preloader" class="preloader" role="status" aria-label="Loading">
    <div class="preloader-noise" aria-hidden="true"></div>
    <div class="preloader-glow" aria-hidden="true"></div>
    <div class="preloader-orb preloader-orb--a" aria-hidden="true"></div>
    <div class="preloader-orb preloader-orb--b" aria-hidden="true"></div>

    <div class="preloader-content">
      <div class="preloader-logo-mask">
        <img src="assets/logo/realcognita-logo.webp" alt="Realcognita" class="preloader-logo" />
        <span class="preloader-shine" aria-hidden="true"></span>
      </div>

      <div class="preloader-rule" aria-hidden="true"><span></span></div>
    </div>
  </div>

  <script>
    (function () {
      var preloaderEl = document.getElementById('preloader');
      if (!preloaderEl) return;

      // Hold long enough for the mask-wipe, rule fill, and tagline to settle.
      var revealDelay = 2600;

      setTimeout(function () {
        preloaderEl.classList.add('is-hidden');
        preloaderEl.addEventListener('transitionend', function onEnd(e) {
          if (e.target === preloaderEl) {
            preloaderEl.style.display = 'none';
            preloaderEl.removeEventListener('transitionend', onEnd);
          }
        });
      }, revealDelay);
    })();
  </script>


<!-- ===================== NAVIGATION BAR START ===================== -->

    <header class="site-header" id="siteHeader">
    <div class="header-inner">

      <!-- Logo Container -->
      <a href="index.html" class="header-logo" aria-label="Realcognita – Home">
        <img src="assets/logo/realcognita-official-logo.gif" alt="Realcognita" />
      </a>

      <!-- Main Navigation Menu -->
      <nav class="desktop-nav" aria-label="Main navigation">
        <ul class="nav-list">

          <!-- SERVICES MEGA MENU ITEM -->
          <li class="nav-item has-premium-menu">
            <button class="nav-link" aria-expanded="false" aria-haspopup="true">
              Our Services
              <svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            
            <!-- Full-Width Premium Dropdown Panel Canvas -->
            <div class="premium-mega-menu">
              <div class="orascom-mega-container">
                
                <!-- LEFT SIDEBAR: Sector Toggles Controller -->
                <div class="sector-tabs-sidebar">
                  <button class="sector-tab-btn active" data-sector-target="residential-panel" type="button">
                    Residential Sector
                  </button>
                  <button class="sector-tab-btn" data-sector-target="commercial-panel" type="button">
                    Commercial Sector
                  </button>
                </div>

                <!-- RIGHT DATA PANEL CANVAS: Content Groups -->
                <div class="sector-panels-wrapper">

                  <!-- ================= RESIDENTIAL SECTOR PANEL ================= -->
                  <div class="sector-content-panel active" id="residential-panel">
                    <div class="orascom-layout-grid">
                      
                      <!-- Feature Column 1 -->
                      <div class="orascom-feature-col">
                        <div class="orascom-img-frame">
                          <a href="/architectural_drafting">
                          <img src="./assets/meganavigation_hover/mega_image_1.png" alt="Architectural Design & Drafting" />
                          </a>
                        </div>
                        <h3><a href="/architectural_drafting" class="orascom-title-link">Architectural Design & Drafting</a></h3>
                        <p>Creative concepts become clear, buildable blueprints, with detailed measurements, thoughtful layouts, and accurate drawings.</p>
                      </div>

                      <!-- Feature Column 2 -->
                      <div class="orascom-feature-col">
                        <div class="orascom-img-frame">
                          <a href="production_estimating.html">
                            <img src="./assets/meganavigation_hover/mega_image_2.jpg" alt="Production Estimating" />
                          </a>
                        </div>
                        <h3><a href="production_estimating.html" class="orascom-title-link">Production Estimating</a></h3>
                        <p>Turning project requirements into clear, costed plans by forecasting labor, materials, and timelines,</p>
                      </div>

                      <!-- Feature Column 3 -->
                      <div class="orascom-feature-col">
                        <div class="orascom-img-frame">
                          <a href="3d-rendering-and-visualizations.html">
                          <img src="./assets/meganavigation_hover/mega_image_4.jpg" alt="3D Rendering & Visualisation" />
                          </a>
                        </div>
                        <h3><a href="3d-rendering-and-visualizations.html" class="orascom-title-link">3D Visualization</a></h3>
                        <p>Transforming designs into lifelike, interactive models that help you understand space, evaluate details.</p>
                      </div>

                      <!-- Right Side Directory Column -->
                      <div class="orascom-directory-col">
                        <span class="directory-heading">Learn More</span>
                        <ul class="directory-links-list">
                          <li><a href="administrative-support.html">Administrative Support</a></li>
                          <li><a href="project-management.html">Project Management</a></li>
                          <li><a href="residential-engineering.html">Residential Engineering</a></li>
                        </ul>
                      </div>

                    </div>
                  </div>

                  <!-- ================= COMMERCIAL SECTOR PANEL ================= -->
                  <div class="sector-content-panel" id="commercial-panel">
                    <div class="orascom-layout-grid">
                      
                      <!-- Feature Column 1 -->
                      <div class="orascom-feature-col">
                        <div class="orascom-img-frame">
                          <a href="engineering_dtl.html">
                          <img src="./assets/meganavigation_hover/mega_image_7.jpg" alt="Engineering Detail & Modelling" />
                          </a>
                        </div>
                        <h3><a href="engineering_dtl.html" class="orascom-title-link">Engineering Detail & Modelling</a></h3>
                        <p>Creating precise 3D models and technical documentation that capture every component, dimension, and specification, ensuring designs are accurate.</p>
                      </div>

                      <!-- Feature Column 2 -->
                      <div class="orascom-feature-col">
                        <div class="orascom-img-frame">
                          <a href="bim-modelling-services.html">
                          <img src="./assets/meganavigation_hover/mega_image_8.webp" alt="BIM Services" />
                          </a>
                        </div>
                        <h3><a href="bim-modelling-services.html" class="orascom-title-link">BIM Services</a></h3>
                        <p>Producing shop-ready drawings and detailed fabrication information for structural steel, ensuring every connection, member size.</p>
                      </div>

                      <!-- Feature Column 3 -->
                      <div class="orascom-feature-col">
                        <div class="orascom-img-frame">
                          <a href="rebar-services.html">
                          <img src="./assets/meganavigation_hover/mega_image_9.webp" alt="Rebar Services" />
                          </a>
                        </div>
                        <h3><a href="rebar-services.html" class="orascom-title-link">Rebar Services</a></h3>
                        <p>Precision drafting, detailing, estimating, and scheduling of reinforcing steel bars needed to give concrete its structural strength.</p>
                      </div>

                      <!-- Right Side Directory Column -->
                      <div class="orascom-directory-col">
                        <span class="directory-heading">Learn More</span>
                        <ul class="directory-links-list">
                          <li><a href="infrastructure-support.html">Infrastructure Support</a></li>
                          <li><a href="drafting.html">Drafting</a></li>
                          <li><a href="production-scheduling.html">Production Scheduling</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <!-- WHO WE ARE DROPDOWN -->
          <li class="nav-item has-dropdown">
            <button class="nav-link" aria-expanded="false" aria-haspopup="true">
              Who We Are
              <svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
  
            <!-- Balanced Dropdown Panel Overlay Box -->
            <div class="standard-dropdown profile-dropdown-box">
              <div class="dropdown-split-container">
                
                <!-- Left Side Feature Column: Core Pillar Highlight -->
                <div class="dropdown-teaser-pane">
                  <div class="teaser-media" aria-hidden="true">
                    <img src="./assets/meganavigation_hover/mega_image_14.jpg" alt="">
                  </div>
                  <strong class="teaser-heading">A Reliable Construction Partner for Builders and Developers</strong>
                  <p class="teaser-text">Realcognita is a trusted engineering staff augmentation partner supporting builders, architects, and engineering firms</p>
                  <a href="about-us.html" class="teaser-action-link">Learn More</a>
                </div>

                <!-- Right Side Column: Link Navigation Menu Directory -->
                <div class="dropdown-links-pane">
                  <span class="pane-heading">Company Profile</span>
                  <ul class="pane-links-list">
                    <li>
                      <a href="about-us.html" class="pane-tile-item">
                        <span class="tile-item-title">About Us</span>
                        <span class="tile-item-desc">Global trusted engineering staff augmentation partner. </span>
                      </a>
                    </li>
                    
                    <li>
                      <a href="our-team.html" class="pane-tile-item">
                        <span class="tile-item-title">Our Team</span>
                        <span class="tile-item-desc">Meet our expert engineers and drafting designers.</span>
                      </a>
                    </li>

                    <li>
                      <a href="careers.html" class="pane-tile-item">
                        <span class="tile-item-title">Careers</span>
                        <span class="tile-item-desc">Person's long-term journey of professional work and learning. </span>
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </li>

          <!-- OUR EXPERIENCE DROPDOWN -->
          <li class="nav-item has-dropdown">
            <button class="nav-link" aria-expanded="false" aria-haspopup="true">
              Our Experience
              <svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            
            <!-- Balanced Dropdown Panel Overlay Box -->
            <div class="standard-dropdown profile-dropdown-box">
              <div class="dropdown-split-container">
                
                <!-- Left Side Feature Column: Portfolio Metric Highlight -->
                <div class="dropdown-teaser-pane">
                  <div class="teaser-media" aria-hidden="true">
                    <img src="./assets/meganavigation_hover/mega_image_15.jpg" alt="">
                  </div>
                  <strong class="teaser-heading">How Engagements Work</strong>
                  <p class="teaser-text">Projects start with a scoping conversation, move into a proposal covering deliverables and timeline, and continue with a named team producing and reviewing work against a set QA process. </p>
                  <a href="case_studies.html" class="teaser-action-link">Learn More</a>
                </div>

                <!-- Right Side Column: Link Navigation Menu Directory -->
                <div class="dropdown-links-pane">
                  <span class="pane-heading">Track Record</span>
                  <ul class="pane-links-list">
                    <li>
                      <a href="case_studies.html" class="pane-tile-item">
                        <span class="tile-item-title">Case Studies</span>
                        <span class="tile-item-desc">In-depth blueprints, structural metrics, and clash tracking analyses.</span>
                      </a>
                    </li>
                    <li>
                      <a href="testimonials.html" class="pane-tile-item">
                        <span class="tile-item-title">Testimonials</span>
                        <span class="tile-item-desc">What tier-1 global contractors and builders say about our services.</span>
                      </a>
                    </li>
                    <li>
                      <a href="white-papers.html" class="pane-tile-item">
                        <span class="tile-item-title">White Papers</span>
                        <span class="tile-item-desc">Advanced technical validation files and layout modeling standards.</span>
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </li>


         <!-- RESOURCES & INSIGHTS DROPDOWN ITEM -->
        <li class="nav-item has-dropdown">
          <button class="nav-link" aria-expanded="false" aria-haspopup="true">
            Resources & Insights
            <svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          
          <!-- Balanced Dropdown Panel Overlay Box -->
          <div class="standard-dropdown profile-dropdown-box">
            <div class="dropdown-split-container">
              
              <!-- Left Side Feature Column: Knowledge Hub Callout -->
              <div class="dropdown-teaser-pane">
                  <div class="teaser-media" aria-hidden="true">
                    <img src="./assets/meganavigation_hover/mega_image_16.jpg" alt="">
                  </div>
                  <strong class="teaser-heading">Engineering Thought Leadership</strong>
                  <p class="teaser-text">Stay ahead of global construction trends with engineering analyses, drafting regulatory updates, and building tech news. </p>
                  <a href="blog.html" class="teaser-action-link">Learn More</a>
              </div>

              <!-- Right Side Column: Link Navigation Menu Directory -->
              <div class="dropdown-links-pane">
                <span class="pane-heading">Publications</span>
                <ul class="pane-links-list">
                  <li>
                    <a href="blog.html" class="pane-tile-item">
                      <span class="tile-item-title">Blog</span>
                      <span class="tile-item-desc">Weekly updates on structural design, regional regulations, and software workflows.</span>
                    </a>
                  </li>
                  
                </ul>
              </div>

            </div>
          </div>
        </li>


        </ul>
      </nav>

      <!-- Action Trigger Box -->
      <div class="header-actions">

        <!-- Theme Toggle -->
        <button class="theme-toggle-btn" id="themeToggleBtn" aria-label="Toggle dark mode">
          <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
          <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>

        <button class="btn-contact" id="contactTrigger" aria-label="Open contact form">
          <span>CONTACT US</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>

      <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobileDrawer">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

    </div>
  </header>

  <!-- ===================== NAVIGATION BAR END ===================== -->



<!-- ===================== MOBILE VIEW ===================== -->
<div class="drawer-overlay" id="drawerOverlay"></div>
<nav class="mobile-drawer" id="mobileDrawer" aria-hidden="true" aria-label="Mobile navigation">
    <div class="drawer-top">
      <a href="index.html" class="drawer-logo">
        <img src="assets/logo/realcognita-official-logo.gif" alt="Realcognita" />
      </a>
      <button class="drawer-close" id="drawerClose" aria-label="Close menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>

    <div class="drawer-links">

      <!-- Services Accordion Panel -->
      <div class="accordion">
        <button class="accordion-trigger" aria-expanded="false">
          <span class="accordion-trigger-label">
            <span class="accordion-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1"/></svg>
            </span>
            Our Services
          </span>
          <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="accordion-body">
          <div class="accordion-body-inner">

            <div class="drawer-sector-group">
              <span class="drawer-sector-title">Residential Sector</span>
              <a href="/architectural_drafting" class="drawer-link">Architectural Design &amp; Drafting</a>
              <a href="production_estimating.html" class="drawer-link">Production Estimating</a>
              <a href="administrative-support.html" class="drawer-link">Administrative Support</a>
              <a href="3d-rendering-and-visualizations.html" class="drawer-link">3D Rendering &amp; Visualisation</a>
              <a href="project-management.html" class="drawer-link">Project Management</a>
              <a href="residential-engineering.html" class="drawer-link">Residential Engineering</a>
            </div>

            <div class="drawer-sector-group">
              <span class="drawer-sector-title">Commercial Sector</span>
              <a href="engineering_dtl.html" class="drawer-link emphasis-link">Engineering Detail &amp; Modelling</a>
              <a href="bim-modelling-services.html" class="drawer-link">BIM Modelling Services</a>
              <a href="rebar-services.html" class="drawer-link">Rebar Services</a>
              <a href="infrastructure-support.html" class="drawer-link">Infrastructure Support</a>
              <a href="drafting.html" class="drawer-link">Drafting</a>
              <a href="production-scheduling.html" class="drawer-link">Production Scheduling</a>
            </div>

          </div>
        </div>
      </div>

      <!-- Who We Are Accordion Panel -->
      <div class="accordion">
        <button class="accordion-trigger" aria-expanded="false">
          <span class="accordion-trigger-label">
            <span class="accordion-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </span>
            Who We Are
          </span>
          <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="accordion-body">
          <div class="accordion-body-inner">
            <a href="about-us.html" class="drawer-link">About Us</a>
            <a href="our-team.html" class="drawer-link">Our Team</a>
            <a href="careers.html" class="drawer-link">Careers</a>
          </div>
        </div>
      </div>

      <!-- Our Experience Accordion Panel -->
      <div class="accordion">
        <button class="accordion-trigger" aria-expanded="false">
          <span class="accordion-trigger-label">
            <span class="accordion-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.1-2.8-2.8L7 14"/></svg>
            </span>
            Our Experience
          </span>
          <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="accordion-body">
          <div class="accordion-body-inner">
            <a href="case_studies.html" class="drawer-link">Case Studies</a>
            <a href="testimonials.html" class="drawer-link">Testimonials</a>
            <a href="white-papers.html" class="drawer-link">White Papers</a>
          </div>
        </div>
      </div>

      <!-- Resources Accordion Panel -->
      <div class="accordion">
        <button class="accordion-trigger" aria-expanded="false">
          <span class="accordion-trigger-label">
            <span class="accordion-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </span>
            Resources &amp; Insights
          </span>
          <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="accordion-body">
          <div class="accordion-body-inner">
            <a href="blog.html" class="drawer-link">News &amp; Articles</a>
          </div>
        </div>
      </div>

    </div>

    <!-- Fixed footer CTA (always visible, outside scroll area) -->
    <div class="drawer-footer">
      <div class="drawer-theme-row">
        <span>Dark Mode</span>
        <button class="theme-toggle-btn" id="drawerThemeToggleBtn" aria-label="Toggle dark mode">
          <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
          <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
      </div>

      <a href="index.html#contact" class="drawer-cta">
        Get a Scoped Quote
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
      </a>
      <div class="drawer-socials">
        <a href="https://www.linkedin.com/company/realcognita" target="_blank" rel="noopener" aria-label="LinkedIn" class="drawer-social-pill">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z"/></svg>
        </a>
        <a href="https://www.facebook.com/realcognita/" target="_blank" rel="noopener" aria-label="Facebook" class="drawer-social-pill">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.507 17.523 2 12 2S2 6.507 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.508 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.877h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z"/></svg>
        </a>
      </div>
    </div>
</nav>

  <!-- ===================== MOBILE VIEW END ===================== -->
  







  <!-- ===================== CONTACT MODAL ===================== -->
  <div class="modal-overlay" id="contactModal" role="dialog" aria-modal="true" aria-labelledby="contactModalTitle" aria-hidden="true">
    <div class="modal-window">
      <button class="modal-close" id="contactModalClose" aria-label="Close contact form">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>

      <div class="modal-inner">
        <h2 id="contactModalTitle" class="modal-title">
          Let's Talk About Building<br>
          <span class="accent">Smarter Together</span>
        </h2>

        <form class="contact-form" id="contactForm" novalidate>

          <div class="form-row">
            <div class="field-group">
              <input type="text" id="firstName" class="field-input" placeholder=" " required />
              <label for="firstName" class="field-label">First Name</label>
            </div>
            <div class="field-group">
              <input type="text" id="lastName" class="field-input" placeholder=" " required />
              <label for="lastName" class="field-label">Last Name</label>
            </div>
          </div>

          <div class="form-row">
            <div class="field-group">
              <input type="email" id="emailAddr" class="field-input" placeholder=" " required />
              <label for="emailAddr" class="field-label">Email Address</label>
            </div>
            <div class="field-group phone-group">
              <!-- Country Code Picker -->
              <div class="phone-picker" id="phonePicker">
                <button type="button" class="phone-picker-toggle" id="phonePickerToggle" aria-haspopup="listbox" aria-expanded="false">
                  <span class="picker-flag-text" id="pickerFlag">AU</span>
                  <span class="picker-code" id="pickerCode">+61</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <ul class="phone-picker-list" id="phonePickerList" role="listbox">
                  <li class="picker-option" data-code="+61" data-flag="AU" role="option" tabindex="0">
                    <span class="picker-flag-text">AU</span>
                    <span>Australia</span>
                    <strong>+61</strong>
                  </li>
                  <li class="picker-option" data-code="+63" data-flag="PH" role="option" tabindex="0">
                    <span class="picker-flag-text">PH</span>
                    <span>Philippines</span>
                    <strong>+63</strong>
                  </li>
                  <li class="picker-option" data-code="+65" data-flag="SG" role="option" tabindex="0">
                    <span class="picker-flag-text">SG</span>
                    <span>Singapore</span>
                    <strong>+65</strong>
                  </li>
                  <li class="picker-option" data-code="+1" data-flag="US" role="option" tabindex="0">
                    <span class="picker-flag-text">US</span>
                    <span>United States</span>
                    <strong>+1</strong>
                  </li>
                </ul>
              </div>
              <input type="tel" id="phoneNum" class="field-input phone-input" placeholder="Phone number" />
            </div>
          </div>

          <div class="field-group">
            <input type="text" id="bizName" class="field-input" placeholder=" " />
            <label for="bizName" class="field-label">Business Name (Optional)</label>
          </div>

          <!-- Service Selector -->
          <div class="field-group service-select-wrap">
            <button type="button" class="service-select-trigger" id="serviceSelectToggle" aria-haspopup="listbox" aria-expanded="false">
              <span id="serviceSelectLabel">Services Interested In</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <input type="hidden" id="serviceSelectValue" required />
            <ul class="service-select-list" id="serviceSelectList" role="listbox">
              <li class="service-option" data-val="Architectural Design & Drafting" role="option" tabindex="0">Architectural Design & Drafting</li>
              <li class="service-option" data-val="Production Estimating" role="option" tabindex="0">Production Estimating</li>
              <li class="service-option" data-val="Administrative Support" role="option" tabindex="0">Administrative Support</li>
              <li class="service-option" data-val="3D Rendering & Visualizations" role="option" tabindex="0">3D Rendering & Visualizations</li>
              <li class="service-option" data-val="Project Management" role="option" tabindex="0">Project Management</li>
              <li class="service-option" data-val="Residential Engineering" role="option" tabindex="0">Residential Engineering</li>
              <li class="service-option" data-val="Engineering Detail & Modelling" role="option" tabindex="0">Engineering Detail & Modelling</li>
              <li class="service-option" data-val="BIM Modelling  Services" role="option" tabindex="0">BIM Modelling  Services</li>
              <li class="service-option" data-val="Rebar Services" role="option" tabindex="0">Rebar Services</li>
              <li class="service-option" data-val="Infrastructure Support" role="option" tabindex="0">Infrastructure Support</li>
              <li class="service-option" data-val="Drafting" role="option" tabindex="0">Drafting</li>
              <li class="service-option" data-val="Production Scheduling" role="option" tabindex="0">Production Scheduling</li>
            </ul>
          </div>

          <button type="submit" class="btn-submit" id="formSubmit">Submit</button>

        </form>
      </div>
    </div>
  </div>`;


  /* ── FOOTER HTML ──────────────────────────────────────────── */
  const FOOTER_HTML = `
<!-- ===================== FOOTER ===================== -->
  <footer class="site-footer">
    <div class="footer-glow"></div>
    <div class="container">

      <!-- Newsletter strip -->
      <div class="footer-newsletter">
        <div class="footer-newsletter-copy">
          <h4>Stay ahead of the build.</h4>
          <p>Occasional insights on drafting, BIM, and estimating — no spam, ever.</p>
        </div>
        <form class="footer-newsletter-form" id="footerNewsletterForm">
          <input type="email" name="email" placeholder="you@company.com" required aria-label="Email address" />
          <button type="submit">
            <span class="btn-label">Subscribe</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
          </button>
        </form>
      </div>

      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html"><img src="assets/logo/realcognita-official-logo.gif" alt="Realcognita" class="footer-logo" /></a>
          <p>Empowering visionary builders with technologically advanced structural tools, drafting solutions, and operations scaling.</p>
            <div class="footer-socials">
              <a href="https://www.linkedin.com/company/realcognita" target="_blank" rel="noopener" aria-label="LinkedIn" class="social-pill" data-tip="LinkedIn">
                <svg class="social-icon-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/realcognita/" target="_blank" rel="noopener" aria-label="Facebook" class="social-pill" data-tip="Facebook">
                <svg class="social-icon-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.06C22 6.507 17.523 2 12 2S2 6.507 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.508 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.877h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z"/>
                </svg>
              </a>
            </div>
        </div>

        <div class="footer-col">
          <h5 class="footer-heading">Residential Sector</h5>
          <ul class="footer-links">
            <li><a href="/architectural_drafting">Architectural Design & Drafting</a></li>
            <li><a href="production_estimating.html">Production Estimating</a></li>
            <li><a href="3d-rendering-and-visualizations.html">3D Visualisation</a></li>
            <li><a href="administrative-support.html">Administrative Support</a></li>
            <li><a href="residential-engineering.html">Residential Engineering</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5 class="footer-heading">Commercial Sector</h5>
          <ul class="footer-links">
            <li><a href="engineering_dtl.html">Engineering Detail & Modelling</a></li>
            <li><a href="bim-modelling-services.html">BIM Services</a></li>
            <li><a href="rebar-services.html">Rebar Services</a></li>
            <li><a href="drafting.html">Drafting</a></li>
            <li><a href="production-scheduling.html">Production Schedulling</a></li>
          </ul>
          <h5 class="footer-heading footer-heading-spaced">Resources &amp; Insights</h5>
          <ul class="footer-links">
            <li><a href="blog.html">Blog</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5 class="footer-heading">Our Company</h5>
          <ul class="footer-links">
            <li><a href="about-us.html">About Us</a></li>
            <li><a href="our-team.html">Our Team</a></li>
            <li><a href="careers.html">Careers <span class="badge-hiring">We're Hiring</span></a></li>
          </ul>
          <h5 class="footer-heading footer-heading-spaced">Our Experience</h5>
          <ul class="footer-links">
            <li><a href="case_studies.html">Case Studies</a></li>
            <li><a href="testimonials.html">Testimonials</a></li>
            <li><a href="white-papers.html">White Papers</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <p class="footer-copy">&copy; <span id="footerYear">2026</span> Realcognita. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <button id="scrollTop" class="scroll-top-btn" aria-label="Scroll to top" hidden>
    <svg class="scroll-ring" viewBox="0 0 56 56">
      <circle class="ring-track" fill="transparent" r="24" cx="28" cy="28"/>
      <circle class="ring-progress" fill="transparent" r="24" cx="28" cy="28"/>
    </svg>
    <svg class="scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M18 15L12 9L6 15" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>

  <!-- AI Chatbot launcher (fades in on scroll) + panel -->
  <button id="chatbotLauncher" class="chatbot-launcher" aria-label="Open chat assistant" aria-expanded="false">
    <svg class="cb-icon-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
    <svg class="cb-icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    <span class="chatbot-badge" id="chatbotBadge"></span>
  </button> 

  <div class="chatbot-panel" id="chatbotPanel" role="dialog" aria-label="Chat assistant" aria-hidden="true">
    <div class="chatbot-header">
      <div class="chatbot-avatar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      </div>
      <div class="chatbot-header-text">
        <h4>Realcognita Assistant</h4>
        <p><span class="chatbot-status-dot"></span> Online now</p>
      </div>
    </div>

    <div class="chatbot-messages" id="chatbotMessages"></div>

    <div class="chatbot-quick-replies" id="chatbotQuickReplies">
      <button class="chatbot-quick-btn" data-q="What services do you offer?">Our services</button>
      <button class="chatbot-quick-btn" data-q="How does pricing work?">Pricing</button>
      <button class="chatbot-quick-btn" data-q="I want to talk to a person">Talk to a human</button>
    </div>

    <form class="chatbot-input-row" id="chatbotForm">
      <input type="text" id="chatbotInput" placeholder="Type a message…" autocomplete="off" aria-label="Type a message" />
      <button type="submit" class="chatbot-send-btn" aria-label="Send message">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      </button>
    </form>
  </div>`; 

  /* ── INJECT ───────────────────────────────────────────────── */
  const bodyEl = document.body;

  // Prepend nav to body
  const navWrapper = document.createElement('div');
  navWrapper.innerHTML = NAV_HTML;
  bodyEl.prepend(...navWrapper.childNodes);

  // Append footer to body
  const footerWrapper = document.createElement('div');
  footerWrapper.innerHTML = FOOTER_HTML;
  bodyEl.append(...footerWrapper.childNodes);
})();

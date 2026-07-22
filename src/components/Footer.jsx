"use client";

/**
 * Footer + scroll-to-top + chatbot launcher/panel — converted 1:1 from the
 * original js/components.js FOOTER_HTML.
 */
export default function Footer() {
  return (
    <div
      id="rc-footer-root"
      dangerouslySetInnerHTML={{ __html: `<!-- ===================== FOOTER ===================== -->
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
          <a href="/"><img src="assets/logo/realcognita-official-logo.gif" alt="Realcognita" class="footer-logo" /></a>
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
            <li><a href="/production_estimating">Production Estimating</a></li>
            <li><a href="/3d-rendering-and-visualizations">3D Visualisation</a></li>
            <li><a href="/administrative-support">Administrative Support</a></li>
            <li><a href="/residential-engineering">Residential Engineering</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5 class="footer-heading">Commercial Sector</h5>
          <ul class="footer-links">
            <li><a href="/engineering_dtl">Engineering Detail & Modelling</a></li>
            <li><a href="/bim-modelling-services">BIM Services</a></li>
            <li><a href="/rebar-services">Rebar Services</a></li>
            <li><a href="/drafting">Drafting</a></li>
            <li><a href="/production-scheduling">Production Schedulling</a></li>
          </ul>
          <h5 class="footer-heading footer-heading-spaced">Resources &amp; Insights</h5>
          <ul class="footer-links">
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5 class="footer-heading">Our Company</h5>
          <ul class="footer-links">
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/our-team">Our Team</a></li>
            <li><a href="/careers">Careers <span class="badge-hiring">We're Hiring</span></a></li>
          </ul>
          <h5 class="footer-heading footer-heading-spaced">Our Experience</h5>
          <ul class="footer-links">
            <li><a href="/case_studies">Case Studies</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/white-papers">White Papers</a></li>
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
  </div>` }}
    />
  );
}

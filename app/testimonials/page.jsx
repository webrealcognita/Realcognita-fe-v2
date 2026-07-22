import PageShell from "@/src/components/PageShell";

export const metadata = {
  title: 'Realcognita Commercial Construction Clients Testimonials',
  description: 'Read testimonials from Realcognita clients and commercial construction partners about trusted engineering, drafting, and project support.',
};

const html = `
 Nav + Footer injected by components.js 
 ===================== HERO  ===================== 
<section class="page-hero testi-hero">
<div class="container">
<h1 class="page-hero-title">What Our<br/>Commercial Construction <span class="accent">Clients Say</span></h1>
<p class="page-hero-desc">
          Feedback from the commercial construction companies and contractors we work with on engineering, drafting, and project support.</p>
</div>
</section>
 CLIENT FEEDBACK 
<section class="collaboration-section">
<div class="collaboration-inner-wrap">
<div class="testimonial-header">
<div class="header-left">
<h2 class="collaboration-title">Client Feedback</h2>
</div>
<div class="header-right">
<p class="header-context-text">A rotating look at recent feedback from active engagements updated as projects close out.</p>
</div>
</div>
<div class="logo-marquee-wrapper">
<div class="logo-marquee-track">
<div class="logo-capsule-tile">
<img alt="Highland Homes" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" src="/assets/clients/highland_homes.png"/>
<span class="matrix-logo-fallback" style="display:none;">Highland Homes</span>
</div>
<div class="logo-capsule-tile">
<img alt="Mi Homes" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" src="/assets/clients/mi_homes.png"/>
<span class="matrix-logo-fallback" style="display:none;">Mi Homes</span>
</div>
<div class="logo-capsule-tile">
<img alt="Simonds" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" src="/assets/clients/simonds.png"/>
<span class="matrix-logo-fallback" style="display:none;">Simonds</span>
</div>
<div class="logo-capsule-tile">
<img alt="Toll Brothers" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" src="/assets/clients/toll_brothers.png"/>
<span class="matrix-logo-fallback" style="display:none;">Toll Brothers</span>
</div>
<!-- duplicate set for seamless ticker loop -->
<div class="logo-capsule-tile">
<img alt="Highland Homes" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" src="/assets/clients/highland_homes.png"/>
<span class="matrix-logo-fallback" style="display:none;">Highland Homes</span>
</div>
<div class="logo-capsule-tile">
<img alt="Mi Homes" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" src="/assets/clients/mi_homes.png"/>
<span class="matrix-logo-fallback" style="display:none;">Mi Homes</span>
</div>
<div class="logo-capsule-tile">
<img alt="Simonds" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" src="/assets/clients/simonds.png"/>
<span class="matrix-logo-fallback" style="display:none;">Simonds</span>
</div>
<div class="logo-capsule-tile">
<img alt="Toll Brothers" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" src="/assets/clients/toll_brothers.png"/>
<span class="matrix-logo-fallback" style="display:none;">Toll Brothers</span>
</div>
</div>
</div>
<div class="testimonial-slider-block">
<div class="slider-left-controls">
<button aria-label="Previous testimonial" class="arrow-btn" id="sliderPrev">←</button>
<button aria-label="Next testimonial" class="arrow-btn" id="sliderNext">→</button>
</div>
<div class="slider-center-body">
<p class="testimonial-quote-text" id="sliderQuote">Loading…</p>
<div class="testimonial-author-profile">
<div class="author-avatar-wrap"><img alt="" id="sliderAvatar" src=""/></div>
<div class="author-meta-info">
<p class="author-name" id="sliderName"></p>
<span class="author-role" id="sliderRole"></span>
</div>
</div>
</div>
<div class="slider-right-details">
<span class="timeline-stamp" id="sliderStamp"></span>
<span class="rating-stars-row" id="sliderStars"></span>
</div>
</div>
<!-- Slide data source (hidden — read by JS, not rendered) -->
<div style="display:none;">
<div class="testimonial-slide-data" data-avatar="https://i.pravatar.cc/100?img=12" data-name="Marcus Ferreira" data-quote="Realcognita turned around a full structural steel package for us in under two weeks, and it went straight to fabrication with zero RFIs. That almost never happens." data-rating="5" data-role="Project Director, Northbridge Build Co." data-stamp="Jun 2026"></div>
</div>
</div>
</section>
 FILTER BAR 
<section class="testi-filter-section">
<div class="container">
<div class="testi-filter-bar">
<button class="discipline-tag is-active" data-filter="all">All Feedback</button>
<button class="discipline-tag" data-filter="drafting">Drafting</button>
<button class="discipline-tag" data-filter="bim">BIM &amp; Coordination</button>
<button class="discipline-tag" data-filter="structural">Structural</button>
<button class="discipline-tag" data-filter="estimating">Estimating</button>
<button class="discipline-tag" data-filter="delivery">Delivery &amp; Support</button>
<span class="testi-filter-count" id="testiCount"></span>
</div>
</div>
</section>
 CLIENT FEEDBACK GRID 
<section class="testi-grid-section">
<div class="container">
<div class="testi-grid" id="testiGrid">
<div class="testimonial-card scroll-trigger-up" data-cat="drafting">
<span class="card-tag">Drafting</span>
<svg class="quote-mark" fill="currentColor" viewbox="0 0 24 24"><path d="M9.5 7C6.5 8.5 5 11 5 14.5c0 2.5 1.5 4 3.5 4S12 17 12 15c0-1.8-1.2-3-3-3-.3 0-.6 0-.8.1.3-2 1.7-3.5 3.5-4.2L9.5 7zm9 0c-3 1.5-4.5 4-4.5 7.5 0 2.5 1.5 4 3.5 4s3.5-1.5 3.5-3.5c0-1.8-1.2-3-3-3-.3 0-.6 0-.8.1.3-2 1.7-3.5 3.5-4.2L18.5 7z"></path></svg>
<div class="card-rating">★★★★★</div>
<p class="card-quote">Redlines came back cleaner than what we sent. Our own drafters started copying their annotation style.</p>
<div class="card-footer">
<div class="author-avatar-wrap"><img alt="Tomás Reyes" src="https://i.pravatar.cc/80?img=15"/></div>
<div class="author-meta-info">
<p class="author-name">Tomás Reyes</p>
<span class="author-role">Drafting Manager, Harlan &amp; Voss Development</span>
</div>
</div>
</div>
<div class="testimonial-card scroll-trigger-up" data-cat="bim">
<span class="card-tag">BIM</span>
<svg class="quote-mark" fill="currentColor" viewbox="0 0 24 24"><path d="M9.5 7C6.5 8.5 5 11 5 14.5c0 2.5 1.5 4 3.5 4S12 17 12 15c0-1.8-1.2-3-3-3-.3 0-.6 0-.8.1.3-2 1.7-3.5 3.5-4.2L9.5 7zm9 0c-3 1.5-4.5 4-4.5 7.5 0 2.5 1.5 4 3.5 4s3.5-1.5 3.5-3.5c0-1.8-1.2-3-3-3-.3 0-.6 0-.8.1.3-2 1.7-3.5 3.5-4.2L18.5 7z"></path></svg>
<div class="card-rating">★★★★★</div>
<p class="card-quote">The federated model they handed back to us was the first one all four trades could actually agree on. Genuinely impressive coordination.</p>
<div class="card-footer">
<div class="author-avatar-wrap"><img alt="Sana Malik" src="https://i.pravatar.cc/80?img=33"/></div>
<div class="author-meta-info">
<p class="author-name">Sana Malik</p>
<span class="author-role">BIM Lead, Arden &amp; Pike Engineering</span>
</div>
</div>
</div>
<div class="testimonial-card scroll-trigger-up" data-cat="structural">
<span class="card-tag">Structural</span>
<svg class="quote-mark" fill="currentColor" viewbox="0 0 24 24"><path d="M9.5 7C6.5 8.5 5 11 5 14.5c0 2.5 1.5 4 3.5 4S12 17 12 15c0-1.8-1.2-3-3-3-.3 0-.6 0-.8.1.3-2 1.7-3.5 3.5-4.2L9.5 7zm9 0c-3 1.5-4.5 4-4.5 7.5 0 2.5 1.5 4 3.5 4s3.5-1.5 3.5-3.5c0-1.8-1.2-3-3-3-.3 0-.6 0-.8.1.3-2 1.7-3.5 3.5-4.2L18.5 7z"></path></svg>
<div class="card-rating">★★★★★</div>
<p class="card-quote">Their connection details for our cold-formed steel package cut our fabricator's questions down to almost nothing.</p>
<div class="card-footer">
<div class="author-avatar-wrap"><img alt="Grace Muthoni" src="https://i.pravatar.cc/80?img=60"/></div>
<div class="author-meta-info">
<p class="author-name">Grace Muthoni</p>
<span class="author-role">Structural Engineer, Northbridge Build Co.</span>
</div>
</div>
</div>
<div class="testimonial-card scroll-trigger-up is-hidden" data-cat="bim" data-deferred="1">
<span class="card-tag">BIM</span>
<svg class="quote-mark" fill="currentColor" viewbox="0 0 24 24"><path d="M9.5 7C6.5 8.5 5 11 5 14.5c0 2.5 1.5 4 3.5 4S12 17 12 15c0-1.8-1.2-3-3-3-.3 0-.6 0-.8.1.3-2 1.7-3.5 3.5-4.2L9.5 7zm9 0c-3 1.5-4.5 4-4.5 7.5 0 2.5 1.5 4 3.5 4s3.5-1.5 3.5-3.5c0-1.8-1.2-3-3-3-.3 0-.6 0-.8.1.3-2 1.7-3.5 3.5-4.2L18.5 7z"></path></svg>
<div class="card-rating">★★★★★</div>
<p class="card-quote">We picked a single-source-of-truth strategy on their recommendation and it saved us at least three weeks of rework.</p>
<div class="card-footer">
<div class="author-avatar-wrap"><img alt="Ben Okoro" src="https://i.pravatar.cc/80?img=40"/></div>
<div class="author-meta-info">
<p class="author-name">Ben Okoro</p>
<span class="author-role">Coordination Lead, Arden &amp; Pike Engineering</span>
</div>
</div>
</div>
<div class="testimonial-card scroll-trigger-up is-hidden" data-cat="structural" data-deferred="1">
<span class="card-tag">Structural</span>
<svg class="quote-mark" fill="currentColor" viewbox="0 0 24 24"><path d="M9.5 7C6.5 8.5 5 11 5 14.5c0 2.5 1.5 4 3.5 4S12 17 12 15c0-1.8-1.2-3-3-3-.3 0-.6 0-.8.1.3-2 1.7-3.5 3.5-4.2L9.5 7zm9 0c-3 1.5-4.5 4-4.5 7.5 0 2.5 1.5 4 3.5 4s3.5-1.5 3.5-3.5c0-1.8-1.2-3-3-3-.3 0-.6 0-.8.1.3-2 1.7-3.5 3.5-4.2L18.5 7z"></path></svg>
<div class="card-rating">★★★★★</div>
<p class="card-quote">Wind-load detailing on our coastal build was updated to the new code before we even asked. That's the kind of partner we want.</p>
<div class="card-footer">
<div class="author-avatar-wrap"><img alt="Renata Silva" src="https://i.pravatar.cc/80?img=44"/></div>
<div class="author-meta-info">
<p class="author-name">Renata Silva</p>
<span class="author-role">Principal Engineer, Cascade Urban Partners</span>
</div>
</div>
</div>
<div class="testimonial-card scroll-trigger-up is-hidden" data-cat="estimating" data-deferred="1">
<span class="card-tag">Estimating</span>
<svg class="quote-mark" fill="currentColor" viewbox="0 0 24 24"><path d="M9.5 7C6.5 8.5 5 11 5 14.5c0 2.5 1.5 4 3.5 4S12 17 12 15c0-1.8-1.2-3-3-3-.3 0-.6 0-.8.1.3-2 1.7-3.5 3.5-4.2L9.5 7zm9 0c-3 1.5-4.5 4-4.5 7.5 0 2.5 1.5 4 3.5 4s3.5-1.5 3.5-3.5c0-1.8-1.2-3-3-3-.3 0-.6 0-.8.1.3-2 1.7-3.5 3.5-4.2L18.5 7z"></path></svg>
<div class="card-rating">★★★★★</div>
<p class="card-quote">Their long-lead steel scheduling advice saved our timeline when the market tightened up mid-project.</p>
<div class="card-footer">
<div class="author-avatar-wrap"><img alt="Marcus Ferreira" src="https://i.pravatar.cc/80?img=53"/></div>
<div class="author-meta-info">
<p class="author-name">Marcus Ferreira</p>
<span class="author-role">Project Director, Northbridge Build Co.</span>
</div>
</div>
</div>
</div>
<div class="testi-grid-empty" id="testiEmpty">No testimonials match this filter yet.</div>
<div class="testi-load-more">
<button class="btn-outline" id="testiLoadMore" style="padding:0.85rem 2rem;border-radius:999px;background:var(--color-surface);border:1px solid var(--color-border);color:var(--color-text);font-weight:700;font-size:0.85rem;">Load more feedbacks</button>
</div>
</div>
</section>
 STATS
    <section class="testi-stats scroll-trigger-up">
    <div class="container">
      <div class="testi-stats-grid">
        <div class="testi-stat"><span class="testi-stat-num">340+</span><span class="testi-stat-label">Client Reviews</span></div>
        <div class="testi-stat"><span class="testi-stat-num is-accent">4.9/5</span><span class="testi-stat-label">Average Rating</span></div>
        <div class="testi-stat"><span class="testi-stat-num">96%</span><span class="testi-stat-label">Repeat Clients</span></div>
        <div class="testi-stat"><span class="testi-stat-num">4</span><span class="testi-stat-label">Delivery Hubs</span></div>
      </div>
    </div>
  </section>  
 ===================== CTA BANNER ===================== 
<section class="inner-section inner-cta reveal-section">
<div class="container">
<div class="inner-cta-box reveal-item">
<h2>Let's Start With A Conversation<br/><span class="accent">Speak With a Realcognita Expert Today! </span></h2>
<p>Looking for a smarter way to scale your building business? Let’s talk about how Realcognita can support your team.</p>
<button class="btn-contact" id="contactTrigger2">
          Book a Strategy Call here! 
          <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</button>
</div>
</div>
</section>






`;

const scripts = [
  { src: "/js/pages/testimonials.js" },
  { id: "inline-testimonials-0", code: `
    // Wire up the in-page CTA triggers to the shared modal
    document.getElementById('contactTrigger2')?.addEventListener('click', () => {
      if (window.openContactModal) window.openContactModal();
    });
  ` },
];

export default function Page() {
  return <PageShell html={html} scripts={scripts} />;
}

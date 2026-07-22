import PageShell from "@/src/components/PageShell";

export const metadata = {
  title: 'Realcognita: Your Reliable Building and Construction Consultants',
  description: "Meet Realcognita's construction consultants, structural engineers, and architectural designers delivering trusted support for builders.",
};

const html = `
 Nav + Footer injected by components.js 
 MEET THE PEOPLE 
<br/><br/>
<section aria-labelledby="our-team-heading" class="team-section">
<div aria-hidden="true" class="grid-backdrop"></div>
<div class="eyebrow-wrap">
<span class="eyebrow"><i class="dot"></i>Meet the people</span>
</div>
<h2 class="section-title" id="our-team-heading">Our Construction Consultants Team </h2>
<p class="section-intro">
      Real projects need real, named expertise behind them. Here's who reviews and delivers the work at Realcognita.<br/>
      Structural documentation is reviewed by our structural detailing lead and, where applicable, coordinated with your project's licensed engineer of record. Architectural drafting is reviewed against project standards before delivery.
    </p>
<div class="disciplines-container">
<span class="eyebrow"><i class="dot"></i>Disciplines Represented</span>
<div aria-label="Filter team by discipline" class="disciplines-badges" id="disciplineFilters" role="group">
<button class="discipline-tag is-active" data-discipline="all" type="button">All Disciplines</button>
<button class="discipline-tag" data-discipline="structural" type="button">Structural Engineering and Steel Detailing</button>
<button class="discipline-tag" data-discipline="architectural" type="button">Architectural Design and Drafting</button>
<button class="discipline-tag" data-discipline="bim" type="button">BIM Modelling and Coordination</button>
<button class="discipline-tag" data-discipline="estimating" type="button">Construction Estimating</button>
</div>
</div><br/><br/>
<!-- Featured photo grid -->
<div class="team-grid" id="teamGrid"></div>
<div class="team-list-header">
<span class="eyebrow"><i class="dot"></i>Leadership and Discipline Leads</span>
</div>
<div class="roster" id="roster"></div>
<p class="discipline-empty" hidden="" id="disciplineEmpty">No team members match this discipline yet.</p>
</section>
 ===================== WHO REVIEWS YOUR WORK ===================== 
<section class="who-we-work-with-section reveal-section" id="whoWeWorkWith">
<div class="container">
<div class="wwww-inner">
<h2 class="editorial-headline">Who Reviews Your Work</h2>
<ul class="wwww-list">
<li class="wwww-item reveal-item">
<span aria-hidden="true" class="wwww-icon">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
</span>
<p>Structural documentation is reviewed by our structural detailing lead and, where applicable, coordinated with your project's licensed engineer of record.</p>
</li>
<li class="wwww-item reveal-item">
<span aria-hidden="true" class="wwww-icon">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
</span>
<p>Architectural drafting is reviewed against project standards before delivery. </p>
</li>
</ul>
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
<span>Who reviews structural and architectural drawings before delivery?</span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>Structural documentation is reviewed by Realcognita’s structural detailing lead and coordinated with the project’s licensed engineer of record where required. Architectural drafting is checked against the agreed project standards, scope, and documentation requirements before delivery. </p>
</div>
</div>
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>Does Realcognita employ licensed engineers, or support licensed engineers of record? </span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p data-i18n-au="We support residential and commercial projects across Australia and the United States, tailored to local council and building code requirements." data-i18n-us="We support residential and commercial projects across the United States and Australia.">Realcognita provides construction support services that may include structural engineering support, steel detailing, architectural drafting, BIM coordination, and estimating. Any statement about individual licensure should be verified before publishing, and project responsibility should remain clearly aligned with the appropriate licensed engineer of record.</p>
</div>
</div>
<div class="faq-item reveal-item">
<button aria-expanded="false" class="faq-question">
<span>What information should clients provide before work begins? </span>
<svg class="faq-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<div class="faq-answer">
<p>Clients should provide the latest drawings, project scope, design criteria, relevant standards, deadlines, and any coordination requirements. Clear inputs help the team review the work efficiently and deliver documentation that fits the project’s needs. </p>
</div>
</div>
</div>
</div>
</section>
 CTA 
<section class="inner-section inner-cta reveal-section">
<div class="container">
<div class="inner-cta-box reveal-item">
<h2>Let's Start With A Conversation<br/><span class="accent">Talk to our Team of Building Experts!</span></h2>
<p>Looking for a smarter way to scale your building business? Let’s talk about how Realcognita can support your team.</p>
<button class="btn-contact" id="contactTrigger2">
          Talk To Us Today
          <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</button>
</div>
</div>
</section>






`;

const scripts = [
  { src: "/js/pages/our-team.js" },
  { id: "inline-our-team-0", code: `
    // Wire up the in-page CTA triggers to the shared modal
    document.getElementById('contactTrigger2')?.addEventListener('click', () => {
      if (window.openContactModal) window.openContactModal();
    });
  ` },
];

export default function Page() {
  return <PageShell html={html} scripts={scripts} />;
}

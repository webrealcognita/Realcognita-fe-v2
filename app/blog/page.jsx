import PageShell from "@/src/components/PageShell";

export const metadata = {
  title: 'Realcognita Blog AEC & Commercial Construction News',
  description: 'Read Realcognita blog insights on AEC industry news, commercial construction trends, technology, safety, and project delivery best practices.',
};

const html = `
 Nav + Footer injected by components.js 
 BLOG 
<section class="hero-news">
<div class="container">
<div class="hero-news-grid">
<div class="reveal in-view">
<div class="eyebrow"><span class="dot"></span>Resources &amp; Insights</div>
<h1>Realcognita Blog: AEC Industry News </h1>
<p class="lede">
            Engineering thought leadership on drafting standards, BIM coordination and regional regulation, written for builders, contractors and developers who need to move fast without cutting corners. <br/><br/>
            Practical insights on construction documentation, structural detailing, BIM, and estimating written by the people who do the work. 
          </p>
<!-- <div class="hero-stats">
            <div class="hero-stat"><b>100+</b><span>Articles Published</span></div>
            <div class="hero-stat"><b>6</b><span>Practice Areas</span></div>
            <div class="hero-stat"><b>2</b><span>Regions Covered</span></div>
          </div> -->
</div>
<div class="search-panel reveal in-view">
<h3>Browse by Topic</h3>
<p>Find guidance by keyword.</p>
<div class="search-input-wrap">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewbox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m21 21-4.35-4.35"></path></svg>
<input id="articleSearch" placeholder="Try “BIM clash detection”…" type="text"/>
</div>
<div class="search-tags">
<button class="search-tag-chip" data-query="steel">Steel Detailing</button>
<button class="search-tag-chip" data-query="BIM">BIM and Coordination</button>
<button class="search-tag-chip" data-query="estimating">Estimating and Scheduling</button>
<button class="search-tag-chip" data-query="3D">3D Rendering</button>
<button class="search-tag-chip" data-query="residential">Residential vs. Commercial Construction</button>
<button class="search-tag-chip" data-query="aec">AEC technology and Safety</button>
</div>
</div>
</div>
</div>
</section>
 FEATURED BLOG 
<section class="featured-wrap">
<div class="container">
<a class="featured-card reveal in-view" href="#">
<div class="featured-media">
<img alt="Structural steel detailing on site" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&amp;q=80"/>
<span class="news-tag">BIM &amp; Coordination</span>
</div>
<div class="featured-body">
<div class="featured-meta"><span class="news-source">Realcognita</span><span>·</span><span>July 17, 2026</span><span>·</span><span>7 min read</span></div>
<h2>Why clash detection fails after handover and how model ownership fixes it</h2>
<p>Most clash reports look clean at issue-for-construction. The clashes that actually cost money show up after handover, once trades start working from federated models nobody owns anymore. Here's the coordination workflow we use to keep one accountable model of record through to close-out.</p>
<span class="read-more-link">Read the full article <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewbox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span>
</div>
</a>
</div>
</section>
 LIST OF ARTICLES 
<section class="articles-section">
<div class="container">
<div class="eyebrow"><span class="dot"></span>Recent Articles</div>
<div class="filter-bar reveal in-view">
<button class="filter-chip active" data-filter="all">All Articles</button>
<button class="filter-chip" data-filter="drafting">Drafting &amp; Documentation</button>
<button class="filter-chip" data-filter="bim">BIM &amp; Coordination</button>
<button class="filter-chip" data-filter="estimating">Estimating &amp; Scheduling</button>
<button class="filter-chip" data-filter="structural">Structural Engineering</button>
<button class="filter-chip" data-filter="regulations">Regulations &amp; Compliance</button>
<button class="filter-chip" data-filter="company">Company News</button>
<span class="filter-count" id="filterCount"></span>
</div>
<div class="articles-grid" id="articlesGrid">
<a class="article-card reveal" data-cat="drafting" data-title="Redlines that read: five conventions we default to across teams" href="#">
<div class="article-thumb">
<img alt="Architectural drafting drawings" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&amp;q=80"/>
<span class="news-tag">Drafting</span>
</div>
<div class="article-body">
<div class="article-meta"><span class="news-source">Realcognita</span><span>·</span><span>Jul 2, 2026</span></div>
<h3>Redlines that read: five conventions we default to across teams</h3>
<p>A markup a drafter in another timezone can act on without a call. Small formatting habits that cut revision cycles by days, not hours.</p>
<span class="read-more-link">Read more <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewbox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span>
</div>
</a>
<a class="article-card reveal" data-cat="bim" data-title="Level of Development, honestly explained for people who aren't modelers" href="#">
<div class="article-thumb">
<img alt="BIM model on screen" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&amp;q=80"/>
<span class="news-tag">BIM</span>
</div>
<div class="article-body">
<div class="article-meta"><span class="news-source">Realcognita</span><span>·</span><span>Jun 28, 2026</span></div>
<h3>Level of Development, honestly explained for people who aren't modelers</h3>
<p>LOD 300 versus LOD 350 sounds academic until it shows up as a change order. A plain-language guide for owners and GCs.</p>
<span class="read-more-link">Read more <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewbox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span>
</div>
</a>
<a class="article-card reveal" data-cat="estimating" data-title="Escalation clauses: what to price in before steel goes back out to bid" href="#">
<div class="article-thumb">
<img alt="Construction estimating spreadsheet and blueprints" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&amp;q=80"/>
<span class="news-tag">Estimating</span>
</div>
<div class="article-body">
<div class="article-meta"><span class="news-source">Realcognita</span><span>·</span><span>Jun 21, 2026</span></div>
<h3>Escalation clauses: what to price in before steel goes back out to bid</h3>
<p>Material volatility isn't new, but the clauses protecting against it are inconsistent between GCs. A checklist for estimators before submission.</p>
<span class="read-more-link">Read more <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewbox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span>
</div>
</a>
<a class="article-card reveal" data-cat="structural" data-title="Connection design for cold-formed steel: three details worth standardizing" href="#">
<div class="article-thumb">
<img alt="Steel structural framing" src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=700&amp;q=80"/>
<span class="news-tag">Structural</span>
</div>
<div class="article-body">
<div class="article-meta"><span class="news-source">Realcognita</span><span>·</span><span>Jun 14, 2026</span></div>
<h3>Connection design for cold-formed steel: three details worth standardizing</h3>
<p>Fabricators re-detail the same connection type project after project. Standardizing three of them shaved a week off shop drawing turnaround.</p>
<span class="read-more-link">Read more <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewbox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span>
</div>
</a>
<a class="article-card reveal" data-cat="regulations" data-title="What changed in the 2026 amendments to residential wind-load provisions" href="#">
<div class="article-thumb">
<img alt="Residential home under construction" src="https://images.unsplash.com/photo-1541976590-713941681591?w=700&amp;q=80"/>
<span class="news-tag">Regulations</span>
</div>
<div class="article-body">
<div class="article-meta"><span class="news-source">Realcognita</span><span>·</span><span>Jun 9, 2026</span></div>
<h3>What changed in the 2026 amendments to residential wind-load provisions</h3>
<p>A regional code update that affects roof-to-wall connections in coastal zones. What drafters need to update in standard details now.</p>
<span class="read-more-link">Read more <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewbox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span>
</div>
</a>
<a class="article-card reveal" data-cat="company" data-title="Realcognita opens a fourth delivery hub in Singapore" href="#">
<div class="article-thumb">
<img alt="Singapore skyline construction" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&amp;q=80"/>
<span class="news-tag">Company</span>
</div>
<div class="article-body">
<div class="article-meta"><span class="news-source">Realcognita</span><span>·</span><span>Jun 3, 2026</span></div>
<h3>Realcognita opens a fourth delivery hub in Singapore</h3>
<p>A new studio adds overnight coverage for Southeast Asian and Australian clients, shortening turnaround on urgent drafting requests.</p>
<span class="read-more-link">Read more <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewbox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span>
</div>
</a>
<a class="article-card reveal is-hidden" data-cat="bim" data-title="Federated models vs. single source of truth: picking a coordination strategy" href="#">
<div class="article-thumb">
<img alt="3D model coordination review" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&amp;q=80"/>
<span class="news-tag">BIM</span>
</div>
<div class="article-body">
<div class="article-meta"><span class="news-source">Realcognita</span><span>·</span><span>May 27, 2026</span></div>
<h3>Federated models vs. single source of truth: picking a coordination strategy</h3>
<p>Neither approach is wrong, but mixing them mid-project is where teams lose weeks. How to decide up front and stick with it.</p>
<span class="read-more-link">Read more <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewbox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span>
</div>
</a>
<a class="article-card reveal is-hidden" data-cat="drafting" data-title="Facade drafting for prefab panels: tolerances that actually matter" href="#">
<div class="article-thumb">
<img alt="Facade panel installation" src="https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=700&amp;q=80"/>
<span class="news-tag">Drafting</span>
</div>
<div class="article-body">
<div class="article-meta"><span class="news-source">Realcognita</span><span>·</span><span>May 19, 2026</span></div>
<h3>Facade drafting for prefab panels: tolerances that actually matter</h3>
<p>Most panel rejections trace back to two dimensions nobody double-checks. A short list to add to your QA pass before issue.</p>
<span class="read-more-link">Read more <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewbox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span>
</div>
</a>
<a class="article-card reveal is-hidden" data-cat="estimating" data-title="Scheduling around long-lead structural steel in 2026" href="#">
<div class="article-thumb">
<img alt="Construction site scheduling and cranes" src="https://images.unsplash.com/photo-1541959833400-049d37f98ccd?w=700&amp;q=80"/>
<span class="news-tag">Estimating</span>
</div>
<div class="article-body">
<div class="article-meta"><span class="news-source">Realcognita</span><span>·</span><span>May 12, 2026</span></div>
<h3>Scheduling around long-lead structural steel in 2026</h3>
<p>Lead times have shortened since 2023, but not evenly by region. What to build into your baseline schedule before you lock a start date.</p>
<span class="read-more-link">Read more <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewbox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span>
</div>
</a>
</div>
<div class="no-results" id="noResults">
<svg fill="none" stroke="currentColor" stroke-width="1.5" viewbox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m21 21-4.35-4.35"></path></svg>
<p>No articles match your search. Try another keyword or clear the filter.</p>
</div>
<div class="load-more-wrap">
<button class="btn-outline" id="loadMoreBtn">Load more articles</button>
</div>
</div>
</section>
 ===================== CTA BANNER ===================== 
<section class="inner-section inner-cta reveal-section">
<div class="container">
<div class="inner-cta-box reveal-item">
<h2>Let's Start With A Conversation<br/><span class="accent"></span></h2>
<p>Looking for a smarter way to scale your building business? Let’s talk about how Realcognita can support your team.</p>
<button class="btn-contact" id="contactTrigger2">
          Subscribe today for Realcognita Updates! 
          <svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</button>
</div>
</div>
</section>






`;

const scripts = [
  { src: "/js/pages/blog.js" },
  { id: "inline-blog-0", code: `
    // Wire up the in-page CTA triggers to the shared modal
    document.getElementById('contactTrigger2')?.addEventListener('click', () => {
      if (window.openContactModal) window.openContactModal();
    });
  ` },
];

export default function Page() {
  return <PageShell html={html} scripts={scripts} />;
}

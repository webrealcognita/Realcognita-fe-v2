(function () {
  "use strict";

  var root = document.documentElement;

  /* --------------------------------------------------------------------
     Only start hiding/animating anything once this script is confirmed
     running. CSS defaults everything to visible; this class is what
     switches on the reveal/entrance effects. If anything below throws,
     the page still looks correct — it just won't animate.
     -------------------------------------------------------------------- */
  root.classList.add('js-ready');

  try {

    /* ---------- THEME TOGGLE ----------
       Intentionally NOT handled here. js/theme.js (loaded separately,
       site-wide) already owns #themeToggleBtn + localStorage('rc-theme').
       Having a second handler in this file was the bug: both listeners
       fired on every click, so the theme flipped twice (light -> dark ->
       light) and looked like the button did nothing. */

    /* ---------- HEADER SCROLL STATE + SCROLL-TO-TOP ---------- */
    var header = document.getElementById('siteHeader');
    var scrollBtn = document.getElementById('scrollTopBtn');

    function onScroll() {
      if (header) {
        if (window.scrollY > 20) header.classList.add('is-scrolled');
        else header.classList.remove('is-scrolled');
      }
      if (scrollBtn) {
        if (window.scrollY > 500) scrollBtn.classList.add('show');
        else scrollBtn.classList.remove('show');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (scrollBtn) {
      scrollBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    /* ---------- SCROLL REVEAL (hero / featured / filter bar / newsletter) ---------- */
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    }

    /* ---------- ARTICLE CARDS: filtering, search, load more ---------- */
    var cards = Array.prototype.slice.call(document.querySelectorAll('.article-card'));
    var chips = document.querySelectorAll('.filter-chip');
    var searchInput = document.getElementById('articleSearch');
    var noResults = document.getElementById('noResults');
    var filterCount = document.getElementById('filterCount');
    var loadMoreBtn = document.getElementById('loadMoreBtn');
    var currentFilter = 'all';
    var extraShown = false;

    /* Topic phrases the search box should understand, mapped to the words
       actually likely to appear in a card's title/body/tag. Typing any of
       the "match" phrases (or a leading fragment of one, so it still works
       while the user is mid-type) filters by the matching "keywords" set
       instead of doing a raw literal-text search. Anything typed that
       isn't recognized here just falls back to a normal substring search. */
    var TOPIC_SYNONYMS = [
      { match: ['steel detailing', 'steel'], keywords: ['steel'] },
      { match: ['bim and coordination', 'bim & coordination', 'bim'], keywords: ['bim', 'coordination', 'clash', 'model'] },
      { match: ['estimating and scheduling', 'estimating & scheduling', 'estimating', 'scheduling'], keywords: ['estimat', 'schedul'] },
      { match: ['3d rendering', '3d', 'rendering'], keywords: ['3d', 'render'] },
      { match: ['residential vs. commercial construction', 'residential vs commercial construction', 'residential vs. commercial', 'residential vs commercial', 'residential', 'commercial'], keywords: ['residential', 'commercial'] }
    ];

    // Returns the keyword set for a recognized topic phrase, or null if the
    // typed query doesn't match (or partially match) any known topic.
    function resolveTopicKeywords(query) {
      for (var i = 0; i < TOPIC_SYNONYMS.length; i++) {
        var phrases = TOPIC_SYNONYMS[i].match;
        for (var j = 0; j < phrases.length; j++) {
          if (phrases[j].indexOf(query) !== -1 || query.indexOf(phrases[j]) !== -1) {
            return TOPIC_SYNONYMS[i].keywords;
          }
        }
      }
      return null;
    }

    // Mark the last three cards as "deferred" — only revealed via Load more.
    cards.slice(-3).forEach(function (c) { c.dataset.deferred = '1'; });

    // Give every card a light entrance animation, staggered slightly.
    if ('IntersectionObserver' in window) {
      var cardIo = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var idx = cards.indexOf(el);
            setTimeout(function () { el.classList.add('is-visible'); }, (idx % 6) * 60);
            cardIo.unobserve(el);
          }
        });
      }, { threshold: 0.1 });
      cards.forEach(function (c) {
        c.classList.add('js-enter');
        cardIo.observe(c);
      });
    }

    function applyFilters() {
      var query = (searchInput ? searchInput.value : '').trim().toLowerCase();
      var topicKeywords = query ? resolveTopicKeywords(query) : null;
      var visibleCount = 0;

      cards.forEach(function (card) {
        var matchesCat = currentFilter === 'all' || card.dataset.cat === currentFilter;

        var bodyText = card.querySelector('p') ? card.querySelector('p').textContent : '';
        var tagText = card.querySelector('.news-tag') ? card.querySelector('.news-tag').textContent : '';
        var haystack = (
          (card.dataset.title || '') + ' ' +
          bodyText + ' ' +
          tagText + ' ' +
          (card.dataset.cat || '')
        ).toLowerCase();

        var matchesSearch;
        if (query === '') {
          matchesSearch = true;
        } else if (topicKeywords) {
          // Recognized topic (e.g. "BIM and coordination") — match if any
          // of its related keywords appear anywhere in the card.
          matchesSearch = topicKeywords.some(function (kw) { return haystack.indexOf(kw) !== -1; });
        } else {
          // Anything else typed just does a plain substring search.
          matchesSearch = haystack.indexOf(query) !== -1;
        }

        var isDeferredAndNotShown = card.dataset.deferred === '1' && !extraShown;
        var shouldShow = matchesCat && matchesSearch && !isDeferredAndNotShown;

        if (shouldShow) {
          card.classList.remove('is-hidden');
          card.classList.add('is-visible');
          visibleCount++;
        } else {
          card.classList.add('is-hidden');
        }
      });

      if (noResults) noResults.classList.toggle('is-visible', visibleCount === 0);
      if (filterCount) filterCount.textContent = visibleCount + (visibleCount === 1 ? ' article' : ' articles');
      if (loadMoreBtn) {
        loadMoreBtn.style.display = (extraShown || query !== '' || currentFilter !== 'all') ? 'none' : 'inline-flex';
      }
    }

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        currentFilter = chip.dataset.filter;
        applyFilters();
      });
    });

    if (searchInput) searchInput.addEventListener('input', applyFilters);

    document.querySelectorAll('.search-tag-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        if (!searchInput) return;
        searchInput.value = chip.dataset.query;
        searchInput.focus();
        applyFilters();
      });
    });

    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', function () {
        extraShown = true;
        applyFilters();
        loadMoreBtn.setAttribute('disabled', 'true');
        loadMoreBtn.textContent = 'All articles loaded';
      });
    }

    applyFilters();

    /* ---------- "READ MORE" -> GOOGLE SEARCH BY TITLE ---------- */
    var linkCards = document.querySelectorAll('.article-card, .featured-card');
    linkCards.forEach(function (card) {
      var title = card.dataset.title;
      if (!title) {
        var heading = card.querySelector('h2, h3');
        title = heading ? heading.textContent.trim() : '';
      }
      if (!title) return;

      var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(title);
      card.setAttribute('href', searchUrl);
      card.setAttribute('target', '_blank');
      card.setAttribute('rel', 'noopener noreferrer');
    });

    /* ---------- NEWSLETTER FORM ---------- */
    var form = document.getElementById('newsletterForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        form.classList.add('is-success');
      });
    }

  } catch (err) {
    // Defensive fallback: never let a script error leave content invisible.
    document.querySelectorAll('.reveal, .article-card').forEach(function (el) {
      el.classList.add('is-visible');
      el.classList.remove('is-hidden');
    });
    if (window.console && console.error) console.error('news-articles.js error:', err);
  }
})();
(function () {
  "use strict";

  var root = document.documentElement;

  try {

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

    /* ---------- SCROLL REVEAL ENGINE ----------
       Watches every .scroll-trigger-left / .scroll-trigger-right /
       .scroll-trigger-up element and adds .is-revealed once in view. */
    var revealTargets = document.querySelectorAll(
      '.scroll-trigger-left, .scroll-trigger-right, .scroll-trigger-up'
    );

    if ('IntersectionObserver' in window && revealTargets.length) {
      var revealIo = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            revealIo.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealTargets.forEach(function (el) { revealIo.observe(el); });
    } else {
      revealTargets.forEach(function (el) { el.classList.add('is-revealed'); });
    }

    /* ---------- FEATURED TESTIMONIAL SLIDER ---------- */
    var slides = Array.prototype.slice.call(document.querySelectorAll('.testimonial-slide-data'));
    var quoteEl = document.getElementById('sliderQuote');
    var nameEl = document.getElementById('sliderName');
    var roleEl = document.getElementById('sliderRole');
    var avatarEl = document.getElementById('sliderAvatar');
    var stampEl = document.getElementById('sliderStamp');
    var starsEl = document.getElementById('sliderStars');
    var prevBtn = document.getElementById('sliderPrev');
    var nextBtn = document.getElementById('sliderNext');
    var sliderIndex = 0;
    var sliderTimer = null;

    function renderSlide(i) {
      if (!slides.length || !quoteEl) return;
      var s = slides[i];
      quoteEl.style.opacity = 0;
      setTimeout(function () {
        quoteEl.textContent = '“' + s.dataset.quote + '”';
        if (nameEl) nameEl.textContent = s.dataset.name;
        if (roleEl) roleEl.textContent = s.dataset.role;
        if (avatarEl) avatarEl.src = s.dataset.avatar;
        if (stampEl) stampEl.textContent = s.dataset.stamp;
        if (starsEl) starsEl.textContent = '★★★★★'.slice(0, parseInt(s.dataset.rating || '5', 10));
        quoteEl.style.opacity = 1;
      }, 200);
    }

    function goToSlide(i) {
      sliderIndex = (i + slides.length) % slides.length;
      renderSlide(sliderIndex);
    }

    function resetAutoplay() {
      if (sliderTimer) clearInterval(sliderTimer);
      sliderTimer = setInterval(function () { goToSlide(sliderIndex + 1); }, 7000);
    }

    if (slides.length) {
      renderSlide(0);
      resetAutoplay();
      if (prevBtn) prevBtn.addEventListener('click', function () { goToSlide(sliderIndex - 1); resetAutoplay(); });
      if (nextBtn) nextBtn.addEventListener('click', function () { goToSlide(sliderIndex + 1); resetAutoplay(); });
    }

    /* ---------- FILTER TAGS + GRID ---------- */
    var tags = document.querySelectorAll('.testi-filter-bar .discipline-tag');
    var cards = Array.prototype.slice.call(document.querySelectorAll('.testimonial-card'));
    var emptyState = document.getElementById('testiEmpty');
    var countEl = document.getElementById('testiCount');
    var loadMoreBtn = document.getElementById('testiLoadMore');
    var currentFilter = 'all';
    var extraShown = false;

    cards.slice(-3).forEach(function (c) { c.dataset.deferred = '1'; });

    function applyFilter() {
      var visible = 0;
      cards.forEach(function (card) {
        var matches = currentFilter === 'all' || card.dataset.cat === currentFilter;
        var deferredHidden = card.dataset.deferred === '1' && !extraShown;
        if (matches && !deferredHidden) {
          card.classList.remove('is-hidden');
          visible++;
        } else {
          card.classList.add('is-hidden');
        }
      });
      if (emptyState) emptyState.classList.toggle('show', visible === 0);
      if (countEl) countEl.textContent = visible + (visible === 1 ? ' testimonial' : ' testimonials');
      if (loadMoreBtn) loadMoreBtn.style.display = (extraShown || currentFilter !== 'all') ? 'none' : 'inline-flex';
    }

    tags.forEach(function (tag) {
      tag.addEventListener('click', function () {
        tags.forEach(function (t) { t.classList.remove('is-active'); });
        tag.classList.add('is-active');
        currentFilter = tag.dataset.filter || 'all';
        applyFilter();
      });
    });

    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', function () {
        extraShown = true;
        applyFilter();
        loadMoreBtn.setAttribute('disabled', 'true');
        loadMoreBtn.textContent = 'All testimonials loaded';
      });
    }

    applyFilter();

    /* ---------- FOOTER NEWSLETTER FORM ---------- */
    var form = document.getElementById('footerNewsletterForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        form.classList.add('is-success');
      });
    }

  } catch (err) {
    document.querySelectorAll(
      '.scroll-trigger-left, .scroll-trigger-right, .scroll-trigger-up, .testimonial-card'
    ).forEach(function (el) {
      el.classList.add('is-revealed');
      el.classList.remove('is-hidden');
    });
    if (window.console && console.error) console.error('testimonials.js error:', err);
  }
})();
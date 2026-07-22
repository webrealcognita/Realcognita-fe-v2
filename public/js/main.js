/* --- Next.js compatibility shim ---------------------------------------
   By the time next/script executes this file, the browser's real
   "DOMContentLoaded" event has already fired (it fires once, right after
   the initial HTML parse — long before React hydrates and injects this
   script). Any `document.addEventListener("DOMContentLoaded", fn)` call
   below would register a listener for an event that will never fire again,
   so `fn` would silently never run. This shim makes those calls run `fn`
   immediately (async) instead, restoring the original static-site timing. */
if (document.readyState !== "loading") {
  var __rcOrigAddEventListener = document.addEventListener.bind(document);
  document.addEventListener = function (type, listener, options) {
    if (type === "DOMContentLoaded") {
      setTimeout(listener, 0);
      return;
    }
    return __rcOrigAddEventListener(type, listener, options);
  };
}
if (document.readyState === "complete") {
  var __rcOrigWinAddEventListener = window.addEventListener.bind(window);
  window.addEventListener = function (type, listener, options) {
    if (type === "load") {
      setTimeout(listener, 0);
      return;
    }
    return __rcOrigWinAddEventListener(type, listener, options);
  };
}
/* ------------------------------------------------------------------------ */

/**
 * Realcognita – Main JavaScript
 * ============================================================
 * Sections:
 * 1.  Particle Canvas (Ambient background)
 * 2.  Preloader
 * 3.  Header (scroll hide/show)
 * 4.  Mobile Drawer & Accordion
 * 5.  Desktop Dropdown keyboard support
 * 6.  Contact Modal
 * 7.  Hero Video Playlist
 * 8.  Features Slider
 * 9.  News Carousel
 * 10. CTA Form
 * 11. Region Dropdown
 * 12. Phone Picker
 * 13. Service Selector
 * 14. Scroll-to-Top Button
 * 15. Scroll Reveal (IntersectionObserver)
 * 16. Ticket Client (Client Showcase)
 * 17. SCROLL DIRECTION REVEAL ENGINE
 * 18. SOFTWARE WE WORK IN
 * 19. WHY BUILDERS CHOOSE REALCOGNITA
 * 20. AT REALCOGNITA (WHO WE ARE HTML)
 * ============================================================
 */

/* ------------------------------------------------------------------
   UTILITY
------------------------------------------------------------------ */
function qs(selector, parent = document) { return parent.querySelector(selector); }
function qsa(selector, parent = document) { return Array.from(parent.querySelectorAll(selector)); }

/* ------------------------------------------------------------------
   SMOOTH HTML SCROLLING
------------------------------------------------------------------ */

(function initGlobalSmoothScroll() {
  // Selects all anchor tags containing internal section reference hashtag flags
  const scrollAnchors = document.querySelectorAll('a[href^="#"]');

  scrollAnchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetPathID = this.getAttribute('href');
      
      // Stop function processing if it's an empty dead tracker hashtag string link
      if (targetPathID === '#') return;

      const targetElementNode = document.querySelector(targetPathID);

      if (targetElementNode) {
        e.preventDefault(); // Prevents instant layout viewport snapping
        
        // Dynamic alignment viewport parameters layout bounding offset options
        targetElementNode.scrollIntoView({
          behavior: 'smooth',
          block: 'start' // Automatically aligns the targeted section to the top edge line of your screen
        });
        
        // Updates URL location tags safely without causing browser window jumps
        if (history.pushState) {
          history.pushState(null, null, targetPathID);
        } else {
          location.hash = targetPathID;
        }
      }
    });
  });
})();


/* ------------------------------------------------------------------
   1. PARTICLE CANVAS
------------------------------------------------------------------ */
(function initParticles() {
  const canvas = document.querySelector('#particleCanvas'); // Updated from qs() to standard
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  const MAX_DISTANCE = 140; // Slightly increased for a better "network" look
  const pointer = { x: null, y: null, radius: 180 };

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    buildParticles();
  }

  class Particle {
    constructor() {
      this.init();
    }

    init() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.4; // Slightly smoother speed
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r = Math.random() * 1.8 + 0.5;
    }

    update() {
      // Movement
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off walls
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

      // Interaction with mouse
      if (pointer.x !== null) {
        const dx = this.x - pointer.x;
        const dy = this.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance < pointer.radius) {
          const force = (pointer.radius - distance) / pointer.radius;
          this.x += dx * 0.02 * force;
          this.y += dy * 0.02 * force;
        }
      }
    }

    draw() {
      ctx.fillStyle = 'rgba(55, 65, 81, 0.4)'; // Darker, more visible
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function buildParticles() {
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 120);
    particles = Array.from({ length: count }, () => new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < MAX_DISTANCE) {
          const alpha = (1 - dist / MAX_DISTANCE) * 0.2; // Sharper lines
          ctx.strokeStyle = `rgba(55, 65, 81, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(loop);
  }

  window.addEventListener('mousemove', e => { pointer.x = e.clientX; pointer.y = e.clientY; });
  window.addEventListener('mouseleave', () => { pointer.x = null; pointer.y = null; });
  window.addEventListener('resize', resize);

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    resize();
    loop();
  }
})();

/* ------------------------------------------------------------------
   2. PRELOADER
------------------------------------------------------------------ */
(function initPreloader() {
  const loader = qs('#preloader');
  if (!loader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('is-hidden');
      loader.addEventListener('transitionend', () => loader.remove(), { once: true });
    }, 800);
  });
})();



/* ------------------------------------------------------------------
   3. HEADER – SCROLL HIDE / SHOW
------------------------------------------------------------------ */
function initSmartHeader() {
  const header = document.querySelector('#siteHeader');
  if (!header) return;

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // If user scrolls down past the top frame context threshold (100px)
    if (currentScrollY > 100) {
      if (currentScrollY > lastScrollY) {
        // Scrolling Down: Hide navigation completely above screen space limits
        header.classList.add('nav-hidden');
        // Apply the solid backdrop class wrapper so it stays opaque when sliding back in
        header.classList.add('scrolled-solid');
      } else {
        // Scrolling Up: Drop hidden tag instantly to reveal navigation gracefully
        header.classList.remove('nav-hidden');
      }
    } else {
      // Clear out state overrides completely if back at the total top edge line boundary limits
      header.classList.remove('nav-hidden');
      header.classList.remove('scrolled-solid');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
}

/* ------------------------------------------------------------------
   4. MOBILE DRAWER, ACCORDION & HEADER TOGGLE
------------------------------------------------------------------ */
/**
 * Realcognita – Master Unified Navigation Controller System
 * Combines Premium Desktop Hover Intents, Orascom Tab Switchers, and Mobile Drawer Systems.
 */

document.addEventListener("DOMContentLoaded", () => {
  // NOTE: initDesktopMegaMenu(), initOrascomTabs() and initScrollRevealEngine()
  // used to also be called from here, but they're already called once from
  // the single canonical DOMContentLoaded block further down in this file.
  // Calling them multiple times registered duplicate mouseenter/mouseleave
  // listeners on the nav (each with its own independent close-timer), which
  // is what caused the "Our Services -> Commercial Sector" hover to glitch
  // and randomly close mid-hover.
  initSmartHeader();
});

/* ==========================================================================
   1. PREMIUM DESKTOP HOVER INTENT SYSTEM
   ========================================================================== */
  function initDesktopMegaMenu() {
  // 1. Target ALL nav items to manage the entire navbar row globally
  const allNavItems = document.querySelectorAll(".nav-item");
  let globalCloseTimeout = null;
  const closeAllMenus = () => {
    clearTimeout(globalCloseTimeout);
    allNavItems.forEach(item => {
      item.classList.remove("active");
      const btn = item.querySelector(".nav-link");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  };

  allNavItems.forEach(item => {
    const button = item.querySelector(".nav-link");
    const megaMenu = item.querySelector(".premium-mega-menu");

    if (!button) return;
    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
    button.style.cursor = "default";
    item.addEventListener("mouseenter", () => {
      clearTimeout(globalCloseTimeout);
      allNavItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherBtn = otherItem.querySelector(".nav-link");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        }
      });

      item.classList.add("active");
      button.setAttribute("aria-expanded", "true");
    });

    item.addEventListener("mouseleave", () => {
      clearTimeout(globalCloseTimeout);
      globalCloseTimeout = setTimeout(closeAllMenus, 200);
    });

    button.addEventListener("focus", () => {
      clearTimeout(globalCloseTimeout);
      item.classList.add("active");
      button.setAttribute("aria-expanded", "true");
    });

    if (megaMenu) {
      megaMenu.addEventListener("mouseenter", () => {
        clearTimeout(globalCloseTimeout);
      });
      megaMenu.addEventListener("mouseleave", () => {
        clearTimeout(globalCloseTimeout);
        globalCloseTimeout = setTimeout(closeAllMenus, 200);
      });
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllMenus();
    }
  });

  const allMainSelections = document.querySelectorAll(".nav-link, .nav-item > button");

  allMainSelections.forEach(selection => {
    selection.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      selection.blur();
      
      return false;
    });

    selection.style.cursor = "default"; 
  });
}


/* ==========================================================================
   2. ORASCOM DUAL-SECTOR TAB SWITCHER (Desktop Hover Tabs)
   ========================================================================== */
function initOrascomTabs() {
  const sectorTabs = document.querySelectorAll(".sector-tab-btn");
  const sectorPanels = document.querySelectorAll(".sector-content-panel");

  sectorTabs.forEach(tab => {
    const switchPanel = () => {
      const targetId = tab.getAttribute("data-sector-target");
      
      sectorTabs.forEach(t => t.classList.remove("active"));
      sectorPanels.forEach(p => p.classList.remove("active"));
      
      tab.classList.add("active");
      const matchingPanel = document.getElementById(targetId);
      if (matchingPanel) matchingPanel.classList.add("active");
    };

    tab.addEventListener("click", switchPanel);
    tab.addEventListener("mouseenter", switchPanel);
  });
}

/* ==========================================================================
   3. MOBILE DRAWER, ACCORDION & HEADER TOGGLE (FIXED LOGIC)
   ========================================================================== */
(function initMobileDrawer() {
  const hamburger = document.querySelector('#hamburger');
  const drawer = document.querySelector('#mobileDrawer');
  const drawerClose = document.querySelector('#drawerClose');
  const drawerOverlay = document.querySelector('#drawerOverlay');
  const siteHeader = document.querySelector('#siteHeader');

  if (!hamburger || !drawer) return;

  let lastFocusedEl = null;

  function getFocusable() {
    return Array.from(drawer.querySelectorAll(
      'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )).filter(el => el.offsetParent !== null);
  }

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    const focusable = getFocusable();
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function openDrawer() {
    lastFocusedEl = document.activeElement;
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (siteHeader) siteHeader.style.display = 'none';
    if (drawerOverlay) drawerOverlay.classList.add('open');
    document.addEventListener('keydown', trapFocus);
    // move focus into the drawer for keyboard/screen-reader users
    const focusable = getFocusable();
    if (focusable.length) focusable[0].focus();
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (siteHeader) siteHeader.style.display = 'flex';
    if (drawerOverlay) drawerOverlay.classList.remove('open');
    document.removeEventListener('keydown', trapFocus);
    // return focus to the hamburger button that opened it
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
      lastFocusedEl.focus();
    }
  }

  hamburger.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') &&
        !drawer.contains(e.target) &&
        !hamburger.contains(e.target)) {
      closeDrawer();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
  });

  document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isCurrentlyOpen = trigger.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.accordion-trigger').forEach(t => {
        if (t !== trigger) t.setAttribute('aria-expanded', 'false');
      });
      trigger.setAttribute('aria-expanded', isCurrentlyOpen ? 'false' : 'true');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) closeDrawer();
  });

  // Mark the current page's nav link so active state / assistive tech
  // can identify it (usability enhancement, no visual change unless
  // your CSS already styles [aria-current="page"]).
  const currentPath = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.desktop-nav a[href], .drawer-links a[href]').forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop();
    if (linkPath === currentPath) link.setAttribute('aria-current', 'page');
  });

  // Skip-to-content link: focus the first section after the header,
  // no matter the page's exact markup (no fixed #main-content id needed).
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const header = document.querySelector('#siteHeader');
      const target = header && header.nextElementSibling;
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus();
      }
    });
  }
})();






/* ------------------------------------------------------------------
   5. CONTACT MODAL
------------------------------------------------------------------ */
(function initContactModal() {
  const modal     = qs('#contactModal');
  const closeBtn  = qs('#contactModalClose');
  const triggers  = qsa('#contactTrigger, #drawerContactTrigger');

  if (!modal) return;

  function openModal() {
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }

  function closeModal() {
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Expose globally so other pages can call window.openContactModal()
  window.openContactModal = openModal;
  window.closeContactModal = closeModal;

  triggers.forEach(t => t.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) closeModal();
  });
})();

/* ------------------------------------------------------------------
   6. PHONE PICKER
------------------------------------------------------------------ */
(function initPhonePicker() {
  const toggle   = qs('#phonePickerToggle');
  const list     = qs('#phonePickerList');
  const flagText = qs('#pickerFlag');
  const codeText = qs('#pickerCode');

  if (!toggle || !list) return;

  toggle.addEventListener('click', () => {
    const isOpen = list.classList.contains('is-open');
    list.classList.toggle('is-open', !isOpen);
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });

  qsa('.picker-option', list).forEach(opt => {
    opt.addEventListener('click', () => {
      flagText.textContent = opt.dataset.flag;
      codeText.textContent = opt.dataset.code;
      list.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !list.contains(e.target)) {
      list.classList.remove('is-open');
    }
  });
})();

/* ------------------------------------------------------------------
   7. SERVICE SELECTOR
------------------------------------------------------------------ */
(function initServiceSelector() {
  const trigger  = qs('#serviceSelectToggle');
  const list     = qs('#serviceSelectList');
  const label    = qs('#serviceSelectLabel');
  const hidden   = qs('#serviceSelectValue');

  if (!trigger || !list) return;

  trigger.addEventListener('click', () => {
    const isOpen = list.classList.contains('is-open');
    list.classList.toggle('is-open', !isOpen);
    trigger.setAttribute('aria-expanded', String(!isOpen));
  });

  qsa('.service-option', list).forEach(opt => {
    opt.addEventListener('click', () => {
      label.textContent  = opt.dataset.val;
      label.style.color  = 'var(--color-text)';
      if (hidden) hidden.value = opt.dataset.val;
      list.classList.remove('is-open');
    });
  });

  document.addEventListener('click', e => {
    if (!trigger.contains(e.target) && !list.contains(e.target)) {
      list.classList.remove('is-open');
    }
  });
})();

/* ------------------------------------------------------------------
   8. HERO VIDEO PLAYLIST
------------------------------------------------------------------ */
(function initHeroVideo() {
  const video       = qs('#heroVideo');
  const playBtn     = qs('#videoToggle');
  const playIcon    = qs('#playIcon');
  const pauseIcon   = qs('#pauseIcon');
  const pagerWrap   = qs('#heroPager');

  if (!video) return;

  const playlist = [
    'assets/videos/realcog_1.mp4',
    'assets/videos/Bedroom.mp4',
    'assets/videos/Realcognita v1.mp4',
    'assets/videos/showcase.mp4',
    'assets/videos/3d_render.mp4'
  ];

  let currentIndex = 0;

  function loadVideo(index) {
    currentIndex = index;
    video.src = playlist[index];
    video.load();
    video.play().catch(() => {});

    playIcon?.toggleAttribute('hidden', true);
    pauseIcon?.removeAttribute('hidden');

    // Update pager dots
    if (pagerWrap) {
      qsa('.pager-dot', pagerWrap).forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
        dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
      });
    }
  }

  video.addEventListener('ended', () => {
    loadVideo((currentIndex + 1) % playlist.length);
  });

  if (pagerWrap) {
    qsa('.pager-dot', pagerWrap).forEach((dot, i) => {
      dot.addEventListener('click', () => loadVideo(i));
    });
  }

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playIcon?.toggleAttribute('hidden', true);
        pauseIcon?.removeAttribute('hidden');
        playBtn.setAttribute('aria-label', 'Pause video');
      } else {
        video.pause();
        pauseIcon?.toggleAttribute('hidden', true);
        playIcon?.removeAttribute('hidden');
        playBtn.setAttribute('aria-label', 'Play video');
      }
    });
  }
})();

/* ------------------------------------------------------------------
   9. RESIDENTIAL & COMMERCIAL SLIDER
------------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  const serviceRows = document.querySelectorAll(".service-row-item");

  const stackObserverOptions = {
    root: null,
    rootMargin: "-10% 0px -20% 0px", /* Refines active zone triggers */
    threshold: [0, 0.2, 0.5, 0.8, 1] /* Multi-stage calculation points */
  };

  const manageStackingScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const target = entry.target;
      
      if (entry.isIntersecting) {
        // Element enters screen from bottom view
        if (entry.boundingClientRect.top > 0) {
          target.classList.add("is-visible");
          target.classList.remove("is-stacked-behind");
        } 
        // Element is pushed upwards beyond active container threshold boundary
        else {
          target.classList.add("is-stacked-behind");
        }
      } else {
        // Element drops completely below frame bounds reset baseline parameters
        if (entry.boundingClientRect.top > 0) {
          target.classList.remove("is-visible", "is-stacked-behind");
        }
      }
    });
  }, stackObserverOptions);

  serviceRows.forEach(row => {
    manageStackingScroll.observe(row);
  });
});



/* ------------------------------------------------------------------
   10. GOOGLE NEWS CAROUSEL
------------------------------------------------------------------ */
(function initNews() {
  const track    = qs('#newsTrack');
  const dotsWrap = qs('#newsDots');
  const prevBtn  = qs('#newsPrev');
  const nextBtn  = qs('#newsNext');

  if (!track) return;

  const articles = [
    { title: 'Advanced BIM Modeling Sets New Efficiency Benchmarks',    source: 'Global Engineering Journal',    date: 'Jun 22, 2026', tag: 'Case Study',      image: 'assets/images/pages/index-images/blogs-images/blog-image-1.webp' },
    { title: 'Surging Detailing Demand Prompts Regional Expansion',     source: 'Commercial Construction Dive',  date: 'Jun 19, 2026', tag: 'Market Trend',    image: 'assets/images/pages/index-images/blogs-images/blog-image-2.webp' },
    { title: 'Digital Delivery Frameworks Minimize Fabricator Rework',  source: 'Structural Technology Review', date: 'Jun 15, 2026', tag: 'Technical Note',  image: 'assets/images/pages/index-images/blogs-images/blog-image-3.webp'  },
    { title: 'Major Infrastructure Detailing Contract Finalized',        source: 'Industry Press Release',        date: 'Jun 12, 2026', tag: 'Project Win',     image: 'assets/images/pages/index-images/blogs-images/blog-image-4.webp'  },
    { title: 'Mass Timber Architecture Gains Commercial Project Traction', source: 'Eco-Structural Digest',      date: 'Jun 08, 2026', tag: 'Market Trend',    image: 'assets/images/pages/index-images/blogs-images/blog-image-5.webp' },
    { title: 'Pre-Assembly Safety Configurations Lower Site Liabilities', source: 'Contractor Safety Watch',     date: 'Jun 05, 2026', tag: 'Case Study',      image: 'assets/images/pages/index-images/blogs-images/blog-image-6.webp' },
    { title: 'Hybrid Modeling Software Compresses Detail Delivery',      source: 'AEC Tech Review',               date: 'Jun 02, 2026', tag: 'Technical Note',  image: 'assets/images/pages/index-images/blogs-images/blog-image-7.webp' },
    { title: 'Industrial Fabrication Center Completes Automation Upgrade', source: 'Steel Times International',  date: 'May 29, 2026', tag: 'Corporate Update', image: 'assets/images/pages/index-images/blogs-images/blog-image-8.webp'  },
  ];

  let index   = 0;
  let perView = 4;
  let cards   = [];

  function buildCards() {
    track.innerHTML = '';
    cards = articles.map(a => {
      const el = document.createElement('a');
      el.className  = 'news-card reveal-item';
      el.href       = `https://www.google.com/search?q=${encodeURIComponent(a.title)}`;
      el.target     = '_blank';
      el.rel        = 'noopener noreferrer';
      el.innerHTML  = `
        <div class="news-thumb">
          <img src="${a.image}" alt="${a.title}" loading="lazy" onerror="this.style.display='none'" />
          <span class="news-tag">${a.tag}</span>
        </div>
        <div class="news-body">
          <h3>${a.title}</h3>
          <div class="news-meta">
            <span class="news-source">${a.source}</span>
            <span class="news-date">${a.date}</span>
          </div>
        </div>`;
      track.appendChild(el);
      return el;
    });

    buildDots();
    observeCards();
  }

  function buildDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    const pages = Math.ceil(articles.length / perView);
    for (let i = 0; i < pages; i++) {
      const btn = document.createElement('button');
      btn.className  = `pagination-dot${i === 0 ? ' active' : ''}`;
      btn.setAttribute('aria-label', `Page ${i + 1}`);
      btn.addEventListener('click', () => { index = i * perView; clampAndRender(); });
      dotsWrap.appendChild(btn);
    }
  }

  function updatePerView() {
    perView = window.innerWidth < 1024 ? 1 : 2; 
    index = 0;
    buildDots();
    clampAndRender();
  }

  function clampAndRender() {
    const max = Math.max(0, articles.length - perView);
    index = Math.max(0, Math.min(index, max));
    const gap   = 24;
    const width = cards[0]?.getBoundingClientRect().width || 0;
    track.style.transform = `translateX(-${index * (width + gap)}px)`;

    // Update dots
    const activePage = Math.floor(index / perView);
    qsa('.pagination-dot', dotsWrap).forEach((d, i) => d.classList.toggle('active', i === activePage));
  }

  prevBtn?.addEventListener('click', () => { index = Math.max(0, index - perView); clampAndRender(); });
  nextBtn?.addEventListener('click', () => { index = Math.min(articles.length - perView, index + perView); clampAndRender(); });

  function observeCards() {
    if (!('IntersectionObserver' in window)) {
      cards.forEach(c => c.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.1 });
    cards.forEach(c => observer.observe(c));
  }

  window.addEventListener('resize', updatePerView);
  buildCards();
  updatePerView();
})();



/* ------------------------------------------------------------------
   11. CTA EMAIL FORM
------------------------------------------------------------------ */
(function initCtaForm() {
  const form   = qs('#ctaForm');
  const input  = qs('#ctaEmail');
  const submit = qs('#ctaSubmit');

  if (!form || !input || !submit) return;

  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  input.addEventListener('input', () => {
    submit.disabled = !emailRx.test(input.value.trim());
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    // Replace with real form handling
    const btn = e.submitter || submit;
    btn.textContent = 'Sent!';
    btn.disabled = true;
  });
})();

/* ------------------------------------------------------------------
   12. REGION DROPDOWN
------------------------------------------------------------------ */
(function initRegionDropdown() {
  const toggle = qs('#regionToggle');
  const menu   = qs('#regionMenu');
  // NEW TARGET: Grabs your parent wrapper layout container box hook cleanly
  const dropdownWrap = document.querySelector(".region-dropdown-wrap");

  if (!toggle || !menu || !dropdownWrap) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents click event ripples from breaking parent layout boxes
    
    // Checks if the dropdown wrapper container is currently open
    const isCurrentlyOpen = dropdownWrap.classList.contains('is-open');
    
    if (isCurrentlyOpen) {
      // 1. COLLAPSE PANEL ACTIONS
      dropdownWrap.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    } else {
      // 2. EXPAND PANEL ACTIONS
      dropdownWrap.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-hidden', 'false');
    }
  });

  // Modern UX Add-on: Closes the phone listing box immediately if user clicks outside the selection space bounds
  document.addEventListener('click', (e) => {
    if (!dropdownWrap.contains(e.target) && dropdownWrap.classList.contains('is-open')) {
      dropdownWrap.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    }
  });
})();


/* ------------------------------------------------------------------
   13. SCROLL-TO-TOP BUTTON
------------------------------------------------------------------ */
(function initScrollTop() {
  const btn      = qs('#scrollTop');
  const progress = qs('.ring-progress', btn);

  if (!btn) return;

  const CIRCUMFERENCE = 2 * Math.PI * 24; // r=24

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const max      = document.documentElement.scrollHeight - window.innerHeight;
    const pct      = max > 0 ? scrolled / max : 0;

    if (scrolled > 300) {
      btn.removeAttribute('hidden');
    } else {
      btn.setAttribute('hidden', '');
    }

    if (progress) {
      progress.style.strokeDashoffset = CIRCUMFERENCE * (1 - pct);
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ------------------------------------------------------------------
   14. SCROLL REVEAL (IntersectionObserver)
------------------------------------------------------------------ */
(function initReveal() {
  if (!('IntersectionObserver' in window)) {
    qsa('.reveal-item').forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  qsa('.reveal-item').forEach(el => observer.observe(el));
})();

/* ------------------------------------------------------------------
   16. TICKER CLIENT 
------------------------------------------------------------------ */

(function runningCleanSliderEngine() {
  const textContainer = document.getElementById('quoteText');
  const nameContainer = document.getElementById('authorName');
  const roleContainer = document.getElementById('authorRole');
  const prevButton    = document.getElementById('reviewPrev');
  const nextButton    = document.getElementById('reviewNext');

  if (!textContainer || !prevButton || !nextButton) return;

  const userReviewsList = [
    {
      quote: `Collaborating with your team was seamless from concept to completion. Your attention to spatial flow and material selection brought our shared vision to life in a way that exceeded expectations.`,
      name: "Joseph Mckinney",
      role: "INTERIOR DESIGNER"
    },
    {
      quote: `Their production drafting modeling engines compressed our blueprint development loops completely. Highly technical execution delivery speeds matched with exceptional standard profiles.`,
      name: "Juan Luna",
      role: "PRODUCTION BUILDER"
    },
    {
      quote: `Exceptional parametric structural model precision takeoffs. Saved framework procurement margin boundaries cleanly before concrete ground installations began.`,
      name: "Nathan Drake",
      role: "COMMERCIAL DEVELOPER"
    } // ADD FOR MORE REVIEWS AS NEEDED
  ];

  let activeIndex = 0;

  function updateContentSlide(targetIndex) {
    textContainer.style.opacity = '0';
    
    setTimeout(() => {
      const activeData = userReviewsList[targetIndex];
      textContainer.textContent = activeData.quote;
      nameContainer.textContent = activeData.name;
      roleContainer.textContent = activeData.role;
      textContainer.style.opacity = '1';
    }, 200);
  }

  prevButton.addEventListener('click', function() {
    activeIndex = (activeIndex === 0) ? userReviewsList.length - 1 : activeIndex - 1;
    updateContentSlide(activeIndex);
  });

  nextButton.addEventListener('click', function() {
    activeIndex = (activeIndex === userReviewsList.length - 1) ? 0 : activeIndex + 1;
    updateContentSlide(activeIndex);
  });
})();

/* ------------------------------------------------------------------
   17. SCROLL ANIMATION (PER SERVICES PAGES)
------------------------------------------------------------------ */
// Intersection Observer for ADM-style reveal
const observerOptions = {
  root: null, 
  threshold: 0.1 
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

// Select all items you want to animate
document.querySelectorAll('.reveal-item').forEach(item => {
  observer.observe(item);
});



// ==========================================================================
// 18. SCROLL DIRECTION REVEAL ENGINE
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll(".scroll-trigger-left, .scroll-trigger-right");

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Activates as soon as 15% of the section enters the screen
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target); // Stops watching the element once animated
      }
    });
  }, {
    root: null,
    threshold: 0.15, // Triggers cleanly when 15% visible
    rootMargin: "0px 0px -50px 0px" // Slight bottom offset buffer for cleaner viewport landing
  });

  scrollElements.forEach(element => {
    scrollObserver.observe(element);
  });
});


// ==========================================================================
// SOFTWARE WE WORK IN SCRIPT
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  const accordionRows = document.querySelectorAll(".sw-row-item");
  const imgLeft = document.getElementById("showcaseImgLeft");
  const imgRight = document.getElementById("showcaseImgRight");

  if (!accordionRows.length || !imgLeft || !imgRight) return;

  let rotationTimer = null;
  let swapTimer = null;
  let currentDeckIndex = 0;
  let targetedDeckArray = [];

  // Centralized Matrix Library mapping file arrays for the Right Frame (Sample Showcase)
  const softwareDeckLibrary = {
    "tekla": [
      "assets/images/subpages-images/softwares_images/tekla-image-1.webp",
      "assets/images/subpages-images/softwares_images/tekla-image-2.webp"
    ],
    "revit": [
      "assets/images/subpages-images/softwares_images/revit-image-1.webp",
      "assets/images/subpages-images/softwares_images/revit-image-2.webp"
    ],
    "autocad": [
      "assets/images/subpages-images/softwares_images/autocad-image-1.webp",
      "assets/images/subpages-images/softwares_images/autocad-image-2.webp"
    ],
    "navisworks": [
      "assets/images/subpages-images/softwares_images/naviswork-image-1.webp",
      "assets/images/subpages-images/softwares_images/naviswork-image-2.webp"
    ]
  };

  // Internal Loop Manager: Cycles the Right-Hand Frame through platform image arrays
  function orchestrateSlideshow(softwareKey) {
    clearInterval(rotationTimer);
    targetedDeckArray = softwareDeckLibrary[softwareKey] || [];
    currentDeckIndex = 0;

    if (targetedDeckArray.length <= 1) return; // Exit loop controls if array deck is thin

    rotationTimer = setInterval(() => {
      currentDeckIndex = (currentDeckIndex + 1) % targetedDeckArray.length;

      // Flash out only Frame 2 (Right Sample Frame)
      imgRight.classList.add("sw-fade-out");

      setTimeout(() => {
        imgRight.src = targetedDeckArray[currentDeckIndex];
        imgRight.classList.remove("sw-fade-out");
      }, 250);
    }, 4000); // Transitions sample screenshot graphics precisely every 4.0 seconds
  }

  function activateRow(row) {
    if (row.classList.contains("is-active")) return;

    // Extract explicit path strings mapping tracking attributes assigned inside the HTML
    const targetedLogo = row.getAttribute("data-logo");
    const baseSample = row.getAttribute("data-sample");
    const structuralKey = row.getAttribute("data-software") || "tekla";

    // 1. Flush active tags off surrounding menu items and sync aria state
    accordionRows.forEach(item => {
      item.classList.remove("is-active");
      item.setAttribute("aria-expanded", "false");
    });

    // 2. Clear visible opacity coordinates across both chassis display displays
    imgLeft.classList.add("sw-fade-out");
    imgRight.classList.add("sw-fade-out");

    // 3. Swap file assets synchronously while frames are completely invisible
    clearTimeout(swapTimer);
    swapTimer = setTimeout(() => {
      if (targetedLogo) imgLeft.src = targetedLogo;
      if (baseSample) imgRight.src = baseSample;

      row.classList.add("is-active");
      row.setAttribute("aria-expanded", "true");

      imgLeft.classList.remove("sw-fade-out");
      imgRight.classList.remove("sw-fade-out");

      // 4. Instantly restart the background slideshow loop tracking the newly active software key
      orchestrateSlideshow(structuralKey);
    }, 250);
  }

  // Row Event Listener Logic — supports mouse, touch, and keyboard (Enter/Space)
  accordionRows.forEach(row => {
    row.addEventListener("click", () => activateRow(row));

    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        activateRow(row);
      }
    });
  });

  // Automatically start the background rotation tracking engine for the pre-active row on load
  const initialRow = document.querySelector(".sw-row-item.is-active") || accordionRows[0];
  orchestrateSlideshow(initialRow.getAttribute("data-software") || "tekla");

  // Pause the rotation while the tab/section isn't visible to avoid wasted work
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      clearInterval(rotationTimer);
    } else {
      const activeRow = document.querySelector(".sw-row-item.is-active") || accordionRows[0];
      orchestrateSlideshow(activeRow.getAttribute("data-software") || "tekla");
    }
  });
});

// ==========================================================================
// WHY BUILDERS CHOOSE REALCOGNITA
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.getElementById("slidePrevBtn");
  const nextBtn = document.getElementById("slideNextBtn");
  const viewportContainer = document.querySelector(".slider-viewport-container");

  if (!prevBtn || !nextBtn || !viewportContainer) return;

  // Sizing shift calculation metrics: Maps shifting length exactly to card size boundaries + spacing gap
  const shiftAmount = 344; // 320px width size parameter + 24px layout gap margin

  nextBtn.addEventListener("click", () => {
    viewportContainer.scrollBy({
      left: shiftAmount,
      behavior: "smooth"
    });
  });

  prevBtn.addEventListener("click", () => {
    viewportContainer.scrollBy({
      left: -shiftAmount,
      behavior: "smooth"
    });
  });
});

// 20. AT REALCOGNITA WHO WE ARE HTML
document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll(".scroll-trigger-left, .scroll-trigger-right, .scroll-trigger-up");

  // Helper Function: Counts numbers up sequentially from 0 to target values
  function animateCounterElement(spanNode) {
    const targetValue = parseInt(spanNode.getAttribute("data-target"), 10);
    const countingDuration = 2000; // Animation duration set to 2.0 seconds
    const frameRate = 100; // Paints fluid step updates at 100 FPS
    const totalFrames = Math.round(countingDuration / (1000 / frameRate));
    let frameCount = 0;

    const counterInterval = setInterval(() => {
      frameCount++;
      // Easing progression multiplier for smooth arithmetic speed drops near target finish lines
      const progressRatio = frameCount / totalFrames;
      const easedProgress = 1 - Math.pow(1 - progressRatio, 3); // Clean cubic out easing curve
      
      const currentCount = Math.floor(easedProgress * targetValue);
      spanNode.textContent = currentCount;

      if (frameCount >= totalFrames) {
        spanNode.textContent = targetValue; // Hard-locks precisely onto maximum value parameters
        clearInterval(counterInterval);
      }
    }, 1000 / frameRate);
  }

  // The Master Scroll Observer Matrix
  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 1. Reveal element chassis visibility instantly via classes
        entry.target.classList.add("is-revealed");
        
        // 2. Scan if the newly visible card contains an un-animated numeric tracking target
        const counterSpan = entry.target.querySelector(".count-me");
        if (counterSpan) {
          animateCounterElement(counterSpan);
        }

        observer.unobserve(entry.target); // Shuts down tracking on this item to preserve browser performance
      }
    });
  }, {
    root: null,
    threshold: 0.12, // Fires smoothly as soon as 12% of the card surfaces on display viewports
    rootMargin: "0px 0px -40px 0px"
  });

  scrollElements.forEach(element => {
    scrollObserver.observe(element);
  });
});

// WHY CLIENT CHOOSE REALCOGNITA LEFT AND RIGHT ARROW FUNCTION
(function initServicesSlider() {
  const track = document.getElementById("servicesSliderTrack");
  const btnPrev = document.getElementById("srvSliderPrev");
  const btnNext = document.getElementById("srvSliderNext");

  if (!track || !btnPrev || !btnNext) return;

  let currentPositionOffset = 0;
  const slideStepAmount = 404; // Card width (380px) + Gap space width (24px) spacing parameters

  btnNext.addEventListener("click", () => {
    const totalMaxScrollWidth = track.scrollWidth - track.parentElement.clientWidth;
    
    if (Math.abs(currentPositionOffset) < totalMaxScrollWidth) {
      currentPositionOffset -= slideStepAmount;
      // Cap at the maximum allowable boundary scroll edge line limits
      if (Math.abs(currentPositionOffset) > totalMaxScrollWidth) {
        currentPositionOffset = -totalMaxScrollWidth;
      }
      track.style.transform = `translateX(${currentPositionOffset}px)`;
    }
  });

  btnPrev.addEventListener("click", () => {
    if (currentPositionOffset < 0) {
      currentPositionOffset += slideStepAmount;
      if (currentPositionOffset > 0) currentPositionOffset = 0;
      track.style.transform = `translateX(${currentPositionOffset}px)`;
    }
  });
})(); // WHY CLIENT CHOOSE REALCOGNITA LEFT AND RIGHT ARROW FUNCTION END

// EFFECTS FOR WHY CLIENT CHOOSE REALCOGNITA SECTION
// (init calls consolidated into the single canonical DOMContentLoaded block below)

function initScrollRevealEngine() {
  const showcaseCards = document.querySelectorAll(".service-showcase-card");
  const whyChooseSection = document.getElementById("whyChooseUs");
  
  if (showcaseCards.length === 0 && !whyChooseSection) return;

  const observerOptions = {
    root: null, 
    rootMargin: "0px",
    threshold: 0.12 /* Lowered threshold slightly so it triggers earlier on mobile phones */
  };

  const revealCallbackLoop = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
        observer.unobserve(entry.target);
      }
    });
  };

  const scrollObserver = new IntersectionObserver(revealCallbackLoop, observerOptions);

  // 1. Hook your horizontal slider card nodes directly
  showcaseCards.forEach(card => {
    scrollObserver.observe(card);
  });

  // 2. Hook your Why Choose section parent field
  if (whyChooseSection) {
    scrollObserver.observe(whyChooseSection);
  }
}
  
  // EFFECTS FOR WHY CLIENT CHOOSE REALCOGNITA SECTION END


  // SLIDESHOW EFFECT IN WHY CLIENT CHOOSE REALCOGNITA 
(function initSkenderSliderModule() {
  const track = document.getElementById("skenderSliderTrack");
  const prevBtn = document.getElementById("skenderPrev");
  const nextBtn = document.getElementById("skenderNext");
  const textNodes = document.querySelectorAll(".pillar-text-node");
  // NEW PROGRESS HOOK: Grabs your brand indicator element block layout container
  const progressBar = document.getElementById("skenderProgressBar");

  if (!track || !prevBtn || !nextBtn || textNodes.length === 0) return;

  let activeIndex = 0;
  const maxSlideCount = textNodes.length;

  const updateSliderPositionState = () => {
    // 1. Shift the media tracks horizontally by an explicit percentage match
    track.style.transform = `translateX(-${activeIndex * 100}%)`;

    // 2. Synchronize active text blocks dynamically
    textNodes.forEach(node => node.classList.remove("active"));
    const targetTextNode = document.querySelector(`.pillar-text-node[data-slide-index="${activeIndex}"]`);
    if (targetTextNode) targetTextNode.classList.add("active");

    // 3. DYNAMIC PROGRESS CALCULATIONS: Automatically fills bar segment widths evenly
    if (progressBar) {
      const stepPercentageFraction = ((activeIndex + 1) / maxSlideCount) * 100;
      progressBar.style.width = `${stepPercentageFraction}%`;
    }
  };

  nextBtn.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % maxSlideCount; // Auto loop loops back to the start smoothly
    updateSliderPositionState();
  });

  prevBtn.addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + maxSlideCount) % maxSlideCount;
    updateSliderPositionState();
  });
})(); // END

// GLOBAL COLOR FONT FOR NAVIGATION BLACK AND WHITE
// CANONICAL INIT BLOCK — the mega-menu, sector tabs, scroll-reveal, and
// automatic header theme are wired up exactly once, here, and nowhere else
// in this file.
document.addEventListener("DOMContentLoaded", () => {
  initAutomaticHeaderTheme();
  initDesktopMegaMenu();
  initOrascomTabs();
  initScrollRevealEngine();
});

function initAutomaticHeaderTheme() {
  const headerNode = document.getElementById("siteHeader");
  if (!headerNode) return;

  // Get the current page filename from the browser URL address window
  const currentPagePath = window.location.pathname.toLowerCase();

  // CHECK CONSTRAINT: If the user is NOT on the homepage, turn the header links black
  const isHomepage = currentPagePath.endsWith("index.html") || currentPagePath === "/" || currentPagePath.endsWith("/");

  if (!isHomepage) {
    headerNode.classList.add("light-header"); // Dynamically triggers your high-specificity black CSS rules
  } else {
    headerNode.classList.remove("light-header"); // Ensures homepage remains white over your dark imagery
  }
} //END


// ANIMATION EFFECTS IN HERO DESCRIPTION
function initScrollRevealEngine() {
  const showcaseCards = document.querySelectorAll(".service-showcase-card");
  const whyChooseSection = document.getElementById("whyChooseUs");
  const heroContentBlock = document.querySelector(".hero-content");
  
  if (showcaseCards.length === 0 && !whyChooseSection && !heroContentBlock) return;

  const observerOptions = {
    root: null, 
    rootMargin: "0px",
    threshold: 0.1 // Triggers fluidly the moment 10% of the area peaks onto the viewport
  };

  const revealCallbackLoop = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
        // Optimization: Do NOT run unobserve here so it can repeat infinitely on scroll down/up cycles
      } else {
        // Automatically resets the classes when you scroll away so it can re-animate beautifully next time
        entry.target.classList.remove("reveal-active");
      }
    });
  };

  const scrollObserver = new IntersectionObserver(revealCallbackLoop, observerOptions);

  showcaseCards.forEach(card => scrollObserver.observe(card));
  if (whyChooseSection) scrollObserver.observe(whyChooseSection);
  if (heroContentBlock) scrollObserver.observe(heroContentBlock);
} // END


// GALLERY SHOWCASE START

(function initMultiStageShowcase() {
  const headerBlock = document.querySelector('.reveal-header-item');
  const imageGrid   = document.querySelector('.sequential-grid-trigger');
  const imageCards  = document.querySelectorAll('.grid-image-element');

  if (!headerBlock || !imageGrid) return;

  // Observer 1: Triggers immediately when the top of the text block approaches the viewport
  const headerObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -50px 0px", threshold: 0.1 });

  headerObserver.observe(headerBlock);

  // Observer 2: Triggers the images after the user continues scrolling down
  const gridObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Sequentially staggers each image element as they lift into position
        imageCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('animate-up');
          }, index * 150); // 150ms delay interval step between photos
        });
        observer.unobserve(entry.target);
      }
    });
  }, { 
    root: null,
    // Forces the user to scroll deeper (150px past the element boundary) before triggering the image animations
    rootMargin: "0px 0px -150px 0px", 
    threshold: 0.05 
  });

  gridObserver.observe(imageGrid);
})();

/* ==========================================================================
   FAQ
   ========================================================================== */
(function () {
  "use strict";

  var faqList = document.getElementById("faqList");
  if (!faqList) return;

  var items = Array.prototype.slice.call(faqList.querySelectorAll(".faq-item"));

  items.forEach(function (item) {
    var btn = item.querySelector(".faq-question");
    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");

      items.forEach(function (other) {
        other.classList.remove("open");
        other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- Scroll reveal (skip if main.js already handles .reveal-item globally) ---------- */
  if (!window.__revealObserverActive) {
    var revealEls = document.querySelectorAll(".faq-section.reveal-section, .faq-section .reveal-item");
    if ("IntersectionObserver" in window && revealEls.length) {
      var revealObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "none";
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      revealEls.forEach(function (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(24px)";
        el.style.transition = "opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out)";
        revealObserver.observe(el);
      });
    }
  }
})();

/* ==========================================================================
   FOOTER
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Auto-update copyright year ---------- */
  var yearEl = document.getElementById("footerYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Newsletter form (client-side only) ---------- */
  var form = document.getElementById("footerNewsletterForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var btn = form.querySelector("button");
    var label = btn.querySelector(".btn-label");
    var input = form.querySelector("input[type='email']");

    if (!input.value || !input.checkValidity()) return;

    var originalText = label.textContent;
    label.textContent = "Subscribed ✓";
    form.classList.add("is-success");
    btn.disabled = true;
    input.disabled = true;

    setTimeout(function () {
      label.textContent = originalText;
      form.classList.remove("is-success");
      btn.disabled = false;
      input.disabled = false;
      input.value = "";
    }, 3000);

    // TODO: wire this up to your actual newsletter provider (Mailchimp, etc.)
  });
})();

/* ==========================================================================
   BUILDERS SLIDER — click-to-expand modal
   Add this as a new <script src="js/steel-sections.js"></script> after
   main.js. The slider arrows / drag / reveal animations already work via
   main.js — this only wires up the click-to-expand card modal.
   ========================================================================== */
(function () {
  "use strict";

  var modal = document.getElementById("buildersModal");
  var modalClose = document.getElementById("buildersModalClose");
  var modalImg = document.getElementById("buildersModalImg");
  var modalTitle = document.getElementById("buildersModalTitle");
  var modalText = document.getElementById("buildersModalText");

  if (!modal) return;

  function openModal(card) {
    modalImg.src = card.getAttribute("data-img") || "";
    modalImg.alt = card.getAttribute("data-title") || "";
    modalTitle.textContent = card.getAttribute("data-title") || "";
    modalText.textContent = card.getAttribute("data-text") || "";

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".showcase-card-item").forEach(function (card) {
    card.addEventListener("click", function () { openModal(card); });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(card);
      }
    });
  });

  if (modalClose) modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });
})();


//END
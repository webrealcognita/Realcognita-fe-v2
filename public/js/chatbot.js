/**
 * Realcognita – Scroll-revealed Chat Assistant
 *
 * Front-end UI + a small keyword-matched responder using real site content
 * (services, process, offices, contact). This is a client-side placeholder
 * — to connect a real AI backend, replace `getBotReply()` with a fetch()
 * call to your API endpoint and keep the rest of the UI as-is.
 *
 * This file also owns the shared "floating controls" behavior: as the
 * visitor scrolls down the chat launcher hides and the scroll-to-top
 * button appears; scrolling back up swaps them the other way. Both
 * buttons live in the same bottom-right corner, so only one is ever
 * competing for attention at a time.
 */
(function () {
  "use strict";

  var launcher = document.getElementById("chatbotLauncher");
  var panel = document.getElementById("chatbotPanel");
  var messagesEl = document.getElementById("chatbotMessages");
  var form = document.getElementById("chatbotForm");
  var input = document.getElementById("chatbotInput");
  var badge = document.getElementById("chatbotBadge");
  var quickReplies = document.getElementById("chatbotQuickReplies");
  var scrollBtn = document.getElementById("scrollTop");
  var ringProgress = scrollBtn ? scrollBtn.querySelector(".ring-progress") : null;
  var contactTrigger = document.getElementById("contactTrigger");

  if (!launcher || !panel) return;

  var RING_CIRCUMFERENCE = 150.796; // matches r=24 in the SVG markup
  var REVEAL_THRESHOLD = 480; // px scrolled before either control may show
  var DIRECTION_HYSTERESIS = 8; // px of sustained travel before swapping
  var STORAGE_KEY = "rc_chatbot_state_v1";

  var prefersReducedMotion = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  /* ---------- Persisted state (survives navigation within a tab) ---------- */
  var state = loadState();
  var hasOpenedOnce = !!state.greeted;
  if (hasOpenedOnce) {
    launcher.classList.add("was-opened");
    if (badge) badge.style.display = "none";
  }

  function loadState() {
    try {
      var raw = window.sessionStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* sessionStorage unavailable (privacy mode, etc.) */ }
    return { greeted: false, messages: [] };
  }

  function saveState() {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) { /* ignore quota/availability errors */ }
  }

  function rememberMessage(text, from) {
    state.messages.push({ text: text, from: from });
    // Keep the stored transcript from growing without bound.
    if (state.messages.length > 40) state.messages = state.messages.slice(-40);
    saveState();
  }

  /* ---------- Scroll-driven floating controls ---------- */
  var lastScrollY = window.scrollY || window.pageYOffset || 0;
  var accumDown = 0;
  var accumUp = 0;
  var scrollTicking = false;

  function setLauncherVisible(show) {
    launcher.classList.toggle("is-visible", show);
    launcher.setAttribute("aria-hidden", show ? "false" : "true");
  }

  function setScrollBtnVisible(show) {
    if (!scrollBtn) return;
    scrollBtn.classList.toggle("is-visible", show);
    scrollBtn.setAttribute("aria-hidden", show ? "false" : "true");
    scrollBtn.tabIndex = show ? 0 : -1;
  }

  function updateProgressRing(y) {
    if (!ringProgress) return;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? Math.min(Math.max(y / docHeight, 0), 1) : 0;
    ringProgress.style.strokeDashoffset = String(RING_CIRCUMFERENCE * (1 - pct));
  }

  function handleScroll() {
    var y = window.scrollY || window.pageYOffset || 0;
    updateProgressRing(y);

    if (y <= REVEAL_THRESHOLD) {
      setLauncherVisible(false);
      setScrollBtnVisible(false);
      closePanel();
      lastScrollY = y;
      accumDown = 0;
      accumUp = 0;
      scrollTicking = false;
      return;
    }

    var delta = y - lastScrollY;
    if (delta > 0) {
      accumDown += delta;
      accumUp = 0;
    } else if (delta < 0) {
      accumUp += -delta;
      accumDown = 0;
    }

    var panelOpen = panel.classList.contains("open");

    if (accumDown > DIRECTION_HYSTERESIS) {
      // Scrolling down: surface scroll-to-top. Leave an open chat's
      // launcher (its close button) alone so the panel stays reachable.
      setScrollBtnVisible(true);
      if (!panelOpen) setLauncherVisible(false);
      accumDown = 0;
    } else if (accumUp > DIRECTION_HYSTERESIS) {
      // Scrolling up: bring the chat launcher back, tuck scroll-to-top away.
      setScrollBtnVisible(false);
      setLauncherVisible(true);
      accumUp = 0;
    }

    lastScrollY = y;
    scrollTicking = false;
  }

  window.addEventListener("scroll", function () {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(handleScroll);
    }
  }, { passive: true });

  handleScroll(); // set correct initial state (e.g. reload mid-page, #anchor links)

  if (scrollBtn) {
    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  /* ---------- Open / close ---------- */
  function openPanel() {
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    launcher.classList.add("is-open");
    launcher.classList.add("was-opened");
    launcher.setAttribute("aria-expanded", "true");
    setLauncherVisible(true);
    if (badge) badge.style.display = "none";

    if (!hasOpenedOnce) {
      hasOpenedOnce = true;
      state.greeted = true;
      saveState();
      setTimeout(function () {
        botSay("Hi 👋 I'm the Realcognita assistant. Ask me about our services, process, or pricing — or tap a quick option below.");
      }, 300);
    }
    setTimeout(function () { input && input.focus(); }, 350);
  }

  function closePanel() {
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
    launcher.classList.remove("is-open");
    launcher.setAttribute("aria-expanded", "false");
  }

  launcher.addEventListener("click", function () {
    if (panel.classList.contains("open")) closePanel();
    else openPanel();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && panel.classList.contains("open")) closePanel();
  });

  document.addEventListener("click", function (e) {
    if (panel.classList.contains("open") &&
        !panel.contains(e.target) &&
        !launcher.contains(e.target)) {
      closePanel();
    }
  });

  /* ---------- Messages ---------- */
  function addMessage(text, from) {
    var msg = document.createElement("div");
    msg.className = "chatbot-msg " + from;
    msg.textContent = text;
    messagesEl.appendChild(msg);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return msg;
  }

  function addChips(chips) {
    if (!chips || !chips.length) return;
    var row = document.createElement("div");
    row.className = "chatbot-msg-chips";
    chips.forEach(function (chip) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chatbot-quick-btn";
      btn.textContent = chip.label;
      btn.addEventListener("click", function () {
        row.remove(); // avoid re-clicking a stale suggestion
        chip.handler();
      });
      row.appendChild(btn);
    });
    messagesEl.appendChild(row);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  /* ---------- Restore prior conversation (same-tab navigation) ---------- */
  if (state.messages && state.messages.length) {
    state.messages.forEach(function (m) {
      addMessage(m.text, m.from);
    });
  }

  function userSay(text) {
    addMessage(text, "user");
    rememberMessage(text, "user");
  }

  function botSay(text, chips) {
    var typing = document.createElement("div");
    typing.className = "chatbot-typing";
    typing.innerHTML = "<span></span><span></span><span></span>";
    messagesEl.appendChild(typing);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    var delay = 500 + Math.min(text.length * 8, 900);
    setTimeout(function () {
      typing.remove();
      addMessage(text, "bot");
      rememberMessage(text, "bot");
      addChips(chips);
    }, delay);
  }

  function openContactForm() {
    closePanel();
    if (contactTrigger) {
      contactTrigger.click();
    } else {
      window.location.hash = "contact";
    }
  }

  /* ---------- Reusable follow-up chip sets ---------- */
  function chip(label, query) {
    return { label: label, handler: function () { respond(query); } };
  }

  function contactChip(label) {
    label = label || "Open contact form";
    return { label: label, handler: function () {
      botSay("Opening the contact form for you…");
      openContactForm();
    } };
  }

  var mainMenuChips = [
    chip("Our services", "What services do you offer?"),
    chip("Pricing", "How does pricing work?"),
    contactChip("Talk to a human")
  ];

  /* ---------- Knowledge-based responder ---------- */
  function getBotReply(raw) {
    var q = raw.toLowerCase();

    if (/\bresidential\b/.test(q)) {
      return {
        text: "Residential: Architectural Design & Drafting, Production Estimating, Administrative Support, 3D Rendering & Visualisation, Project Management, and Residential Engineering.",
        chips: [chip("Commercial services", "Tell me about commercial services"), contactChip()]
      };
    }

    if (/\bcommercial\b/.test(q)) {
      return {
        text: "Commercial: Engineering Detail & Modelling, BIM Modelling Services, Rebar Services, Infrastructure Support, Drafting, and Production Scheduling.",
        chips: [chip("Residential services", "Tell me about residential services"), contactChip()]
      };
    }

    if (/service|offer|provide|do you (do|handle)|solutions/.test(q)) {
      return {
        text: "We cover both residential and commercial work — Architectural Design & Drafting, Production Estimating, 3D Rendering, Engineering Detail & Modelling, BIM Modelling, Rebar Services, and more, all under one team.",
        chips: [chip("Residential services", "Tell me about residential services"), chip("Commercial services", "Tell me about commercial services")]
      };
    }

    if (/price|pricing|cost|quote|how much|budget/.test(q)) {
      return {
        text: "Pricing depends on project scope and the service mix you need. The fastest way to get real numbers is a scoped quote from our team.",
        chips: [contactChip("Get a scoped quote")]
      };
    }

    if (/human|person|talk to (someone|a person)|agent|real person/.test(q)) {
      return {
        text: "Of course — our team is reachable directly. Offices sit in Australia, the Philippines, Singapore, and the US, or I can open the contact form for you right now.",
        chips: [contactChip(), chip("See our offices", "Where are your offices?")]
      };
    }

    if (/office|address|located|based in/.test(q)) {
      return {
        text: "We have teams in Balcatta, WA (Australia), Taguig/Manila (Philippines), Bukit Merah (Singapore), and Plano, TX (United States).",
        chips: [contactChip()]
      };
    }

    if (/region|countr(y|ies)|australia|\bus\b|united states|philippines|singapore/.test(q)) {
      return {
        text: "Our core delivery regions are the US and Australia, with supporting teams based in the Philippines and Singapore.",
        chips: [chip("See our offices", "Where are your offices?")]
      };
    }

    if (/process|how.*work|steps|workflow|methodology/.test(q)) {
      return {
        text: "Our process: a scoping conversation → a proposal covering deliverables and timeline → a named team producing and reviewing work against a set QA process → revisions → your final issued package.",
        chips: [chip("Our services", "What services do you offer?"), contactChip()]
      };
    }

    if (/who (are|is) you|about (you|realcognita)|company|why (choose|work with) you|vendor|partner/.test(q)) {
      return {
        text: "We work as a single construction partner rather than a stack of separate vendors — one team spanning drafting, engineering documentation, BIM, estimating, and scheduling, so standards stay consistent and nothing gets lost between stages.",
        chips: [chip("Our services", "What services do you offer?"), contactChip("Talk to a human")]
      };
    }

    if (/case stud(y|ies)|testimonial|experience|portfolio|past (project|work)|track record/.test(q)) {
      return {
        text: "We've got case studies and client testimonials covering both residential and commercial work — our team can point you to examples that match your project type.",
        chips: [contactChip("Ask for examples")]
      };
    }

    if (/blog|news|article|insight|resource/.test(q)) {
      return {
        text: "Our News & Articles section covers structural design, regional regulations, and drafting/BIM workflow updates — worth a browse if you're scoping a project.",
        chips: [chip("Our services", "What services do you offer?")]
      };
    }

    if (/career|job|hiring|work for you|join (the|your) team/.test(q)) {
      return {
        text: "We're always open to hearing from drafting, BIM, and engineering talent — the quickest route is through our contact form so it reaches the right team.",
        chips: [contactChip("Send an inquiry")]
      };
    }

    if (/^(hi|hello|hey|good (morning|afternoon|evening))\b/.test(q)) {
      return {
        text: "Hey there! What would you like to know — our services, pricing, or process?",
        chips: mainMenuChips
      };
    }

    if (/thank|thanks|appreciate/.test(q)) {
      return { text: "Anytime! Let me know if anything else comes up.", chips: [] };
    }

    if (/bye|goodbye|see ya/.test(q)) {
      return { text: "Take care — reach out anytime you need us.", chips: [] };
    }

    return {
      text: "Good question — for anything project-specific, our team can give you a precise answer. Want me to open the contact form so you can reach them directly?",
      chips: [contactChip(), chip("Our services", "What services do you offer?")]
    };
  }

  function respond(rawText) {
    userSay(rawText);
    var reply = getBotReply(rawText);
    botSay(reply.text, reply.chips);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (!text) return;
    input.value = "";
    respond(text);
  });

  quickReplies.querySelectorAll(".chatbot-quick-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var q = btn.getAttribute("data-q");
      respond(q);
    });
  });
})();
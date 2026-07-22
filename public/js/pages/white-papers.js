/* ==========================================================================
   REALCOGNITA — WHITE PAPERS PAGE INTERACTIONS
   Used by white-papers.html ONLY.
   ========================================================================== */
(function () {
  "use strict";

  var grid       = document.querySelector("[data-doc-grid]");
  var cards       = Array.prototype.slice.call(document.querySelectorAll(".doc-card"));
  var chips       = Array.prototype.slice.call(document.querySelectorAll(".res-chip"));
  var searchInput = document.querySelector("[data-doc-search]");
  var countEl     = document.querySelector("[data-doc-count]");
  var emptyEl     = document.querySelector("[data-doc-empty]");
  var overlay     = document.querySelector("[data-res-overlay]");
  var drawer      = document.querySelector("[data-res-drawer]");
  var toast       = document.querySelector("[data-res-toast]");

  var activeFilter = "all";
  var activeQuery  = "";
  var toastTimer   = null;

  /* ---------------- filtering ---------------- */
  function applyFilters() {
    var visibleCount = 0;

    cards.forEach(function (card) {
      var category = card.getAttribute("data-category");
      var haystack = (card.getAttribute("data-search") || "").toLowerCase();

      var matchesCategory = activeFilter === "all" || category === activeFilter;
      var matchesQuery = activeQuery === "" || haystack.indexOf(activeQuery) !== -1;
      var show = matchesCategory && matchesQuery;

      if (show) {
        visibleCount += 1;
        card.classList.remove("is-hidden");
        if (!card.classList.contains("is-visible")) {
          // stagger the reveal a touch so re-filtering still feels alive
          var delay = Math.min(visibleCount * 45, 400);
          card.style.animationDelay = delay + "ms";
          requestAnimationFrame(function () { card.classList.add("is-visible"); });
        }
      } else {
        card.classList.add("is-hidden");
      }
    });

    if (countEl) {
      countEl.innerHTML = "Showing <strong>" + visibleCount + "</strong> of <strong>" + cards.length + "</strong> documents";
    }
    if (emptyEl) {
      emptyEl.classList.toggle("is-visible", visibleCount === 0);
    }
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("is-active"); });
      chip.classList.add("is-active");
      activeFilter = chip.getAttribute("data-filter") || "all";
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      activeQuery = searchInput.value.trim().toLowerCase();
      applyFilters();
    });
  }

  /* ---------------- scroll reveal (initial paint, no filter needed) ---------------- */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = (i % 6) * 60 + "ms";
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    cards.forEach(function (card) { io.observe(card); });
  } else {
    cards.forEach(function (card) { card.classList.add("is-visible"); });
  }

  /* ---------------- download feedback ---------------- */
  function showToast(message) {
    if (!toast) return;
    toast.querySelector("[data-toast-text]").textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("is-visible"); }, 2600);
  }

  document.querySelectorAll(".doc-btn-download").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var title = btn.getAttribute("data-doc-title") || "Document";
      btn.classList.add("is-downloaded");
      showToast(title + " — download started");
      setTimeout(function () { btn.classList.remove("is-downloaded"); }, 2200);
    });
  });

  /* ---------------- preview drawer ---------------- */
  function openDrawer(card) {
    if (!overlay || !drawer) return;

    drawer.querySelector("[data-drawer-category]").textContent = card.getAttribute("data-category-label") || "";
    drawer.querySelector("[data-drawer-title]").textContent = card.querySelector(".doc-title").textContent.trim();
    drawer.querySelector("[data-drawer-desc]").textContent = card.getAttribute("data-abstract") || card.querySelector(".doc-desc").textContent.trim();

    var meta = drawer.querySelectorAll("[data-drawer-meta] .doc-tb-value");
    var source = card.querySelectorAll(".doc-tb-value");
    meta.forEach(function (el, i) { if (source[i]) el.textContent = source[i].textContent; });

    var tocList = drawer.querySelector("[data-drawer-toc]");
    var tocRaw = card.getAttribute("data-toc");
    if (tocList && tocRaw) {
      tocList.innerHTML = "";
      tocRaw.split("|").forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item;
        tocList.appendChild(li);
      });
    }

    var dlBtn = drawer.querySelector("[data-drawer-download]");
    if (dlBtn) dlBtn.setAttribute("data-doc-title", card.querySelector(".doc-title").textContent.trim());

    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    if (!overlay) return;
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".doc-btn-preview").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var card = btn.closest(".doc-card");
      if (card) openDrawer(card);
    });
  });

  if (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeDrawer();
    });
  }
  document.querySelectorAll("[data-drawer-close]").forEach(function (btn) {
    btn.addEventListener("click", closeDrawer);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeDrawer();
  });

  var drawerDownload = document.querySelector("[data-drawer-download]");
  if (drawerDownload) {
    drawerDownload.addEventListener("click", function (e) {
      e.preventDefault();
      showToast((drawerDownload.getAttribute("data-doc-title") || "Document") + " — download started");
    });
  }

  /* ---------------- animated stat counters ---------------- */
  document.querySelectorAll("[data-count-to]").forEach(function (el) {
    var target = parseInt(el.getAttribute("data-count-to"), 10) || 0;
    var suffix = el.getAttribute("data-count-suffix") || "";
    var started = false;

    function run() {
      if (started) return;
      started = true;
      var start = performance.now();
      var duration = 1100;
      function tick(now) {
        var progress = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    if ("IntersectionObserver" in window) {
      var statIo = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { run(); statIo.unobserve(entry.target); }
        });
      }, { threshold: 0.6 });
      statIo.observe(el);
    } else {
      run();
    }
  });

  applyFilters();
})();
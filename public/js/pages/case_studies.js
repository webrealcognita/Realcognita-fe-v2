/* ==========================================================================
   REALCOGNITA – OUR EXPERIENCE & CASE STUDIES
   ========================================================================== */
(function(){
    "use strict";

    /* ---------- Email delivery config (EmailJS) ----------
       This site is static (no backend), so emailing the PDF link uses
       EmailJS — it sends real emails straight from browser JS through a
       Gmail/Outlook/SMTP account you connect, no server required.

       Setup (one-time, free tier is fine to start):
       1. Create an account at https://www.emailjs.com
       2. Add an Email Service (e.g. connect your Gmail) -> copy its Service ID
       3. Create an Email Template with these variables in the body:
            {{to_name}}, {{to_email}}, {{case_title}}, {{pdf_link}}
          -> copy its Template ID
       4. Account -> General -> copy your Public Key
       5. Paste all three below. Also add the EmailJS SDK script tag to
          case_studies.html (see the comment near the bottom of this file).

       Until these are filled in, the form will still work — it just skips
       the email step and only does the local download. */
    var EMAILJS_SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
    var EMAILJS_TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
    var EMAILJS_PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";
    var EMAILJS_READY =
      EMAILJS_SERVICE_ID.indexOf("YOUR_") !== 0 &&
      EMAILJS_TEMPLATE_ID.indexOf("YOUR_") !== 0 &&
      EMAILJS_PUBLIC_KEY.indexOf("YOUR_") !== 0 &&
      typeof window.emailjs !== "undefined";

    if(EMAILJS_READY){
      window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }

    /* ---------- Case study content for modal ---------- */
    var CASES = {
      "case-1": {
        eyebrow: "Residential · Australia",
        title: "High-Volume Residential Drafting Program",
        pdf: "assets/case-studies/case-1-residential-drafting-program.pdf",
        stats: [["420+","Lots documented"],["6 days","Avg. plan turnaround"],["0","Council rejections"]],
        body: [
          "A national volume home builder needed a drafting partner who could keep pace with a rolling release of new house-and-land packages without sacrificing consistency across estates.",
          "We stood up a dedicated Revit production team, built a shared family library across every facade option, and put a same-week review cycle in place so working drawings never bottlenecked approvals."
        ],
        list: ["Standardised Revit templates across 12 house ranges","Parallel documentation of siting plans and working drawings","Direct QA loop with the builder's engineering team"]
      },
      "case-2": {
        eyebrow: "Commercial · Australia · Flagship",
        title: "Structural Steel Detailing for Mixed-Use Tower",
        pdf: "assets/case-studies/case-2-structural-steel-mixed-use-tower.pdf",
        stats: [["42","Storeys detailed"],["0","Major RFIs"],["100%","Clash-free coordination"]],
        body: [
          "A tier-1 general contractor engaged us to detail structural steel for a 42-storey mixed-use tower, coordinating tightly with precast, MEP, and facade trades across a compressed program.",
          "Federated Revit and Tekla models were reviewed weekly against the live coordination model, catching clashes before they reached site and keeping fabrication drawings issue-free through steel erection."
        ],
        list: ["Full federated BIM coordination with MEP and facade trades","Connection design detailing for all primary steel members","Weekly clash-detection reviews through fabrication release"]
      },
      "case-3": {
        eyebrow: "Infrastructure · United States",
        title: "Civil & Infrastructure BIM Coordination",
        pdf: "assets/case-studies/case-3-civil-infrastructure-bim-coordination.pdf",
        stats: [["3","Linked disciplines"],["9 wks","Program delivered early"],["0","Field rework orders"]],
        body: [
          "A civil infrastructure firm needed a single coordinated model spanning grading, drainage, and structural elements for a multi-phase corridor upgrade.",
          "We consolidated survey, civil, and structural inputs into one coordination environment, resolving conflicts between utility corridors and structural footings well before construction mobilised."
        ],
        list: ["Unified civil and structural coordination model","Utility clash resolution ahead of site mobilisation","Milestone-based model handovers aligned to construction phasing"]
      },
      "case-4": {
        eyebrow: "Residential · United States",
        title: "Custom Facade & Floor Plan Configurations",
        pdf: "assets/case-studies/case-4-custom-facade-floor-plan.pdf",
        stats: [["18","Facade variants"],["4 wks","Concept to permit set"],["100%","Approved on first submission"]],
        body: [
          "A boutique developer wanted a distinct architectural identity across a mid-rise residential portfolio without expanding their in-house design team.",
          "We developed a flexible facade kit-of-parts and matching floor plan configurations, letting the developer mix and match unit types while keeping every elevation visually cohesive."
        ],
        list: ["Modular facade system with 18 configurable variants","Floor plan library optimised for saleable area efficiency","Full permit-ready documentation set"]
      },
      "case-5": {
        eyebrow: "Commercial · Australia",
        title: "Precast Concrete Panel Detailing at Scale",
        pdf: "assets/case-studies/case-5-precast-panel-detailing.pdf",
        stats: [["1,100+","Panels detailed"],["0","Fabrication reworks"],["5 days","Shop drawing cycle"]],
        body: [
          "A precast manufacturer needed shop-ready panel detailing for a high-volume commercial rollout, with tight tolerances between panel connections and the structural steel frame.",
          "We built a repeatable detailing workflow that tracked every panel revision back to the structural model, eliminating the fabrication reworks that had slowed previous projects."
        ],
        list: ["Full panel and connection detailing for structural sign-off","Revision tracking synced to the live structural model","Standardised shop drawing templates across panel types"]
      },
      "case-6": {
        eyebrow: "Infrastructure · United States",
        title: "Rebar Services & Quantity Takeoffs",
        pdf: "assets/case-studies/case-6-rebar-services-quantity-takeoffs.pdf",
        stats: [["2,400t","Rebar detailed"],["±1.2%","Takeoff accuracy vs. as-built"],["6 days","Bar bending schedule turnaround"]],
        body: [
          "A rebar subcontractor needed fast, accurate bar bending schedules and quantity takeoffs to keep pace with an aggressive infrastructure pour schedule.",
          "Our detailing team worked directly from structural IFC drawings to produce schedules and takeoffs within days of issue, keeping fabrication and site delivery in lock-step with the pour program."
        ],
        list: ["Bar bending schedules issued within days of IFC drawings","Quantity takeoffs validated against as-built records","Direct coordination with site pour sequencing"]
      }
    };

    /* ---------- Scroll reveal ---------- */
    var revealTargets = document.querySelectorAll(".reveal-item, .exp-featured-card, .exp-case-card");
    if("IntersectionObserver" in window){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            entry.target.classList.add("rc-in");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      revealTargets.forEach(function(el, i){
        el.style.transitionDelay = Math.min(i * 45, 300) + "ms";
        io.observe(el);
      });
    } else {
      revealTargets.forEach(function(el){ el.classList.add("rc-in"); });
    }

    /* ---------- Animated counters ---------- */
    var counters = document.querySelectorAll(".exp-stat-num[data-target]");
    function animateCount(el){
      var target = parseInt(el.getAttribute("data-target"), 10) || 0;
      var start = 0, duration = 1200, startTime = null;
      function step(ts){
        if(!startTime) startTime = ts;
        var progress = Math.min((ts - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if(progress < 1) requestAnimationFrame(step);
        else el.textContent = target;
      }
      requestAnimationFrame(step);
    }
    if(counters.length && "IntersectionObserver" in window){
      var statObserver = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            animateCount(entry.target);
            statObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      counters.forEach(function(el){ statObserver.observe(el); });
    }

    /* ---------- Filtering ---------- */
    var grid = document.getElementById("casesGrid");
    var cards = grid ? Array.prototype.slice.call(grid.querySelectorAll(".exp-case-card")) : [];
    var emptyState = document.getElementById("casesEmpty");
    var resultsCount = document.getElementById("resultsCount");
    var clearBtn = document.getElementById("filterClear");
    var selects = {
      service: document.getElementById("filterService"),
      region: document.getElementById("filterRegion"),
      sector: document.getElementById("filterBuildType")
    };

    function currentFilters(){
      return {
        service: selects.service ? selects.service.value : "all",
        region: selects.region ? selects.region.value : "all",
        sector: selects.sector ? selects.sector.value : "all"
      };
    }

    function applyFilters(){
      var f = currentFilters();
      var visible = 0;
      cards.forEach(function(card){
        var matches =
          (f.service === "all" || card.getAttribute("data-service") === f.service) &&
          (f.region === "all" || card.getAttribute("data-region") === f.region) &&
          (f.sector === "all" || card.getAttribute("data-sector") === f.sector);
        card.classList.toggle("is-hidden", !matches);
        if(matches) visible++;
      });

      if(emptyState) emptyState.hidden = visible !== 0;

      if(resultsCount){
        var anyActive = f.service !== "all" || f.region !== "all" || f.sector !== "all";
        resultsCount.textContent = anyActive
          ? "Showing " + visible + " of " + cards.length + " case studies"
          : "";
      }

      Object.keys(selects).forEach(function(key){
        var pill = document.querySelector('.exp-filter-pill[data-pill="' + key + '"]');
        if(pill) pill.classList.toggle("is-active", f[key] !== "all");
      });

      if(clearBtn){
        var any = f.service !== "all" || f.region !== "all" || f.sector !== "all";
        clearBtn.classList.toggle("is-visible", any);
      }
    }

    Object.keys(selects).forEach(function(key){
      if(selects[key]) selects[key].addEventListener("change", applyFilters);
    });

    if(clearBtn){
      clearBtn.addEventListener("click", function(){
        Object.keys(selects).forEach(function(key){
          if(selects[key]) selects[key].value = "all";
        });
        applyFilters();
      });
    }

    applyFilters();

    /* ---------- Modal ---------- */
    var modal = document.getElementById("caseModal");
    var modalInner = document.getElementById("caseModalInner");
    var modalClose = document.getElementById("caseModalClose");
    var lastFocused = null;

    function renderCase(id){
      var data = CASES[id];
      if(!data || !modalInner) return;
      var statsHtml = data.stats.map(function(s){
        return '<div class="exp-modal-stat"><b>' + s[0] + '</b><span>' + s[1] + '</span></div>';
      }).join("");
      var bodyHtml = data.body.map(function(p){ return "<p>" + p + "</p>"; }).join("");
      var listHtml = data.list.map(function(li){ return "<li>" + li + "</li>"; }).join("");
      modalInner.innerHTML =
        '<span class="exp-modal-eyebrow">▪ ' + data.eyebrow + '</span>' +
        '<h3 class="exp-modal-title" id="caseModalTitle">' + data.title + '</h3>' +
        '<div class="exp-modal-stats">' + statsHtml + '</div>' +
        bodyHtml +
        '<h4>Scope highlights</h4>' +
        '<ul>' + listHtml + '</ul>' +
        renderDownloadCta(data);

      bindDownloadForm(id, data);
    }

    /* ---------- Gated PDF download CTA ----------
       Each case links to a PDF via CASES[id].pdf. Those files don't exist
       yet — drop the real PDFs at the paths below (or update the "pdf"
       field per case) once they're ready. Until then the download link
       will simply 404, which is expected. */
    function renderDownloadCta(data){
      if(!data.pdf) return "";
      return (
        '<div class="exp-modal-cta">' +
          '<button type="button" class="btn-hero exp-download-trigger" id="caseDownloadTrigger">' +
            'Download the full case study (PDF)' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>' +
          '</button>' +
          '<form class="exp-download-form" id="caseDownloadForm" novalidate>' +
            '<p class="exp-download-form-note">Enter your details — the PDF downloads right away, and we\u2019ll send a copy of the link to your inbox too.</p>' +
            '<div class="exp-download-fields">' +
              '<input type="text" id="caseDownloadName" name="name" placeholder="Full name" autocomplete="name" required>' +
              '<input type="email" id="caseDownloadEmail" name="email" placeholder="Work email (Gmail address)" autocomplete="email" required>' +
            '</div>' +
            '<p class="exp-download-error" id="caseDownloadError" hidden>Please enter your name and a valid Gmail address.</p>' +
            '<button type="submit" class="btn-hero exp-download-submit" id="caseDownloadSubmitBtn">Get the PDF</button>' +
          '</form>' +
          '<p class="exp-download-success" id="caseDownloadSuccess" hidden></p>' +
        '</div>'
      );
    }

    // Programmatically triggers a file download for the given URL.
    function triggerDownload(url, title){
      if(!url) return;
      var a = document.createElement("a");
      a.href = url;
      a.download = (title || "case-study")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") + ".pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    // Wires up the reveal-form CTA and the lead-capture submit handler.
    // Re-run every time renderCase() replaces modalInner's contents, since
    // innerHTML wipes out any previously bound listeners.
    function bindDownloadForm(id, data){
      var trigger = document.getElementById("caseDownloadTrigger");
      var form = document.getElementById("caseDownloadForm");
      var errorMsg = document.getElementById("caseDownloadError");
      var successMsg = document.getElementById("caseDownloadSuccess");
      if(!trigger || !form) return;

      trigger.addEventListener("click", function(){
        trigger.hidden = true;
        form.classList.add("is-open");
        var nameField = document.getElementById("caseDownloadName");
        if(nameField) nameField.focus();
      });

      form.addEventListener("submit", function(e){
        e.preventDefault();
        var nameField = document.getElementById("caseDownloadName");
        var emailField = document.getElementById("caseDownloadEmail");
        var submitBtn = document.getElementById("caseDownloadSubmitBtn");
        var name = nameField ? nameField.value.trim() : "";
        var email = emailField ? emailField.value.trim() : "";
        var emailOk = /^[^\s@]+@gmail\.com$/i.test(email);

        if(!name || !emailOk){
          if(errorMsg) errorMsg.hidden = false;
          return;
        }
        if(errorMsg) errorMsg.hidden = true;

        // Local download fires immediately regardless of email status —
        // the person shouldn't have to wait on a network request for the
        // thing they actually clicked the button for.
        triggerDownload(data.pdf, data.title);

        if(submitBtn){ submitBtn.disabled = true; submitBtn.textContent = "Sending\u2026"; }

        sendCaseStudyEmail(id, data, name, email)
          .then(function(sent){
            form.hidden = true;
            if(successMsg){
              successMsg.hidden = false;
              successMsg.textContent = sent
                ? "\u2713 Your download has started, and we\u2019ve emailed a copy of the link to " + email + "."
                : "\u2713 Your download has started. (We couldn\u2019t email a copy right now — the download link above still works.)";
            }
          });
      });
    }

    // Sends the PDF link via EmailJS. Resolves true/false (never rejects)
    // so a failed email never blocks the download the person already got.
    function sendCaseStudyEmail(id, data, name, email){
      if(!EMAILJS_READY) return Promise.resolve(false);

      var pdfLink = data.pdf.indexOf("http") === 0
        ? data.pdf
        : window.location.origin + "/" + data.pdf.replace(/^\//, "");

      return window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_name: name,
        to_email: email,
        case_title: data.title,
        pdf_link: pdfLink
      }).then(function(){ return true; })
        .catch(function(err){
          if(window.console && console.error) console.error("EmailJS send failed:", err);
          return false;
        });
    }

    function openModal(id, trigger){
      if(!modal) return;
      renderCase(id);
      lastFocused = trigger || document.activeElement;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      if(modalClose) modalClose.focus();
      document.addEventListener("keydown", onKeydown);
    }

    function closeModal(){
      if(!modal) return;
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeydown);
      if(lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    }

    function onKeydown(e){
      if(e.key === "Escape") closeModal();
    }

    document.querySelectorAll(".exp-case-link[data-case]").forEach(function(link){
      link.addEventListener("click", function(e){
        e.preventDefault();
        openModal(link.getAttribute("data-case"), link);
      });
    });

    if(modalClose) modalClose.addEventListener("click", closeModal);
    if(modal){
      modal.addEventListener("click", function(e){
        if(e.target === modal) closeModal();
      });
    }
  })();
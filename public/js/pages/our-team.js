(function(){

  const team = [
    {
      name:"Julian Ambrose",
      role:"General Manager",
      img:"assets/team/Julian-Ambrose.jpg",
      featured:true,
      disciplines:["structural","architectural","bim","estimating"],
      bio:[
        "An accomplished General Manager with extensive experience in commercial construction, known for driving business growth, operational excellence, and successful project delivery across a wide range of sectors. With a career spanning over two decades, Ray has led high-performing teams, overseen multimillion-dollar portfolios, and delivered complex commercial projects on time and within budget.",
        "Strategic and hands-on, Ray combines commercial acumen with deep construction knowledge to lead operations from project acquisition through to completion. He excels at building strong client and stakeholder relationships, implementing robust systems and processes, and fostering a culture of safety, accountability, and continuous improvement.",
        "A natural leader, Ray inspires teams to perform at their best, develops future leaders, and consistently aligns project outcomes with business objectives."
      ]
    },
    {
      name:"Kelvin Ryan",
      role:"Business Unit Manager — Aged Care",
      img:"assets/team/Kelvin-Ryan.jpg",
      featured:true,
      disciplines:["architectural","estimating"],
      bio:[
        "John brings deep sector expertise in aged care construction, overseeing delivery from early planning through to handover with a focus on compliance, quality, and resident-centred outcomes.",
        "He works closely with operators and design teams to ensure every project meets the specific operational needs of aged care environments."
      ]
    },
    {
      name:"Andrew Teo",
      role:"Business Unit Manager — Commercial",
      img:"assets/team/Andrew-Teo.jpg",
      featured:true,
      disciplines:["structural","bim"],
      bio:[
        "Richard leads the commercial portfolio, managing a diverse range of projects across retail, office, and mixed-use developments.",
        "His approach centres on transparent client partnerships and disciplined program and cost control."
      ]
    },
    {
      name:"Ray Daly",
      role:"Business Unit Manager — Regional",
      img:"assets/team/ray-daly.jpg",
      featured:true,
      disciplines:["architectural","estimating"],
      bio:[
        "Craig oversees regional delivery across Western Australia, bringing local knowledge and logistics expertise to remote and regional builds.",
        "He is committed to strong community engagement and supporting local trades and suppliers."
      ]
    },
    {
      name:"Steve Ball",
      role:"Construction Manager",
      img:"assets/team/steve-ball.jpg",
      featured:false,
      disciplines:["structural","bim"],
      bio:["Steve manages on-site delivery, coordinating trades, programs, and quality control to keep projects on schedule and to standard."]
    },
    {
      name:"Catherine Elliot",
      role:"Finance Manager",
      img:"assets/team/catherine-elliot.jpg",
      featured:false,
      disciplines:["estimating"],
      bio:["Catherine leads the finance function, ensuring rigorous financial governance and reporting across every project and business unit."]
    },

    {
      name:"Richard King",
      role:"HSEQ Manager",
      img:"assets/team/richard-king.jpg",
      featured:false,
      disciplines:["structural"],
      bio:["David champions health, safety, environment, and quality across every site, embedding a culture of accountability and continuous improvement."]
    }
  ];

  const grid = document.getElementById('teamGrid');
  const rosterEl = document.getElementById('roster');

  const viewIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"></path></svg>`;

  function initials(name){
    return name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
  }

  // Swaps a broken headshot for an initials avatar instead of leaving a
  // blank/broken container, so the layout never breaks even if an image
  // path is missing.
  function handleImgError(img, name, wrapSelector){
    img.addEventListener('error', function(){
      const wrap = img.closest(wrapSelector);
      if(!wrap) return;
      wrap.classList.add('img-fallback');
      img.remove();
      const span = document.createElement('span');
      span.className = 'avatar-fallback';
      span.textContent = initials(name);
      wrap.appendChild(span);
    }, { once: true });
  }

  team.filter(m => m.featured).forEach((m) => {
    const card = document.createElement('div');
    card.className = 'member-card';
    card.tabIndex = 0;
    card.dataset.disciplines = (m.disciplines || []).join(',');
    card.innerHTML = `
      <p class="member-name">${m.name}</p>
      <span class="member-role">${m.role}</span>
      <div class="frame">
        <span class="corner tl"></span>
        <span class="corner tr"></span>
        <span class="corner bl"></span>
        <span class="corner br"></span>
        <div class="glow-ring"></div>
        <div class="photo-wrap">
          <img src="${m.img}" alt="Portrait of ${m.name}" loading="lazy">
          <span class="scan"></span>
        </div>
        <span class="view-tag">${viewIcon} View profile</span>
      </div>
    `;
    grid.appendChild(card);
    handleImgError(card.querySelector('.photo-wrap img'), m.name, '.photo-wrap');
  });

  team.forEach((m, idx) => {
    const item = document.createElement('div');
    item.className = 'roster-item';
    item.style.animationDelay = (idx * 0.06 + 0.1) + 's';
    item.dataset.disciplines = (m.disciplines || []).join(',');

    const bioHtml = m.bio.map(p => `<p>${p}</p>`).join('');

    item.innerHTML = `
      <button class="roster-toggle" aria-expanded="${idx===0 ? 'true':'false'}">
        <span class="roster-titles">
          <span class="roster-name">${m.name}</span>
          <span class="roster-role">${m.role}</span>
        </span>
        <span class="roster-icon"><span class="bar h"></span><span class="bar v"></span></span>
      </button>
      <div class="roster-panel">
        <div class="roster-panel-inner">
          <div class="roster-photo">
            <span class="corner tl"></span>
            <span class="corner br"></span>
            <img src="${m.img}" alt="Portrait of ${m.name}" loading="lazy">
          </div>
          <div class="roster-bio">${bioHtml}</div>
        </div>
      </div>
    `;
    rosterEl.appendChild(item);
    handleImgError(item.querySelector('.roster-photo img'), m.name, '.roster-photo');

    const toggle = item.querySelector('.roster-toggle');
    const panel = item.querySelector('.roster-panel');

    function setOpen(open){
      item.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if(open){
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        requestAnimationFrame(() => { panel.style.maxHeight = '0px'; });
      }
    }
    item._setOpen = setOpen;

    toggle.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      rosterEl.querySelectorAll('.roster-item.open').forEach(other => {
        if(other !== item){
          other.classList.remove('open');
          other.querySelector('.roster-toggle').setAttribute('aria-expanded','false');
          other.querySelector('.roster-panel').style.maxHeight = '0px';
        }
      });
      setOpen(!isOpen);
    });

    if(idx === 0){
      requestAnimationFrame(() => setOpen(true));
    }
  });

  window.addEventListener('resize', () => {
    const openPanel = rosterEl.querySelector('.roster-item.open .roster-panel');
    if(openPanel){
      openPanel.style.maxHeight = 'none';
      const h = openPanel.scrollHeight;
      openPanel.style.maxHeight = h + 'px';
    }
  });

  /* ---------- Discipline filtering ---------- */
  const filterBar = document.getElementById('disciplineFilters');
  const emptyState = document.getElementById('disciplineEmpty');
  const memberCards = Array.from(grid.querySelectorAll('.member-card'));
  const rosterItems = Array.from(rosterEl.querySelectorAll('.roster-item'));

  function applyDisciplineFilter(discipline){
    let visibleRosterCount = 0;

    memberCards.forEach(card => {
      const list = (card.dataset.disciplines || '').split(',').filter(Boolean);
      const matches = discipline === 'all' || list.includes(discipline);
      card.classList.toggle('is-hidden', !matches);
    });

    rosterItems.forEach(item => {
      const list = (item.dataset.disciplines || '').split(',').filter(Boolean);
      const matches = discipline === 'all' || list.includes(discipline);
      item.classList.toggle('is-hidden', !matches);
      if(matches) visibleRosterCount++;
      if(!matches && item._setOpen) item._setOpen(false);
    });

    if(emptyState) emptyState.hidden = visibleRosterCount !== 0;

    // Keep exactly one visible roster item expanded for a sensible default view.
    const stillOpen = rosterItems.find(item => item.classList.contains('open') && !item.classList.contains('is-hidden'));
    if(!stillOpen){
      const firstVisible = rosterItems.find(item => !item.classList.contains('is-hidden'));
      if(firstVisible && firstVisible._setOpen) firstVisible._setOpen(true);
    }
  }

  if(filterBar){
    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.discipline-tag');
      if(!btn) return;
      filterBar.querySelectorAll('.discipline-tag').forEach(t => t.classList.remove('is-active'));
      btn.classList.add('is-active');
      applyDisciplineFilter(btn.dataset.discipline);
    });
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.style.animationPlayState = 'running';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.roster-item, .member-card').forEach(el => io.observe(el));

})();
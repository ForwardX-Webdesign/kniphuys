// ─── Team data ───────────────────────────────────────────────────────────────
const teamData = {
  susan: {
    name: 'Susan',
    role: 'Gastvrouw & Co-Owner',
    img: '/assets/images/PHOTO-2026-05-29-19-00-25.jpg',
    bio: 'Susan is samen met haar zus Sjoukje oprichtster van Het Kniphuys en SISKO Hair. Ze is het gastvrije gezicht van de salons en een vaste vraagbaak bij collega\'s. Met haar passie voor mooi en gezond haar geeft ze de klanten van de salons op maat gemaakt advies over kleuring, verzorging en SISKO hairweaves.',
    tags: ['Kleur & Highlights', 'SISKO Hairweaves', 'Advies op maat', 'Gastvrouw']
  },
  sanne: {
    name: 'Sanne',
    role: 'Topstylist',
    img: '/assets/images/Sanne.jpeg',
    bio: 'Met haar grote en trouwe klantenkring is Sanne een echte alleskunner bij Het Kniphuys. Ze denkt graag in oplossingen en blijft zichzelf ontwikkelen in de nieuwste trends en technieken. Niet voor niets boeken veel klanten graag een afspraak bij Sanne. Deze bijna-moeder is daarnaast een echte verbinder binnen het team.',
    tags: ['Knippen & Styling', 'Blow Dry', 'Highlights', 'Damesbehandelingen']
  },
  sjoukje: {
    name: 'Sjoukje',
    role: 'Topstylist & Co-Owner',
    img: '/assets/images/Sjoukje.png.jpeg',
    bio: 'Sjoukje brengt frisse energie en creatieve ideeën mee naar de salon. Na haar diploma met onderscheiding groeit ze snel uit tot een veelgevraagd teamlid met een eigen stijl.',
    tags: ['Knippen', 'Styling', 'Wenkbrauw shaping']
  },
  marcelle: {
    name: 'Marcelle',
    role: 'Topstylist',
    img: '/assets/images/Marcelle.jpeg',
    bio: 'Marcelle is sinds 2008 een vertrouwd gezicht en gespecialiseerd in het knippen en föhnen van kort haar van dames en het knippen van herenkapsels. Veel klanten genieten tijdens de behandeling extra van haar ontspannende wasmassage — dat momentje wordt vaak erg gewaardeerd. Marcelle is betrokken, gezellig en sociaal en werkt met veel aandacht en precisie. Naast haar werk bij Het Kniphuys is ze als moeder van twee topsportende kinderen veel onderweg en geniet ze vol trots van hun prestaties.',
    tags: ['Kort Haar Knippen', 'Herenkapsels', 'Föhnen & Styling', 'Wasmassage']
  },
  balou: {
    name: 'Balou',
    role: 'Stylist · SISKO Specialist',
    img: '/assets/images/Balou.jpeg',
    bio: 'Balou komt uit Zuid-Holland, maar verhuisde voor de liefde naar Noord-Holland, en wil hier nooit meer weg. Met haar passie voor SISKO hairweave behandelingen, lang haar en krullen is zij een geliefde styliste bij Het Kniphuys en SISKO Hair. In haar vrije tijd sport ze graag of wandelt ze met haar eigen krullenbol: labradoodle Mexx.',
    tags: ['SISKO Hairweaves', 'Lang Haar', 'Krullen & Styling', 'Knippen']
  },
  maddy: {
    name: 'Maddy',
    role: 'SISKO Specialist',
    img: '/assets/images/Maddy.jpeg',
    bio: 'Met haar talent en vrolijke energie is Maddy één van de hairweave specialistes bij Het Kniphuys en SISKO Hair. Ze weet iedereen blij te maken met prachtig, gezond en vol haar. Niet voor niets noemen haar collega\'s haar het zonnestraaltje, en die zon zoekt ze in haar vrije tijd het liefst op in Spanje.',
    tags: ['SISKO Hairweaves', 'Haarvolume', 'Lang Haar', 'Styling']
  },
  sharon: {
    name: 'Sharon',
    role: 'Stylist',
    img: '/assets/images/PHOTO-2026-05-29-17-04-03.jpg',
    bio: 'Sharon werkt één dag per week bij Het Kniphuys en runt daarnaast haar eigen kinderopvangbedrijf. Met haar warme, zorgzame karakter en gezelligheid stelt ze klanten graag op hun gemak tijdens een kleur- of knipbehandeling.',
    tags: ['Knippen', 'Kleurbehandeling', 'Damesbehandelingen']
  }
};

function openTeamModal(key) {
  const d = teamData[key];
  if (!d) return;
  const tags = d.tags.map(t => `<span class="team-modal__tag">${t}</span>`).join('');
  document.getElementById('team-modal-box').innerHTML = `
    <button class="team-modal__close" onclick="closeTeamModal()">✕</button>
    <img class="team-modal__photo" src="${d.img}" alt="${d.name}" />
    <div class="team-modal__body">
      <p class="team-modal__name">${d.name}</p>
      <span class="team-modal__role">${d.role}</span>
      <p class="team-modal__bio">${d.bio}</p>
      <div class="team-modal__specialties">${tags}</div>
    </div>`;
  document.getElementById('team-modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeTeamModal() {
  document.getElementById('team-modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

function teamCarouselNav(dir) {
  const track = document.getElementById('team-carousel');
  if (!track) return;
  const card = track.querySelector('.team-card');
  const gap = 20;
  track.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: 'smooth' });
}

// ─── Treatment modals ─────────────────────────────────────────────────────────
const modals = {
  knippen: {
    img: 'https://kniphuys.jouwsalonwebsite.nl/wp-content/uploads/2026/02/574938368_18389678824131834_3789684413734264131_n.webp',
    title: 'Knippen & Styling',
    intro: 'Elke knipbeurt inclusief uitgebreide wasmassage en professioneel modeldrogen. Wij adviseren graag over de beste look voor jouw haartype.',
    prices: [
      { name: 'Heer; wasmassage, knippen, styling', desc: '', price: '€ 41,50' },
      { name: 'Heer; Tondeuse', desc: 'Volledig scheren', price: '€ 27,00' },
      { name: 'Dame: kort haar', desc: 'Wasmassage, knippen, model drogen', price: '€ 52,00' },
      { name: 'Dame: half lang haar', desc: 'Wasmassage, knippen, model drogen', price: '€ 59,00' },
      { name: 'Dame: lang haar', desc: 'Wasmassage, knippen, model drogen', price: '€ 64,50' },
      { name: 'Jeugd 0–8 jaar', desc: '', price: '€ 31,00' },
      { name: 'Jeugd 9–12 jaar', desc: '', price: '€ 32,50' },
      { name: 'Jeugd 13–15 jaar', desc: '', price: '€ 36,00' },
      { name: 'Jeugd halflang/dik haar', desc: '', price: '€ 45,00' },
    ]
  },
  sisko: {
    img: 'https://kniphuys.jouwsalonwebsite.nl/wp-content/uploads/2026/02/499580266_18367884391131834_5986081825765366486_n-1024x1024.webp',
    title: 'SISKO Hairweaves',
    intro: '100% Remy Human Hair, onzichtbaar verwerkt voor extra volume of lengte. Onze stylisten zijn gecertificeerd SISKO-specialisten.',
    prices: [
      { name: '1 kabeltje opnieuw plaatsen', desc: '1 weave kabeltje SISKO inzetten', price: '€ 87,50' },
      { name: '2 kabeltjes opnieuw plaatsen', desc: '2 weave kabeltjes SISKO inzetten', price: '€ 117,00' },
      { name: '1 kabeltje incl. wasmassage + treatment', desc: '', price: '€ 119,50' },
      { name: '2 kabeltjes incl. wasmassage + treatment', desc: '', price: '€ 149,00' },
      { name: 'Adviesgesprek SISKO', desc: '30 min. vrijblijvend', price: 'Gratis' },
    ]
  },
  bruid: {
    img: 'https://kniphuys.jouwsalonwebsite.nl/wp-content/uploads/2026/02/518842103_18374612533131834_65940647430071797_n-819x1024.webp',
    title: 'Bruidskapsels',
    intro: 'Jouw droomkapsel op de mooiste dag van je leven. Wij werken samen met jou aan het perfecte bruidslook, inclusief proefkap en styling op de dag zelf.',
    prices: [
      { name: 'Bruidskapsel', desc: 'Inclusief proefkap', price: 'Op aanvraag' },
      { name: 'Bruidskapsel bruidsmeisjes', desc: '', price: 'Op aanvraag' },
      { name: 'Makeup & haar combinatie', desc: 'In overleg', price: 'Op aanvraag' },
    ]
  },
  kleur: {
    img: 'https://kniphuys.jouwsalonwebsite.nl/wp-content/uploads/2026/02/609719948_18110539555722873_1833181370887761186_n.webp',
    title: 'Haarkleur',
    intro: 'Van een subtiele highlight tot een complete kleurverandering. Wij werken met Davines en Wella voor de mooiste, meest duurzame kleurresultaten.',
    prices: [
      { name: 'Adviesgesprek kleur + model', desc: 'Wordt gereduceerd bij behandeling v.a. €90', price: '€ 22,00' },
      { name: 'Cover My Hair (basiskleur)', desc: 'Kort / halflang / lang', price: 'Op aanvraag' },
      { name: 'Highlight Your Hair', desc: 'Gedeeltelijk of volledig hoofd', price: 'Op aanvraag' },
      { name: 'Cover & Shine', desc: 'Basiskleur + highlights combinatie', price: 'Op aanvraag' },
      { name: 'Wenkbrauw shaping', desc: 'Incl. kleur indien gewenst', price: '€ 39,00' },
    ]
  }
};

function openModal(type) {
  const data = modals[type];
  if (!data) return;
  const priceRows = data.prices.map(p => `
    <div class="modal__price-row">
      <div class="modal__price-info">
        <p class="modal__price-name">${p.name}</p>
        ${p.desc ? `<p class="modal__price-desc">${p.desc}</p>` : ''}
      </div>
      <div class="modal__price-dots"></div>
      <span class="modal__price-amount ${p.price === 'Op aanvraag' ? 'modal__price-amount--request' : ''}">${p.price}</span>
    </div>`).join('');

  document.getElementById('modal-content').innerHTML = `
    <div class="modal__header">
      <img src="${data.img}" alt="${data.title}" />
      <div class="modal__header-overlay">
        <h2 class="modal__header-title">${data.title}</h2>
      </div>
    </div>
    <div class="modal__body">
      <p class="modal__intro">${data.intro}</p>
      <div class="modal__price-list">${priceRows}</div>
      <div class="modal__actions">
        <a class="btn btn--primary" href="https://kniphuys.mijnsalon.nl/" target="_blank">Afspraak Maken</a>
        <a class="btn btn--outline-dark" href="/behandelingen/">Alle tarieven</a>
      </div>
    </div>`;

  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(e, force) {
  if (force || (e && e.target === document.getElementById('modal-overlay'))) {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ─── Keyboard shortcuts ───────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal(null, true);
    closeTeamModal();
    closeDrawer();
    // Lightbox (galerij page)
    if (typeof closeLight === 'function') closeLight();
  }
});

// ─── Hero slider ──────────────────────────────────────────────────────────────
(function() {
  const slides = document.querySelectorAll('.hero__slide');
  const dots = document.querySelectorAll('.hero__dot');
  if (!slides.length) return;
  let current = 0;
  function goTo(i) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = i;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }
  window.heroGoTo = goTo;
  setInterval(() => goTo((current + 1) % slides.length), 5500);
})();

// ─── Hamburger menu ───────────────────────────────────────────────────────────
const hamburger = document.getElementById('nav-hamburger');
const drawer = document.getElementById('nav-drawer');
if (hamburger && drawer) {
  hamburger.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    hamburger.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
}

function closeDrawer() {
  if (!drawer || !hamburger) return;
  drawer.classList.remove('open');
  hamburger.classList.remove('active');
  document.body.style.overflow = '';
}

// ─── Gallery toggle ───────────────────────────────────────────────────────────
function toggleGalerij() {
  const hidden = document.querySelectorAll('.galerij__item--hidden');
  const btn = document.getElementById('galerij-btn');
  if (!btn) return;
  const isOpen = btn.textContent.includes('minder');
  hidden.forEach(el => el.classList.toggle('show', !isOpen));
  btn.textContent = isOpen ? "Bekijk meer foto's" : "Bekijk minder foto's";
}

// ─── FAQ accordion ────────────────────────────────────────────────────────────
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isActive = item.classList.contains('active');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
  if (!isActive) item.classList.add('active');
}

// ─── Behandelingen pagina filter ─────────────────────────────────────────────
function filter(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.price-section').forEach(sec => {
    if (cat === 'all' || sec.dataset.cat === cat) {
      sec.classList.remove('price-section--hidden');
    } else {
      sec.classList.add('price-section--hidden');
    }
  });

  if (cat !== 'all') {
    const target = document.querySelector(`[data-cat="${cat}"]`);
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    }
  }
}

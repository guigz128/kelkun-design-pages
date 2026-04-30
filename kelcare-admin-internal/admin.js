/* ================================================
   KELCARE ADMIN INTERNAL — SHARED.JS
   Tableau de bord interne Kelcare
   Cockpit DAF / Direction Op / Account Management / DG
   ================================================ */

/* ---- Lucide SVG icons ---- */
const ICONS = {
  'home':         '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  'building':     '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
  'wrench':       '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  'file-text':    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  'network':      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>',
  'cpu':          '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="14" x2="22" y2="14"/><line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="14" x2="4" y2="14"/></svg>',
  'euro':         '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h12"/><path d="M4 14h12"/><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"/></svg>',
  'trending-up':  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  'file-bar-chart':'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 18v-2"/><path d="M12 18v-4"/><path d="M16 18v-6"/></svg>',
  'settings':     '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  'download':     '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  'bell':         '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
  'arrow-right':  '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  'chevron-down': '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  'alert':        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
  'search':       '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  'filter':       '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
  'refresh':      '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
};

/* ---- Navigation principale ---- */
const NAV = [
  {
    section: 'Pilotage',
    items: [
      { id: 'index',         label: 'Vue globale',                href: 'index.html',       icon: 'home' },
    ]
  },
  {
    section: 'Portefeuille',
    items: [
      { id: 'comptes',       label: 'Comptes prescripteurs',      href: 'comptes.html',     icon: 'building' },
      { id: 'interventions', label: 'Interventions & annulations', href: 'interventions.html', icon: 'wrench' },
      { id: 'devis',         label: 'Devis',                      href: 'devis.html',       icon: 'file-text' },
      { id: 'reseaux',       label: 'Réseaux',                    href: 'reseaux.html',     icon: 'network' },
    ]
  },
  {
    section: 'Performance',
    items: [
      { id: 'operations',    label: 'Opérations',                 href: 'operations.html',  icon: 'cpu' },
      { id: 'finance',       label: 'Finance',                    href: 'finance.html',     icon: 'euro' },
      { id: 'mrr',           label: 'MRR & abonnements',          href: 'mrr.html',         icon: 'trending-up' },
    ]
  },
  {
    section: 'Outils',
    items: [
      { id: 'reporting',     label: 'Reporting',                  href: 'reporting.html',   icon: 'file-bar-chart' },
    ]
  },
];

const USER = { initials: 'GP', name: 'Guillaume Pons', role: 'Direction · Kelcare' };

/* ---- Build sidebar ---- */
function buildSidebar(currentPage) {
  const aside = document.createElement('aside');
  aside.className = 'sidebar admin-sidebar';

  aside.innerHTML = `
    <div class="sidebar-logo">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#03c5b8"/><path d="M10 10h4v12h-4zM18 14h4v8h-4z" fill="#fff"/></svg>
      <div class="sidebar-logo-text">
        <strong>Kelcare</strong>
        <span class="sidebar-badge admin">Admin interne</span>
      </div>
    </div>
  `;

  NAV.forEach(section => {
    const div = document.createElement('div');
    div.className = 'sidebar-section';
    div.innerHTML = `<div class="sidebar-section-title">${section.section}</div>`;

    const ul = document.createElement('ul');
    ul.className = 'sidebar-nav';

    section.items.forEach(item => {
      const li = document.createElement('li');
      const cls = item.id === currentPage ? ' class="active"' : '';
      li.innerHTML = `<a href="${item.href}"${cls}>${ICONS[item.icon] || ''}${item.label}</a>`;
      ul.appendChild(li);
    });

    div.appendChild(ul);
    aside.appendChild(div);
  });

  // User panel bas de sidebar
  const userPanel = document.createElement('div');
  userPanel.className = 'sidebar-user';
  userPanel.innerHTML = `
    <div class="sidebar-user-avatar">${USER.initials}</div>
    <div class="sidebar-user-info">
      <div class="sidebar-user-name">${USER.name}</div>
      <div class="sidebar-user-role">${USER.role}</div>
    </div>
    ${ICONS['settings']}
  `;
  aside.appendChild(userPanel);

  return aside;
}

/* ---- Build topbar ---- */
function buildTopbar(title, subtitle) {
  const header = document.createElement('header');
  header.className = 'topbar admin-topbar';
  header.innerHTML = `
    <div class="topbar-left">
      <div class="topbar-title">${title}</div>
      <div class="topbar-subtitle">${subtitle}</div>
    </div>
    <div class="topbar-right">
      <button class="btn topbar-icon-btn" type="button" title="Notifications">
        ${ICONS['bell']}
        <span class="topbar-badge">3</span>
      </button>
      <button class="btn" type="button">${ICONS['download']} Exporter</button>
      <button class="btn btn-primary" type="button">${ICONS['file-bar-chart']} Générer un reporting</button>
    </div>
  `;
  return header;
}

/* ---- Build filters bar (filtres globaux du spec) ---- */
function buildFilters(opts) {
  const options = opts || {};
  const bar = document.createElement('div');
  bar.className = 'filters-bar admin-filters';

  const today = new Date();
  const firstOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const toISO = (d) => d.toISOString().slice(0, 10);

  bar.innerHTML = `
    <div class="filter-group filter-period">
      <span class="filter-label">Période</span>
      <div class="period-picker">
        <select class="filter-select period-preset" data-period-preset>
          <option value="this-month">Ce mois</option>
          <option value="last-month">Mois précédent</option>
          <option value="this-quarter">Ce trimestre</option>
          <option value="this-year">Cette année</option>
          <option value="last-7">7 derniers jours</option>
          <option value="last-30">30 derniers jours</option>
          <option value="custom">Plage personnalisée…</option>
        </select>
        <div class="period-range" data-period-range>
          <input type="date" class="filter-date period-from" value="${toISO(firstOfMonth)}" aria-label="Du">
          <span class="period-range-sep">→</span>
          <input type="date" class="filter-date period-to" value="${toISO(today)}" aria-label="Au">
        </div>
      </div>
    </div>

    <div class="filter-group">
      <span class="filter-label">Compte</span>
      <div class="account-search">
        ${ICONS['search']}
        <input type="text" class="account-search-input" placeholder="Rechercher un compte…" autocomplete="off">
        <span class="account-search-count">19</span>
        <div class="account-search-results" hidden>
          <div class="account-search-section">Tous les comptes</div>
          <div class="account-search-item" data-id="all"><strong>Tous les comptes</strong><span>19 comptes · 8 enfants</span></div>
          <div class="account-search-section">Parents consolidés</div>
          <div class="account-search-item"><strong>MDPA</strong><span>Parent · 3 enfants</span></div>
          <div class="account-search-item"><strong>AXA</strong><span>Parent · 2 enfants</span></div>
          <div class="account-search-item"><strong>Abeille</strong><span>Parent · 2 enfants</span></div>
          <div class="account-search-item"><strong>Monceau</strong><span>Parent · 1 enfant</span></div>
          <div class="account-search-item"><strong>Stelliant</strong><span>Parent · 0 enfant</span></div>
          <div class="account-search-section">Parents sans Enfant</div>
          <div class="account-search-item"><strong>Kelcare Direct</strong><span>Direct</span></div>
          <div class="account-search-item"><strong>Habitat &amp; Co</strong><span>Direct</span></div>
          <div class="account-search-item"><strong>Maison Sérénité</strong><span>Direct</span></div>
          <div class="account-search-item"><strong>Réno Assistance</strong><span>Direct</span></div>
        </div>
      </div>
    </div>

    <div class="filter-group">
      <span class="filter-label">Type</span>
      <select class="filter-select">
        <option>Tous les comptes</option>
        <option>Parent consolidé</option>
        <option>Enfant / agence</option>
        <option>Parent sans Enfant</option>
      </select>
    </div>

    <div class="filter-group">
      <span class="filter-label">Réseau</span>
      <select class="filter-select">
        <option>Tous</option>
        <option>Réseau Kelkun</option>
        <option>Réseau prescripteur</option>
      </select>
    </div>

    <div class="filter-group">
      <span class="filter-label">Statut</span>
      <select class="filter-select">
        <option>Tous statuts</option>
        <option>En attente</option>
        <option>Qualifiée</option>
        <option>Artisan attribué</option>
        <option>RDV fixé</option>
        <option>Devis reçu</option>
        <option>En travaux</option>
        <option>Terminée</option>
        <option>Annulée</option>
        <option>Hors SLA</option>
      </select>
    </div>

    <div class="filters-spacer"></div>

    <button class="btn btn-ghost" type="button" title="Filtres avancés">${ICONS['filter']} Plus de filtres</button>
    <button class="btn btn-ghost" type="button" title="Réinitialiser">${ICONS['refresh']} Réinitialiser</button>
  `;

  return bar;
}

/* ---- Period picker behavior ---- */
document.addEventListener('change', (e) => {
  if (e.target.matches('[data-period-preset]')) {
    const wrap = e.target.closest('.period-picker');
    if (!wrap) return;
    const from = wrap.querySelector('.period-from');
    const to = wrap.querySelector('.period-to');
    const today = new Date();
    const toISO = (d) => d.toISOString().slice(0, 10);
    const setDates = (start, end) => { from.value = toISO(start); to.value = toISO(end); };
    switch (e.target.value) {
      case 'this-month':   setDates(new Date(today.getFullYear(), today.getMonth(), 1), today); break;
      case 'last-month':   setDates(new Date(today.getFullYear(), today.getMonth() - 1, 1), new Date(today.getFullYear(), today.getMonth(), 0)); break;
      case 'this-quarter': setDates(new Date(today.getFullYear(), Math.floor(today.getMonth()/3)*3, 1), today); break;
      case 'this-year':    setDates(new Date(today.getFullYear(), 0, 1), today); break;
      case 'last-7':       { const d = new Date(today); d.setDate(d.getDate() - 7); setDates(d, today); break; }
      case 'last-30':      { const d = new Date(today); d.setDate(d.getDate() - 30); setDates(d, today); break; }
    }
  }
});

/* ---- Account search ---- */
document.addEventListener('input', (e) => {
  if (!e.target.classList.contains('account-search-input')) return;
  const q = e.target.value.trim().toLowerCase();
  const results = e.target.parentElement.querySelector('.account-search-results');
  if (!results) return;
  results.hidden = false;
  results.querySelectorAll('.account-search-item').forEach(it => {
    const txt = it.textContent.toLowerCase();
    it.style.display = txt.includes(q) ? '' : 'none';
  });
});
document.addEventListener('focusin', (e) => {
  if (e.target.classList.contains('account-search-input')) {
    const results = e.target.parentElement.querySelector('.account-search-results');
    if (results) results.hidden = false;
  }
});
document.addEventListener('click', (e) => {
  const item = e.target.closest('.account-search-item');
  if (item) {
    const search = item.closest('.account-search');
    const input = search.querySelector('.account-search-input');
    input.value = item.querySelector('strong').textContent;
    search.querySelector('.account-search-results').hidden = true;
    return;
  }
  if (!e.target.closest('.account-search')) {
    document.querySelectorAll('.account-search-results').forEach(r => r.hidden = true);
  }
});

/* ---- Force scroll to top ---- */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  const page = body.dataset.page || 'index';
  const title = body.dataset.title || 'Tableau de bord interne Kelcare';
  const subtitle = body.dataset.subtitle || '';

  const mainEl = body.querySelector('.main');
  if (mainEl) {
    body.insertBefore(buildSidebar(page), mainEl);
    mainEl.insertBefore(buildTopbar(title, subtitle), mainEl.firstChild);
  }

  // Inject filters bar
  const filtersTarget = document.getElementById('filtersBar');
  if (filtersTarget) filtersTarget.replaceWith(buildFilters());

  animateEntrance();
  initScrollReveal();
  animateCounters();
});

/* ---- Wow effects ---- */
function animateEntrance() {
  const targets = document.querySelectorAll('.kpi-card, .card, .axis-summary, .versus-card, .section-card, .doc-card');
  targets.forEach((el, i) => {
    el.classList.add('animate-in');
    el.style.animationDelay = (i * 0.04) + 's';
  });
}

function initScrollReveal() {
  const sections = document.querySelectorAll('.section-title, .grid-2, .grid-3, .grid-2-1, .grid-1-2, .section-card-header');
  sections.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function animateCounters() {
  const kpiValues = document.querySelectorAll('.kpi-value, .v-val');
  kpiValues.forEach(el => {
    const originalHTML = el.innerHTML;
    el.dataset.finalHtml = originalHTML;
    const text = el.textContent.trim();
    const match = text.match(/^([\d\s,.]+)/);
    if (!match) return;
    const raw = match[1].trim();
    const isDecimal = raw.includes(',');
    const numStr = raw.replace(/\s/g, '').replace(',', '.');
    const target = parseFloat(numStr);
    if (isNaN(target) || target === 0) return;
    const unitSpan = el.querySelector('.unit');
    const unitHTML = unitSpan ? unitSpan.outerHTML : '';
    const duration = 800;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      let display;
      if (isDecimal) display = current.toFixed(1).replace('.', ',');
      else if (target >= 1000) display = Math.round(current).toLocaleString('fr-FR');
      else display = Math.round(current).toString();
      el.innerHTML = display + unitHTML;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

/* ---- Chart.js defaults ---- */
function applyChartDefaults() {
  if (typeof Chart === 'undefined') return;
  Chart.defaults.font.family = 'Poppins';
  Chart.defaults.font.size = 11;
  Chart.defaults.color = '#a3a3a3';
}
applyChartDefaults();

/* ---- Couleurs Kelcare standardisées pour charts ---- */
const KC_COLORS = {
  primary:    '#03c5b8', // turquoise — activité
  primaryLight: 'rgba(3,197,184,0.12)',
  secondary:  '#0e2f58', // navy — réseau prescripteur
  secondaryLight: 'rgba(14,47,88,0.10)',
  accent:     '#6778ed', // violet — finance / revenu
  accentLight:'rgba(103,120,237,0.12)',
  success:    '#3faf38', // vert — positif
  successLight:'rgba(63,175,56,0.12)',
  warning:    '#c27b30', // orange — attention
  warningLight:'rgba(194,123,48,0.12)',
  error:      '#fa4a57', // rouge — annulation, hors SLA, retard, impayé
  errorLight: 'rgba(250,74,87,0.12)',
  info:       '#3cb0f5', // bleu — réseau
  infoLight:  'rgba(60,176,245,0.12)',
};

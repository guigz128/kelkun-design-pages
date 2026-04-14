/* ================================================
   DATAROOM KELCARE V4 — SHARED.JS
   Nav : Synthèse / Déploiement / Comparative
   + switch scope Maison mère / Agence (bas sidebar)
   ================================================ */

/* ---- Lucide SVG icons ---- */
const ICONS = {
  'grid-2x2':    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  'users':       '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  'search':      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  'chevron-down':'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  'chevron-right':'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
  'download':    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  'arrow-right': '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  'user':        '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>',
  'file-check':  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>',
  'file-x':      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></svg>',
  'file-text':   '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  'graduation-cap':'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 8 3 12 0v-5"/></svg>',
  'network':     '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>',
  'zap':         '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  'bar-chart':   '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><rect x="7" y="10" width="3" height="8" rx="1"/><rect x="14" y="6" width="3" height="12" rx="1"/></svg>',
};

/* ---- Nav V4 (parent/maison mère) ---- */
const NAV_PARENT = [
  { section: 'Maison mère', items: [
    { id: 'synthese',    label: 'Synthèse',       href: 'synthese.html',    icon: 'grid-2x2' },
    { id: 'deploiement', label: 'Déploiement',    href: 'deploiement.html', icon: 'users' },
    { id: 'comparative', label: 'Vue comparative', href: 'comparative.html', icon: 'search' },
  ]}
];

/* ---- Nav V4 (enfant/agence) ---- */
const NAV_ENFANT = [
  { section: 'Agence', items: [
    { id: 'agence', label: 'Tableau de bord', href: 'agence.html', icon: 'grid-2x2' },
  ]}
];

const PARENT_PAGES = new Set(['synthese', 'deploiement', 'comparative', 'artisans-detail', 'artisan-fiche']);
const ENFANT_PAGES = new Set(['agence']);

const ENTITY = { avatar: 'MP', name: 'Mutuelle de Poitiers', role: 'Parent — 20 agences' };
const AGENCE = { code: 'LR', name: 'Agence La Rochelle', role: 'Enfant — 12 artisans' };

/* ---- Build sidebar ---- */
function buildSidebar(currentPage) {
  const aside = document.createElement('aside');
  aside.className = 'sidebar';

  const isEnfant = ENFANT_PAGES.has(currentPage);
  const nav = isEnfant ? NAV_ENFANT : NAV_PARENT;

  aside.innerHTML = `
    <div class="sidebar-logo">
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#03c5b8"/><path d="M10 10h4v12h-4zM18 14h4v8h-4z" fill="#fff"/></svg>
      <strong style="font-size:15px;">Kelcare</strong>
      <span class="sidebar-badge">DataRoom</span>
    </div>
  `;

  nav.forEach(section => {
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

  const scope = document.createElement('div');
  scope.className = 'scope-switch';
  scope.innerHTML = `
    <div class="scope-switch-label">Vue en cours</div>
    <a href="synthese.html" class="scope-switch-item${!isEnfant ? ' active' : ''}">
      <div class="scope-switch-avatar mdpa"><img src="mdpa-logo.svg" alt="MDPA"></div>
      <div class="scope-switch-info">
        <div class="scope-switch-name">${ENTITY.name}</div>
        <div class="scope-switch-role">${ENTITY.role}</div>
      </div>
      ${!isEnfant ? '<span class="scope-switch-dot"></span>' : ''}
    </a>
    <a href="agence.html" class="scope-switch-item${isEnfant ? ' active' : ''}">
      <div class="scope-switch-avatar agence">${AGENCE.code}</div>
      <div class="scope-switch-info">
        <div class="scope-switch-name">${AGENCE.name}</div>
        <div class="scope-switch-role">${AGENCE.role}</div>
      </div>
      ${isEnfant ? '<span class="scope-switch-dot"></span>' : ''}
    </a>
  `;
  aside.appendChild(scope);

  return aside;
}

/* ---- Build topbar ---- */
function buildTopbar(title, subtitle, opts) {
  const header = document.createElement('header');
  header.className = 'topbar';

  const options = opts || {};

  header.innerHTML = `
    <div class="topbar-left">
      <div class="topbar-title">${title}</div>
      <div class="topbar-subtitle">${subtitle}</div>
    </div>
    <div class="topbar-brand">
      <img src="mdpa-logo.svg" alt="Mutuelle de Poitiers Assurances">
      <div class="topbar-brand-text">
        <strong>Votre assureur vous connaît</strong>
        <span>et pour vous ça change tout !</span>
      </div>
    </div>
    <div class="topbar-right">
      <button class="btn" onclick="exportPdf()">${ICONS['download']} Exporter PDF</button>
    </div>
  `;

  return header;
}

/* ---- Build filters bar ---- */
function buildFilters(options) {
  const bar = document.createElement('div');
  bar.className = 'filters-bar';
  options = options || {};

  bar.innerHTML += `
    <div class="filter-group">
      <span class="filter-label">Période</span>
      <select class="filter-select">
        <option>Ce mois</option><option>Ce trimestre</option><option>Cette année</option><option>Depuis le lancement</option>
      </select>
    </div>
  `;

  if (options.showEntity !== false) {
    bar.innerHTML += `
      <div class="filter-group">
        <span class="filter-label">Agence</span>
        <select class="filter-select">
          <option>Toutes les agences</option><option>Agence Poitiers Centre</option><option>Agence Niort</option><option>Agence La Rochelle</option><option>Agence Angoulême</option>
        </select>
      </div>
    `;
  }

  if (options.showReseau !== false) {
    bar.innerHTML += `
      <div class="filter-group">
        <span class="filter-label">Réseau</span>
        <select class="filter-select">
          <option>Tous</option><option>Réseau MDPA</option><option>Réseau Kelcare</option>
        </select>
      </div>
    `;
  }

  bar.innerHTML += '<div class="filters-spacer"></div>';

  if (options.extraFilters) {
    bar.innerHTML += options.extraFilters;
  }

  return bar;
}

/* ---- Force scroll to top ---- */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  const page = body.dataset.page || 'synthese';
  const title = body.dataset.title || 'DataRoom';
  const subtitle = body.dataset.subtitle || '';

  const mainEl = body.querySelector('.main');
  if (mainEl) {
    body.insertBefore(buildSidebar(page), mainEl);
    mainEl.insertBefore(buildTopbar(title, subtitle), mainEl.firstChild);
  }

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
      if (isDecimal) {
        display = current.toFixed(1).replace('.', ',');
      } else if (target >= 1000) {
        display = Math.round(current).toLocaleString('fr-FR');
      } else {
        display = Math.round(current).toString();
      }

      el.innerHTML = display + unitHTML;

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  });
}

/* ---- Utilities ---- */
function formatFr(n) {
  return n.toLocaleString('fr-FR');
}

/* ---- Avant print : figer valeurs finales des compteurs ---- */
window.addEventListener('beforeprint', () => {
  document.querySelectorAll('[data-final-html]').forEach(el => {
    el.innerHTML = el.dataset.finalHtml;
  });
});

/* ---- Export PDF (filename MDPA + date) ---- */
function exportPdf() {
  const page = document.body.dataset.page || 'synthese';
  const pageLabel = {
    synthese: 'synthese',
    agence: 'agence-la-rochelle',
    deploiement: 'deploiement',
    comparative: 'comparative'
  }[page] || page;

  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const stamp = `${yyyy}-${mm}-${dd}`;

  const filename = `mutuelle-de-poitiers-kelcare-${pageLabel}-${stamp}`;

  // Update print cover date if present
  const coverDate = document.getElementById('printCoverDate');
  if (coverDate) {
    const dateLabel = d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
    coverDate.textContent = dateLabel;
  }

  const originalTitle = document.title;
  document.title = filename;

  const afterPrint = () => {
    document.title = originalTitle;
    window.removeEventListener('afterprint', afterPrint);
  };
  window.addEventListener('afterprint', afterPrint);

  setTimeout(() => window.print(), 50);
}

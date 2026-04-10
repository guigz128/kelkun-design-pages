/* ================================================
   DATAROOM KELCARE V2 — SHARED.JS
   Sidebar, topbar, filtres, utilitaires
   ================================================ */

/* ---- Lucide SVG icons (inline) ---- */
const ICONS = {
  'grid-2x2':    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  'users':       '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  'clock':       '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  'euro':        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h12"/><path d="M4 14h12"/><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"/></svg>',
  'alert-triangle':'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  'shield-check':'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
  'bar-chart':   '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><rect x="7" y="10" width="3" height="8" rx="1"/><rect x="14" y="6" width="3" height="12" rx="1"/></svg>',
  'chevron-down':'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  'download':    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  'user':        '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>',
};

/* ---- Navigation config ---- */
const NAV = [
  { section: 'Navigation', items: [
    { id: 'synthese',    label: 'Synthèse',                  href: 'synthese.html',    icon: 'grid-2x2' },
    { id: 'deploiement', label: 'Déploiement',               href: 'deploiement.html', icon: 'users' },
    { id: 'excellence',  label: 'Excellence opérationnelle',  href: 'excellence.html',  icon: 'clock' },
    { id: 'impact',      label: 'Impact financier',           href: 'impact.html',      icon: 'euro' },
    { id: 'incidences',  label: 'Incidences opérationnelles', href: 'incidences.html',  icon: 'alert-triangle' },
    { id: 'quoteguard',  label: 'QuoteGuard IA',              href: 'quoteguard.html',  icon: 'shield-check' },
  ]},
  { section: 'Comparaison', items: [
    { id: 'comparative', label: 'Vue comparative', href: 'comparative.html', icon: 'bar-chart' },
  ]}
];

const ENTITY = { avatar: 'MP', name: 'Mutuelle de Poitiers', role: 'Parent — 20 agences' };

/* ---- Build sidebar ---- */
function buildSidebar(currentPage) {
  const aside = document.createElement('aside');
  aside.className = 'sidebar';

  // Logo
  aside.innerHTML = `
    <div class="sidebar-logo">
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#03c5b8"/><path d="M10 10h4v12h-4zM18 14h4v8h-4z" fill="#fff"/></svg>
      <strong style="font-size:15px;">Kelcare</strong>
      <span class="sidebar-badge">DataRoom</span>
    </div>
  `;

  // Sections
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

  // Entity card
  const entity = document.createElement('div');
  entity.className = 'sidebar-entity';
  entity.innerHTML = `
    <div class="sidebar-entity-avatar">${ENTITY.avatar}</div>
    <div class="sidebar-entity-info">
      <div class="sidebar-entity-name">${ENTITY.name}</div>
      <div class="sidebar-entity-role">${ENTITY.role}</div>
    </div>
    ${ICONS['chevron-down']}
  `;
  aside.appendChild(entity);

  return aside;
}

/* ---- Build topbar ---- */
function buildTopbar(title, subtitle, isEnfant) {
  const header = document.createElement('header');
  header.className = 'topbar';

  const levelBadge = isEnfant
    ? `<span class="badge-level enfant">${ICONS['user']} Enfant</span>`
    : `<span class="badge-level parent">${ICONS['user']} Parent</span>`;

  header.innerHTML = `
    <div class="topbar-left">
      <div class="topbar-title">${title}</div>
      <div class="topbar-subtitle">${subtitle}</div>
    </div>
    <div class="topbar-right">
      ${levelBadge}
      <button class="btn">${ICONS['download']} Exporter</button>
    </div>
  `;

  return header;
}

/* ---- Build filters bar ---- */
function buildFilters(options) {
  const bar = document.createElement('div');
  bar.className = 'filters-bar';

  // Période
  bar.innerHTML += `
    <div class="filter-group">
      <span class="filter-label">Période</span>
      <select class="filter-select">
        <option>Ce mois</option><option>Ce trimestre</option><option>Cette année</option><option>Depuis le lancement</option>
      </select>
    </div>
  `;

  // Vue parent / enfant (sauf si on est en vue enfant ou comparative)
  if (options.showViewToggle !== false) {
    bar.innerHTML += `
      <div class="filter-group">
        <span class="filter-label">Vue</span>
        <div class="filter-tabs">
          <button class="filter-tab active">Parent</button>
          <button class="filter-tab" onclick="window.location.href='enfant.html'">Par agence</button>
        </div>
      </div>
    `;
  }

  // Agence
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

  bar.innerHTML += '<div class="filters-spacer"></div>';

  // Réseau
  if (options.showReseau !== false) {
    bar.innerHTML += `
      <div class="filter-group">
        <span class="filter-label">Réseau</span>
        <select class="filter-select">
          <option>Tous</option><option>Certifiés</option><option>Non certifiés</option><option>Kelkun</option>
        </select>
      </div>
    `;
  }

  // Custom filters
  if (options.extraFilters) {
    bar.innerHTML += options.extraFilters;
  }

  return bar;
}

/* ---- Force scroll to top on navigation ---- */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

/* ---- Init on DOMContentLoaded ---- */
document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  const page = body.dataset.page || 'synthese';
  const title = body.dataset.title || 'DataRoom';
  const subtitle = body.dataset.subtitle || '';
  const isEnfant = body.dataset.level === 'enfant';

  // Insert sidebar
  const mainEl = body.querySelector('.main');
  if (mainEl) {
    body.insertBefore(buildSidebar(page), mainEl);
    mainEl.insertBefore(buildTopbar(title, subtitle, isEnfant), mainEl.firstChild);
  }

  // Animate entrance
  animateEntrance();

  // Scroll reveal
  initScrollReveal();

  // Counter animation on KPI values
  animateCounters();

  // Score ring animation
  animateScoreRing();
});

/* ---- Utility: format number fr ---- */
function formatFr(n) {
  return n.toLocaleString('fr-FR');
}

/* ================================================
   WOW EFFECTS
   ================================================ */

/* ---- Staggered entrance animation ---- */
function animateEntrance() {
  const targets = document.querySelectorAll('.kpi-card, .axis-card, .card, .hero-banner, .alert-critical, .alert-predictive, .axis-summary, .my-position, .progression-card, .projection-card');
  targets.forEach((el, i) => {
    el.classList.add('animate-in');
    el.style.animationDelay = (i * 0.06) + 's';
  });
}

/* ---- Scroll reveal (IntersectionObserver) ---- */
function initScrollReveal() {
  const sections = document.querySelectorAll('.section-title, .grid-2, .grid-3, .grid-2-1, .grid-1-2');
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

/* ---- Counter animation (count from 0 to value) ---- */
function animateCounters() {
  const kpiValues = document.querySelectorAll('.kpi-value, .hero-score-value, .stat-pill-value, .axis-mini-kpi-value, .my-position-score, .projection-result-value');

  kpiValues.forEach(el => {
    const text = el.textContent.trim();

    // Extract the leading number (handles "2,4", "487", "17 220", etc.)
    const match = text.match(/^([\d\s,.]+)/);
    if (!match) return;

    const raw = match[1].trim();
    const isDecimal = raw.includes(',');
    const numStr = raw.replace(/\s/g, '').replace(',', '.');
    const target = parseFloat(numStr);
    if (isNaN(target) || target === 0) return;

    // Preserve suffix (everything after the number)
    const suffix = text.slice(match[0].length);
    const prefix = text.slice(0, text.indexOf(match[1]));

    // Keep child elements (like .unit spans)
    const unitSpan = el.querySelector('.unit');
    const unitHTML = unitSpan ? unitSpan.outerHTML : '';
    const textWithoutUnit = unitSpan ? text.replace(unitSpan.textContent, '').trim() : text;

    const duration = 800;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
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

      if (unitSpan) {
        el.innerHTML = display + unitHTML;
      } else {
        el.textContent = prefix + display + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        // Restore original content to ensure exact formatting
        if (unitSpan) {
          el.innerHTML = raw.replace(/\s/g, '\u00a0') + unitHTML;
        }
      }
    }

    requestAnimationFrame(tick);
  });
}

/* ---- Score ring SVG animation ---- */
function animateScoreRing() {
  const ring = document.querySelector('.hero-score-ring');
  if (!ring) return;

  const fill = ring.querySelector('.ring-fill');
  if (!fill) return;

  const score = parseInt(ring.dataset.score || '0');
  const circumference = 314; // 2 * π * 50 (r=50 in viewBox)
  const offset = circumference - (circumference * score / 100);

  // Animate after a small delay
  setTimeout(() => {
    fill.style.strokeDashoffset = offset;
  }, 300);
}

/* ---- Sparkline generator ---- */
function createSparkline(container, data) {
  if (!container || !data || !data.length) return;
  const max = Math.max(...data);
  container.innerHTML = data.map((v, i) => {
    const h = Math.max(3, (v / max) * 24);
    return '<div class="sparkline-bar" style="height:' + h + 'px;"></div>';
  }).join('');
}

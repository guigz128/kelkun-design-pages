/* ================================================
   KELCARE RETAIL — Mode Audit Concurrentiel
   Toggle overlay showing competitive advantages
   vs Bob! Desk and Yuman
   ================================================ */
(function() {
  // Audit data: CSS selector → { type, label, detail }
  // Types: exclusive (teal), superior (blue), vs-bob (orange), vs-yuman (red)
  var AUDIT = {
    // === DASHBOARD ===
    '.kpi-card.c-success': { type: 'exclusive', label: 'Exclusif Kelcare', detail: 'Taux de first-fix : ni Bob! Desk ni Yuman ne trackent ce KPI.' },
    '.kpi-card.c-travaux': { type: 'superior', label: 'Supérieur', detail: 'MTTR moyen affiché en temps réel. Bob! Desk : tendances basiques. Yuman : aucun.' },
    '.kpi-card.c-accent': { type: 'exclusive', label: 'Exclusif Kelcare', detail: 'NPS prestataires avec scoring automatique. Aucun concurrent ne propose ça.' },
    '.alert-banner.alert-urgence': { type: 'exclusive', label: 'Exclusif — ETA live', detail: 'Tracking Uber-like avec ETA temps réel. Bob! Desk : notification basique. Yuman : notification basique.' },
    '.ticket-sla': { type: 'superior', label: 'Supérieur — SLA', detail: 'Suivi SLA intégré par ticket. Bob! Desk : non. Yuman : non.' },
    '.budget-section': { type: 'exclusive', label: 'Exclusif — Budget temps réel', detail: 'Vue budget style néobanque. Bob! Desk : budget basique. Yuman : aucun budget.' },

    // === NOUVEAU TICKET ===
    '.mission-types, .type-cards, [class*="type-selector"], [class*="mission-type"]': { type: 'superior', label: 'Supérieur', detail: 'Classification visuelle par type de mission (urgence/dépannage/travaux/entretien/préventif). Plus riche que Bob! Desk et Yuman.' },
    '.qa-icon.qi-urgence, [class*="dispatch"], [class*="ia-dispatch"]': { type: 'exclusive', label: 'Exclusif — Dispatch IA', detail: 'Dispatch IA en 60 secondes : compétences, proximité, disponibilité. Bob! Desk : dispatch manuel. Yuman : dispatch manuel.' },
    '[class*="qr-scan"], [class*="scan"]': { type: 'exclusive', label: 'Exclusif — Scan QR', detail: 'Scan QR/NFC équipement pour pré-remplir le ticket. Aucun concurrent.' },
    '[class*="photo-upload"], [class*="upload-zone"], [class*="ia-photo"]': { type: 'exclusive', label: 'Exclusif — Photo IA', detail: 'L\'IA analyse la photo et pré-remplit le ticket automatiquement. Aucun concurrent.' },

    // === SUIVI INTERVENTIONS ===
    '[class*="kanban"], [class*="pipeline"], .kanban-board': { type: 'superior', label: 'Supérieur — Pipeline', detail: 'Pipeline kanban configurable avec statuts custom. Bob! Desk : pipeline fixe. Yuman : basique (start/stop).' },

    // === MISSION LIVE ===
    '#map, .map-info-card': { type: 'exclusive', label: 'Exclusif — Tracking live', detail: 'Carte temps réel avec positions GPS et ETA, inspiré Uber/Deliveroo. Ni Bob! Desk ni Yuman ne proposent ça.' },

    // === PREVENTIF ===
    '.view-tabs, .view-tab': { type: 'superior', label: 'Supérieur — Vues', detail: 'Vue Calendrier + Gantt + Liste. Bob! Desk : calendrier basique. Yuman : calendrier basique.' },
    '.iot-card': { type: 'exclusive', label: 'Exclusif — IoT', detail: 'Maintenance conditionnelle basée sur capteurs IoT. Aucun concurrent.' },

    // === EQUIPEMENTS ===
    '[class*="tree"], [class*="arborescence"]': { type: 'superior', label: 'Supérieur — Arborescence', detail: 'Arborescence illimitée : enseigne → région → magasin → zone → équipement. Bob! Desk : basique. Yuman : partiel.' },
    '[class*="health"], [class*="equip-health"]': { type: 'exclusive', label: 'Exclusif — Santé équipement', detail: 'Score de santé avec MTBF et analyse prédictive. Aucun concurrent.' },
    '[class*="qr"], [class*="nfc"]': { type: 'superior', label: 'Supérieur — QR/NFC', detail: 'QR codes + NFC dynamiques + scan pour créer un ticket. Bob! Desk : non. Yuman : QR basique.' },

    // === CONFORMITE ===
    '[class*="conf-"], [class*="compliance"], [class*="conformite"]': { type: 'exclusive', label: 'Exclusif Kelcare', detail: 'Suivi conformité réglementaire avec alertes échéances. Ni Bob! Desk ni Yuman ne proposent cette fonctionnalité.' },

    // === PRESTATAIRES ===
    '[class*="artisan-score"], [class*="perf-score"], .artisan-rating': { type: 'exclusive', label: 'Exclusif — NPS/SLA', detail: 'Scoring NPS + SLA + MTTR par prestataire + benchmark. Aucun concurrent.' },
    '[class*="gamif"], [class*="badge-expert"], [class*="provider-badge"]': { type: 'exclusive', label: 'Exclusif — Gamification', detail: 'Badges prestataires (Expert, Rapide, Top First-Fix). Inspiré du gaming.' },

    // === MESSAGERIE ===
    '[class*="chat"], [class*="message"], [class*="conversation"]': { type: 'exclusive', label: 'Exclusif — Chat intégré', detail: 'Messagerie contextuelle par ticket avec pièces jointes et mentions. Ni Bob! Desk ni Yuman.' },

    // === MARKETPLACE ===
    '[class*="marketplace"], [class*="provider-card"]': { type: 'exclusive', label: 'Exclusif — Marketplace', detail: 'Place de marché prestataires avec notation, avis, tarifs comparés. Bob! Desk : annuaire 1500 entreprises sans notation. Yuman : rien.' },

    // === ANALYTICS ===
    '[class*="predictive"], [class*="ia-predict"]': { type: 'exclusive', label: 'Exclusif — IA prédictive', detail: 'Analyse prédictive des pannes avec recommandations. Bob! Desk : tendances basiques. Yuman : non.' },
    '[class*="chart"], [class*="analytics"]': { type: 'superior', label: 'Supérieur — KPIs retail', detail: 'Dashboards KPI retail (downtime/rayon, coût/m², MTBF). Bob! Desk : 40 indicateurs génériques. Yuman : basique.' },

    // === BUDGET ===
    '[class*="budget-bar"], [class*="budget-amount"], [class*="budget-cats"]': { type: 'exclusive', label: 'Exclusif — Budget néobanque', detail: 'Budget temps réel style Revolut avec alertes et prévisionnel IA. Bob! Desk : basique. Yuman : aucun.' },
    '[class*="transaction"], [class*="depense"]': { type: 'superior', label: 'Supérieur — Transactions', detail: 'Timeline de dépenses avec catégorisation auto. Plus avancé que Bob! Desk.' },

    // === RAPPORTS ===
    '[class*="report-template"], [class*="template-card"]': { type: 'superior', label: 'Supérieur — Rapports auto', detail: 'Export planifié + envoi auto aux stakeholders. Bob! Desk : export manuel. Yuman : export manuel.' },

    // === PARAMETRES ===
    '[class*="sso"], [class*="saml"], [class*="oauth"]': { type: 'exclusive', label: 'Exclusif — SSO/SAML', detail: 'SSO, SAML, OAuth2, Azure AD. Ni Bob! Desk ni Yuman.' },
    '[class*="api"], [class*="webhook"]': { type: 'exclusive', label: 'Exclusif — API & Webhooks', detail: 'API REST documentée + webhooks + SDK. Bob! Desk : API non documentée. Yuman : non.' }
  };

  var COLORS = {
    'exclusive': { bg: '#f1fefc', border: '#03c5b8', text: '#015f56', dot: '#03c5b8' },
    'superior':  { bg: '#effaff', border: '#3cb0f5', text: '#1f65ae', dot: '#3cb0f5' },
    'vs-bob':    { bg: '#fff7ed', border: '#ff7b1e', text: '#c74007', dot: '#ff7b1e' },
    'vs-yuman':  { bg: '#fff1f1', border: '#fa4a57', text: '#c30d27', dot: '#fa4a57' }
  };

  var isActive = false;
  var badges = [];

  // Inject styles
  var style = document.createElement('style');
  style.textContent = [
    '.audit-toggle{position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;align-items:center;gap:8px;padding:10px 18px;border-radius:10px;border:none;font-family:Poppins,sans-serif;font-size:13px;font-weight:600;cursor:pointer;transition:all .2s;box-shadow:0 4px 16px rgba(14,47,88,0.15);}',
    '.audit-toggle.off{background:#0e2f58;color:white;}',
    '.audit-toggle.off:hover{background:#0a2342;box-shadow:0 6px 20px rgba(14,47,88,0.25);}',
    '.audit-toggle.on{background:#03c5b8;color:white;}',
    '.audit-toggle.on:hover{background:#029284;}',
    '.audit-toggle svg{width:16px;height:16px;}',
    '.audit-badge{position:absolute;top:-6px;right:-6px;z-index:100;padding:3px 8px;border-radius:4px;font-family:Poppins,sans-serif;font-size:10px;font-weight:700;white-space:nowrap;cursor:help;pointer-events:auto;opacity:0;transform:translateY(4px);transition:opacity .25s,transform .25s;letter-spacing:0.2px;border-width:1px;border-style:solid;box-shadow:0 2px 8px rgba(0,0,0,0.08);}',
    '.audit-badge::before{content:"";display:inline-block;width:6px;height:6px;border-radius:50%;margin-right:5px;vertical-align:middle;}',
    'body.audit-on .audit-badge{opacity:1;transform:translateY(0);}',
    '.audit-badge-exclusive{background:#f1fefc;border-color:#03c5b8;color:#015f56;}',
    '.audit-badge-exclusive::before{background:#03c5b8;}',
    '.audit-badge-superior{background:#effaff;border-color:#3cb0f5;color:#1f65ae;}',
    '.audit-badge-superior::before{background:#3cb0f5;}',
    '.audit-badge-vs-bob{background:#fff7ed;border-color:#ff7b1e;color:#c74007;}',
    '.audit-badge-vs-bob::before{background:#ff7b1e;}',
    '.audit-badge-vs-yuman{background:#fff1f1;border-color:#fa4a57;color:#c30d27;}',
    '.audit-badge-vs-yuman::before{background:#fa4a57;}',
    '.audit-tooltip{position:fixed;z-index:10000;max-width:320px;padding:12px 16px;border-radius:10px;background:#0e2f58;color:white;font-family:Poppins,sans-serif;font-size:12px;line-height:1.5;box-shadow:0 8px 30px rgba(0,0,0,0.25);pointer-events:none;opacity:0;transition:opacity .15s;}',
    '.audit-tooltip.visible{opacity:1;}',
    '.audit-tooltip strong{color:#03c5b8;}',
    '.audit-counter{position:fixed;bottom:24px;right:200px;z-index:9999;background:white;border:1px solid #e5e5e5;border-radius:10px;padding:8px 16px;font-family:Poppins,sans-serif;font-size:12px;color:#0e2f58;box-shadow:0 4px 16px rgba(14,47,88,0.1);opacity:0;transform:translateY(4px);transition:all .25s;display:flex;gap:14px;}',
    'body.audit-on .audit-counter{opacity:1;transform:translateY(0);}',
    '.audit-counter-item{display:flex;align-items:center;gap:5px;font-weight:600;}',
    '.audit-counter-dot{width:8px;height:8px;border-radius:50%;}',
    'body.audit-on [data-audit-target]{position:relative;}'
  ].join('\n');
  document.head.appendChild(style);

  // Create toggle button
  var btn = document.createElement('button');
  btn.className = 'audit-toggle off';
  btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg> Mode audit';
  document.body.appendChild(btn);

  // Create tooltip
  var tooltip = document.createElement('div');
  tooltip.className = 'audit-tooltip';
  document.body.appendChild(tooltip);

  // Create counter
  var counter = document.createElement('div');
  counter.className = 'audit-counter';
  document.body.appendChild(counter);

  // Place badges on matching elements
  function initBadges() {
    var counts = { exclusive: 0, superior: 0, 'vs-bob': 0, 'vs-yuman': 0 };

    Object.keys(AUDIT).forEach(function(sel) {
      var targets = document.querySelectorAll(sel);
      if (!targets.length) return;

      var data = AUDIT[sel];
      // Only badge the first match per selector
      var el = targets[0];

      // Skip if already badged
      if (el.getAttribute('data-audit-target')) return;

      el.setAttribute('data-audit-target', '1');
      var pos = window.getComputedStyle(el).position;
      if (pos === 'static') el.style.position = 'relative';

      var badge = document.createElement('span');
      badge.className = 'audit-badge audit-badge-' + data.type;
      badge.textContent = data.label;
      badge.setAttribute('data-audit-detail', data.detail);
      el.appendChild(badge);
      badges.push(badge);
      counts[data.type]++;

      // Tooltip events
      badge.addEventListener('mouseenter', function(e) {
        tooltip.innerHTML = '<strong>' + data.label + '</strong><br>' + data.detail;
        tooltip.classList.add('visible');
        var r = badge.getBoundingClientRect();
        tooltip.style.left = Math.min(r.left, window.innerWidth - 340) + 'px';
        tooltip.style.top = (r.bottom + 8) + 'px';
      });
      badge.addEventListener('mouseleave', function() {
        tooltip.classList.remove('visible');
      });
    });

    // Update counter
    var html = '';
    if (counts.exclusive) html += '<span class="audit-counter-item"><span class="audit-counter-dot" style="background:#03c5b8"></span>' + counts.exclusive + ' exclusif' + (counts.exclusive > 1 ? 's' : '') + '</span>';
    if (counts.superior) html += '<span class="audit-counter-item"><span class="audit-counter-dot" style="background:#3cb0f5"></span>' + counts.superior + ' supérieur' + (counts.superior > 1 ? 's' : '') + '</span>';
    if (counts['vs-bob']) html += '<span class="audit-counter-item"><span class="audit-counter-dot" style="background:#ff7b1e"></span>' + counts['vs-bob'] + ' vs Bob!</span>';
    if (counts['vs-yuman']) html += '<span class="audit-counter-item"><span class="audit-counter-dot" style="background:#fa4a57"></span>' + counts['vs-yuman'] + ' vs Yuman</span>';
    counter.innerHTML = html;
  }

  // Toggle
  btn.addEventListener('click', function() {
    isActive = !isActive;
    document.body.classList.toggle('audit-on', isActive);
    btn.className = 'audit-toggle ' + (isActive ? 'on' : 'off');
    btn.innerHTML = (isActive
      ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg> Masquer audit'
      : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg> Mode audit'
    );
    if (!isActive) tooltip.classList.remove('visible');
  });

  // Init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBadges);
  } else {
    initBadges();
  }
})();

/* ================================================
   KELKUN — TUNNEL DÉCLARATION v1
   Home + Multi-step form logic
   ================================================ */

(function () {
  const TOTAL_STEPS = 4;
  let currentStep = 1;

  // DOM refs — Home
  const homeSection = document.getElementById('home-section');
  const siteFooter = document.getElementById('site-footer');
  const heroCta = document.getElementById('hero-cta');
  const heroSearch = document.getElementById('hero-search');
  const heroCatChips = document.querySelectorAll('.hero__cat-chip');

  // DOM refs — Tunnel
  const tunnelMain = document.getElementById('tunnel-main');
  const progressBar = document.getElementById('progress-bar');
  const footerBar = document.getElementById('footer-bar');
  const steps = document.querySelectorAll('.step');
  const progressSteps = document.querySelectorAll('.progress__step');
  const progressLines = document.querySelectorAll('.progress__line');
  const btnNext = document.getElementById('btn-next');
  const btnBack = document.getElementById('btn-back');
  const createAccountCheckbox = document.getElementById('create-account');
  const passwordBlock = document.getElementById('password-block');

  // ---- HOME → TUNNEL transition ----
  function enterTunnel(prefillSearch, prefillCategory) {
    // Hide home & site footer
    homeSection.style.display = 'none';
    siteFooter.style.display = 'none';

    // Show tunnel
    progressBar.style.display = '';
    tunnelMain.style.display = '';
    footerBar.style.display = '';

    // Prefill description from hero search
    if (prefillSearch) {
      document.getElementById('description').value = prefillSearch;
    }

    // Pre-select category chip if from quick cat
    if (prefillCategory) {
      const targetChip = document.querySelector(`.category-chip[data-value="${prefillCategory}"]`);
      if (targetChip) {
        categoryChips.forEach(c => c.classList.remove('category-chip--selected'));
        targetChip.classList.add('category-chip--selected');
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Hero CTA button
  heroCta.addEventListener('click', (e) => {
    e.preventDefault();
    const searchVal = heroSearch.value.trim();
    enterTunnel(searchVal, null);
  });

  // Hero search — enter key
  heroSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const searchVal = heroSearch.value.trim();
      enterTunnel(searchVal, null);
    }
  });

  // Quick category chips on hero
  heroCatChips.forEach(chip => {
    chip.addEventListener('click', () => {
      enterTunnel('', chip.dataset.cat);
    });
  });

  // ---- Category chips in tunnel ----
  const categoryChips = document.querySelectorAll('.category-chip');

  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('category-chip--selected'));
      chip.classList.add('category-chip--selected');
    });
  });

  // ---- Create account toggle ----
  if (createAccountCheckbox && passwordBlock) {
    createAccountCheckbox.addEventListener('change', () => {
      passwordBlock.style.display = createAccountCheckbox.checked ? 'block' : 'none';
    });
  }

  // ---- Recap edit buttons ----
  document.querySelectorAll('.recap__edit').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetStep = parseInt(btn.dataset.goto);
      goToStep(targetStep);
    });
  });

  // ---- Navigation ----
  btnNext.addEventListener('click', () => {
    if (currentStep === TOTAL_STEPS) {
      showSuccess();
      return;
    }
    if (currentStep === TOTAL_STEPS - 1) {
      populateRecap();
    }
    goToStep(currentStep + 1);
  });

  btnBack.addEventListener('click', () => {
    if (currentStep > 1) {
      goToStep(currentStep - 1);
    }
  });

  function goToStep(step) {
    steps.forEach(s => s.classList.remove('step--active'));

    const targetEl = document.getElementById('step-' + step);
    if (targetEl) {
      void targetEl.offsetWidth;
      targetEl.classList.add('step--active');
    }

    // Update progress dots
    progressSteps.forEach((ps, i) => {
      const stepNum = i + 1;
      ps.classList.remove('progress__step--active', 'progress__step--done');
      if (stepNum === step) {
        ps.classList.add('progress__step--active');
      } else if (stepNum < step) {
        ps.classList.add('progress__step--done');
      }
    });

    // Update progress lines
    progressLines.forEach((line, i) => {
      line.classList.toggle('progress__line--filled', (i + 1) < step);
    });

    currentStep = step;

    // Update buttons
    btnBack.style.visibility = currentStep > 1 ? 'visible' : 'hidden';

    if (currentStep === TOTAL_STEPS) {
      btnNext.innerHTML = `
        Publier ma demande
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      `;
      btnNext.classList.add('btn--primary-green');
      btnNext.classList.remove('btn--primary');
    } else {
      btnNext.innerHTML = `
        Continuer
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      `;
      btnNext.classList.remove('btn--primary-green');
      btnNext.classList.add('btn--primary');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function populateRecap() {
    const selectedChip = document.querySelector('.category-chip--selected');
    document.getElementById('recap-category').textContent =
      selectedChip ? selectedChip.textContent.trim() : '—';

    document.getElementById('recap-description').textContent =
      document.getElementById('description').value || '—';

    const delayInput = document.querySelector('input[name="delay"]:checked');
    const delayMap = { 'asap': 'Dès que possible', '1month': 'Sous 1 mois', 'later': 'Plus d\'un mois' };
    document.getElementById('recap-delay').textContent =
      delayInput ? delayMap[delayInput.value] : '—';

    const address = document.getElementById('address').value;
    const complement = document.getElementById('address-complement').value;
    document.getElementById('recap-address').textContent =
      [address, complement].filter(Boolean).join(', ') || '—';

    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    document.getElementById('recap-name').textContent =
      [firstName, lastName].filter(Boolean).join(' ') || '—';
    document.getElementById('recap-email').textContent =
      document.getElementById('email').value || '—';
    document.getElementById('recap-phone').textContent =
      document.getElementById('phone').value ? '+33 ' + document.getElementById('phone').value : '—';
  }

  function showSuccess() {
    steps.forEach(s => s.classList.remove('step--active'));
    const successEl = document.getElementById('step-success');
    void successEl.offsetWidth;
    successEl.classList.add('step--active');

    // Hide tunnel chrome, show site footer
    footerBar.style.display = 'none';
    progressBar.style.display = 'none';
    siteFooter.style.display = 'block';
    tunnelMain.style.paddingBottom = '48px';
  }

  // ---- Mobile drawer ----
  const burgerBtn = document.getElementById('burger-btn');
  const drawerClose = document.getElementById('drawer-close');
  const drawer = document.getElementById('mobile-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');

  function openDrawer() {
    drawer.classList.add('mobile-drawer--open');
    drawerOverlay.classList.add('mobile-drawer__overlay--open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('mobile-drawer--open');
    drawerOverlay.classList.remove('mobile-drawer__overlay--open');
    document.body.style.overflow = '';
  }

  if (burgerBtn) burgerBtn.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  // Init — CSS helper for progress line animation
  const style = document.createElement('style');
  style.textContent = '.progress__line--filled::after { width: 100% !important; }';
  document.head.appendChild(style);
})();

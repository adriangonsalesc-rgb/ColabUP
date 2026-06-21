/* ==========================================================================
   ColabUp — Settings page interactions
   ========================================================================== */
(() => {
  'use strict';

  const session = ColabAuth.getSession();
  const PREFS_KEY = `colabup_settings_${session ? session.email : 'guest'}`;

  const defaultPrefs = {
    notifEmail: true, notifApplications: true, notifMessages: true, notifNewsletter: false,
    privacyPublic: true, privacyOnline: true, privacyMessages: true,
    appearanceCompact: false, appearanceMotion: false,
  };

  function loadPrefs() {
    try { return { ...defaultPrefs, ...JSON.parse(localStorage.getItem(PREFS_KEY)) }; } catch { return defaultPrefs; }
  }
  function savePrefs(p) { localStorage.setItem(PREFS_KEY, JSON.stringify(p)); }

  let prefs = loadPrefs();

  const toast = document.querySelector('.toast');
  let toastTimer;
  function showToast(message, type = 'success') {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.remove('is-success', 'is-error');
    toast.classList.add(type === 'error' ? 'is-error' : 'is-success', 'is-visible');
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
  }

  /* ---------- Tabs ---------- */
  document.querySelectorAll('[data-settings-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-settings-tab]').forEach(b => b.classList.remove('is-active'));
      document.querySelectorAll('[data-settings-section]').forEach(s => s.classList.remove('is-active'));
      btn.classList.add('is-active');
      document.querySelector(`[data-settings-section="${btn.dataset.settingsTab}"]`).classList.add('is-active');
    });
  });

  /* ---------- Account form ---------- */
  if (session) {
    document.getElementById('acc-name').value = session.name || '';
    document.getElementById('acc-email').value = session.email || '';
  }
  document.getElementById('account-form').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Información de la cuenta actualizada.');
  });

  /* ---------- Toggle switches ---------- */
  const toggleMap = {
    'notif-email': 'notifEmail', 'notif-applications': 'notifApplications', 'notif-messages': 'notifMessages', 'notif-newsletter': 'notifNewsletter',
    'privacy-public': 'privacyPublic', 'privacy-online': 'privacyOnline', 'privacy-messages': 'privacyMessages',
    'appearance-compact': 'appearanceCompact', 'appearance-motion': 'appearanceMotion',
  };
  Object.keys(toggleMap).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.checked = !!prefs[toggleMap[id]];
    el.addEventListener('change', () => {
      prefs[toggleMap[id]] = el.checked;
      savePrefs(prefs);
      showToast('Preferencia actualizada.');
    });
  });

  /* ---------- Danger zone ---------- */
  document.getElementById('delete-account-btn').addEventListener('click', () => {
    const confirmed = window.confirm('¿Seguro que deseas eliminar tu cuenta? Esta acción no se puede deshacer.');
    if (!confirmed) return;
    ColabAuth.logout();
    showToast('Cuenta eliminada. Redirigiendo...', 'error');
    setTimeout(() => { window.location.href = 'index.html'; }, 1200);
  });
})();

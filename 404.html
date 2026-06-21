/* ==========================================================================
   ColabUp — Notifications page interactions
   ========================================================================== */
(() => {
  'use strict';

  let tab = 'all';
  const list = document.getElementById('notif-list');

  function iconColorClass(color) { return color || 'blue'; }

  function render() {
    const all = ColabStore.getNotifications();
    document.getElementById('unread-count').textContent = all.filter(n => !n.read).length;
    const items = tab === 'unread' ? all.filter(n => !n.read) : all;

    if (!items.length) {
      list.innerHTML = `<div class="empty-state-full"><i class="fa-regular fa-bell-slash"></i><h3>Sin notificaciones</h3><p>${tab === 'unread' ? 'No tienes notificaciones sin leer.' : 'Aún no tienes notificaciones.'}</p></div>`;
      return;
    }

    list.innerHTML = items.map(n => `
      <div class="notif-item ${n.read ? '' : 'is-unread'}" data-id="${n.id}">
        <span class="notif-icon ${iconColorClass(n.color)}"><i class="${n.icon}"></i></span>
        <div class="notif-body"><p>${n.text}</p><span>${n.time}</span></div>
        <button type="button" class="notif-remove" data-remove="${n.id}" aria-label="Eliminar notificación"><i class="fa-solid fa-trash"></i></button>
      </div>
    `).join('');

    list.querySelectorAll('.notif-item').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target.closest('[data-remove]')) return;
        const updated = ColabStore.getNotifications().map(n => n.id === el.dataset.id ? { ...n, read: true } : n);
        ColabStore.setNotifications(updated);
        document.dispatchEvent(new Event('colabup:refresh-badges'));
        render();
      });
    });
    list.querySelectorAll('[data-remove]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const updated = ColabStore.getNotifications().filter(n => n.id !== btn.dataset.remove);
        ColabStore.setNotifications(updated);
        document.dispatchEvent(new Event('colabup:refresh-badges'));
        render();
      });
    });
  }

  document.querySelectorAll('[data-notif-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-notif-tab]').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      tab = btn.dataset.notifTab;
      render();
    });
  });

  document.getElementById('mark-all-read-btn').addEventListener('click', () => {
    const all = ColabStore.getNotifications().map(n => ({ ...n, read: true }));
    ColabStore.setNotifications(all);
    document.dispatchEvent(new Event('colabup:refresh-badges'));
    render();
  });

  render();
})();

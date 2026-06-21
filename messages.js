/* ==========================================================================
   ColabUp — App shell shared behavior
   Sidebar toggle, topbar notification/message dropdowns, and a tiny shared
   data store (ColabStore) used by groups/messages/notifications pages so
   counts stay in sync across the whole app.
   ========================================================================== */

const ColabStore = (() => {
  const session = ColabAuth.getSession();
  const ns = session ? session.email : 'guest';

  function key(name) { return `colabup_${name}_${ns}`; }

  function read(name, fallback) {
    try {
      const raw = localStorage.getItem(key(name));
      if (raw === null) return fallback;
      return JSON.parse(raw);
    } catch { return fallback; }
  }
  function write(name, value) {
    localStorage.setItem(key(name), JSON.stringify(value));
  }

  const defaultNotifications = [
    { id: 'n1', type: 'apply', icon: 'fa-solid fa-diagram-project', color: 'blue', text: '<strong>Fabrizio Torres</strong> postuló a tu proyecto "App de reciclaje inteligente".', time: 'Hace 12 min', read: false },
    { id: 'n2', type: 'message', icon: 'fa-solid fa-message', color: 'green', text: '<strong>Michelle Aguilar</strong> te envió un nuevo mensaje.', time: 'Hace 38 min', read: false },
    { id: 'n3', type: 'group', icon: 'fa-solid fa-users-rectangle', color: 'orange', text: 'Fuiste agregado al grupo <strong>"EduIA — Equipo Core"</strong>.', time: 'Hace 2 h', read: false },
    { id: 'n4', type: 'task', icon: 'fa-solid fa-list-check', color: 'blue', text: 'Tienes una tarea pendiente: <strong>"Diseñar pantalla de login"</strong> vence mañana.', time: 'Hace 5 h', read: true },
    { id: 'n5', type: 'system', icon: 'fa-solid fa-circle-check', color: 'green', text: 'Tu perfil alcanzó el <strong>80% de completitud</strong>.', time: 'Ayer', read: true },
  ];

  const defaultConversations = [
    { id: 'c1', name: 'Michelle Aguilar', initials: 'MA', online: true, lastMsg: 'Perfecto, lo reviso hoy en la tarde 👍', time: '10:42', unread: 2,
      messages: [
        { from: 'them', text: 'Hola! Vi tu postulación al proyecto de rediseño UX.', time: '10:10' },
        { from: 'me', text: 'Hola Michelle, sí! Me interesa mucho el research con estudiantes.', time: '10:15' },
        { from: 'them', text: 'Genial, te paso el brief para que lo revises.', time: '10:20' },
        { from: 'them', text: 'Perfecto, lo reviso hoy en la tarde 👍', time: '10:42' },
      ] },
    { id: 'c2', name: 'Renzo Torres', initials: 'RT', online: false, lastMsg: 'Quedamos para el daily de mañana 10am', time: 'Ayer', unread: 0,
      messages: [
        { from: 'them', text: 'Hola, ¿cómo va el módulo de notificaciones push?', time: 'Ayer 16:00' },
        { from: 'me', text: 'Avanzando bien, lo tengo listo para mañana.', time: 'Ayer 16:05' },
        { from: 'them', text: 'Quedamos para el daily de mañana 10am', time: 'Ayer 16:08' },
      ] },
    { id: 'c3', name: 'Equipo EduIA', initials: 'EI', online: true, lastMsg: 'Diego: subí el nuevo mockup del panel 📎', time: 'Lun', unread: 5,
      messages: [
        { from: 'them', text: 'Bienvenida al grupo del proyecto 🎉', time: 'Lun 09:00' },
        { from: 'them', text: 'Diego: subí el nuevo mockup del panel 📎', time: 'Lun 11:30' },
      ] },
    { id: 'c4', name: 'Jose Zevallos', initials: 'JZ', online: false, lastMsg: 'Te escribo cuando termine los tests.', time: 'Vie', unread: 0,
      messages: [
        { from: 'me', text: '¿Cómo va el bot de soporte?', time: 'Vie 14:00' },
        { from: 'them', text: 'Te escribo cuando termine los tests.', time: 'Vie 14:20' },
      ] },
  ];

  function getNotifications() { return read('notifications', defaultNotifications); }
  function setNotifications(v) { write('notifications', v); }
  function unreadNotifications() { return getNotifications().filter(n => !n.read).length; }

  function getConversations() { return read('conversations', defaultConversations); }
  function setConversations(v) { write('conversations', v); }
  function unreadMessages() { return getConversations().reduce((sum, c) => sum + (c.unread || 0), 0); }

  return { getNotifications, setNotifications, unreadNotifications, getConversations, setConversations, unreadMessages, ns };
})();

(() => {
  'use strict';

  /* ---------- Sidebar (mobile) ---------- */
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');
  function openSidebar() { sidebar?.classList.add('is-open'); sidebarBackdrop?.classList.add('is-open'); }
  function closeSidebar() { sidebar?.classList.remove('is-open'); sidebarBackdrop?.classList.remove('is-open'); }
  sidebarToggle?.addEventListener('click', () => {
    sidebar?.classList.contains('is-open') ? closeSidebar() : openSidebar();
  });
  sidebarBackdrop?.addEventListener('click', closeSidebar);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSidebar(); });

  /* ---------- Sidebar badges (unread counts) ---------- */
  function paintNavBadges() {
    const msgCount = ColabStore.unreadMessages();
    const notifCount = ColabStore.unreadNotifications();
    document.querySelectorAll('a[href="messages.html"]').forEach(a => setNavBadge(a, msgCount));
    document.querySelectorAll('a[href="notifications.html"]').forEach(a => setNavBadge(a, notifCount));
    document.querySelectorAll('.icon-btn[aria-label="Mensajes"] .dot, .icon-btn[data-dropdown="messages"] .dot').forEach(d => d.classList.toggle('is-hidden', msgCount === 0));
    document.querySelectorAll('.icon-btn[aria-label="Notificaciones"] .dot, .icon-btn[data-dropdown="notifications"] .dot').forEach(d => d.classList.toggle('is-hidden', notifCount === 0));
  }
  function setNavBadge(a, count) {
    let badge = a.querySelector('.nav-badge');
    if (count > 0) {
      if (!badge) { badge = document.createElement('span'); badge.className = 'nav-badge'; a.appendChild(badge); }
      badge.textContent = count;
    } else if (badge) {
      badge.remove();
    }
  }
  paintNavBadges();
  document.addEventListener('colabup:refresh-badges', () => { paintNavBadges(); buildNotifDropdown(); buildMsgDropdown(); });

  /* ---------- Topbar dropdowns: notifications & messages ---------- */
  function timeAgoIcon(color) {
    const map = { blue: 'rgba(77,168,218,0.12); color:var(--color-celeste)', green: 'rgba(111,207,151,0.15); color:#2f8a5c', orange: 'rgba(242,153,74,0.14); color:#b9650f' };
    return `background:${map[color] || map.blue}`;
  }

  function buildNotifDropdown() {
    const wrap = document.getElementById('notif-dropdown');
    if (!wrap) return;
    const items = ColabStore.getNotifications().slice(0, 6);
    wrap.innerHTML = `
      <div class="topbar-dropdown-head"><h3>Notificaciones</h3><button type="button" id="notif-mark-all">Marcar todo leído</button></div>
      ${items.length ? items.map(n => `
        <div class="dropdown-item ${n.read ? '' : 'is-unread'}" data-notif-id="${n.id}">
          <span class="di-icon" style="${timeAgoIcon(n.color)}"><i class="${n.icon}"></i></span>
          <div class="dropdown-item-body"><p>${n.text}</p><span>${n.time}</span></div>
        </div>`).join('') : `<p class="empty-note">No tienes notificaciones.</p>`}
      <div style="padding:10px 16px;"><a href="notifications.html" style="font-size:12.5px; font-weight:700; color:var(--color-celeste);">Ver todas las notificaciones →</a></div>
    `;
    wrap.querySelector('#notif-mark-all')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const all = ColabStore.getNotifications().map(n => ({ ...n, read: true }));
      ColabStore.setNotifications(all);
      buildNotifDropdown(); paintNavBadges();
    });
    wrap.querySelectorAll('[data-notif-id]').forEach(el => el.addEventListener('click', () => {
      const list = ColabStore.getNotifications().map(n => n.id === el.dataset.notifId ? { ...n, read: true } : n);
      ColabStore.setNotifications(list);
      buildNotifDropdown(); paintNavBadges();
    }));
  }

  function buildMsgDropdown() {
    const wrap = document.getElementById('msg-dropdown');
    if (!wrap) return;
    const items = ColabStore.getConversations();
    wrap.innerHTML = `
      <div class="topbar-dropdown-head"><h3>Mensajes</h3><a href="messages.html" style="font-size:12px; font-weight:600; color:var(--color-celeste);">Abrir todo</a></div>
      ${items.map(c => `
        <a class="dropdown-item ${c.unread ? 'is-unread' : ''}" href="messages.html?c=${c.id}">
          <span class="avatar">${c.initials}</span>
          <div class="dropdown-item-body"><p><strong>${c.name}</strong></p><p style="color:#5b6472;">${c.lastMsg}</p><span>${c.time}</span></div>
        </a>`).join('')}
    `;
  }

  function setupDropdownToggle(btnSelector, dropdownId) {
    const btn = document.querySelector(btnSelector);
    const dropdown = document.getElementById(dropdownId);
    if (!btn || !dropdown) return;
    btn.style.position = 'relative';
    if (!btn.contains(dropdown)) btn.appendChild(dropdown);
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !dropdown.classList.contains('is-open');
      document.querySelectorAll('.topbar-dropdown.is-open').forEach(d => d.classList.remove('is-open'));
      if (willOpen) dropdown.classList.add('is-open');
    });
    dropdown.addEventListener('click', (e) => e.stopPropagation());
  }

  const notifBtn = document.querySelector('.icon-btn[aria-label="Notificaciones"]');
  const msgBtn = document.querySelector('.icon-btn[aria-label="Mensajes"]');
  if (notifBtn) {
    const d = document.createElement('div');
    d.className = 'topbar-dropdown'; d.id = 'notif-dropdown';
    notifBtn.appendChild(d);
    buildNotifDropdown();
    setupDropdownToggle('.icon-btn[aria-label="Notificaciones"]', 'notif-dropdown');
  }
  if (msgBtn) {
    const d = document.createElement('div');
    d.className = 'topbar-dropdown'; d.id = 'msg-dropdown';
    msgBtn.appendChild(d);
    buildMsgDropdown();
    setupDropdownToggle('.icon-btn[aria-label="Mensajes"]', 'msg-dropdown');
  }
  document.addEventListener('click', () => document.querySelectorAll('.topbar-dropdown.is-open').forEach(d => d.classList.remove('is-open')));
})();

/* ==========================================================================
   ColabUp — Messages page interactions
   Reads/writes through ColabStore (shared with the topbar dropdown) so
   unread counts stay perfectly in sync across the app.
   ========================================================================== */
(() => {
  'use strict';

  const session = ColabAuth.getSession();
  let conversations = ColabStore.getConversations();
  let activeId = null;
  let search = '';

  const EMOJIS = ['😀','😂','😍','👍','🙏','🎉','🔥','💡','✅','😅','🚀','👏'];

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  const convList = document.getElementById('conv-list');
  const shell = document.getElementById('messages-shell');

  function renderConvList() {
    const filtered = conversations.filter(c => !search || c.name.toLowerCase().includes(search));
    convList.innerHTML = filtered.length ? filtered.map(c => `
      <div class="conv-item ${c.id === activeId ? 'is-active' : ''}" data-conv-id="${c.id}">
        <div class="conv-avatar-wrap">
          <span class="avatar">${c.initials}</span>
          ${c.online ? '<span class="online-dot"></span>' : ''}
        </div>
        <div class="conv-item-body">
          <div class="conv-item-top"><strong>${escapeHtml(c.name)}</strong><span>${c.time}</span></div>
          <p>${escapeHtml(c.lastMsg)}</p>
        </div>
        ${c.unread ? `<span class="conv-unread-badge">${c.unread}</span>` : ''}
      </div>
    `).join('') : '<p class="empty-note">No se encontraron conversaciones.</p>';

    convList.querySelectorAll('[data-conv-id]').forEach(el => {
      el.addEventListener('click', () => openConversation(el.dataset.convId));
    });
  }

  function openConversation(id) {
    activeId = id;
    const conv = conversations.find(c => c.id === id);
    if (!conv) return;
    if (conv.unread) { conv.unread = 0; ColabStore.setConversations(conversations); }

    document.getElementById('chat-empty-state').style.display = 'none';
    document.getElementById('chat-active').style.display = 'flex';
    shell.classList.add('is-chat-open');

    document.getElementById('chat-head-avatar').textContent = conv.initials;
    document.getElementById('chat-head-name').textContent = conv.name;
    const statusEl = document.getElementById('chat-head-status');
    statusEl.textContent = conv.online ? 'En línea' : 'Desconectado';
    statusEl.classList.toggle('is-offline', !conv.online);

    renderMessages(conv);
    renderConvList();
    document.dispatchEvent(new Event('colabup:refresh-badges'));
  }

  function renderMessages(conv) {
    const wrap = document.getElementById('chat-messages');
    wrap.innerHTML = conv.messages.map(m => `
      <div class="msg-bubble ${m.from === 'me' ? 'me' : 'them'}">
        ${escapeHtml(m.text)}
        <span class="msg-time">${m.time}</span>
      </div>
    `).join('');
    wrap.scrollTop = wrap.scrollHeight;
  }

  document.getElementById('conv-search-input').addEventListener('input', (e) => {
    search = e.target.value.trim().toLowerCase();
    renderConvList();
  });

  document.getElementById('chat-back-btn').addEventListener('click', () => {
    shell.classList.remove('is-chat-open');
  });

  /* ---------- Send message ---------- */
  document.getElementById('chat-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    const value = input.value.trim();
    if (!value || !activeId) return;
    sendMessage(value);
    input.value = '';
  });

  function sendMessage(text) {
    const conv = conversations.find(c => c.id === activeId);
    if (!conv) return;
    const time = new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
    conv.messages.push({ from: 'me', text, time });
    conv.lastMsg = text;
    conv.time = time;
    ColabStore.setConversations(conversations);
    renderMessages(conv);
    renderConvList();

    // Simulated reply for demo realism
    if (Math.random() > 0.4) {
      setTimeout(() => {
        const replies = ['¡Entendido!', 'Perfecto, gracias por avisar 👍', 'Lo reviso y te confirmo.', 'Suena bien, sigamos así.', '👌'];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        conv.messages.push({ from: 'them', text: reply, time: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' }) });
        conv.lastMsg = reply;
        ColabStore.setConversations(conversations);
        if (activeId === conv.id) renderMessages(conv);
        renderConvList();
      }, 1400 + Math.random() * 1000);
    }
  }

  /* ---------- Emoji picker ---------- */
  const emojiBtn = document.getElementById('emoji-btn');
  const emojiPicker = document.getElementById('emoji-picker');
  emojiPicker.innerHTML = EMOJIS.map(e => `<button type="button">${e}</button>`).join('');
  emojiBtn.addEventListener('click', (e) => { e.stopPropagation(); emojiPicker.classList.toggle('is-open'); });
  emojiPicker.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById('chat-input');
      input.value += btn.textContent;
      input.focus();
    });
  });
  document.addEventListener('click', () => emojiPicker.classList.remove('is-open'));

  /* ---------- Attachments (simulated) ---------- */
  const toast = document.querySelector('.toast');
  let toastTimer;
  function showToast(message, type = 'success') {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.remove('is-success', 'is-error');
    toast.classList.add(type === 'error' ? 'is-error' : 'is-success', 'is-visible');
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
  }
  document.getElementById('attach-btn').addEventListener('click', () => document.getElementById('attach-input').click());
  document.getElementById('attach-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file || !activeId) return;
    sendMessage(`📎 ${file.name}`);
    showToast('Archivo adjuntado a la conversación.');
    e.target.value = '';
  });

  /* ---------- Deep link via ?c=id (from topbar dropdown) ---------- */
  const params = new URLSearchParams(window.location.search);
  const deepLink = params.get('c');

  renderConvList();
  if (deepLink && conversations.some(c => c.id === deepLink)) {
    openConversation(deepLink);
  }
})();

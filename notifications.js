/* ==========================================================================
   ColabUp — Groups page interactions
   ========================================================================== */
(() => {
  'use strict';

  const session = ColabAuth.getSession();
  const JOINED_KEY = `colabup_joined_groups_${session ? session.email : 'guest'}`;
  const GCHAT_KEY = `colabup_group_chats_${session ? session.email : 'guest'}`;

  const baseGroups = [
    { id: 'g1', name: 'EduIA — Equipo Core', category: 'EdTech', desc: 'Equipo principal del proyecto EduIA, plataforma de estudio con IA.',
      members: [{ name: 'Renzo Torres', role: 'Líder' }, { name: 'Miguel Domenack', role: 'Frontend' }, { name: 'Camila Vidal', role: 'Backend' }],
      files: [{ name: 'Brief_EduIA.pdf', size: '1.2 MB' }, { name: 'Wireframes_v2.fig', size: '4.8 MB' }],
      tasks: { todo: [{ title: 'Diseñar pantalla de login', priority: 'high', assignee: 'Miguel D.' }, { title: 'Definir endpoints API', priority: 'medium', assignee: 'Camila V.' }],
               doing: [{ title: 'Integrar generador de quizzes', priority: 'high', assignee: 'Renzo T.' }],
               done: [{ title: 'Setup del repositorio', priority: 'low', assignee: 'Renzo T.' }] },
      events: ['Daily — Lun a Vie 10:00am', 'Sprint review — Viernes 4:00pm'] },
    { id: 'g2', name: 'Frontend Lima', category: 'Tecnología', desc: 'Comunidad de desarrolladores frontend en Lima. Compartimos retos, recursos y oportunidades.',
      members: [{ name: 'Michelle Aguilar', role: 'Admin' }, { name: 'Jose Zevallos', role: 'Miembro' }, { name: 'Fabrizio Torres', role: 'Miembro' }, { name: 'Diego Pinto', role: 'Miembro' }],
      files: [{ name: 'Recursos_CSS.pdf', size: '600 KB' }],
      tasks: { todo: [{ title: 'Organizar meetup mensual', priority: 'medium', assignee: 'Michelle A.' }], doing: [], done: [{ title: 'Crear canal de Discord', priority: 'low', assignee: 'Jose Z.' }] },
      events: ['Meetup mensual — Próximo sábado'] },
    { id: 'g3', name: 'UX Research Perú', category: 'Diseño', desc: 'Espacio para compartir hallazgos, metodologías y oportunidades de research en Perú.',
      members: [{ name: 'Michelle Aguilar', role: 'Líder' }, { name: 'Camila Vidal', role: 'Miembro' }],
      files: [], tasks: { todo: [], doing: [], done: [] }, events: [] },
    { id: 'g4', name: 'Emprendedores UPC', category: 'Negocios', desc: 'Red de estudiantes emprendedores que buscan validar y escalar sus ideas de negocio.',
      members: [{ name: 'Diego Pinto', role: 'Admin' }, { name: 'Heren Aujtukai', role: 'Miembro' }, { name: 'Joan Calderon', role: 'Miembro' }],
      files: [{ name: 'Pitch_deck_template.pptx', size: '2.1 MB' }],
      tasks: { todo: [{ title: 'Preparar pitch para Demo Day', priority: 'high', assignee: 'Diego P.' }], doing: [], done: [] },
      events: ['Demo Day — 15 de julio'] },
    { id: 'g5', name: 'IA & Automatización', category: 'Tecnología', desc: 'Discutimos modelos de lenguaje, automatización y casos de uso aplicados a proyectos reales.',
      members: [{ name: 'Jose Zevallos', role: 'Admin' }, { name: 'Fabrizio Arias', role: 'Miembro' }],
      files: [], tasks: { todo: [], doing: [{ title: 'Mejorar precisión del NLP', priority: 'medium', assignee: 'Jose Z.' }], done: [] }, events: [] },
    { id: 'g6', name: 'Sostenibilidad Tech', category: 'Sostenibilidad', desc: 'Proyectos tecnológicos con impacto ambiental: reciclaje, energía y consumo responsable.',
      members: [{ name: 'Fabrizio Torres', role: 'Líder' }],
      files: [], tasks: { todo: [], doing: [], done: [] }, events: [] },
  ];

  function loadJoined() { try { return JSON.parse(localStorage.getItem(JOINED_KEY)) || ['g1']; } catch { return ['g1']; } }
  function saveJoined(list) { localStorage.setItem(JOINED_KEY, JSON.stringify(list)); }
  function loadGroupChats() { try { return JSON.parse(localStorage.getItem(GCHAT_KEY)) || {}; } catch { return {}; } }
  function saveGroupChats(obj) { localStorage.setItem(GCHAT_KEY, JSON.stringify(obj)); }

  let joined = loadJoined();
  let groupChats = loadGroupChats();
  let state = { search: '', filter: 'all' };
  let activeGroupId = null;

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
  function initialsOf(name) { return name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase(); }

  const grid = document.getElementById('groups-grid');
  const resultsCount = document.getElementById('groups-results-count');

  function applyFilters() {
    return baseGroups.filter(g => {
      const matchesSearch = !state.search || g.name.toLowerCase().includes(state.search) || g.category.toLowerCase().includes(state.search);
      const matchesFilter = state.filter === 'all' || (state.filter === 'joined' && joined.includes(g.id));
      return matchesSearch && matchesFilter;
    });
  }

  function renderGrid() {
    const filtered = applyFilters();
    resultsCount.textContent = `${filtered.length} grupo${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`;
    if (!filtered.length) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><i class="fa-solid fa-users-rectangle"></i><p>No encontramos grupos con esos filtros.</p></div>`;
      return;
    }
    grid.innerHTML = filtered.map(g => `
      <article class="group-card" data-group-id="${g.id}">
        <div class="group-cover"></div>
        <div class="group-card-body">
          <div class="group-avatar">${initialsOf(g.name)}</div>
          <span class="group-category">${escapeHtml(g.category)}</span>
          <h3>${escapeHtml(g.name)}</h3>
          <p class="group-desc">${escapeHtml(g.desc)}</p>
          <div class="group-meta-row">
            <span class="group-members-mini"><i class="fa-solid fa-users"></i> ${g.members.length} miembros</span>
            ${joined.includes(g.id) ? '<span class="badge badge-green">Unido</span>' : '<span class="badge badge-gray">Abierto</span>'}
          </div>
          <button type="button" class="btn ${joined.includes(g.id) ? 'btn-secondary' : 'btn-primary'}" data-open-group="${g.id}">
            ${joined.includes(g.id) ? 'Ver grupo' : 'Unirme y ver'}
          </button>
        </div>
      </article>
    `).join('');

    grid.querySelectorAll('[data-open-group]').forEach(btn => {
      btn.addEventListener('click', (e) => { e.stopPropagation(); openGroup(btn.dataset.openGroup); });
    });
    grid.querySelectorAll('.group-card').forEach(card => {
      card.addEventListener('click', () => openGroup(card.dataset.groupId));
    });
  }

  document.getElementById('group-search-input').addEventListener('input', (e) => {
    state.search = e.target.value.trim().toLowerCase();
    renderGrid();
  });
  document.querySelectorAll('[data-group-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-group-filter]').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      state.filter = btn.dataset.groupFilter;
      renderGrid();
    });
  });

  /* ---------- Detail view ---------- */
  const listView = document.getElementById('groups-list-view');
  const detailView = document.getElementById('group-detail-view');

  function openGroup(id) {
    const g = baseGroups.find(gr => gr.id === id);
    if (!g) return;
    if (!joined.includes(id)) { joined.push(id); saveJoined(joined); }
    activeGroupId = id;
    listView.style.display = 'none';
    detailView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.getElementById('gd-avatar').textContent = initialsOf(g.name);
    document.getElementById('gd-name').textContent = g.name;
    document.getElementById('gd-desc').textContent = g.desc;
    document.getElementById('gd-join-btn').textContent = 'Miembro del grupo ✓';
    document.getElementById('gd-join-btn').disabled = true;
    document.getElementById('gd-member-count').textContent = g.members.length;

    const membersHtml = g.members.map(m => `
      <div class="member-row">
        <span class="avatar">${initialsOf(m.name)}</span>
        <div class="member-row-info"><strong>${escapeHtml(m.name)}</strong><span>${escapeHtml(m.role)}</span></div>
      </div>
    `).join('') || '<p class="empty-note">Aún no hay miembros.</p>';
    document.getElementById('gd-members-list').innerHTML = membersHtml;
    document.getElementById('gd-members-list-mobile').innerHTML = membersHtml;

    document.getElementById('gd-files-list').innerHTML = g.files.length ? g.files.map(f => `
      <div class="file-row">
        <span class="file-icon"><i class="fa-solid fa-file-lines"></i></span>
        <div class="file-row-info"><strong>${escapeHtml(f.name)}</strong><span>${escapeHtml(f.size)}</span></div>
        <button type="button" class="icon-btn" aria-label="Descargar" style="width:32px;height:32px;"><i class="fa-solid fa-download"></i></button>
      </div>
    `).join('') : '<p class="empty-note">Aún no se compartieron archivos en este grupo.</p>';

    document.getElementById('gd-calendar').innerHTML = g.events.length ? g.events.map(ev => `
      <div class="activity-item"><div class="activity-icon"><i class="fa-solid fa-calendar-day"></i></div><div><p>${escapeHtml(ev)}</p></div></div>
    `).join('') : '<p class="empty-note">Sin eventos próximos.</p>';

    renderTaskBoard(g);
    renderGroupChat(g);
  }

  document.getElementById('back-to-groups').addEventListener('click', () => {
    detailView.style.display = 'none';
    listView.style.display = 'block';
    renderGrid();
  });

  document.querySelectorAll('.tab-btn').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      document.querySelectorAll('.tab-pane').forEach(p => p.style.display = p.dataset.pane === tab.dataset.tab ? 'block' : 'none');
    });
  });

  function renderTaskBoard(g) {
    const cols = [
      { key: 'todo', label: 'Por hacer' },
      { key: 'doing', label: 'En progreso' },
      { key: 'done', label: 'Completado' },
    ];
    document.getElementById('gd-task-board').innerHTML = cols.map(c => `
      <div class="task-col">
        <h4>${c.label} <span>${g.tasks[c.key].length}</span></h4>
        ${g.tasks[c.key].map(t => `
          <div class="task-card">
            <span class="task-tag ${t.priority}">${t.priority === 'high' ? 'Alta' : t.priority === 'medium' ? 'Media' : 'Baja'}</span>
            <div>${escapeHtml(t.title)}</div>
            <div class="task-assignee"><i class="fa-solid fa-user"></i> ${escapeHtml(t.assignee)}</div>
          </div>
        `).join('') || '<p class="empty-note" style="padding:8px 0;">Sin tareas</p>'}
      </div>
    `).join('');
  }

  function renderGroupChat(g) {
    const body = document.getElementById('gd-chat-body');
    const seed = [
      { from: g.members[0]?.name || 'Equipo', text: '¡Bienvenido al grupo! 🎉', mine: false, time: 'Lun 09:00' },
    ];
    const history = groupChats[g.id] || seed;
    groupChats[g.id] = history;
    body.innerHTML = history.map(m => `
      <div class="cb-msg ${m.mine ? 'user' : 'bot'}" style="align-self:${m.mine ? 'flex-end' : 'flex-start'}; max-width:78%;">
        ${!m.mine ? `<strong style="display:block; font-size:11px; color:var(--color-celeste); margin-bottom:2px;">${escapeHtml(m.from)}</strong>` : ''}
        ${escapeHtml(m.text)}
        <div style="font-size:10px; opacity:0.7; margin-top:4px;">${m.time}</div>
      </div>
    `).join('');
    body.scrollTop = body.scrollHeight;
  }

  document.getElementById('gd-chat-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('gd-chat-input');
    const value = input.value.trim();
    if (!value || !activeGroupId) return;
    const time = new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
    groupChats[activeGroupId].push({ from: session ? (session.name || session.email) : 'Tú', text: value, mine: true, time });
    saveGroupChats(groupChats);
    input.value = '';
    renderGroupChat(baseGroups.find(g => g.id === activeGroupId));
  });

  /* ---------- Create group modal ---------- */
  const modalBackdrop = document.getElementById('modal-backdrop');
  const createModal = document.getElementById('create-group-modal');
  document.getElementById('open-create-group-btn').addEventListener('click', () => {
    modalBackdrop.classList.add('is-open');
    createModal.classList.add('is-open');
  });
  function closeCreateModal() {
    modalBackdrop.classList.remove('is-open');
    createModal.classList.remove('is-open');
  }
  document.getElementById('create-group-close').addEventListener('click', closeCreateModal);
  modalBackdrop.addEventListener('click', closeCreateModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCreateModal(); });

  const toast = document.querySelector('.toast');
  let toastTimer;
  function showToast(message, type = 'success') {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.remove('is-success', 'is-error');
    toast.classList.add(type === 'error' ? 'is-error' : 'is-success', 'is-visible');
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
  }

  document.getElementById('form-create-group').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('ng-name').value.trim();
    const category = document.getElementById('ng-category').value.trim();
    const desc = document.getElementById('ng-desc').value.trim();
    if (!name || !category || !desc) { showToast('Completa todos los campos.', 'error'); return; }
    const id = 'custom-' + Date.now();
    baseGroups.unshift({
      id, name, category, desc,
      members: [{ name: session ? (session.name || session.email) : 'Tú', role: 'Admin' }],
      files: [], tasks: { todo: [], doing: [], done: [] }, events: [],
    });
    joined.push(id);
    saveJoined(joined);
    e.target.reset();
    closeCreateModal();
    renderGrid();
    showToast('¡Grupo creado correctamente!');
  });

  renderGrid();
})();

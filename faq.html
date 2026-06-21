/* ==========================================================================
   ColabUp — Projects page interactions
   ========================================================================== */
(() => {
  'use strict';

  const session = ColabAuth.getSession();
  const FAV_KEY = `colabup_favorites_${session ? session.email : 'guest'}`;
  const CUSTOM_KEY = `colabup_custom_projects_${session ? session.email : 'guest'}`;

  const baseProjects = [
    {
      id: 'p1', title: 'App de reciclaje inteligente', category: 'Sostenibilidad', status: 'Abierto',
      desc: 'Plataforma móvil que conecta vecinos con puntos de reciclaje cercanos usando geolocalización.',
      tags: ['React Native', 'Node.js', 'Sostenibilidad'],
      img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=60',
      team: ['Fabrizio Torres', 'Jose Zevallos', 'Camila Vidal'],
      modality: 'Remoto', commitment: '5-10 h/semana', applicants: 12,
      fullDesc: 'Buscamos completar el módulo de notificaciones push y mejorar el flujo de registro de puntos de reciclaje. Ideal para quienes quieren sumar experiencia en apps móviles con impacto social real.',
    },
    {
      id: 'p2', title: 'EduIA — plataforma educativa', category: 'EdTech', status: 'En curso',
      desc: 'Asistente de estudio con IA que genera resúmenes y cuestionarios personalizados.',
      tags: ['Python', 'IA', 'Educación'],
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=60',
      team: ['Renzo Torres', 'Miguel Domenack'],
      modality: 'Híbrido', commitment: '10-15 h/semana', applicants: 8,
      fullDesc: 'Estamos integrando un nuevo modelo de generación de cuestionarios y necesitamos ayuda en frontend para el panel del profesor.',
    },
    {
      id: 'p3', title: 'Rediseño UX — Portal de empleabilidad', category: 'UX/UI', status: 'Abierto',
      desc: 'Investigación y rediseño de la experiencia de búsqueda de prácticas profesionales.',
      tags: ['Figma', 'UX Research', 'Accesibilidad'],
      img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=60',
      team: ['Michelle Aguilar'],
      modality: 'Remoto', commitment: '4-6 h/semana', applicants: 5,
      fullDesc: 'Buscamos un UX researcher para conducir entrevistas con estudiantes y proponer mejoras de accesibilidad WCAG 2.2.',
    },
    {
      id: 'p4', title: 'Marketplace de servicios freelance', category: 'Emprendimiento', status: 'Abierto',
      desc: 'MVP de una plataforma que conecta freelancers universitarios con pequeños negocios.',
      tags: ['Vue.js', 'Stripe', 'MVP'],
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=60',
      team: ['Diego Pinto', 'Heren Aujtukai'],
      modality: 'Remoto', commitment: '8-12 h/semana', applicants: 15,
      fullDesc: 'Necesitamos un desarrollador backend para integrar pagos con Stripe y un sistema de calificaciones.',
    },
    {
      id: 'p5', title: 'Dashboard de finanzas personales', category: 'Fintech', status: 'Completado',
      desc: 'Herramienta de visualización de gastos e ingresos para estudiantes universitarios.',
      tags: ['Chart.js', 'Vanilla JS', 'Fintech'],
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=60',
      team: ['Joan Calderon', 'Fabrizio Arias'],
      modality: 'Remoto', commitment: 'Finalizado', applicants: 0,
      fullDesc: 'Proyecto finalizado y presentado en la feria de innovación UPC 2026. Disponible como referencia en el portafolio del equipo.',
    },
    {
      id: 'p6', title: 'Bot de soporte estudiantil', category: 'IA', status: 'En curso',
      desc: 'Chatbot que responde preguntas frecuentes sobre trámites académicos.',
      tags: ['JavaScript', 'NLP', 'Automatización'],
      img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=600&q=60',
      team: ['Jose Zevallos'],
      modality: 'Remoto', commitment: '3-5 h/semana', applicants: 6,
      fullDesc: 'Buscamos sumar a alguien con experiencia en procesamiento de lenguaje natural para mejorar la precisión de las respuestas.',
    },
  ];

  function loadCustomProjects() {
    try { return JSON.parse(localStorage.getItem(CUSTOM_KEY)) || []; } catch { return []; }
  }
  function saveCustomProjects(list) {
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(list));
  }
  function loadFavorites() {
    try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; } catch { return []; }
  }
  function saveFavorites(list) {
    localStorage.setItem(FAV_KEY, JSON.stringify(list));
  }

  let allProjects = [...loadCustomProjects(), ...baseProjects];
  let favorites = loadFavorites();
  let state = { search: '', category: 'Todos', status: 'all', favoritesOnly: false, view: 'grid' };

  const grid = document.getElementById('projects-grid');
  const resultsCount = document.getElementById('results-count');

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function applyFilters() {
    return allProjects.filter(p => {
      const matchesSearch = !state.search ||
        p.title.toLowerCase().includes(state.search) ||
        p.desc.toLowerCase().includes(state.search) ||
        p.tags.some(t => t.toLowerCase().includes(state.search));
      const matchesCategory = state.category === 'Todos' || p.category === state.category;
      const matchesStatus = state.status === 'all' || p.status === state.status;
      const matchesFav = !state.favoritesOnly || favorites.includes(p.id);
      return matchesSearch && matchesCategory && matchesStatus && matchesFav;
    });
  }

  function render() {
    const filtered = applyFilters();
    resultsCount.textContent = `${filtered.length} proyecto${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`;

    grid.classList.toggle('is-list', state.view === 'list');

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><i class="fa-solid fa-magnifying-glass"></i><p>No encontramos proyectos con esos filtros. Prueba ajustando la búsqueda.</p></div>`;
      return;
    }

    grid.innerHTML = filtered.map(p => `
      <article class="project-card" data-project-id="${p.id}">
        <div class="project-thumb" style="background-image:url('${p.img}');">
          <span class="project-status">${escapeHtml(p.status)}</span>
          <button type="button" class="project-fav ${favorites.includes(p.id) ? 'is-fav' : ''}" data-fav-id="${p.id}" aria-label="Marcar como favorito">
            <i class="fa-solid fa-star"></i>
          </button>
        </div>
        <div class="project-body">
          <span class="project-category">${escapeHtml(p.category)}</span>
          <h3>${escapeHtml(p.title)}</h3>
          <p class="project-desc">${escapeHtml(p.desc)}</p>
          <div class="project-tags">${p.tags.map(t => `<span>${escapeHtml(t)}</span>`).join('')}</div>
          <div class="project-footer">
            <div class="project-avatars">${p.team.slice(0, 3).map(m => `<span>${m.split(' ').map(w=>w[0]).join('').toUpperCase()}</span>`).join('')}</div>
            <span class="project-meta-mini">${p.applicants} postulantes</span>
          </div>
        </div>
      </article>
    `).join('');

    attachCardListeners();
  }

  function attachCardListeners() {
    document.querySelectorAll('[data-fav-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.favId;
        if (favorites.includes(id)) {
          favorites = favorites.filter(f => f !== id);
        } else {
          favorites.push(id);
        }
        saveFavorites(favorites);
        render();
      });
    });
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => openDetail(card.dataset.projectId));
    });
  }

  /* ---------- Toolbar wiring ---------- */
  document.getElementById('search-input').addEventListener('input', (e) => {
    state.search = e.target.value.trim().toLowerCase();
    render();
  });
  document.getElementById('category-filter').addEventListener('change', (e) => {
    state.category = e.target.value;
    render();
  });
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      state.status = chip.dataset.status;
      render();
    });
  });
  document.getElementById('fav-toggle').addEventListener('click', () => {
    state.favoritesOnly = !state.favoritesOnly;
    document.getElementById('fav-toggle').classList.toggle('is-active', state.favoritesOnly);
    render();
  });
  document.getElementById('view-grid').addEventListener('click', () => {
    state.view = 'grid';
    document.getElementById('view-grid').classList.add('is-active');
    document.getElementById('view-list').classList.remove('is-active');
    render();
  });
  document.getElementById('view-list').addEventListener('click', () => {
    state.view = 'list';
    document.getElementById('view-list').classList.add('is-active');
    document.getElementById('view-grid').classList.remove('is-active');
    render();
  });

  /* ---------- Detail modal ---------- */
  const detailModal = document.getElementById('detail-modal');
  const detailBackdrop = document.getElementById('modal-backdrop');

  function openDetail(id) {
    const p = allProjects.find(pr => pr.id === id);
    if (!p) return;
    document.getElementById('detail-banner').style.backgroundImage = `url('${p.img}')`;
    document.getElementById('detail-status').textContent = p.status;
    document.getElementById('detail-category').textContent = p.category;
    document.getElementById('detail-title').textContent = p.title;
    document.getElementById('detail-modality').textContent = p.modality;
    document.getElementById('detail-commitment').textContent = p.commitment;
    document.getElementById('detail-applicants').textContent = `${p.applicants} postulantes`;
    document.getElementById('detail-desc').textContent = p.fullDesc;
    document.getElementById('detail-team').innerHTML = p.team.map(m => `
      <div class="member"><span class="avatar">${m.split(' ').map(w=>w[0]).join('').toUpperCase()}</span> ${escapeHtml(m)}</div>
    `).join('');
    const applyBtn = document.getElementById('detail-apply-btn');
    applyBtn.dataset.projectTitle = p.title;
    applyBtn.disabled = p.status === 'Completado';
    applyBtn.textContent = p.status === 'Completado' ? 'Proyecto finalizado' : 'Postular a este proyecto';

    detailBackdrop.classList.add('is-open');
    detailModal.classList.add('is-open');
  }
  function closeDetail() {
    detailBackdrop.classList.remove('is-open');
    detailModal.classList.remove('is-open');
  }
  document.getElementById('detail-close').addEventListener('click', closeDetail);
  document.getElementById('detail-close-2').addEventListener('click', closeDetail);
  detailBackdrop.addEventListener('click', closeDetail);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeDetail(); closeCreateModal(); } });

  const toast = document.querySelector('.toast');
  let toastTimer;
  function showToast(message, type = 'success') {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.remove('is-success', 'is-error');
    toast.classList.add(type === 'error' ? 'is-error' : 'is-success', 'is-visible');
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
  }

  document.getElementById('detail-apply-btn').addEventListener('click', function () {
    if (this.disabled) return;
    this.disabled = true;
    const original = this.textContent;
    this.textContent = 'Enviando postulación...';
    setTimeout(() => {
      showToast(`¡Postulación enviada a "${this.dataset.projectTitle}"!`);
      this.textContent = 'Postulación enviada ✓';
    }, 800);
  });

  /* ---------- Create project modal ---------- */
  const createModal = document.getElementById('create-modal');
  function openCreateModal() {
    detailBackdrop.classList.add('is-open');
    createModal.classList.add('is-open');
  }
  function closeCreateModal() {
    detailBackdrop.classList.remove('is-open');
    createModal.classList.remove('is-open');
  }
  document.getElementById('open-create-btn').addEventListener('click', openCreateModal);
  document.getElementById('create-close').addEventListener('click', closeCreateModal);
  detailBackdrop.addEventListener('click', closeCreateModal);

  document.getElementById('form-create-project').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('new-title').value.trim();
    const category = document.getElementById('new-category').value.trim();
    const desc = document.getElementById('new-desc').value.trim();
    const tagsRaw = document.getElementById('new-tags').value.trim();

    if (!title || !category || !desc) {
      showToast('Completa todos los campos obligatorios.', 'error');
      return;
    }

    const newProject = {
      id: 'custom-' + Date.now(),
      title, category, status: 'Abierto', desc,
      tags: tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [category],
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=60',
      team: [session ? (session.name || session.email) : 'Tú'],
      modality: 'Remoto', commitment: 'A definir', applicants: 0,
      fullDesc: desc,
    };

    const custom = loadCustomProjects();
    custom.unshift(newProject);
    saveCustomProjects(custom);
    allProjects = [...custom, ...baseProjects];

    e.target.reset();
    closeCreateModal();
    render();
    showToast('¡Proyecto publicado correctamente!');
  });

  render();
})();

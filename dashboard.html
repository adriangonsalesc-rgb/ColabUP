/* ==========================================================================
   ColabUp — Profile page interactions
   Persists profile data in localStorage, namespaced by the logged-in user's
   email, so edits survive reloads without a backend.
   ========================================================================== */
(() => {
  'use strict';

  const session = ColabAuth.getSession();
  const STORAGE_KEY = `colabup_profile_${session ? session.email : 'guest'}`;

  const defaultProfile = {
    name: session ? session.name : 'Usuario ColabUp',
    role: 'Estudiante de Ingeniería de Software',
    location: 'Lima, Perú',
    university: 'UPC',
    about: 'Apasionado por construir productos digitales con impacto real. Me interesa el desarrollo full-stack, el diseño centrado en el usuario y la colaboración en equipos multidisciplinarios.',
    skills: ['JavaScript', 'React', 'UX Research', 'Figma', 'Node.js', 'SQL'],
    experience: [
      { title: 'Frontend Developer (práctica)', org: 'NextGen Labs', dates: '2025 — Actualidad', desc: 'Desarrollo de componentes reutilizables y mejoras de accesibilidad en el producto principal.' },
    ],
    education: [
      { title: 'Ingeniería de Software', org: 'Universidad Peruana de Ciencias Aplicadas', dates: '2023 — 2028', desc: 'Facultad de Ingeniería.' },
    ],
    certifications: [
      { name: 'Scrum Foundation Professional', issuer: 'CertiProf', year: '2025' },
      { name: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2024' },
    ],
    portfolio: [
      { title: 'App de reciclaje inteligente', tag: 'Proyecto en curso', img: 'https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=400&q=60' },
      { title: 'Rediseño UX — EduIA', tag: 'Case study', img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=60' },
      { title: 'Landing page ColabUp', tag: 'Frontend', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=400&q=60' },
    ],
  };

  function loadProfile() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return stored || defaultProfile;
    } catch {
      return defaultProfile;
    }
  }
  function saveProfile(profile) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  }

  let profile = loadProfile();

  /* ---------- Render ---------- */
  function initials(name) {
    return name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  }

  function render() {
    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-role').textContent = profile.role;
    document.getElementById('profile-location').textContent = profile.location;
    document.getElementById('profile-university').textContent = profile.university;
    document.getElementById('profile-avatar').textContent = initials(profile.name);
    document.getElementById('about-text').textContent = profile.about;
    document.getElementById('about-textarea').value = profile.about;

    document.getElementById('user-name-topbar').textContent = profile.name;
    document.getElementById('user-avatar-topbar').textContent = initials(profile.name);

    // Skills
    const skillsWrap = document.getElementById('skills-wrap');
    skillsWrap.innerHTML = profile.skills.map((s, i) =>
      `<span class="skill-tag">${escapeHtml(s)}<button type="button" data-remove-skill="${i}" aria-label="Eliminar habilidad">✕</button></span>`
    ).join('');

    // Experience
    document.getElementById('experience-list').innerHTML = profile.experience.map((e, i) => `
      <div class="timeline-item">
        <div class="timeline-icon"><i class="fa-solid fa-briefcase"></i></div>
        <div class="timeline-content">
          <h3>${escapeHtml(e.title)}</h3>
          <div class="timeline-org">${escapeHtml(e.org)}</div>
          <div class="timeline-dates">${escapeHtml(e.dates)}</div>
          ${e.desc ? `<p class="timeline-desc">${escapeHtml(e.desc)}</p>` : ''}
        </div>
        <button type="button" class="timeline-remove" data-remove-exp="${i}" aria-label="Eliminar experiencia"><i class="fa-solid fa-trash"></i></button>
      </div>
    `).join('') || emptyNote('Aún no agregaste experiencia laboral.');

    // Education
    document.getElementById('education-list').innerHTML = profile.education.map((e, i) => `
      <div class="timeline-item">
        <div class="timeline-icon" style="background:rgba(77,168,218,0.12); color:var(--color-celeste);"><i class="fa-solid fa-graduation-cap"></i></div>
        <div class="timeline-content">
          <h3>${escapeHtml(e.title)}</h3>
          <div class="timeline-org">${escapeHtml(e.org)}</div>
          <div class="timeline-dates">${escapeHtml(e.dates)}</div>
          ${e.desc ? `<p class="timeline-desc">${escapeHtml(e.desc)}</p>` : ''}
        </div>
        <button type="button" class="timeline-remove" data-remove-edu="${i}" aria-label="Eliminar educación"><i class="fa-solid fa-trash"></i></button>
      </div>
    `).join('') || emptyNote('Aún no agregaste formación académica.');

    // Certifications
    document.getElementById('cert-list').innerHTML = profile.certifications.map((c, i) => `
      <div class="cert-item">
        <div class="cert-icon"><i class="fa-solid fa-certificate"></i></div>
        <div style="flex:1;">
          <h4>${escapeHtml(c.name)}</h4>
          <span>${escapeHtml(c.issuer)} · ${escapeHtml(c.year)}</span>
        </div>
        <button type="button" class="timeline-remove" data-remove-cert="${i}" aria-label="Eliminar certificación"><i class="fa-solid fa-trash"></i></button>
      </div>
    `).join('') || emptyNote('Aún no agregaste certificaciones.');

    // Portfolio
    document.getElementById('portfolio-grid').innerHTML = profile.portfolio.map((p, i) => `
      <article class="portfolio-card">
        <div class="portfolio-thumb" style="background-image:url('${p.img}');"></div>
        <div class="portfolio-info">
          <h4>${escapeHtml(p.title)}</h4>
          <span>${escapeHtml(p.tag)}</span>
        </div>
      </article>
    `).join('') + `<button type="button" class="add-portfolio-card" id="add-portfolio-btn" data-edit-only><i class="fa-solid fa-plus"></i> Agregar proyecto</button>`;
  }

  function emptyNote(text) {
    return `<p class="empty-note">${text}</p>`;
  }
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  render();

  /* ---------- Edit mode toggle ---------- */
  const editToggle = document.getElementById('edit-profile-btn');
  const saveBtn = document.getElementById('save-profile-btn');
  editToggle.addEventListener('click', () => {
    document.body.classList.add('is-editing');
    render();
    attachDynamicListeners();
  });
  saveBtn.addEventListener('click', () => {
    profile.about = document.getElementById('about-textarea').value.trim() || profile.about;
    saveProfile(profile);
    document.body.classList.remove('is-editing');
    render();
    attachDynamicListeners();
    showToast('Perfil actualizado correctamente.');
  });

  /* ---------- Toast ---------- */
  const toast = document.querySelector('.toast');
  let toastTimer;
  function showToast(message, type = 'success') {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.remove('is-success', 'is-error');
    toast.classList.add(type === 'error' ? 'is-error' : 'is-success', 'is-visible');
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
  }

  /* ---------- Avatar edit (banner / avatar buttons — simulated, no file backend) ---------- */
  document.getElementById('avatar-edit-btn').addEventListener('click', () => {
    showToast('La carga de imágenes estará disponible próximamente.', 'error');
  });
  document.getElementById('banner-edit-btn').addEventListener('click', () => {
    showToast('La carga de imágenes estará disponible próximamente.', 'error');
  });

  /* ---------- Skills ---------- */
  document.getElementById('add-skill-btn').addEventListener('click', () => {
    const input = document.getElementById('skill-input');
    const value = input.value.trim();
    if (!value) return;
    if (profile.skills.some(s => s.toLowerCase() === value.toLowerCase())) {
      showToast('Esa habilidad ya está en tu perfil.', 'error');
      return;
    }
    profile.skills.push(value);
    input.value = '';
    render();
    attachDynamicListeners();
  });
  document.getElementById('skill-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); document.getElementById('add-skill-btn').click(); }
  });

  /* ---------- Modals (experience / education / certification) ---------- */
  function openModal(id) {
    document.getElementById('modal-backdrop').classList.add('is-open');
    document.getElementById(id).classList.add('is-open');
  }
  function closeModals() {
    document.getElementById('modal-backdrop').classList.remove('is-open');
    document.querySelectorAll('.modal-box').forEach(m => m.classList.remove('is-open'));
  }
  document.getElementById('modal-backdrop').addEventListener('click', closeModals);
  document.querySelectorAll('.modal-close').forEach(btn => btn.addEventListener('click', closeModals));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModals(); });

  document.getElementById('add-experience-trigger').addEventListener('click', () => openModal('modal-experience'));
  document.getElementById('add-education-trigger').addEventListener('click', () => openModal('modal-education'));
  document.getElementById('add-cert-trigger').addEventListener('click', () => openModal('modal-cert'));

  document.getElementById('form-experience').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('exp-title').value.trim();
    const org = document.getElementById('exp-org').value.trim();
    const dates = document.getElementById('exp-dates').value.trim();
    const desc = document.getElementById('exp-desc').value.trim();
    if (!title || !org || !dates) { showToast('Completa los campos obligatorios.', 'error'); return; }
    profile.experience.unshift({ title, org, dates, desc });
    e.target.reset();
    closeModals();
    render();
    attachDynamicListeners();
    showToast('Experiencia agregada.');
  });

  document.getElementById('form-education').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('edu-title').value.trim();
    const org = document.getElementById('edu-org').value.trim();
    const dates = document.getElementById('edu-dates').value.trim();
    const desc = document.getElementById('edu-desc').value.trim();
    if (!title || !org || !dates) { showToast('Completa los campos obligatorios.', 'error'); return; }
    profile.education.unshift({ title, org, dates, desc });
    e.target.reset();
    closeModals();
    render();
    attachDynamicListeners();
    showToast('Formación académica agregada.');
  });

  document.getElementById('form-cert').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cert-name').value.trim();
    const issuer = document.getElementById('cert-issuer').value.trim();
    const year = document.getElementById('cert-year').value.trim();
    if (!name || !issuer || !year) { showToast('Completa los campos obligatorios.', 'error'); return; }
    profile.certifications.unshift({ name, issuer, year });
    e.target.reset();
    closeModals();
    render();
    attachDynamicListeners();
    showToast('Certificación agregada.');
  });

  document.getElementById('form-portfolio').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('pf-title').value.trim();
    const tag = document.getElementById('pf-tag').value.trim() || 'Proyecto';
    const img = document.getElementById('pf-img').value.trim() || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=60';
    if (!title) { showToast('Ingresa un título para el proyecto.', 'error'); return; }
    profile.portfolio.unshift({ title, tag, img });
    e.target.reset();
    closeModals();
    render();
    attachDynamicListeners();
    showToast('Proyecto agregado al portafolio.');
  });

  /* ---------- Dynamic remove / add listeners (re-attached after each render) ---------- */
  function attachDynamicListeners() {
    document.querySelectorAll('[data-remove-skill]').forEach(btn => {
      btn.addEventListener('click', () => {
        profile.skills.splice(Number(btn.dataset.removeSkill), 1);
        render(); attachDynamicListeners();
      });
    });
    document.querySelectorAll('[data-remove-exp]').forEach(btn => {
      btn.addEventListener('click', () => {
        profile.experience.splice(Number(btn.dataset.removeExp), 1);
        render(); attachDynamicListeners();
      });
    });
    document.querySelectorAll('[data-remove-edu]').forEach(btn => {
      btn.addEventListener('click', () => {
        profile.education.splice(Number(btn.dataset.removeEdu), 1);
        render(); attachDynamicListeners();
      });
    });
    document.querySelectorAll('[data-remove-cert]').forEach(btn => {
      btn.addEventListener('click', () => {
        profile.certifications.splice(Number(btn.dataset.removeCert), 1);
        render(); attachDynamicListeners();
      });
    });
    document.getElementById('add-portfolio-btn')?.addEventListener('click', () => openModal('modal-portfolio'));
  }
  attachDynamicListeners();
})();

/* ==========================================================================
   ColabUp — Help page interactions
   ========================================================================== */
(() => {
  'use strict';

  const FAQS = [
    { q: '¿Cómo creo una cuenta en ColabUp?', a: 'Haz clic en "Regístrate gratis" desde la página principal, completa tus datos y acepta los términos de servicio. Tu cuenta estará lista al instante.' },
    { q: '¿Cómo publico un proyecto?', a: 'Ve a la sección Proyectos dentro de tu dashboard y haz clic en "Crear proyecto". Completa el título, categoría, descripción y tecnologías necesarias.' },
    { q: '¿Cómo postulo a un proyecto?', a: 'Abre cualquier proyecto desde el listado y haz clic en "Postular a este proyecto". El equipo creador recibirá tu postulación de inmediato.' },
    { q: '¿Puedo crear o unirme a varios grupos?', a: 'Sí, no hay límite de grupos. Puedes crear los tuyos propios o unirte a comunidades existentes desde la sección Grupos.' },
    { q: '¿Cómo edito mi perfil y portafolio?', a: 'Entra a "Mi perfil" y pulsa "Editar perfil". Podrás actualizar tu foto, biografía, experiencia, educación, skills, certificaciones y portafolio.' },
    { q: '¿ColabUp tiene algún costo?', a: 'No. ColabUp es completamente gratuito para estudiantes, egresados y emprendedores.' },
    { q: '¿Cómo recupero mi contraseña?', a: 'En la pantalla de inicio de sesión, haz clic en "¿Olvidaste tu contraseña?" e ingresa tu correo. Te enviaremos instrucciones para restablecerla.' },
    { q: '¿Cómo elimino mi cuenta?', a: 'Desde Configuración → Cuenta encontrarás la opción "Eliminar mi cuenta" en la zona de peligro. Esta acción es irreversible.' },
  ];

  const container = document.getElementById('faq-container');

  function renderFaqs(filter = '') {
    const items = FAQS.filter(f => !filter || f.q.toLowerCase().includes(filter) || f.a.toLowerCase().includes(filter));
    if (!items.length) {
      container.innerHTML = '<p class="empty-note">No encontramos resultados para tu búsqueda.</p>';
      return;
    }
    container.innerHTML = items.map((f, i) => `
      <div class="faq-item" data-faq-index="${i}">
        <button type="button" class="faq-question" aria-expanded="false">${f.q} <i class="fa-solid fa-chevron-down"></i></button>
        <div class="faq-answer"><p>${f.a}</p></div>
      </div>
    `).join('');
    attachAccordion();
  }

  function attachAccordion() {
    container.querySelectorAll('.faq-item').forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        container.querySelectorAll('.faq-item.is-open').forEach(openItem => {
          if (openItem !== item) {
            openItem.classList.remove('is-open');
            openItem.querySelector('.faq-answer').style.maxHeight = null;
            openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          }
        });
        if (isOpen) {
          item.classList.remove('is-open');
          answer.style.maxHeight = null;
          question.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('is-open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          question.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  document.getElementById('help-search-input').addEventListener('input', (e) => {
    renderFaqs(e.target.value.trim().toLowerCase());
  });

  renderFaqs();

  /* ---------- Topic cards scroll to FAQ ---------- */
  document.querySelectorAll('.help-topic-card').forEach(card => {
    card.addEventListener('click', () => {
      document.getElementById('faq-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ---------- Support form ---------- */
  const toast = document.querySelector('.toast');
  let toastTimer;
  function showToast(message, type = 'success') {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.remove('is-success', 'is-error');
    toast.classList.add(type === 'error' ? 'is-error' : 'is-success', 'is-visible');
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
  }

  document.getElementById('support-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const subject = document.getElementById('sup-subject');
    const message = document.getElementById('sup-message');
    let valid = true;

    [subject, message].forEach(input => {
      const field = input.closest('.field');
      const ok = input.value.trim().length >= (input === message ? 10 : 3);
      field.classList.toggle('is-invalid', !ok);
      field.querySelector('.field-error').textContent = ok ? '' : 'Completa este campo correctamente.';
      if (!ok) valid = false;
    });

    if (!valid) { showToast('Revisa los campos del formulario.', 'error'); return; }

    showToast('¡Mensaje enviado! Nuestro equipo te responderá pronto.');
    e.target.reset();
  });
})();

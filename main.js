/* ==========================================================================
   ColabUp — Floating chatbot widget
   Injects itself into the page, responds to FAQs with simulated rule-based
   matching, and offers quick-reply shortcuts. No backend required.
   ========================================================================== */
(() => {
  'use strict';

  const KNOWLEDGE_BASE = [
    { keys: ['proyecto', 'publicar', 'crear proyecto'], answer: 'Para publicar un proyecto ve a la sección <strong>Proyectos</strong> y haz clic en "Crear proyecto". Completa el título, categoría, descripción y tecnologías, ¡y listo!' },
    { keys: ['postular', 'aplicar', 'unirme'], answer: 'Abre cualquier proyecto desde la sección <strong>Proyectos</strong> y haz clic en "Postular a este proyecto". El equipo recibirá tu postulación al instante.' },
    { keys: ['grupo', 'crear grupo'], answer: 'En la sección <strong>Grupos</strong> puedes crear uno nuevo con el botón "Crear grupo", o buscar grupos existentes por nombre o categoría.' },
    { keys: ['perfil', 'editar perfil', 'portafolio'], answer: 'Ve a <strong>Mi perfil</strong> y pulsa "Editar perfil" para actualizar tu foto, experiencia, educación, skills y portafolio.' },
    { keys: ['contraseña', 'password', 'recuperar'], answer: 'En la pantalla de inicio de sesión, haz clic en "¿Olvidaste tu contraseña?" e ingresa tu correo para recibir instrucciones.' },
    { keys: ['mensaje', 'chat', 'escribir'], answer: 'La sección <strong>Mensajes</strong> tiene chat en tiempo real simulado, con estado en línea, emojis y archivos adjuntos.' },
    { keys: ['notificacion'], answer: 'Revisa la campana en la barra superior o la sección <strong>Notificaciones</strong> para ver toda tu actividad reciente.' },
    { keys: ['eliminar cuenta', 'borrar cuenta', 'cancelar cuenta'], answer: 'Puedes gestionar tu cuenta desde <strong>Configuración → Cuenta</strong>, incluyendo la opción de eliminarla.' },
    { keys: ['gratis', 'precio', 'costo', 'pago'], answer: 'ColabUp es completamente gratuito para estudiantes y egresados. ¡Sin costos ocultos!' },
    { keys: ['contacto', 'soporte', 'ayuda humana'], answer: 'Puedes escribirnos desde la página de <strong>Ayuda</strong> o al correo soporte@colabup.app.' },
  ];

  const QUICK_REPLIES = [
    '¿Cómo publico un proyecto?',
    '¿Cómo creo un grupo?',
    '¿Es gratis ColabUp?',
    'Hablar con soporte',
  ];

  function findAnswer(text) {
    const lower = text.toLowerCase();
    const hit = KNOWLEDGE_BASE.find(entry => entry.keys.some(k => lower.includes(k)));
    if (hit) return hit.answer;
    return 'Gracias por tu mensaje. No tengo una respuesta exacta para eso, pero puedes revisar la sección de <strong>Ayuda</strong> o escribir a soporte@colabup.app y un miembro del equipo te contactará pronto.';
  }

  function buildWidget() {
    const launcher = document.createElement('button');
    launcher.className = 'chatbot-launcher';
    launcher.setAttribute('aria-label', 'Abrir asistente virtual');
    launcher.innerHTML = '<i class="fa-solid fa-comment-dots"></i><span class="cb-dot" id="cb-dot"></span>';

    const panel = document.createElement('div');
    panel.className = 'chatbot-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Asistente virtual ColabUp');
    panel.innerHTML = `
      <div class="chatbot-head">
        <div class="cb-avatar"><i class="fa-solid fa-robot"></i></div>
        <div class="chatbot-head-text"><strong>Asistente ColabUp</strong><span>En línea</span></div>
        <button type="button" class="chatbot-close" aria-label="Cerrar asistente"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="chatbot-body" id="cb-body"></div>
      <div class="cb-quick-replies" id="cb-quick"></div>
      <form class="chatbot-input-row" id="cb-form">
        <input type="text" id="cb-input" placeholder="Escribe tu pregunta..." autocomplete="off">
        <button type="submit" aria-label="Enviar"><i class="fa-solid fa-paper-plane"></i></button>
      </form>
    `;

    document.body.appendChild(launcher);
    document.body.appendChild(panel);

    const body = panel.querySelector('#cb-body');
    const quick = panel.querySelector('#cb-quick');
    const form = panel.querySelector('#cb-form');
    const input = panel.querySelector('#cb-input');
    const dot = launcher.querySelector('#cb-dot');
    let opened = false;

    function addMessage(text, who) {
      const el = document.createElement('div');
      el.className = `cb-msg ${who}`;
      el.innerHTML = text;
      body.appendChild(el);
      body.scrollTop = body.scrollHeight;
    }

    function botReply(text) {
      const typing = document.createElement('div');
      typing.className = 'cb-typing';
      typing.innerHTML = '<span></span><span></span><span></span>';
      body.appendChild(typing);
      body.scrollTop = body.scrollHeight;
      setTimeout(() => {
        typing.remove();
        addMessage(findAnswer(text), 'bot');
      }, 700 + Math.random() * 500);
    }

    function renderQuickReplies() {
      quick.innerHTML = QUICK_REPLIES.map(q => `<button type="button">${q}</button>`).join('');
      quick.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          addMessage(btn.textContent, 'user');
          botReply(btn.textContent);
        });
      });
    }

    function openPanel() {
      panel.classList.add('is-open');
      opened = true;
      dot.classList.add('is-hidden');
      input.focus();
    }
    function closePanel() { panel.classList.remove('is-open'); }

    launcher.addEventListener('click', () => {
      panel.classList.contains('is-open') ? closePanel() : openPanel();
    });
    panel.querySelector('.chatbot-close').addEventListener('click', closePanel);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const value = input.value.trim();
      if (!value) return;
      addMessage(value, 'user');
      input.value = '';
      botReply(value);
    });

    // Greeting
    addMessage('¡Hola! Soy el asistente virtual de ColabUp 👋 ¿En qué puedo ayudarte hoy?', 'bot');
    renderQuickReplies();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildWidget);
  } else {
    buildWidget();
  }
})();

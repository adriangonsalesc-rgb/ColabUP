/* ==========================================================================
   ColabUp — Landing Page Interactions
   No dead buttons: navbar, mobile menu, scrollspy, reveal-on-scroll,
   testimonials carousel, FAQ accordion, contact form validation,
   newsletter, back-to-top, loading screen.
   ========================================================================== */
(() => {
  'use strict';

  /* ---------- Loading screen ---------- */
  const loadingScreen = document.querySelector('.loading-screen');
  window.addEventListener('load', () => {
    setTimeout(() => loadingScreen?.classList.add('is-hidden'), 350);
  });

  /* ---------- Sticky navbar ---------- */
  const navbar = document.querySelector('.navbar');
  const onScrollNav = () => {
    if (window.scrollY > 24) navbar.classList.add('is-scrolled');
    else navbar.classList.remove('is-scrolled');
  };
  onScrollNav();
  window.addEventListener('scroll', onScrollNav, { passive: true });

  /* ---------- Mobile menu ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuBackdrop = document.querySelector('.menu-backdrop');

  const closeMenu = () => {
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    menuBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  };
  const openMenu = () => {
    navToggle.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('is-open');
    menuBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };
  navToggle?.addEventListener('click', () => {
    navToggle.classList.contains('is-open') ? closeMenu() : openMenu();
  });
  menuBackdrop?.addEventListener('click', closeMenu);
  mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  /* ---------- Scrollspy (active nav link by section in view) ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a, .mobile-menu a');

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`);
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => spyObserver.observe(s));

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal, .mv-card, .why-card, .feature-card, .step-card, .team-card');
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 70}ms`;
    revealObserver.observe(el);
  });

  /* ---------- Animated counters (hero stats) ---------- */
  const counters = document.querySelectorAll('[data-count-to]');
  const countObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.countTo, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1400;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased).toLocaleString('es-PE') + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(c => countObserver.observe(c));

  /* ---------- Back to top ---------- */
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 600);
  }, { passive: true });
  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Toast notifications ---------- */
  const toast = document.querySelector('.toast');
  let toastTimer;
  function showToast(message, type = 'success') {
    if (!toast) return;
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.remove('is-success', 'is-error');
    toast.classList.add(type === 'error' ? 'is-error' : 'is-success', 'is-visible');
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3600);
  }

  /* ---------- Testimonials carousel ---------- */
  const track = document.querySelector('.testi-track');
  const dotsWrap = document.querySelector('.testi-dots');
  const prevBtn = document.querySelector('.testi-prev');
  const nextBtn = document.querySelector('.testi-next');

  if (track) {
    const cards = track.children.length;
    const getPerView = () => window.innerWidth <= 640 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
    let perView = getPerView();
    let pages = Math.max(1, cards - perView + 1);
    let index = 0;

    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = '';
      for (let i = 0; i < pages; i++) {
        const dot = document.createElement('button');
        dot.className = 'testi-dot' + (i === index ? ' is-active' : '');
        dot.setAttribute('aria-label', `Ir al testimonio ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
      }
    }
    function update() {
      const cardWidth = track.children[0].getBoundingClientRect().width;
      const gap = 24;
      track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
      dotsWrap?.querySelectorAll('.testi-dot').forEach((d, i) => d.classList.toggle('is-active', i === index));
    }
    function goTo(i) {
      index = Math.max(0, Math.min(i, pages - 1));
      update();
    }
    prevBtn?.addEventListener('click', () => goTo(index - 1 < 0 ? pages - 1 : index - 1));
    nextBtn?.addEventListener('click', () => goTo(index + 1 >= pages ? 0 : index + 1));

    let autoplay = setInterval(() => goTo(index + 1 >= pages ? 0 : index + 1), 5500);
    track.closest('.testimonials')?.addEventListener('mouseenter', () => clearInterval(autoplay));
    track.closest('.testimonials')?.addEventListener('mouseleave', () => {
      autoplay = setInterval(() => goTo(index + 1 >= pages ? 0 : index + 1), 5500);
    });

    window.addEventListener('resize', () => {
      perView = getPerView();
      pages = Math.max(1, cards - perView + 1);
      index = Math.min(index, pages - 1);
      buildDots();
      update();
    });

    buildDots();
    update();
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach(openItem => {
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

  /* ---------- Contact form validation ---------- */
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    const fields = {
      name: contactForm.querySelector('#contact-name'),
      email: contactForm.querySelector('#contact-email'),
      phone: contactForm.querySelector('#contact-phone'),
      message: contactForm.querySelector('#contact-message'),
    };

    const validators = {
      name: (v) => v.trim().length >= 2,
      email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      phone: (v) => v.trim() === '' || /^[0-9+\s()-]{6,20}$/.test(v.trim()),
      message: (v) => v.trim().length >= 10,
    };

    const errorMessages = {
      name: 'Ingresa tu nombre completo (mínimo 2 caracteres).',
      email: 'Ingresa un correo electrónico válido.',
      phone: 'Ingresa un teléfono válido o deja el campo vacío.',
      message: 'Cuéntanos un poco más (mínimo 10 caracteres).',
    };

    function validateField(key) {
      const el = fields[key];
      if (!el) return true;
      const field = el.closest('.field');
      const valid = validators[key](el.value);
      field.classList.toggle('is-invalid', !valid);
      field.classList.toggle('is-valid', valid && el.value.trim() !== '');
      const errorEl = field.querySelector('.field-error');
      if (errorEl) errorEl.textContent = errorMessages[key];
      return valid;
    }

    Object.keys(fields).forEach(key => {
      fields[key]?.addEventListener('blur', () => validateField(key));
      fields[key]?.addEventListener('input', () => {
        if (fields[key].closest('.field').classList.contains('is-invalid')) validateField(key);
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const results = Object.keys(fields).map(validateField);
      const allValid = results.every(Boolean);

      if (!allValid) {
        showToast('Revisa los campos marcados en rojo.', 'error');
        contactForm.querySelector('.is-invalid input, .is-invalid textarea')?.focus();
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        showToast('¡Mensaje enviado! Te responderemos pronto.', 'success');
        contactForm.reset();
        Object.values(fields).forEach(el => {
          const field = el?.closest('.field');
          field?.classList.remove('is-valid', 'is-invalid');
        });
      }, 900);
    });
  }

  /* ---------- Newsletter form ---------- */
  const newsletterForm = document.querySelector('.footer-newsletter form');
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input[type="email"]');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
      showToast('Ingresa un correo válido para suscribirte.', 'error');
      input.focus();
      return;
    }
    showToast('¡Listo! Te suscribiste al newsletter de ColabUp.', 'success');
    newsletterForm.reset();
  });

  /* ---------- Smooth-scroll for in-page anchors with navbar offset ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = navbar.getBoundingClientRect().height + 16;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

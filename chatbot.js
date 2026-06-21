/* ==========================================================================
   ColabUp — Landing Page Stylesheet
   Design tokens sourced from the official Style Guidelines
   (4.1.1 General Style Guidelines, ColabUp report)
   ========================================================================== */

:root {
  /* Brand colors */
  --color-navy: #1E3A5F;
  --color-navy-dark: #142A47;
  --color-violet: #3B2F6B;
  --color-celeste: #4DA8DA;
  --color-green: #6FCF97;
  --color-orange: #F2994A;
  --color-bg: #F8F9FB;
  --color-text: #2C2C2C;
  --color-gray: #E0E0E0;
  --color-white: #FFFFFF;

  /* Gradients (hero / section accents, derived from the logo's navy-to-violet arrow) */
  --gradient-hero: linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy) 45%, var(--color-violet) 100%);
  --gradient-accent: linear-gradient(135deg, var(--color-celeste) 0%, var(--color-violet) 100%);

  /* Typography */
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Inter', sans-serif;

  /* Spacing scale (multiples of 8px, per Style Guidelines) */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 48px;
  --space-6: 64px;
  --space-7: 96px;
  --space-8: 128px;

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-pill: 999px;

  /* Motion */
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast: 200ms;
  --duration-base: 250ms;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(30, 58, 95, 0.08);
  --shadow-md: 0 4px 16px rgba(30, 58, 95, 0.12);
  --shadow-lg: 0 12px 40px rgba(30, 58, 95, 0.18);
  --shadow-glow: 0 0 0 1px rgba(255,255,255,0.08), 0 8px 32px rgba(75, 47, 139, 0.35);

  --container-w: 1180px;
}

/* ==========================================================================
   Reset & base
   ========================================================================== */
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--color-text);
  background: var(--color-bg);
  -webkit-font-smoothing: antialiased;
  line-height: 1.55;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  margin: 0;
  color: var(--color-navy-dark);
  line-height: 1.15;
}

p { margin: 0; }
ul { margin: 0; padding: 0; list-style: none; }
a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
button { font-family: inherit; cursor: pointer; }

a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 3px solid var(--color-celeste);
  outline-offset: 2px;
}

.container {
  width: 100%;
  max-width: var(--container-w);
  margin: 0 auto;
  padding: 0 var(--space-3);
}

.visually-hidden {
  position: absolute;
  width: 1px; height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.skip-link {
  position: absolute;
  top: -48px;
  left: var(--space-2);
  background: var(--color-navy-dark);
  color: var(--color-white);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
  z-index: 1000;
  transition: top var(--duration-base) var(--ease);
}
.skip-link:focus { top: var(--space-2); }

/* Eyebrow label used to introduce sections */
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-celeste);
}
.eyebrow::before {
  content: "";
  width: 18px;
  height: 2px;
  background: var(--color-orange);
  border-radius: var(--radius-pill);
}

.section-head {
  max-width: 620px;
  margin: 0 auto var(--space-6);
  text-align: center;
}
.section-head h2 {
  font-size: clamp(28px, 4vw, 36px);
  margin-top: var(--space-2);
}
.section-head p {
  margin-top: var(--space-2);
  color: #5b6472;
  font-size: 16px;
}

section { padding: var(--space-7) 0; }

/* ==========================================================================
   Buttons
   ========================================================================== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 15px;
  padding: 13px 26px;
  border-radius: var(--radius-pill);
  border: 1.5px solid transparent;
  transition: transform var(--duration-fast) var(--ease), box-shadow var(--duration-fast) var(--ease), background var(--duration-fast) var(--ease), border-color var(--duration-fast) var(--ease), opacity var(--duration-fast) var(--ease);
  white-space: nowrap;
}
.btn:active { transform: translateY(1px) scale(0.98); }

.btn-primary {
  background: var(--color-navy-dark);
  color: var(--color-white);
  box-shadow: var(--shadow-sm);
}
.btn-primary:hover { background: var(--color-navy); box-shadow: var(--shadow-md); transform: translateY(-1px); }

.btn-accent {
  background: var(--color-celeste);
  color: var(--color-navy-dark);
  box-shadow: 0 6px 20px rgba(77, 168, 218, 0.35);
}
.btn-accent:hover { background: #5bb3e3; transform: translateY(-1px); box-shadow: 0 10px 26px rgba(77, 168, 218, 0.45); }

.btn-secondary {
  background: transparent;
  color: var(--color-navy-dark);
  border-color: var(--color-celeste);
}
.btn-secondary:hover { background: rgba(77, 168, 218, 0.08); }

.btn-ghost-light {
  background: rgba(255,255,255,0.08);
  color: var(--color-white);
  border-color: rgba(255,255,255,0.35);
  backdrop-filter: blur(6px);
}
.btn-ghost-light:hover { background: rgba(255,255,255,0.16); }

.btn[disabled] { opacity: 0.5; cursor: not-allowed; transform: none !important; }

.btn-block { width: 100%; }

/* ==========================================================================
   Navbar
   ========================================================================== */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 500;
  padding: 18px 0;
  transition: padding var(--duration-base) var(--ease), background var(--duration-base) var(--ease), box-shadow var(--duration-base) var(--ease);
}
.navbar::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(248, 249, 251, 0);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  transition: background var(--duration-base) var(--ease), backdrop-filter var(--duration-base) var(--ease);
  z-index: -1;
  border-bottom: 1px solid transparent;
}
.navbar.is-scrolled {
  padding: 10px 0;
}
.navbar.is-scrolled::before {
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: var(--shadow-sm);
  border-bottom: 1px solid rgba(30, 58, 95, 0.06);
}

.navbar .container {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 19px;
  color: var(--color-navy-dark);
  margin-right: auto;
}
.brand img { height: 34px; width: auto; }

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 14.5px;
}
.nav-links a {
  position: relative;
  padding: 6px 2px;
  color: var(--color-navy-dark);
  transition: color var(--duration-fast) var(--ease);
}
.nav-links a::after {
  content: "";
  position: absolute;
  left: 0; right: 100%;
  bottom: 0;
  height: 2px;
  background: var(--color-orange);
  border-radius: var(--radius-pill);
  transition: right var(--duration-base) var(--ease);
}
.nav-links a:hover { color: var(--color-celeste); }
.nav-links a:hover::after,
.nav-links a.is-active::after { right: 0; }
.nav-links a.is-active { color: var(--color-celeste); }

.nav-search {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(30, 58, 95, 0.05);
  border: 1px solid rgba(30, 58, 95, 0.1);
  border-radius: var(--radius-pill);
  padding: 9px 16px;
  font-size: 13.5px;
  color: #5b6472;
  width: 220px;
  transition: width var(--duration-base) var(--ease), border-color var(--duration-fast) var(--ease);
}
.nav-search:focus-within { border-color: var(--color-celeste); width: 250px; }
.nav-search input {
  border: none; background: transparent; outline: none;
  font-family: var(--font-body); font-size: 13.5px; color: var(--color-text);
  width: 100%;
}
.nav-search svg { flex-shrink: 0; color: #8b93a1; }

.nav-cta { display: flex; align-items: center; gap: 10px; }
.nav-cta .btn { padding: 10px 20px; font-size: 14px; }

.nav-toggle {
  display: none;
  background: none;
  border: none;
  width: 40px; height: 40px;
  position: relative;
}
.nav-toggle span,
.nav-toggle span::before,
.nav-toggle span::after {
  content: "";
  position: absolute;
  left: 8px; right: 8px;
  height: 2px;
  background: var(--color-navy-dark);
  border-radius: var(--radius-pill);
  transition: transform var(--duration-base) var(--ease), opacity var(--duration-base) var(--ease), top var(--duration-base) var(--ease);
}
.nav-toggle span { top: 19px; }
.nav-toggle span::before { top: -7px; }
.nav-toggle span::after { top: 7px; }
.nav-toggle.is-open span { background: transparent; }
.nav-toggle.is-open span::before { top: 0; transform: rotate(45deg); background: var(--color-navy-dark); }
.nav-toggle.is-open span::after { top: 0; transform: rotate(-45deg); background: var(--color-navy-dark); }

/* ==========================================================================
   Hero
   ========================================================================== */
.hero {
  position: relative;
  margin-top: 0;
  padding: 168px 0 var(--space-8);
  background: var(--gradient-hero);
  overflow: hidden;
  isolation: isolate;
}
.hero::before {
  content: "";
  position: absolute;
  inset: -10%;
  background-image:
    radial-gradient(circle at 18% 24%, rgba(77, 168, 218, 0.25), transparent 38%),
    radial-gradient(circle at 82% 12%, rgba(111, 207, 151, 0.16), transparent 40%),
    radial-gradient(circle at 70% 80%, rgba(242, 153, 74, 0.14), transparent 42%);
  z-index: -1;
}
.hero-rings {
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.5;
}
.hero-rings svg { width: 100%; height: 100%; }

.hero-content {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  color: var(--color-white);
}
.hero-content .eyebrow {
  justify-content: center;
  color: #9fd5ef;
}
.hero-content .eyebrow::before { background: var(--color-orange); }

.hero h1 {
  margin-top: var(--space-3);
  color: var(--color-white);
  font-size: clamp(34px, 5.6vw, 58px);
  font-weight: 800;
  letter-spacing: -0.02em;
}
.hero h1 .grad-word {
  background: linear-gradient(95deg, #9fd5ef, var(--color-green) 90%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hero-sub {
  margin-top: var(--space-3);
  font-size: clamp(16px, 2vw, 19px);
  color: rgba(255, 255, 255, 0.78);
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
}
.hero-actions {
  margin-top: var(--space-5);
  display: flex;
  justify-content: center;
  gap: var(--space-2);
  flex-wrap: wrap;
}
.hero-stats {
  margin-top: var(--space-7);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
  max-width: 620px;
  margin-left: auto;
  margin-right: auto;
}
.hero-stat {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-lg);
  padding: var(--space-3) var(--space-2);
  backdrop-filter: blur(6px);
}
.hero-stat strong {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(22px, 3vw, 30px);
  color: var(--color-white);
}
.hero-stat span {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
}

/* ==========================================================================
   Mission & Vision
   ========================================================================== */
.mv-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}
.mv-card {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-navy-dark);
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--space-4);
  color: var(--color-white);
  box-shadow: var(--shadow-md);
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 700ms var(--ease), transform 700ms var(--ease), box-shadow var(--duration-base) var(--ease);
}
.mv-card.in-view { opacity: 1; transform: translateY(0); }
.mv-card:hover { box-shadow: var(--shadow-lg); }
.mv-card .mv-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.55;
  transition: transform 600ms var(--ease), opacity var(--duration-base) var(--ease);
}
.mv-card:hover .mv-bg { transform: scale(1.06); opacity: 0.65; }
.mv-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(20, 42, 71, 0.95) 10%, rgba(20, 42, 71, 0.35) 75%);
  z-index: 0;
}
.mv-card .mv-icon {
  position: relative;
  z-index: 1;
  width: 44px; height: 44px;
  border-radius: var(--radius-md);
  background: rgba(255,255,255,0.12);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: var(--space-2);
}
.mv-card h3 { position: relative; z-index: 1; color: var(--color-white); font-size: 21px; }
.mv-card p { position: relative; z-index: 1; margin-top: 10px; color: rgba(255,255,255,0.82); font-size: 14.5px; }

/* ==========================================================================
   Why ColabUp (benefits)
   ========================================================================== */
.why {
  background: var(--gradient-hero);
  position: relative;
  overflow: hidden;
}
.why::before {
  content: "";
  position: absolute;
  inset: -10%;
  background-image: radial-gradient(circle at 85% 20%, rgba(111, 207, 151, 0.18), transparent 45%),
                     radial-gradient(circle at 10% 85%, rgba(77, 168, 218, 0.18), transparent 45%);
  z-index: 0;
}
.why .container { position: relative; z-index: 1; }
.why .section-head h2,
.why .eyebrow { color: var(--color-white); }
.why .section-head p { color: rgba(255,255,255,0.7); }

.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
}
.why-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  backdrop-filter: blur(6px);
  transition: transform var(--duration-base) var(--ease), background var(--duration-base) var(--ease), border-color var(--duration-base) var(--ease);
  opacity: 0;
  transform: translateY(24px);
}
.why-card.in-view { opacity: 1; transform: translateY(0); }
.why-card:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.28);
}
.why-card .why-icon {
  width: 48px; height: 48px;
  border-radius: var(--radius-md);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: var(--space-3);
  background: linear-gradient(135deg, var(--color-celeste), var(--color-green));
  color: var(--color-navy-dark);
}
.why-card h3 { color: var(--color-white); font-size: 19px; }
.why-card p { margin-top: 8px; color: rgba(255,255,255,0.72); font-size: 14.5px; }

/* ==========================================================================
   Features grid (Funcionalidades)
   ========================================================================== */
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-3);
}
.feature-card {
  background: var(--color-white);
  border: 1px solid rgba(30, 58, 95, 0.08);
  border-radius: var(--radius-lg);
  padding: var(--space-3);
  box-shadow: var(--shadow-sm);
  transition: transform var(--duration-base) var(--ease), box-shadow var(--duration-base) var(--ease), border-color var(--duration-base) var(--ease);
  opacity: 0;
  transform: translateY(24px);
}
.feature-card.in-view { opacity: 1; transform: translateY(0); }
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: rgba(77, 168, 218, 0.35);
}
.feature-card .feature-icon {
  width: 42px; height: 42px;
  border-radius: var(--radius-md);
  background: rgba(77, 168, 218, 0.12);
  color: var(--color-celeste);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: var(--space-2);
}
.feature-card h3 { font-size: 16.5px; }
.feature-card p { margin-top: 6px; font-size: 13.5px; color: #5b6472; }

/* ==========================================================================
   How it works (Cómo funciona)
   ========================================================================== */
.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-3);
  counter-reset: step;
}
.step-card {
  position: relative;
  padding: var(--space-4) var(--space-3) var(--space-3);
  background: var(--color-white);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(30, 58, 95, 0.08);
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 700ms var(--ease), transform 700ms var(--ease);
}
.step-card.in-view { opacity: 1; transform: translateY(0); }
.step-card .step-num {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 13px;
  color: var(--color-white);
  background: var(--gradient-accent);
  width: 30px; height: 30px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: var(--space-2);
}
.step-card h3 { font-size: 16.5px; }
.step-card p { margin-top: 6px; font-size: 13.5px; color: #5b6472; }
.step-card:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 30px; right: -18px;
  width: 18px; height: 2px;
  background: var(--color-gray);
}

/* ==========================================================================
   Testimonials
   ========================================================================== */
.testimonials { background: var(--color-white); }
.testi-track-wrap {
  position: relative;
  overflow: hidden;
}
.testi-track {
  display: flex;
  gap: var(--space-3);
  transition: transform 500ms var(--ease);
}
.testi-card {
  flex: 0 0 calc(33.333% - 16px);
  background: var(--color-bg);
  border: 1px solid rgba(30, 58, 95, 0.08);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
}
.testi-stars { color: var(--color-orange); font-size: 14px; letter-spacing: 2px; }
.testi-quote { margin-top: var(--space-2); font-size: 14.5px; color: var(--color-text); }
.testi-person { margin-top: var(--space-3); display: flex; align-items: center; gap: 12px; }
.testi-avatar {
  width: 42px; height: 42px;
  border-radius: 50%;
  background: var(--gradient-accent);
  display: flex; align-items: center; justify-content: center;
  color: var(--color-white);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}
.testi-person strong { display: block; font-size: 14px; }
.testi-person span { font-size: 12.5px; color: #5b6472; }

.testi-controls {
  display: flex;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
}
.testi-dot {
  width: 9px; height: 9px;
  border-radius: 50%;
  background: var(--color-gray);
  border: none;
  padding: 0;
  transition: background var(--duration-fast) var(--ease), transform var(--duration-fast) var(--ease);
}
.testi-dot.is-active { background: var(--color-celeste); transform: scale(1.25); }
.testi-arrow {
  width: 38px; height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(30,58,95,0.15);
  background: var(--color-white);
  display: flex; align-items: center; justify-content: center;
  color: var(--color-navy-dark);
  transition: background var(--duration-fast) var(--ease), color var(--duration-fast) var(--ease);
}
.testi-arrow:hover { background: var(--color-navy-dark); color: var(--color-white); }

/* ==========================================================================
   Team
   ========================================================================== */
.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-3);
}
.team-card {
  text-align: center;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-3) var(--space-2);
  border: 1px solid rgba(30, 58, 95, 0.08);
  transition: transform var(--duration-base) var(--ease), box-shadow var(--duration-base) var(--ease);
  opacity: 0;
  transform: translateY(24px);
}
.team-card.in-view { opacity: 1; transform: translateY(0); }
.team-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
.team-avatar {
  width: 84px; height: 84px;
  border-radius: 50%;
  margin: 0 auto var(--space-2);
  background: var(--gradient-accent);
  color: var(--color-white);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 24px;
  border: 3px solid var(--color-white);
  box-shadow: var(--shadow-sm);
}
.team-card h3 { font-size: 15px; }
.team-card span {
  display: block;
  margin-top: 4px;
  font-size: 12.5px;
  color: var(--color-celeste);
  font-weight: 600;
}

/* ==========================================================================
   Roadmap
   ========================================================================== */
.roadmap-list {
  display: grid;
  gap: var(--space-2);
}
.roadmap-item {
  display: grid;
  grid-template-columns: 140px 1fr auto;
  align-items: center;
  gap: var(--space-3);
  background: var(--color-white);
  border: 1px solid rgba(30,58,95,0.08);
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-3);
}
.roadmap-quarter { font-family: var(--font-display); font-weight: 700; color: var(--color-navy-dark); font-size: 14px; }
.roadmap-desc { font-size: 14px; color: #5b6472; }
.roadmap-status {
  font-size: 11.5px;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: var(--radius-pill);
  white-space: nowrap;
}
.roadmap-status.done { background: rgba(111, 207, 151, 0.15); color: #2f8a5c; }
.roadmap-status.progress { background: rgba(77, 168, 218, 0.15); color: #2876a3; }
.roadmap-status.next { background: rgba(242, 153, 74, 0.15); color: #b9650f; }

/* ==========================================================================
   FAQ (accordion)
   ========================================================================== */
.faq-list { max-width: 760px; margin: 0 auto; display: grid; gap: var(--space-2); }
.faq-item {
  background: var(--color-white);
  border: 1px solid rgba(30,58,95,0.08);
  border-radius: var(--radius-md);
  overflow: hidden;
}
.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  padding: var(--space-3);
  background: none;
  border: none;
  text-align: left;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 15.5px;
  color: var(--color-navy-dark);
}
.faq-question .faq-icon {
  flex-shrink: 0;
  width: 24px; height: 24px;
  display: flex; align-items: center; justify-content: center;
  transition: transform var(--duration-base) var(--ease);
}
.faq-item.is-open .faq-icon { transform: rotate(45deg); }
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--duration-base) var(--ease);
}
.faq-answer p { padding: 0 var(--space-3) var(--space-3); font-size: 14.5px; color: #5b6472; }

/* ==========================================================================
   Partners / Sponsors
   ========================================================================== */
.partners-track {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  flex-wrap: wrap;
  opacity: 0.65;
}
.partner-logo {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 17px;
  color: var(--color-navy-dark);
  letter-spacing: -0.01em;
}

/* ==========================================================================
   CTA band
   ========================================================================== */
.cta-band {
  background: var(--gradient-hero);
  border-radius: var(--radius-lg);
  margin: 0 var(--space-3);
  padding: var(--space-6) var(--space-4);
  text-align: center;
  position: relative;
  overflow: hidden;
}
.cta-band::before {
  content: "";
  position: absolute; inset: -20%;
  background: radial-gradient(circle at 30% 30%, rgba(111,207,151,0.18), transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(77,168,218,0.2), transparent 50%);
}
.cta-band .container { position: relative; z-index: 1; max-width: 640px; }
.cta-band h2 { color: var(--color-white); font-size: clamp(24px, 3.4vw, 32px); }
.cta-band p { color: rgba(255,255,255,0.75); margin-top: var(--space-2); font-size: 15.5px; }
.cta-band .hero-actions { margin-top: var(--space-4); }

/* ==========================================================================
   Contact
   ========================================================================== */
.contact-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: var(--space-5);
  align-items: stretch;
}
.contact-form {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  border: 1px solid rgba(30,58,95,0.08);
  box-shadow: var(--shadow-sm);
}
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-2); }
.field { margin-bottom: var(--space-3); position: relative; }
.field label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--color-navy-dark);
}
.field input,
.field textarea {
  width: 100%;
  border: 1.5px solid var(--color-gray);
  border-radius: var(--radius-md);
  padding: 12px 14px;
  font-family: var(--font-body);
  font-size: 14.5px;
  color: var(--color-text);
  background: var(--color-bg);
  transition: border-color var(--duration-fast) var(--ease), box-shadow var(--duration-fast) var(--ease);
}
.field textarea { resize: vertical; min-height: 110px; }
.field input:focus,
.field textarea:focus {
  border-color: var(--color-celeste);
  box-shadow: 0 0 0 3px rgba(77, 168, 218, 0.15);
  outline: none;
}
.field.is-valid input,
.field.is-valid textarea { border-color: var(--color-green); }
.field.is-invalid input,
.field.is-invalid textarea { border-color: #e6584f; }
.field-error {
  display: none;
  margin-top: 6px;
  font-size: 12.5px;
  color: #e6584f;
}
.field.is-invalid .field-error { display: block; }
.field-hint { margin-top: 6px; font-size: 12px; color: #8b93a1; }

.contact-side {
  background: var(--color-navy-dark);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}
.contact-side::before {
  content: "";
  position: absolute; inset: -20%;
  background: radial-gradient(circle at 80% 10%, rgba(111,207,151,0.18), transparent 45%);
}
.contact-side > * { position: relative; z-index: 1; }
.contact-side .brand { color: var(--color-white); margin-right: 0; margin-bottom: var(--space-3); }
.contact-side p { color: rgba(255,255,255,0.72); font-size: 14.5px; }
.contact-info { margin-top: var(--space-4); display: grid; gap: var(--space-2); }
.contact-info-item { display: flex; align-items: center; gap: 12px; font-size: 14px; color: rgba(255,255,255,0.85); }
.contact-info-item .icon-circle {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.social-row { margin-top: var(--space-4); display: flex; gap: 10px; }
.social-row a {
  width: 38px; height: 38px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  display: flex; align-items: center; justify-content: center;
  transition: background var(--duration-fast) var(--ease), transform var(--duration-fast) var(--ease);
  color: var(--color-white);
}
.social-row a:hover { background: var(--color-celeste); transform: translateY(-2px); }

/* ==========================================================================
   Footer
   ========================================================================== */
.site-footer {
  background: var(--color-navy-dark);
  color: rgba(255,255,255,0.7);
  padding-top: var(--space-6);
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr 1.2fr;
  gap: var(--space-4);
  padding-bottom: var(--space-5);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.footer-brand .brand { color: var(--color-white); margin-bottom: var(--space-2); }
.footer-brand p { font-size: 13.5px; max-width: 240px; }
.footer-col h4 { color: var(--color-white); font-size: 13.5px; margin-bottom: var(--space-2); letter-spacing: 0.03em; text-transform: uppercase; }
.footer-col ul { display: grid; gap: 10px; }
.footer-col a { font-size: 13.5px; transition: color var(--duration-fast) var(--ease); }
.footer-col a:hover { color: var(--color-celeste); }
.footer-newsletter form { display: flex; gap: 8px; margin-top: var(--space-2); }
.footer-newsletter input {
  flex: 1;
  border: 1px solid rgba(255,255,255,0.18);
  background: rgba(255,255,255,0.06);
  border-radius: var(--radius-md);
  padding: 10px 12px;
  font-size: 13px;
  color: var(--color-white);
}
.footer-newsletter input::placeholder { color: rgba(255,255,255,0.45); }
.footer-newsletter .btn { padding: 10px 16px; font-size: 13px; }

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-3) 0;
  font-size: 12.5px;
}
.footer-bottom .social-row a { width: 34px; height: 34px; }

/* ==========================================================================
   Back to top
   ========================================================================== */
.back-to-top {
  position: fixed;
  right: var(--space-3);
  bottom: var(--space-3);
  width: 46px; height: 46px;
  border-radius: 50%;
  background: var(--color-navy-dark);
  color: var(--color-white);
  display: flex; align-items: center; justify-content: center;
  border: none;
  box-shadow: var(--shadow-md);
  opacity: 0;
  visibility: hidden;
  transform: translateY(12px);
  transition: opacity var(--duration-base) var(--ease), transform var(--duration-base) var(--ease), background var(--duration-fast) var(--ease);
  z-index: 400;
}
.back-to-top.is-visible { opacity: 1; visibility: visible; transform: translateY(0); }
.back-to-top:hover { background: var(--color-celeste); }

/* ==========================================================================
   Toast
   ========================================================================== */
.toast {
  position: fixed;
  bottom: var(--space-3);
  left: 50%;
  transform: translate(-50%, 16px);
  background: var(--color-navy-dark);
  color: var(--color-white);
  padding: 14px 22px;
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: var(--shadow-lg);
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--duration-base) var(--ease), transform var(--duration-base) var(--ease);
  z-index: 1000;
}
.toast.is-visible { opacity: 1; visibility: visible; transform: translate(-50%, 0); }
.toast.is-success { background: #2f8a5c; }
.toast.is-error { background: #b8362d; }

/* ==========================================================================
   Loading screen
   ========================================================================== */
.loading-screen {
  position: fixed; inset: 0;
  background: var(--gradient-hero);
  display: flex; align-items: center; justify-content: center;
  z-index: 2000;
  transition: opacity 500ms var(--ease), visibility 500ms var(--ease);
}
.loading-screen.is-hidden { opacity: 0; visibility: hidden; pointer-events: none; }
.loader-mark {
  display: flex; flex-direction: column; align-items: center; gap: 16px;
}
.loader-ring {
  width: 46px; height: 46px;
  border-radius: 50%;
  border: 3px solid rgba(255,255,255,0.2);
  border-top-color: var(--color-celeste);
  animation: spin 800ms linear infinite;
}
.loader-mark span { color: rgba(255,255,255,0.7); font-size: 13px; font-family: var(--font-display); letter-spacing: 0.04em; }
@keyframes spin { to { transform: rotate(360deg); } }

/* ==========================================================================
   Scroll reveal
   ========================================================================== */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 700ms var(--ease), transform 700ms var(--ease);
}
.reveal.in-view { opacity: 1; transform: translateY(0); }

/* ==========================================================================
   Mobile menu
   ========================================================================== */
.mobile-menu {
  position: fixed;
  top: 0; right: 0;
  height: 100vh;
  width: min(320px, 84vw);
  background: var(--color-white);
  box-shadow: -12px 0 40px rgba(20,42,71,0.18);
  transform: translateX(100%);
  transition: transform var(--duration-base) var(--ease);
  z-index: 600;
  padding: var(--space-6) var(--space-3) var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  overflow-y: auto;
}
.mobile-menu.is-open { transform: translateX(0); }
.mobile-menu a {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 16px;
  padding: 12px 4px;
  border-bottom: 1px solid var(--color-gray);
  color: var(--color-navy-dark);
}
.mobile-menu .btn { margin-top: var(--space-2); }
.menu-backdrop {
  position: fixed; inset: 0;
  background: rgba(20, 42, 71, 0.45);
  backdrop-filter: blur(2px);
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--duration-base) var(--ease), visibility var(--duration-base) var(--ease);
  z-index: 550;
}
.menu-backdrop.is-open { opacity: 1; visibility: visible; }

/* ==========================================================================
   Responsive
   ========================================================================== */
@media (max-width: 1024px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
  .steps { grid-template-columns: repeat(2, 1fr); }
  .why-grid { grid-template-columns: 1fr 1fr; }
  .team-grid { grid-template-columns: repeat(3, 1fr); }
  .footer-grid { grid-template-columns: 1fr 1fr 1fr; }
  .testi-card { flex: 0 0 calc(50% - 12px); }
  .contact-grid { grid-template-columns: 1fr; }
}

@media (max-width: 860px) {
  .nav-links, .nav-search { display: none; }
  .nav-cta .btn-secondary { display: none; }
  .nav-toggle { display: block; }
  .mv-grid { grid-template-columns: 1fr; }
  .why-grid { grid-template-columns: 1fr; }
  .roadmap-item { grid-template-columns: 1fr; gap: 6px; }
}

@media (max-width: 640px) {
  section { padding: var(--space-6) 0; }
  .hero { padding-top: 132px; }
  .hero-stats { grid-template-columns: 1fr; }
  .features-grid { grid-template-columns: 1fr; }
  .steps { grid-template-columns: 1fr; }
  .step-card::after { display: none; }
  .team-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .form-row { grid-template-columns: 1fr; }
  .testi-card { flex: 0 0 100%; }
  .cta-band { margin: 0 var(--space-2); padding: var(--space-5) var(--space-2); }
}

/* ==========================================================================
   ColabUp — Profile page stylesheet
   Extends css/style.css + css/dashboard.css (shell, panels, dropdowns)
   ========================================================================== */

.profile-banner {
  position: relative;
  height: 220px;
  border-radius: var(--radius-lg);
  background: var(--gradient-hero);
  overflow: hidden;
  margin-bottom: 72px;
}
.profile-banner::before {
  content: "";
  position: absolute; inset: -20%;
  background-image: radial-gradient(circle at 20% 30%, rgba(77,168,218,0.25), transparent 40%),
                     radial-gradient(circle at 85% 75%, rgba(111,207,151,0.18), transparent 42%);
}
.banner-edit-btn {
  position: absolute; top: var(--space-2); right: var(--space-2);
  z-index: 2;
}
.profile-head {
  display: flex;
  align-items: flex-end;
  gap: var(--space-3);
  margin-top: -64px;
  padding: 0 var(--space-3);
  position: relative;
  z-index: 2;
}
.profile-avatar-wrap { position: relative; flex-shrink: 0; }
.profile-avatar {
  width: 128px; height: 128px;
  border-radius: 50%;
  background: var(--gradient-accent);
  color: var(--color-white);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-weight: 800; font-size: 40px;
  border: 5px solid var(--color-white);
  box-shadow: var(--shadow-md);
}
.avatar-edit-btn {
  position: absolute; bottom: 4px; right: 4px;
  width: 34px; height: 34px;
  border-radius: 50%;
  background: var(--color-navy-dark);
  color: var(--color-white);
  border: 3px solid var(--color-white);
  display: flex; align-items: center; justify-content: center;
  font-size: 12px;
}
.profile-head-info { flex: 1; padding-bottom: 6px; }
.profile-head-info h1 { font-size: 24px; }
.profile-head-info .profile-role { font-size: 14px; color: var(--color-celeste); font-weight: 600; margin-top: 2px; }
.profile-head-info .profile-meta { display: flex; gap: 16px; margin-top: 8px; font-size: 13px; color: #5b6472; flex-wrap: wrap; }
.profile-head-info .profile-meta span { display: flex; align-items: center; gap: 6px; }
.profile-head-actions { display: flex; gap: 10px; padding-bottom: 6px; }

.profile-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-3);
  margin-top: var(--space-4);
  align-items: start;
}

.profile-section-title { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-2); }
.profile-section-title h2 { font-size: 16px; }
.add-link-btn { font-size: 12.5px; font-weight: 700; color: var(--color-celeste); background: none; border: none; display: flex; align-items: center; gap: 6px; }

.skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-tag {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(77,168,218,0.1);
  color: var(--color-navy-dark);
  font-size: 12.5px; font-weight: 600;
  padding: 7px 12px;
  border-radius: var(--radius-pill);
}
.skill-tag button { background: none; border: none; color: #8b93a1; font-size: 10px; line-height: 1; }
.skill-tag button:hover { color: #e6584f; }
.skill-add-row { display: flex; gap: 8px; margin-top: var(--space-2); }
.skill-add-row input { flex: 1; }

.timeline-item { display: flex; gap: 14px; padding: var(--space-2) 0; border-bottom: 1px solid var(--color-bg); }
.timeline-item:last-child { border-bottom: none; }
.timeline-icon {
  width: 40px; height: 40px; border-radius: var(--radius-md);
  background: rgba(111,207,151,0.12); color: #2f8a5c;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; font-size: 15px;
}
.timeline-content { flex: 1; }
.timeline-content h3 { font-size: 14.5px; }
.timeline-content .timeline-org { font-size: 13px; color: var(--color-celeste); font-weight: 600; }
.timeline-content .timeline-dates { font-size: 12px; color: #8b93a1; margin-top: 2px; }
.timeline-content p.timeline-desc { font-size: 13px; color: #5b6472; margin-top: 6px; }
.timeline-remove { background: none; border: none; color: #c7cdd6; flex-shrink: 0; }
.timeline-remove:hover { color: #e6584f; }

.cert-list { display: grid; gap: 10px; }
.cert-item { display: flex; align-items: center; gap: 12px; padding: 10px; border-radius: var(--radius-md); border: 1px solid rgba(30,58,95,0.06); }
.cert-icon { width: 36px; height: 36px; border-radius: var(--radius-md); background: rgba(242,153,74,0.12); color: #b9650f; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.cert-item h4 { font-size: 13.5px; }
.cert-item span { font-size: 12px; color: #8b93a1; }

.portfolio-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-2); }
.portfolio-card {
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid rgba(30,58,95,0.08);
  background: var(--color-white);
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.portfolio-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
.portfolio-thumb {
  height: 110px;
  background-size: cover;
  background-position: center;
}
.portfolio-card .portfolio-info { padding: 10px 12px; }
.portfolio-card h4 { font-size: 13px; }
.portfolio-card span { font-size: 11.5px; color: #8b93a1; }
.add-portfolio-card {
  height: 100%;
  min-height: 158px;
  border: 1.5px dashed var(--color-gray);
  border-radius: var(--radius-md);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 8px;
  color: #8b93a1;
  background: none;
  font-size: 12.5px; font-weight: 600;
}
.add-portfolio-card:hover { border-color: var(--color-celeste); color: var(--color-celeste); }

.about-text { font-size: 14px; color: var(--color-text); line-height: 1.7; }
.about-edit textarea { width: 100%; min-height: 110px; }

/* Edit-mode toggling */
[data-edit-only] { display: none; }
body.is-editing [data-edit-only] { display: revert; }
body.is-editing [data-view-only] { display: none; }
body.is-editing .editable-field {
  background: var(--color-bg);
  border: 1.5px dashed var(--color-gray);
  border-radius: var(--radius-sm);
  padding: 6px 10px;
}

/* Modal */
.modal-backdrop {
  position: fixed; inset: 0; background: rgba(20,42,71,0.45); backdrop-filter: blur(2px);
  z-index: 700; opacity: 0; visibility: hidden; transition: opacity 200ms ease, visibility 200ms ease;
}
.modal-backdrop.is-open { opacity: 1; visibility: visible; }
.modal-box {
  position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.96);
  background: var(--color-white); border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg); padding: var(--space-4);
  width: min(440px, 92vw); max-height: 86vh; overflow-y: auto;
  z-index: 701; opacity: 0; visibility: hidden;
  transition: opacity 200ms ease, transform 200ms ease, visibility 200ms ease;
}
.modal-box.is-open { opacity: 1; visibility: visible; transform: translate(-50%, -50%) scale(1); }
.modal-box h2 { font-size: 18px; margin-bottom: var(--space-3); }
.modal-close { position: absolute; top: 14px; right: 14px; background: none; border: none; color: #8b93a1; font-size: 16px; }

@media (max-width: 1024px) {
  .profile-grid { grid-template-columns: 1fr; }
  .portfolio-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .profile-head { flex-direction: column; align-items: flex-start; }
  .profile-head-actions { padding-bottom: 0; }
  .portfolio-grid { grid-template-columns: 1fr; }
}

/* ==========================================================================
   ColabUp — Projects page stylesheet
   Extends css/style.css + css/dashboard.css (shell, panels, dropdowns)
   ========================================================================== */

.projects-toolbar {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-bottom: var(--space-3);
}
.projects-search {
  flex: 1; min-width: 220px;
  display: flex; align-items: center; gap: 8px;
  background: var(--color-white); border: 1px solid var(--color-gray);
  border-radius: var(--radius-pill); padding: 10px 16px;
}
.projects-search input { border: none; outline: none; background: none; width: 100%; font-size: 14px; }

.filter-select {
  border: 1px solid var(--color-gray);
  border-radius: var(--radius-pill);
  padding: 10px 14px;
  font-size: 13.5px;
  font-family: var(--font-body);
  background: var(--color-white);
  color: var(--color-text);
}

.view-toggle { display: flex; background: var(--color-bg); border-radius: var(--radius-pill); padding: 4px; }
.view-toggle button {
  width: 36px; height: 36px; border-radius: 50%; border: none; background: none;
  color: #8b93a1; display: flex; align-items: center; justify-content: center;
}
.view-toggle button.is-active { background: var(--color-white); color: var(--color-navy-dark); box-shadow: var(--shadow-sm); }

.filter-chips { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: var(--space-3); }
.filter-chip {
  padding: 7px 16px; border-radius: var(--radius-pill);
  border: 1.5px solid var(--color-gray); background: var(--color-white);
  font-size: 13px; font-weight: 600; color: var(--color-text);
  transition: all 150ms ease;
}
.filter-chip.is-active { background: var(--color-navy-dark); border-color: var(--color-navy-dark); color: var(--color-white); }

.projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-3); }
.projects-grid.is-list { grid-template-columns: 1fr; }

.project-card {
  background: var(--color-white);
  border: 1px solid rgba(30,58,95,0.08);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform 200ms ease, box-shadow 200ms ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}
.projects-grid.is-list .project-card { flex-direction: row; }
.projects-grid.is-list .project-thumb { width: 220px; flex-shrink: 0; }
.project-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
.project-thumb {
  height: 140px;
  background-size: cover;
  background-position: center;
  position: relative;
}
.project-status {
  position: absolute; top: 10px; left: 10px;
  font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: var(--radius-pill);
  background: rgba(255,255,255,0.92); color: var(--color-navy-dark);
}
.project-fav {
  position: absolute; top: 10px; right: 10px;
  width: 32px; height: 32px; border-radius: 50%;
  background: rgba(255,255,255,0.92); border: none;
  display: flex; align-items: center; justify-content: center;
  color: #c7cdd6;
}
.project-fav.is-fav { color: var(--color-orange); }
.project-body { padding: var(--space-3); flex: 1; display: flex; flex-direction: column; }
.project-category { font-size: 11.5px; font-weight: 700; color: var(--color-celeste); text-transform: uppercase; letter-spacing: 0.04em; }
.project-card h3 { font-size: 16px; margin-top: 6px; }
.project-card p.project-desc { font-size: 13px; color: #5b6472; margin-top: 6px; flex: 1; }
.project-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px; }
.project-tags span { font-size: 11px; font-weight: 600; padding: 3px 9px; border-radius: var(--radius-pill); background: var(--color-bg); color: #5b6472; }
.project-footer { display: flex; align-items: center; justify-content: space-between; margin-top: var(--space-2); padding-top: var(--space-2); border-top: 1px solid var(--color-bg); }
.project-avatars { display: flex; }
.project-avatars span {
  width: 26px; height: 26px; border-radius: 50%;
  background: var(--gradient-accent); color: var(--color-white);
  font-size: 10px; font-weight: 700; font-family: var(--font-display);
  display: flex; align-items: center; justify-content: center;
  border: 2px solid var(--color-white); margin-left: -8px;
}
.project-avatars span:first-child { margin-left: 0; }
.project-meta-mini { font-size: 11.5px; color: #8b93a1; }

.empty-state { text-align: center; padding: var(--space-7) var(--space-3); color: #8b93a1; }
.empty-state i { font-size: 32px; margin-bottom: var(--space-2); color: var(--color-gray); }

/* Project detail modal */
.detail-modal {
  position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.96);
  background: var(--color-white); border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  width: min(640px, 92vw); max-height: 88vh; overflow-y: auto;
  z-index: 701; opacity: 0; visibility: hidden;
  transition: opacity 200ms ease, transform 200ms ease, visibility 200ms ease;
}
.detail-modal.is-open { opacity: 1; visibility: visible; transform: translate(-50%, -50%) scale(1); }
.detail-banner { height: 180px; background-size: cover; background-position: center; position: relative; }
.detail-banner .modal-close { background: rgba(255,255,255,0.92); border-radius: 50%; width: 34px; height: 34px; display:flex; align-items:center; justify-content:center; }
.detail-body { padding: var(--space-4); }
.detail-status-row { display: flex; align-items: center; gap: 10px; margin-bottom: var(--space-2); }
.detail-body h2 { font-size: 22px; margin-bottom: 6px; }
.detail-meta-row { display: flex; gap: var(--space-3); flex-wrap: wrap; margin: var(--space-2) 0 var(--space-3); font-size: 13px; color: #5b6472; }
.detail-meta-row span { display: flex; align-items: center; gap: 6px; }
.detail-section { margin-bottom: var(--space-3); }
.detail-section h4 { font-size: 13.5px; margin-bottom: 8px; }
.detail-section p { font-size: 14px; color: var(--color-text); line-height: 1.6; }
.detail-team { display: flex; flex-wrap: wrap; gap: 10px; }
.detail-team .member { display: flex; align-items: center; gap: 8px; font-size: 13px; }
.detail-team .avatar { width: 30px; height: 30px; border-radius: 50%; background: var(--gradient-accent); color: var(--color-white); display:flex; align-items:center; justify-content:center; font-size: 11px; font-weight: 700; font-family: var(--font-display); }
.detail-actions { display: flex; gap: 10px; margin-top: var(--space-3); }

@media (max-width: 980px) {
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .projects-grid { grid-template-columns: 1fr; }
  .projects-grid.is-list .project-card { flex-direction: column; }
  .projects-grid.is-list .project-thumb { width: 100%; }
  .projects-toolbar { flex-direction: column; align-items: stretch; }
}

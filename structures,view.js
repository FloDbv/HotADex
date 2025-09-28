// structures.view.js — self-contained Structures view (no global rewiring)
(function(){
  'use strict';

  // Guard: do nothing if dataset not loaded
  const data = (window.structuresData || []);
  // Categories on the left
  const CATS = ["All","Army Strength","Creature Banks","Economy","Hero Strength","Mobility / Intel"];

  function ensureHost() {
    // Find or create the target section (#structures-view)
    let host = document.getElementById('structures-view');
    if (!host) {
      host = document.createElement('section');
      host.id = 'structures-view';
      host.className = 'view';
      // Put it after your other views (fallback to body if wrapper not found)
      (document.getElementById('content-wrapper') || document.body).appendChild(host);
    }
    // Build layout once
    if (!host.querySelector('.structures-layout')) {
      host.innerHTML = '';
      const layout = document.createElement('div'); layout.className = 'structures-layout';
      const aside  = document.createElement('aside'); aside.className = 'structures-sidebar';
      const main   = document.createElement('div');   main.className  = 'structures-main';

      const filters = document.createElement('div'); filters.className = 'structures-filters';
      CATS.forEach((cat, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'structures-filter' + (i===0 ? ' active' : '');
        btn.textContent = cat;
        btn.addEventListener('click', () => {
          filters.querySelectorAll('.structures-filter').forEach(b=>b.classList.remove('active'));
          btn.classList.add('active');
          renderList(cat);
        });
        filters.appendChild(btn);
      });
      aside.appendChild(filters);

      const table = document.createElement('table');
      table.className = 'structures-table';
      table.innerHTML = `
        <thead><tr><th>Name</th><th>Description</th></tr></thead>
        <tbody class="structures-tbody"></tbody>`;
      main.appendChild(table);

      layout.appendChild(aside);
      layout.appendChild(main);
      host.appendChild(layout);

      // Minimal styles (scoped, no collisions)
      if (!document.getElementById('structures-view-styles')) {
        const s = document.createElement('style'); s.id = 'structures-view-styles';
        s.textContent = `
          #structures-view { padding: 8px; }
          .structures-layout { display:grid; grid-template-columns:220px 1fr; gap:12px; }
          .structures-filters { display:flex; flex-direction:column; gap:8px; }
          .structures-filter { padding:8px 10px; border:1px solid #444; background:#333; color:#ddd; border-radius:8px; text-align:left; cursor:pointer; }
          .structures-filter.active { background:#444; color:#ffcc33; }
          .structures-table { width:100%; border-collapse:collapse; }
          .structures-table th, .structures-table td { border-bottom:1px solid #333; padding:10px; vertical-align:top; }
          .structures-table th { color:#ffcc33; text-align:left; }
          .structures-table a { color:#ddd; text-decoration:underline dotted; }
          .structures-table a:hover { color:#fff; }
          /* Modal */
          .sv-modal{position:fixed;inset:0;display:none;z-index:1000}
          .sv-modal.open{display:block}
          .sv-backdrop{position:absolute;inset:0;background:#0008}
          .sv-card{position:relative;margin:48px auto;max-width:900px;background:#2a2a2a;color:#eee;border-radius:8px;box-shadow:0 10px 40px #000a}
          .sv-header{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid #444}
          .sv-title{font-weight:700;color:#ffcc33}
          .sv-close{background:none;border:0;color:#bbb;font-size:24px;cursor:pointer}
          .sv-body{padding:16px}
          .sv-badge{display:inline-block;font-size:12px;padding:2px 8px;border-radius:999px;background:#444;color:#ddd;margin-bottom:8px}
          .sv-levels{width:100%;border-collapse:collapse;margin:8px 0 12px 0}
          .sv-levels th,.sv-levels td{border:1px solid #444;padding:8px;text-align:left}
        `;
        document.head.appendChild(s);
      }
    }
    return host;
  }

  function filterData(cat) {
    if (cat === 'All') return data;
    return data.filter(it => Array.isArray(it.categories) && it.categories.includes(cat));
  }

  function ensureModal() {
    let m = document.getElementById('sv-modal');
    if (m) return m;
    m = document.createElement('div');
    m.id = 'sv-modal';
    m.className = 'sv-modal';
    m.innerHTML = `
      <div class="sv-backdrop" data-close="1"></div>
      <div class="sv-card" role="dialog" aria-modal="true" aria-labelledby="sv-title">
        <div class="sv-header">
          <div class="sv-title" id="sv-title"></div>
          <button class="sv-close" data-close="1" aria-label="Close">&times;</button>
        </div>
        <div class="sv-body"></div>
      </div>`;
    m.addEventListener('click', e => { if (e.target.dataset.close === '1') m.classList.remove('open'); });
    document.body.appendChild(m);
    return m;
  }

  function openModal(item) {
    const m = ensureModal();
    const title = m.querySelector('#sv-title');
    const body = m.querySelector('.sv-body');
    title.textContent = item.name;

    let html = '';
    if (item.overlaySubtype) html += `<div class="sv-badge">${item.overlaySubtype}</div>`;

    if (Array.isArray(item.levels) && item.levels.length) {
      html += `<table class="sv-levels">
        <thead><tr><th>Level (Chance)</th><th>Guards</th><th>Rewards</th><th>XP</th></tr></thead>
        <tbody>${item.levels.map(l=>`
          <tr><td>${l.level} (${l.chance!=null?l.chance:'?'}%)</td>
              <td>${l.guards||'—'}</td>
              <td>${l.rewards||'—'}</td>
              <td>${l.xp||'—'}</td></tr>`).join('')}
        </tbody></table>`;
    }

    const row = (label,val)=> val ? `<p><strong>${label}:</strong> ${val}</p>` : '';
    html += row('Terrain',   item.terrain   || '—');
    html += row('Map limit', item.mapLimit  || '—');
    html += row('RMG value', item.rmgValue  || '—');
    if (item.inDepth) html += `<p>${item.inDepth}</p>`;
    if (item.notes)   html += `<p><em>${item.notes}</em></p>`;
    if (item.trivia)  html += `<p><em>${item.trivia}</em></p>`;

    body.innerHTML = html;
    m.classList.add('open');
  }

  function renderList(cat) {
    const tbody = document.querySelector('#structures-view .structures-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    const rows = filterData(cat);
    rows.forEach(item => {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const a = document.createElement('a'); a.href='#'; a.textContent=item.name;
      a.addEventListener('click', e => { e.preventDefault(); openModal(item); });
      td1.appendChild(a);
      const td2 = document.createElement('td'); td2.textContent = item.short || '';
      tr.appendChild(td1); tr.appendChild(td2);
      tbody.appendChild(tr);
    });
  }

  function initStructuresView() {
    ensureHost();
    renderList('All');
  }

  // Hook only the Structures tab (by data-view or by text)
  function hookNav() {
    const byDataView = document.querySelector('[data-view="structures-view"]');
    if (byDataView) {
      byDataView.addEventListener('click', () => setTimeout(initStructuresView, 0));
    }
    // Fallback by visible text
    document.querySelectorAll('a,button,li,span,div').forEach(n => {
      const t=(n.textContent||'').trim().toLowerCase();
      if (t==='structures') n.addEventListener('click', () => setTimeout(initStructuresView, 0));
    });
  }

  document.addEventListener('DOMContentLoaded', hookNav);
})();

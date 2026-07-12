/* =========================================================
   Colegio Querer · Horarios 2026-27 · versión Taste (v2)
   Native JS, sin build. Datos: window.HORARIOS (js/horarios.js)
   ========================================================= */
(function () {
  'use strict';

  const H = window.HORARIOS;
  if (!H) { document.body.innerHTML = '<p style="padding:2rem">No se encontró window.HORARIOS.</p>'; return; }

  const META = H.meta;
  const DIAS = META.dias;
  const BREAK = new Set(['Patio', 'Comida', 'Patio tarde']);

  /* iconos Phosphor (regular) vendorizados */
  const ICON = {
    house:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><line x1="16" y1="216" x2="240" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="152 216 152 152 104 152 104 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="116.69" x2="40" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="216" y1="216" x2="216" y2="116.69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M24,132.69l98.34-98.35a8,8,0,0,1,11.32,0L232,132.69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
    clases:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect x="48" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="144" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="48" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="144" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
    tutoras:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><circle cx="104" cy="144" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M53.39,208a56,56,0,0,1,101.22,0H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="176 176 192 176 192 80 64 80 64 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
    especialistas:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M84.27,171.73l-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3a7.92,7.92,0,0,1,0,14.86l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="176" y1="16" x2="176" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="224" y1="72" x2="224" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="152" y1="40" x2="200" y2="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="208" y1="88" x2="240" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
    terapeutas:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><polyline points="32 136 72 136 88 112 120 160 136 136 160 136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M24,104c0-.67,0-1.33,0-2A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54c0,66-104,122-104,122s-42-22.6-72.58-56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
    arrow:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
    caretL:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><polyline points="160 208 80 128 160 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
    caretR:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
    search:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><circle cx="112" cy="112" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="168.57" y1="168.57" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
    alumnado:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><line x1="32" y1="64" x2="32" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M56,216c15.7-24.08,41.11-40,72-40s56.3,15.92,72,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="224 64 128 96 32 64 128 32 224 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M169.34,82.22a56,56,0,1,1-82.68,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
    printer:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><polyline points="64 80 64 40 192 40 192 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="64" y="152" width="128" height="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="188" cy="116" r="12"/></svg>',
    momentos:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="128 72 128 128 184 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>'
  };

  /* Paleta de aulas (no viene en el JSON): tintes suaves y distintos,
     usados solo como codificación de datos en la rejilla. */
  const AULA_COLORS = {
    'Estrella':'#E8B96A', 'Sol':'#E4A35C', 'Norte':'#6FB8AC', 'Luna':'#8E9FD6',
    'Este':'#C79BCB', 'Oeste':'#8FBF83', 'Sur':'#D98C86'
  };
  const ESTADO_LABEL = {
    lectivo:'Lectivo', no_lectivo:'No lectivo', comida:'Comida', fuera:'Fuera del centro',
    patio:'Patio', comedor:'Comedor', mediodia:'Mediodia'
  };
  const GRUPO = '__grupo__';      // clave de la opción "Aula (grupo)" dentro de Clases
  // Colores para la vista de Alumnado.
  const SALIDA_BG = '#F3D9E6';    // rosa suave: el niño SALE a terapia
  const SALIDA_LINE = '#CE7BA6';  // barra de color de la salida
  const MID_BG = '#F1ECE7';       // mediodía (Recreo/Comedor/Patio): neutro suave

  // Subgrupos de terapeutas: SIEMPRE desde las claves del JSON (nunca lista fija).
  // Etiqueta bonita para los conocidos; para uno nuevo, capitaliza la clave.
  const TER_LABEL = { psicologas:'Psicólogas', logopedas:'Logopedas', ocupacionales:'T. Ocupacionales' };
  const terGroups = () => Object.keys(H.terapeutas || {});
  const terLabel = g => TER_LABEL[g] || (g.charAt(0).toUpperCase() + g.slice(1));

  /* directorio de códigos -> nombre */
  const DIR = {};
  Object.entries(H.tutoras || {}).forEach(([c, p]) => DIR[c] = { nombre: p.nombre, rol: 'Tutora' });
  Object.entries(H.especialistas || {}).forEach(([c, p]) => DIR[c] = { nombre: p.nombre, rol: p.rol });
  terGroups().forEach(g =>
    Object.entries((H.terapeutas && H.terapeutas[g]) || {}).forEach(([c, p]) => DIR[c] = { nombre: p.nombre, rol: p.rol }));

  /* ---- helpers ---- */
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, m => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m]));
  const clean = s => String(s == null ? '' : s).replace(/[–—]/g, '-'); // sin en/em-dash
  const el = (s, c) => (c || document).querySelector(s);
  const els = (s, c) => Array.prototype.slice.call((c || document).querySelectorAll(s));
  const codeNum = x => parseInt(String(x || '').replace(/\D/g, ''), 10) || 0;   // "T3" -> 3
  const byCode = fn => (a, b) => codeNum(fn(a)) - codeNum(fn(b));
  const asigColor = a => (META.colores_asignatura && META.colores_asignatura[a]) || '#D8D2CE';
  const aulaColor = a => AULA_COLORS[a] || '#C9C2BD';
  function estadoColor(tipo) {
    if (!tipo || tipo === 'lectivo') return null;
    return (META.colores_estado && META.colores_estado[tipo]) ||
           (META.colores_vigilancia && META.colores_vigilancia[tipo]) ||
           (tipo === 'comedor' ? (META.colores_vigilancia || {}).comedor_tutor : null) || null;
  }
  function tint(hex, a) {
    const m = /^#?([0-9a-f]{6})$/i.exec(hex || ''); if (!m) return 'transparent';
    const r = parseInt(m[1].slice(0,2),16), g = parseInt(m[1].slice(2,4),16), b = parseInt(m[1].slice(4,6),16);
    return `rgba(${r},${g},${b},${a})`;
  }

  const state = { day: (function () { let d; try { d = new Date().getDay(); } catch (e) { d = 1; } return (d >= 1 && d <= 5) ? d - 1 : 0; })() };

  /* ---- iconos en el markup ---- */
  els('[data-ico]').forEach(n => { n.innerHTML = ICON[n.dataset.ico] || ''; });

  /* Tras imprimir un grupo de Turnos, quitar las marcas del <body>. */
  window.addEventListener('afterprint', () => {
    document.body.classList.remove('printgroup', 'printgroup--coord', 'printgroup--patios', 'printgroup--comida');
  });

  /* ============================================================
     NAVEGACIÓN
     ============================================================ */
  const rendered = {};
  function showView(name) {
    els('.view').forEach(v => v.classList.toggle('is-active', v.id === 'view-' + name));
    els('.nav__item').forEach(t => t.classList.toggle('is-active', t.dataset.view === name));
    els('.mnav').forEach(t => t.classList.toggle('is-active', t.dataset.view === name));
    if (!rendered[name] && VIEWS[name]) { VIEWS[name](); rendered[name] = true; }
    el('.main').scrollTo ? window.scrollTo({ top: 0, behavior: 'smooth' }) : window.scrollTo(0, 0);
  }
  document.addEventListener('click', e => {
    const n = e.target.closest('[data-view]');
    if (n) { e.preventDefault(); showView(n.dataset.view); }
  });

  /* ============================================================
     INICIO
     ============================================================ */
  function counts() {
    const t = H.terapeutas || {};
    return {
      clases: Object.keys(H.clases || {}).length,
      tutoras: Object.keys(H.tutoras || {}).length,
      especialistas: Object.keys(H.especialistas || {}).length,
      terapeutas: terGroups().reduce((s, g) => s + Object.keys(t[g] || {}).length, 0),
      alumnado: Object.values(H.alumnado || {}).reduce((s, ns) => s + Object.keys(ns).length, 0)
    };
  }
  const aulasOrden = () => Object.keys(H.clases).sort(byCode(k => H.clases[k].tutor));
  const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  // Ir directo a una sección Y seleccionar la persona/aula/niño concreto.
  // clases y terapeutas son de dos niveles (aula/subgrupo + alumno/persona).
  function goTo(view, key, subgroup) {
    showView(view);
    const twoLevel = view === 'terapeutas' || view === 'clases';
    if (twoLevel && subgroup) {
      const sg = el(`.picker[data-for="${view}"] .pk[data-key="${subgroup}"]`);
      if (sg && !sg.classList.contains('is-active')) sg.click();
    }
    const box = view === 'terapeutas' ? '.picker[data-for="terapeutas-personas"]'
      : view === 'clases' ? '.picker[data-for="clases-alumnos"]'
      : `.picker[data-for="${view}"]`;
    const pill = el(`${box} .pk[data-key="${key}"]`);
    if (pill) pill.click();
  }

  function renderInicio() {
    const c = counts();
    els('[data-count]').forEach(n => { n.textContent = c[n.dataset.count] != null ? c[n.dataset.count] : ''; });
    buildWeek();
    renderAulaChips();
    wireFinder();
  }

  // ---- Accesos rápidos a las aulas ----
  function renderAulaChips() {
    const keys = aulasOrden();
    el('#finderAulas').innerHTML = keys.map(a =>
      `<button class="chip" data-aula="${esc(a)}"><span class="chip__dot" style="background:${aulaColor(a)}"></span>${esc(a)}<span class="chip__code">${esc(H.clases[a].tutor)}</span></button>`).join('');
    els('#finderAulas .chip').forEach(ch => ch.addEventListener('click', () => goTo('clases', GRUPO, ch.dataset.aula)));
  }

  // ---- Mini-mapa: la semana de un aula (datos reales), F0–F9 ----
  function buildWeek() {
    const aula = aulasOrden()[0];
    const map = el('#weekMap'); if (!map) return;
    const aulaLbl = el('#weekMapAula'); if (aulaLbl) aulaLbl.textContent = 'aula ' + aula;
    const filas = H.clases[aula].filas.filter(f => !BREAK.has(f.franja));
    let html = '<span class="wk__corner"></span>' + DIAS.map(d => `<span class="wk__hd">${esc(d[0])}</span>`).join('');
    filas.forEach(f => {
      html += `<span class="wk__fr">${esc(clean(f.franja))}</span>`;
      DIAS.forEach(day => {
        const cc = f.dias[day] || {};
        const col = cc.asig ? asigColor(cc.asig) : '';
        html += `<span class="wk__c"${col ? ` style="background:${col}"` : ''} title="${esc(clean((cc.asig || '') + (cc.asig ? ' · ' + day : '')))}"></span>`;
      });
    });
    map.innerHTML = html;
  }

  // ---- Buscador ----
  let finderWired = false, INDEX = null;
  function buildIndex() {
    const idx = [];
    Object.keys(H.clases).forEach(a => idx.push({ label: a, sub: H.clases[a].tutor + ' · ' + (H.clases[a].tutor_nombre || ''), kind: 'Aula', view: 'clases', key: GRUPO, subgroup: a }));
    Object.keys(H.tutoras).forEach(k => idx.push({ label: H.tutoras[k].nombre, sub: 'Tutora · aula ' + (H.tutoras[k].aula || ''), kind: k, view: 'tutoras', key: k }));
    Object.keys(H.especialistas).forEach(k => idx.push({ label: H.especialistas[k].nombre, sub: H.especialistas[k].rol || '', kind: k, view: 'especialistas', key: k }));
    terGroups().forEach(g => Object.keys(H.terapeutas[g] || {}).forEach(k =>
      idx.push({ label: H.terapeutas[g][k].nombre, sub: H.terapeutas[g][k].rol || '', kind: k, view: 'terapeutas', key: k, subgroup: g })));
    Object.keys(H.alumnado || {}).forEach(clase => Object.keys(H.alumnado[clase]).forEach(nombre =>
      idx.push({ label: nombre, sub: 'Alumno/a · aula ' + clase, kind: clase, view: 'clases', key: nombre, subgroup: clase })));
    idx.forEach(it => it._h = norm(it.label + ' ' + it.sub + ' ' + it.key + ' ' + it.kind));
    return idx;
  }
  function wireFinder() {
    if (finderWired) return; finderWired = true;
    INDEX = buildIndex();
    const input = el('#finderInput'), box = el('#finderResults');
    let active = -1, current = [];
    const close = () => { box.hidden = true; box.innerHTML = ''; active = -1; current = []; };
    const hi = () => els('.fres', box).forEach((b, i) => b.classList.toggle('is-active', i === active));
    function pick(it) { if (!it) return; input.value = ''; close(); goTo(it.view, it.key, it.subgroup); }
    function open(list) {
      current = list; active = -1;
      box.innerHTML = list.length
        ? list.map((it, i) => `<button class="fres" data-i="${i}" role="option"><span class="fres__main"><b>${esc(it.label)}</b> <span class="fres__sub">${esc(it.sub)}</span></span><span class="fres__tag">${esc(it.kind)}</span></button>`).join('')
        : `<div class="fres fres--empty">Sin resultados</div>`;
      box.hidden = false;
      els('.fres[data-i]', box).forEach(b => b.addEventListener('mousedown', e => { e.preventDefault(); pick(current[+b.dataset.i]); }));
    }
    input.addEventListener('input', () => {
      const q = norm(input.value).trim();
      if (!q) { close(); return; }
      open(INDEX.filter(it => it._h.includes(q)).slice(0, 7));
    });
    input.addEventListener('keydown', e => {
      if (box.hidden) return;
      if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(active + 1, current.length - 1); hi(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); active = Math.max(active - 1, 0); hi(); }
      else if (e.key === 'Enter') { e.preventDefault(); pick(current[active >= 0 ? active : 0]); }
      else if (e.key === 'Escape') { close(); input.blur(); }
    });
    document.addEventListener('click', e => { if (!e.target.closest('.finder')) close(); });
  }

  /* ============================================================
     SELECTORES
     ============================================================ */
  function pills(container, items, activeKey, onPick) {
    container.innerHTML = items.map(it =>
      `<button class="pk${it.key === activeKey ? ' is-active' : ''}" data-key="${esc(it.key)}"><span>${esc(it.label)}</span>${it.code ? `<span class="pk__code">${esc(it.code)}</span>` : ''}</button>`).join('');
    els('.pk', container).forEach(p => p.addEventListener('click', () => {
      els('.pk', container).forEach(x => x.classList.remove('is-active'));
      p.classList.add('is-active'); onPick(p.dataset.key);
    }));
  }

  /* ============================================================
     REJILLA
     ============================================================ */
  function banner(mono, name, role, meta) {
    return `<div class="gridbanner">
      <span class="gridbanner__mono">${esc(mono)}</span>
      <div><div class="gridbanner__name">${esc(name)}</div>${role ? `<div class="gridbanner__role">${esc(role)}</div>` : ''}</div>
      <div class="gridbanner__right">
        ${meta ? `<span class="gridbanner__meta">${esc(meta)}</span>` : ''}
        <button class="gb-print noprint" type="button" aria-label="Imprimir este horario"><span class="gb-print__ico">${ICON.printer}</span>Imprimir</button>
      </div>
    </div>`;
  }
  function daySwitch() {
    const dots = DIAS.map((d, i) => `<span class="day-switch__dot${i === state.day ? ' on' : ''}" data-di="${i}"></span>`).join('');
    return `<div class="day-switch">
      <button class="day-switch__btn" data-nav="-1" aria-label="Día anterior">${ICON.caretL}</button>
      <div class="day-switch__now"><div class="day-switch__day"></div><div class="day-switch__dots">${dots}</div></div>
      <button class="day-switch__btn" data-nav="1" aria-label="Día siguiente">${ICON.caretR}</button>
    </div>`;
  }
  function shell(bannerHTML, rowsHTML) {
    return `${bannerHTML}${daySwitch()}<div class="grid-scroll"><table class="grid">
      <thead><tr><th>Franja</th>${DIAS.map(d => `<th>${esc(d)}</th>`).join('')}</tr></thead>
      <tbody>${rowsHTML}</tbody></table></div>`;
  }
  // Altura de fila proporcional a la duración real (30 min = base; 45 min = ×1.5).
  // BASE_ROW: filas de personas (1 línea). CLASE_ROW: filas de clase (asignatura + chips).
  const BASE_ROW = 54;
  const CLASE_ROW = 66;
  const rowMin = hora => {
    const m = String(hora || '').replace(/[–—]/g, '-').match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);
    const dur = m ? ((+m[3] * 60 + +m[4]) - (+m[1] * 60 + +m[2])) : 30;
    return Math.max(30, dur);
  };
  const rowH = (hora, base) => Math.round((base || BASE_ROW) * rowMin(hora) / 30);
  const gut = (fr, hora, base) => `<th class="tgut" scope="row" style="height:${rowH(hora, base)}px"><span class="f">${esc(clean(fr))}</span>${hora ? `<span class="h">${esc(clean(hora))}</span>` : ''}</th>`;
  const brkRow = (fr, hora, base) => `<tr class="brk">${gut(fr, hora, base)}<td colspan="${DIAS.length}"><div class="brk__rule"><span>${esc(clean(fr))} ${esc(clean(hora || ''))}</span></div></td></tr>`;

  // Fila sintética de coordinación general (no viene en el dato): martes 16:00-16:45.
  // Mismo color/estilo que NL y las demás coordinaciones (tipo no_lectivo).
  const COORD_ROW = { franja: 'Coord.', hora: '16:00-16:45', dias: {
    'Lunes': {}, 'Martes': { txt: 'Coordinación general', tipo: 'no_lectivo' }, 'Miércoles': {}, 'Jueves': {}, 'Viernes': {}
  } };
  // Personas que NO van a la coordinación general (no se les pone la franja).
  const NO_COORD = new Set(['Ps3', 'L3', 'I2']);

  // ---- CLASE ----
  function renderClase(aula) {
    const cl = H.clases[aula];
    const rows = cl.filas.map(f => {
      if (BREAK.has(f.franja)) return brkRow(f.franja, f.hora);   // banda de descanso (base normal)
      const cells = DIAS.map(day => {
        const c = f.dias[day] || {};
        if (c.asig) {
          const col = asigColor(c.asig);
          const apoyo = (c.adultos || []).length >= 2;   // 2+ adultos = franja con apoyo
          const codes = (c.adultos || []).map(a => `<span class="code">${esc(a)}</span>`).join('');
          // Solo las celdas con salidas son interactivas: se marcan y muestran tooltip.
          const salidas = (c.salidas || []).filter(s => s && s.alumno);
          const hasSal = salidas.length > 0;
          // Salida externa (fuera del centro): se escribe en la celda -> saber cuántos niños hay.
          const externa = (c.externa || []).filter(e => e && e.alumno);
          const extHTML = externa.length
            ? `<div class="cx__ext">${externa.map(e =>
                `<span class="cx__extrow"><span class="cx__exticon" aria-hidden="true">⇱</span><span>${esc(clean(e.alumno))} fuera${e.desde ? ` <span class="cx__extfrom">${esc(clean(e.desde))}</span>` : ''}</span></span>`).join('')}</div>`
            : '';
          const tipAttr = hasSal
            ? ` data-tip='${esc(JSON.stringify({ salidas: salidas.map(s => ({ alumno: clean(s.alumno), a: clean(s.a), a_nombre: s.a_nombre ? clean(s.a_nombre) : null })) }))}'`
            : '';
          // El tinte y la barra de color van en la <td> para que rellene toda la fila.
          return `<td class="cell${hasSal ? ' cell--sal' : ''}${apoyo ? ' cell--apoyo' : ''}" data-day="${day}" style="background:${tint(col,.30)};border-left-color:${col}"${tipAttr}>
            <div class="cx">${hasSal ? '<span class="cx__flag" aria-hidden="true">↗</span>' : ''}${apoyo ? '<span class="cx__apoyo" title="Franja con apoyo (2 adultos)" aria-label="Apoyo">+</span>' : ''}<span class="cx__asig">${esc(clean(c.asig))}</span>${codes ? `<span class="cx__codes">${codes}</span>` : ''}${extHTML}</div></td>`;
        }
        return `<td class="cell" data-day="${day}"><div class="cx"><span class="cx__nl">·</span></div></td>`;
      }).join('');
      // Filas de clase con altura uniforme (caben asignatura de 2 líneas + chips).
      return `<tr>${gut(f.franja, f.hora, CLASE_ROW)}${cells}</tr>`;
    }).join('');
    mount('[data-grid="clases"]', shell(banner('Aula', aula, 'Tutor/a ' + (cl.tutor_nombre || cl.tutor || ''), cl.tutor || ''), rows));
  }

  // ---- PERSONA ----
  function renderPersona(sel, mono, persona, legend) {
    // + coordinación general (martes), salvo para quien no va (Ps3, L3, I2).
    const filas = NO_COORD.has(mono) ? persona.filas : persona.filas.concat([COORD_ROW]);
    const rows = filas.map(f => {
      const cells = DIAS.map(day => {
        const c = f.dias[day] || {};
        // El txt puede ser multilínea: actividad principal + líneas "↗ alumno→dest".
        const rawLines = clean(c.txt || '').split('\n').map(l => l.trim()).filter(Boolean);
        // Salidas de niños: MISMO formato que en Clases -> tooltip al pasar el ratón
        // (quién se va y con quién, expandiendo el código del profesional a su nombre).
        const salidas = rawLines.filter(l => l.startsWith('↗')).map(l => {
          const m = l.replace(/^↗\s*/, '').match(/^(.+?)\s*→\s*(.+)$/);
          if (!m) return null;
          const a = m[2].trim();
          return { alumno: m[1].trim(), a: a, a_nombre: DIR[a] ? DIR[a].nombre : null };
        }).filter(Boolean);
        const hasSal = salidas.length > 0;
        // Anotaciones de salida externa (fuera del centro): líneas que empiezan por "⇱".
        const extLines = rawLines.filter(l => l.startsWith('⇱')).map(l => l.replace(/^⇱\s*/, '').trim());
        // Quitar la "L · " (marca de Lectivo) del inicio de la línea principal.
        const mainLine = (rawLines.filter(l => !l.startsWith('↗') && !l.startsWith('⇱'))[0] || '').replace(/^L\s*·\s*/, '');
        // Color por aula. Si no viene el campo `aula` (p.ej. EF conjunta "Oeste/Sur"),
        // lo deduzco del propio texto para que la celda no quede en blanco.
        let col = c.aula ? aulaColor(c.aula) : null;
        if (!col && c.tipo === 'lectivo') {
          const am = /^([^:]+):/.exec(mainLine);
          if (am) { const a0 = am[1].split('/')[0].trim(); if (AULA_COLORS[a0]) col = aulaColor(a0); }
        }
        if (!col) col = estadoColor(c.tipo);
        const muted = c.tipo === 'no_lectivo';
        const style = col ? ` style="background:${tint(col,.28)};border-left-color:${col}"` : '';
        const room = c.aula ? `<span class="cx__room">${esc(c.aula)}</span>` : '';
        const oneLine = c.tipo === 'comedor' ? ' cx--1line' : '';
        const tipAttr = hasSal ? ` data-tip='${esc(JSON.stringify({ salidas }))}'` : '';
        // Salidas escritas en la propia celda: "↗ Alumno → cód" (una línea por niño).
        const salHTML = hasSal
          ? `<div class="cx__sal">${salidas.map(s =>
              `<span class="cx__salrow"><span class="cx__salarr" aria-hidden="true">↗</span><span class="cx__salwho">${esc(s.alumno)}</span><span class="cx__saldest">→ ${esc(s.a)}</span></span>`).join('')}</div>`
          : '';
        const extHTML = extLines.length
          ? `<div class="cx__ext">${extLines.map(t =>
              `<span class="cx__extrow"><span class="cx__exticon" aria-hidden="true">⇱</span><span>${esc(t)}</span></span>`).join('')}</div>`
          : '';
        return `<td class="cell${hasSal ? ' cell--sal' : ''}" data-day="${day}"${style}${tipAttr}>
          <div class="cx${oneLine}"><span class="${muted ? 'cx__nl' : 'cx__txt'}">${esc(mainLine || '·')}</span>${room}${salHTML}${extHTML}</div></td>`;
      }).join('');
      return `<tr>${gut(f.franja, f.hora)}${cells}</tr>`;
    }).join('');
    mount(sel, shell(banner(mono, persona.nombre, persona.rol || '', ''), rows));
  }

  // ---- ALUMNO (un niño) ----
  function renderAlumno(sel, clase, nombre) {
    const nino = H.alumnado[clase][nombre];
    const empty = day => `<td class="cell" data-day="${day}"><div class="cx"><span class="cx__nl">·</span></div></td>`;
    const rows = nino.filas.map(f => {
      if (BREAK.has(f.franja)) return brkRow(f.franja, f.hora);   // Comida/Patio como banda, igual que el aula
      const cells = DIAS.map(day => {
        const c = f.dias[day];
        if (!c) return empty(day);
        if (c.asig) {                                  // está en su aula -> color de asignatura
          const col = asigColor(c.asig);
          return `<td class="cell" data-day="${day}" style="background:${tint(col,.30)};border-left-color:${col}"><div class="cx"><span class="cx__asig">${esc(clean(c.asig))}</span></div></td>`;
        }
        if (c.salida) {                                // sale a terapia -> rosa + "↗ CÓD · Nombre"
          const dest = c.dest_nombre ? ' · ' + clean(c.dest_nombre) : '';
          return `<td class="cell" data-day="${day}" style="background:${SALIDA_BG};border-left-color:${SALIDA_LINE}"><div class="cx"><span class="cx__txt cx__go">↗ ${esc(clean(c.salida))}${esc(dest)}</span></div></td>`;
        }
        if (c.label) {                                 // mediodía / salida externa -> etiqueta
          const isExt = /externa/i.test(c.label);
          return `<td class="cell" data-day="${day}" style="background:${MID_BG}"><div class="cx"><span class="cx__txt ${isExt ? 'cx__extlbl' : 'cx__mid'}">${isExt ? '⇱ ' : ''}${esc(clean(c.label))}</span></div></td>`;
        }
        return empty(day);
      }).join('');
      return `<tr>${gut(f.franja, f.hora)}${cells}</tr>`;
    }).join('');
    mount(sel, shell(banner(clase, nombre, 'Alumno/a · aula ' + clase, ''), rows));
  }

  // ---- TURNOS (coordinaciones, patios y comedores) — desde H.momentos ----
  function renderMomentos() {
    const host = el('[data-momentos]'); if (!host) return;
    const CODE_RE = /^([A-Za-zÑ]{1,3}\d+)\s*(.*)$/;   // "T1 María C." / "TO1" / "Ps3"
    // chip con tooltip: al pasar el ratón muestra el nombre (y rol) de quien es el código.
    const chip = c => {
      const nom = c.nombre || (DIR[c.code] ? DIR[c.code].nombre : '');
      const rol = DIR[c.code] ? DIR[c.code].rol : '';
      const tip = nom ? ` data-tip='${esc(JSON.stringify({ hd: nom, rows: rol ? [['', rol]] : [] }))}'` : '';
      return `<span class="mom-chip"${tip}>${esc(c.code)}</span>`;
    };
    // Cada string puede tener varias líneas: una línea "(...)" es NOTA del grupo anterior;
    // el resto son grupos (Coordinan doble = 2 grupos "Aula: códigos" en 2 líneas).
    function parseLines(str) {
      const entries = [];
      clean(str).split('\n').forEach(raw => {
        let line = raw.trim(); if (!line) return;
        if (line.startsWith('(')) {
          const n = line.replace(/^\(/, '').replace(/\)$/, '').trim();
          if (entries.length) { const e = entries[entries.length - 1]; e.nota = n; e.coord = /coordina/i.test(n); }
          return;
        }
        line = line.replace(/^(Asamblea|Conjunta):\s*/, '');          // fuera el prefijo redundante
        let pref = '';
        const lm = line.match(/^([A-Za-zÁÉÍÓÚÑñ .\/]+?):\s*(.+)$/);    // "Sur: T7+L1+..." (Coordinan)
        if (lm && /\+/.test(lm[2])) { pref = lm[1].trim(); line = lm[2]; }
        const chips = line.split('+').map(s => {
          s = s.trim(); const m = s.match(CODE_RE);
          return m ? { code: m[1], nombre: (m[2] || '').trim() || (DIR[m[1]] ? DIR[m[1]].nombre : '') } : { code: s, nombre: '' };
        }).filter(c => c.code);
        entries.push({ chips, pref, nota: '', coord: false });
      });
      return entries;
    }
    function cell(list) {
      if (!list || !list.length) return '<div class="mom-cell"><span class="mom-e__nl">·</span></div>';
      const entries = list.flatMap(parseLines);
      const plain = entries.filter(x => !x.pref), labeled = entries.filter(x => x.pref);
      let html = '';
      if (plain.length) {
        const chips = plain.flatMap(x => x.chips), notes = plain.map(x => x.nota).filter(Boolean);
        html += `<div class="mom-cell${plain.some(x => x.coord) ? ' is-coord' : ''}"><span class="mom-chips">${chips.map(chip).join('')}</span>${notes.length ? `<span class="mom-note">${esc(notes.join(' · '))}</span>` : ''}</div>`;
      }
      labeled.forEach(x => { html += `<div class="mom-cell"><span class="mom-pref">${esc(x.pref)}</span><span class="mom-chips">${x.chips.map(chip).join('')}</span></div>`; });
      return html;
    }
    // Etiqueta de fila: "Coordinan..." -> "Coordinación"; fuera TODOS los paréntesis
    // ("Estrella (T1)" -> "Estrella"; "Oeste + Sur (conjunta) (T6, T7)" -> "Oeste + Sur").
    const label = lbl => clean(lbl).replace(/\n/g, ' ')
      .replace(/^Coordinan\b.*$/i, 'Coordinación')
      .replace(/\s*\([^)]*\)/g, '')
      .trim();
    // Título: sin subtítulo (fuera lo de " — ..."), la hora sale como meta (sin paréntesis),
    // y las comidas se numeran "Turno N de comida".
    const blockHtml = (b, comidaNo) => {
      const raw = clean((b.titulo || '').split(' — ')[0]).trim();
      const mh = raw.match(/(\d{1,2}:\d{2}\s*-\s*\d{1,2}:\d{2})/);   // clean ya pasó – a -
      const hora = mh ? mh[1].replace(/\s+/g, '') : '';
      let name = raw.replace(/\s*\([^)]*\)/g, '').replace(/\s*·\s*turno.*/i, '').trim();
      if (comidaNo) name = 'Turno ' + comidaNo + ' de comida';
      const rows = (b.filas || []).map(f =>
        `<tr><th class="mom-lbl" scope="row">${esc(label(f.label))}</th>${DIAS.map(d => `<td class="mom-c" data-day="${d}">${cell(f.dias && f.dias[d])}</td>`).join('')}</tr>`).join('');
      return `<div class="mom-block"><div class="mom-head"><h3>${esc(name)}</h3>${hora ? `<span class="mom-head__hora">${esc(hora)}</span>` : ''}</div>` +
        `<div class="grid-scroll"><table class="mom-table"><thead><tr><th></th>${DIAS.map(d => `<th>${esc(d)}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div></div>`;
    };
    // Tres grupos que se pueden imprimir por separado (cada uno con su botón):
    // coordinaciones/asambleas, patios+comedores y turnos de comida.
    const groupOf = t => /^Comida/i.test(t) ? 'comida' : /patio|comedor/i.test(t) ? 'patios' : 'coord';
    const GROUPS = [
      { id: 'coord',  label: 'Coordinaciones y asambleas' },
      { id: 'patios', label: 'Patios y comedores' },
      { id: 'comida', label: 'Turnos de comida' }
    ];
    const groups = GROUPS.map(g => {
      const bs = (H.momentos || []).filter(b => groupOf(clean((b.titulo || '').split(' — ')[0])) === g.id);
      if (!bs.length) return '';
      return `<div class="mom-group" data-group="${esc(g.id)}">
        <div class="mom-grouptop noprint">
          <span class="mom-grouptop__t">${esc(g.label)}</span>
          <button class="gb-print mom-print" type="button" data-print="${esc(g.id)}" aria-label="Imprimir ${esc(g.label)}"><span class="gb-print__ico">${ICON.printer}</span>Imprimir</button>
        </div>${bs.map((b, i) => blockHtml(b, g.id === 'comida' ? i + 1 : 0)).join('')}</div>`;
    }).join('');
    const codes = Object.keys(DIR).sort((a, b) => a.replace(/\d+/, '').localeCompare(b.replace(/\d+/, '')) || codeNum(a) - codeNum(b));
    const legend = `<div class="mom-legend"><span class="mom-legend__t">Códigos</span>${codes.map(c => `<span class="cod"><b>${esc(c)}</b> ${esc(DIR[c].nombre)}</span>`).join('')}<span class="mom-legend__hint">verde = coordinación del tutor</span></div>`;
    // En móvil las tablas van día a día (como el resto): una sola day-switch las controla todas.
    host.innerHTML = '<div class="mom-dayswitch noprint">' + daySwitch() + '</div>' + groups + legend;
    // Cada botón marca el <body> con el grupo a imprimir; el CSS de impresión oculta el resto.
    els('.mom-print', host).forEach(btn => btn.addEventListener('click', () => {
      document.body.classList.add('printgroup', 'printgroup--' + btn.dataset.print);
      window.print();
    }));
    // Tooltip con el nombre al pasar el ratón por cada código (igual que en Clases).
    els('[data-tip]', host).forEach(n => {
      n.addEventListener('mouseenter', () => showTip(n));
      n.addEventListener('mousemove', moveTip);
      n.addEventListener('mouseleave', hideTip);
    });
    // Día a día en móvil: pinta solo la columna del día activo en TODAS las tablas.
    function paintMom() {
      els('.mom-c[data-day]', host).forEach(td => td.classList.toggle('on', td.dataset.day === DIAS[state.day]));
      const dEl = el('.day-switch__day', host); if (dEl) dEl.textContent = DIAS[state.day];
      els('.day-switch__dot', host).forEach((d, i) => d.classList.toggle('on', i === state.day));
    }
    els('.day-switch__btn', host).forEach(b => b.addEventListener('click', () => {
      state.day = (state.day + parseInt(b.dataset.nav, 10) + DIAS.length) % DIAS.length; syncDays();
    }));
    els('.day-switch__dot', host).forEach(d => d.addEventListener('click', () => { state.day = parseInt(d.dataset.di, 10); syncDays(); }));
    host._paintMom = paintMom; paintMom();
  }

  function mount(sel, html) {
    const host = el(sel); host.innerHTML = html;
    const pb = el('.gb-print', host);
    if (pb) pb.addEventListener('click', () => window.print());
    els('[data-tip]', host).forEach(n => {
      n.addEventListener('mouseenter', () => showTip(n));
      n.addEventListener('mousemove', moveTip);
      n.addEventListener('mouseleave', hideTip);
    });
    const dayEl = el('.day-switch__day', host);
    function paint() {
      els('td.cell[data-day]', host).forEach(td => td.classList.toggle('on', td.dataset.day === DIAS[state.day]));
      if (dayEl) dayEl.textContent = DIAS[state.day];
      els('.day-switch__dot', host).forEach((d, i) => d.classList.toggle('on', i === state.day));
    }
    els('.day-switch__btn', host).forEach(b => b.addEventListener('click', () => {
      state.day = (state.day + parseInt(b.dataset.nav, 10) + DIAS.length) % DIAS.length; syncDays();
    }));
    els('.day-switch__dot', host).forEach(d => d.addEventListener('click', () => { state.day = parseInt(d.dataset.di, 10); syncDays(); }));
    host._paint = paint; paint();
  }
  function syncDays() {
    els('.grid-host').forEach(h => h._paint && h._paint());
    const m = el('[data-momentos]'); if (m && m._paintMom) m._paintMom();   // Turnos también, día a día
  }

  /* tooltip */
  const tip = el('#tip');
  function showTip(n) {
    let d; try { d = JSON.parse(n.dataset.tip); } catch (e) { return; }
    let html = '';
    if (d.hd) html += `<div class="tip__hd">${esc(d.hd)}</div>`;
    if (d.rows) html += d.rows.map(r => `<div class="tip__r">${esc(r[0])} <b>${esc(r[1])}</b></div>`).join('');
    if (d.salidas && d.salidas.length) {
      html += `<div class="tip__salen">Salen:</div>` + d.salidas.map(s =>
        `<div class="tip__out"><span class="tip__arrow">↗</span><span>${esc(s.alumno)} → ${esc(s.a)}${s.a_nombre ? ` · ${esc(s.a_nombre)}` : ''}</span></div>`).join('');
    }
    if (!html) return;
    tip.innerHTML = html;
    tip.classList.add('is-on'); tip.setAttribute('aria-hidden', 'false');
  }
  function moveTip(e) {
    const pad = 14, w = tip.offsetWidth, h = tip.offsetHeight;
    let x = e.clientX + pad, y = e.clientY + pad;
    if (x + w > innerWidth - 8) x = e.clientX - w - pad;
    if (y + h > innerHeight - 8) y = e.clientY - h - pad;
    tip.style.left = Math.max(8, x) + 'px'; tip.style.top = Math.max(8, y) + 'px';
  }
  function hideTip() { tip.classList.remove('is-on'); tip.setAttribute('aria-hidden', 'true'); }
  // En táctil no se dispara 'mouseleave': cerrar el tooltip al hacer scroll o al tocar fuera de un código.
  window.addEventListener('scroll', hideTip, { passive: true, capture: true });
  document.addEventListener('touchstart', e => { if (!e.target.closest('[data-tip]')) hideTip(); }, { passive: true });

  /* ============================================================
     VISTAS
     ============================================================ */
  const VIEWS = {
    inicio: renderInicio,
    clases() {
      // Dos niveles: aula (subselector) -> "Aula (grupo)" o un alumno de esa aula.
      const keys = Object.keys(H.clases).sort(byCode(k => H.clases[k].tutor));
      const subWrap = el('.picker[data-for="clases-alumnos"]');
      function draw(aula, sel2) {
        if (sel2 === GRUPO) renderClase(aula);
        else renderAlumno('[data-grid="clases"]', aula, sel2);
      }
      function selAula(aula) {
        const ninos = (H.alumnado && H.alumnado[aula]) ? Object.keys(H.alumnado[aula]) : [];
        const items = [{ key: GRUPO, label: 'Aula' }].concat(ninos.map(n => ({ key: n, label: n })));
        pills(subWrap, items, GRUPO, sel2 => draw(aula, sel2));
        draw(aula, GRUPO);
      }
      pills(el('.picker[data-for="clases"]'), keys.map(k => ({ key: k, label: k })), keys[0], selAula);
      selAula(keys[0]);
    },
    tutoras() {
      const keys = Object.keys(H.tutoras).sort(byCode(k => k));
      const draw = k => renderPersona('[data-grid="tutoras"]', k, H.tutoras[k]);
      pills(el('.picker[data-for="tutoras"]'), keys.map(k => ({ key: k, label: H.tutoras[k].nombre, code: k })), keys[0], draw);
      draw(keys[0]);
    },
    especialistas() {
      const keys = Object.keys(H.especialistas).sort(byCode(k => k));
      const draw = k => renderPersona('[data-grid="especialistas"]', k, H.especialistas[k]);
      pills(el('.picker[data-for="especialistas"]'), keys.map(k => ({ key: k, label: H.especialistas[k].nombre, code: k })), keys[0], draw);
      draw(keys[0]);
    },
    terapeutas() {
      // Subgrupos dinámicos: Object.keys(H.terapeutas), con etiqueta legible.
      const groups = terGroups()
        .filter(g => Object.keys(H.terapeutas[g] || {}).length)
        .map(g => ({ key: g, label: terLabel(g) }));
      const persWrap = el('.picker[data-for="terapeutas-personas"]');
      function drawP(g, k) { renderPersona('[data-grid="terapeutas"]', k, H.terapeutas[g][k], 'terapeutas'); }
      function selG(g) {
        const keys = Object.keys(H.terapeutas[g]).sort(byCode(k => k));
        pills(persWrap, keys.map(k => ({ key: k, label: H.terapeutas[g][k].nombre, code: k })), keys[0], k => drawP(g, k));
        drawP(g, keys[0]);
      }
      pills(el('.picker[data-for="terapeutas"]'), groups.map(g => ({ key: g.key, label: g.label })), groups[0].key, selG);
      selG(groups[0].key);
    },
    momentos: renderMomentos
  };

  renderInicio(); rendered.inicio = true;
})();

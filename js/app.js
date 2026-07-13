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
  let orient = 'portrait';   // orientación de impresión elegida (vertical/horizontal)
  const el = (s, c) => (c || document).querySelector(s);
  const els = (s, c) => Array.prototype.slice.call((c || document).querySelectorAll(s));
  const codeNum = x => parseInt(String(x || '').replace(/\D/g, ''), 10) || 0;   // "T3" -> 3
  const byCode = fn => (a, b) => codeNum(fn(a)) - codeNum(fn(b));
  const asigColor = a => (META.colores_asignatura && META.colores_asignatura[cleanAsig(a)]) || '#D8D2CE';
  const aulaColor = a => AULA_COLORS[a] || '#C9C2BD';
  // Limpia el nombre de área para mostrar/colorear: quita (conj.), (1h), (2h)… (EF de Oeste/Sur).
  function cleanAsig(a) { return String(a == null ? '' : a).replace(/\s*\((?:conj\.?|\d+\s*h)\)\s*$/i, '').trim(); }
  // Tipo de sesión individual a partir del código del profesional (en vez de su nombre).
  const SESION = c => /^TO/.test(c) ? 'Terapia Ocupacional'
                    : /^L/.test(c) ? 'Logopedia'
                    : /^(O|Ps)/.test(c) ? 'Estimulación Cognitiva' : String(c || '');
  // Deduce el ÁREA de una línea de agenda (texto libre) para colorearla como en Clases.
  const _ASIG_KEYS = Object.keys((META.colores_asignatura) || {}).sort((a, b) => b.length - a.length);
  function areaDe(mainLine) {
    let m = cleanAsig(String(mainLine || ''));
    m = m.replace(/^[^:]{1,22}:\s*/, '');                       // prefijo de aula "Norte: ", "Oeste/Sur: "
    m = m.replace(/\s*·\s*.*$/, '');                            // cola "· CÓD", "· apoyo"
    m = cleanAsig(m.replace(/\s*\([^)]*\)\s*$/, '')).trim();    // "(apoyo)", "(Luna)"…
    if (/^Est\.?\s*leng/i.test(m)) return 'Estimulación del Lenguaje';   // abreviatura
    if (META.colores_asignatura && META.colores_asignatura[m]) return m;
    for (const k of _ASIG_KEYS) if (m === k || m.startsWith(k + ' ')) return k;
    return null;
  }
  // Formatea la línea principal de una agenda para mostrar (sin paréntesis):
  //  · "Est.leng." -> "Estimulación del Lenguaje"
  //  · "(apoyo)"   -> se quita
  //  · "Actividad (Aula[+Aula])" -> "Aula y Aula: Actividad"  (cuando no es su clase de referencia)
  const AULA_FULL = new Set(['Estrella', 'Sol', 'Norte', 'Luna', 'Este', 'Oeste', 'Sur']);
  const AULA_ABBR = { 'Est': 'Estrella' };
  function formatMain(m) {
    m = String(m || "").replace(/Est\.?\s*leng\.?/i, "Estimulación del Lenguaje");
    m = m.replace(/\s*\(\s*apoyo\s*\)/gi, "").trim();          // quita "(apoyo)"
    const pm = m.match(/^(.*?)\s*\(([^)]+)\)\s*$/);            // "resto (Aula[+Aula])"
    if (pm) {
      const aulas = pm[2].split("+").map(a => AULA_ABBR[a.trim()] || a.trim());
      if (aulas.every(a => AULA_FULL.has(a))) m = aulas.join(" y ") + ": " + pm[1].trim();
      else m = pm[1].trim();
    }
    return m.replace(/\s{2,}/g, " ").trim();
  }
  // Aula de cada tutor (T1→Estrella…) y compañeros de una franja (los OTROS adultos del aula):
  // sirve para sustituir "(apoyo)" por con quién está realmente ese adulto.
  const TUTOR_AULA = {}; for (const _a of Object.keys(H.clases || {})) TUTOR_AULA[H.clases[_a].tutor] = _a;
  function coAdultos(aula, day, franja, self) {
    const cl = H.clases[aula]; if (!cl) return [];
    const f = cl.filas.find(x => x.franja === franja); const c = f && f.dias[day];
    return (c && c.adultos || []).filter(a => a !== self);
  }
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

  /* Tras imprimir, quitar las marcas del <body> y vaciar el contenedor "Imprimir todo". */
  window.addEventListener('afterprint', () => {
    document.body.classList.remove('printgroup', 'printgroup--coord', 'printgroup--patios', 'printgroup--comida', 'printall');
    const pa = el('#printall'); if (pa) pa.innerHTML = '';
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
    Object.keys(H.tutoras).forEach(k => idx.push({ label: H.tutoras[k].nombre, sub: 'Tutor/a · aula ' + (H.tutoras[k].aula || ''), kind: k, view: 'clases', key: '__tutor__', subgroup: H.tutoras[k].aula }));
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
      `<button class="pk${it.tone ? ' pk--' + it.tone : ''}${it.key === activeKey ? ' is-active' : ''}" data-key="${esc(it.key)}"><span>${esc(it.label)}</span>${it.code ? `<span class="pk__code">${esc(it.code)}</span>` : ''}</button>`).join('');
    els('.pk', container).forEach(p => p.addEventListener('click', () => {
      els('.pk', container).forEach(x => x.classList.remove('is-active'));
      p.classList.add('is-active'); onPick(p.dataset.key);
    }));
  }

  /* ============================================================
     REJILLA
     ============================================================ */
  // "Imprimir todo" según el destino de la rejilla (no aparece dentro del contenedor #printall).
  function paFromSel(sel) {
    if (!sel || sel.indexOf('#printall') === 0) return null;
    if (sel.indexOf('clases') >= 0) return { kind: 'clases', label: 'Imprimir todo el aula' };
    if (sel.indexOf('especialistas') >= 0) return { kind: 'especialistas', label: 'Imprimir todos' };
    if (sel.indexOf('terapeutas') >= 0) return { kind: 'terapeutas', label: 'Imprimir todos' };
    return null;
  }
  function banner(mono, name, role, meta, printAll) {   // printAll ya no se usa aquí (va en el viewhead)
    return `<div class="gridbanner">
      <span class="gridbanner__mono">${esc(mono)}</span>
      <div><div class="gridbanner__name">${esc(name)}</div>${role ? `<div class="gridbanner__role">${esc(role)}</div>` : ''}</div>
      <div class="gridbanner__right">
        ${meta ? `<span class="gridbanner__meta">${esc(meta)}</span>` : ''}
        <button class="gb-print gb-print--one noprint" type="button" aria-label="Imprimir este horario"><span class="gb-print__ico">${ICON.printer}</span>Imprimir</button>
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
  // La hora del dato es solo el inicio, así que la duración se sabe por la franja:
  // 45 min → Comida, Patio tarde y Coordinación; el resto son 30 min.
  const DUR45 = new Set(['Comida', 'Patio tarde', 'Coord', 'Coord.']);   // franjas de 45 min
  const durMin = fr => DUR45.has(fr) ? 45 : 30;
  const rowH = (fr, base) => Math.round((base || BASE_ROW) * durMin(fr) / 30);
  const gut = (fr, hora, base) => `<th class="tgut" scope="row" style="height:${rowH(fr, base)}px"><span class="f">${esc(clean(fr))}</span>${hora ? `<span class="h">${esc(clean(hora))}</span>` : ''}</th>`;
  const brkRow = (fr, hora, base) => `<tr class="brk">${gut(fr, hora, base)}<td colspan="${DIAS.length}"><div class="brk__rule"><span>${esc(clean(fr))} ${esc(clean(hora || ''))}</span></div></td></tr>`;

  // Fila sintética de coordinación general (no viene en el dato): martes 16:00-16:45.
  // Mismo color/estilo que NL y las demás coordinaciones (tipo no_lectivo).
  const COORD_ROW = { franja: 'Coord.', hora: '16:00-16:45', dias: {
    'Lunes': {}, 'Martes': { txt: 'Coordinación general', tipo: 'no_lectivo' }, 'Miércoles': {}, 'Jueves': {}, 'Viernes': {}
  } };
  // Personas que NO van a la coordinación general (no se les pone la franja).
  const NO_COORD = new Set(['Ps3', 'L3', 'I2']);

  // ---- CLASE ----
  function renderClase(aula, sel) {
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
          // Clave de fusión: misma área + mismos adultos (así el apoyo NO se fusiona con el no-apoyo).
          // Las salidas quedan fuera de la clave: al fusionar se combinan, no se pierden.
          const mk = cleanAsig(c.asig) + '#' + (c.adultos || []).join(',') + '#' + externa.map(e => e.alumno + (e.desde || '')).join(';');
          // El tinte y la barra de color van en la <td> para que rellene toda la fila.
          return `<td class="cell${hasSal ? ' cell--sal' : ''}${apoyo ? ' cell--apoyo' : ''}" data-day="${day}" data-mk="${esc(mk)}" style="background:${tint(col,.30)};border-left-color:${col}"${tipAttr}>
            <div class="cx">${hasSal ? '<span class="cx__flag" aria-hidden="true">↗</span>' : ''}${apoyo ? '<span class="cx__apoyo" title="Franja con apoyo (2 adultos)" aria-label="Apoyo">+</span>' : ''}<span class="cx__asig">${esc(cleanAsig(c.asig))}</span>${codes ? `<span class="cx__codes">${codes}</span>` : ''}${extHTML}</div></td>`;
        }
        return `<td class="cell" data-day="${day}"><div class="cx"><span class="cx__nl">·</span></div></td>`;
      }).join('');
      // Filas de clase con altura uniforme (caben asignatura de 2 líneas + chips).
      return `<tr>${gut(f.franja, f.hora, CLASE_ROW)}${cells}</tr>`;
    }).join('');
    mount(sel || '[data-grid="clases"]', shell(banner('Aula', aula, 'Tutor/a ' + (cl.tutor_nombre || cl.tutor || ''), cl.tutor || '', paFromSel(sel || '[data-grid="clases"]')), rows));
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
        let mainLine = (rawLines.filter(l => !l.startsWith('↗') && !l.startsWith('⇱'))[0] || '').replace(/^L\s*·\s*/, '');
        // "(apoyo)" -> con quién está: el otro adulto del aula en esa franja (según la rejilla).
        if (/\(apoyo\)/i.test(mainLine)) {
          const pref = (mainLine.match(/^([^:·]+):/) || [])[1];
          const aula = (pref && H.clases[pref.trim()]) ? pref.trim() : TUTOR_AULA[mono];
          const co = aula ? coAdultos(aula, day, f.franja, mono) : [];
          mainLine = co.length ? mainLine.replace(/\s*\(apoyo\)/i, ' · ' + co.join('+')) : mainLine.replace(/\s*\(apoyo\)/i, ' · apoyo');
        }
        const displayMain = formatMain(mainLine);   // sin paréntesis, con aula como prefijo
        // Color por ÁREA (igual que en Clases y en las fichas de los niños): si la línea
        // principal es un área, se pinta con su color; si no (p. ej. sesión individual de
        // terapeuta = nombre de niño), se cae al color del aula, y si no, al color de estado.
        let area = c.tipo === 'lectivo' ? areaDe(mainLine) : null;
        let col = area ? asigColor(area) : (c.aula ? aulaColor(c.aula) : null);
        if (!col) col = estadoColor(c.tipo);
        const muted = c.tipo === 'no_lectivo';
        const style = col ? ` style="background:${tint(col,.28)};border-left-color:${col}"` : '';
        const room = (c.aula && displayMain.indexOf(c.aula) < 0) ? `<span class="cx__room">${esc(c.aula)}</span>` : '';
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
        // Fusión SOLO si el contenido mostrado es idéntico (misma actividad, códigos y salidas):
        // así no se ocultan apoyos ni salidas de media sesión (bug de T5/T6/T7).
        const mk = area ? (displayMain + '#' + salidas.map(s => s.alumno + '>' + s.a).join(';') + '#' + extLines.join(';')) : '';
        return `<td class="cell${hasSal ? ' cell--sal' : ''}" data-day="${day}" data-mk="${esc(mk)}"${style}${tipAttr}>
          <div class="cx${oneLine}"><span class="${muted ? 'cx__nl' : 'cx__txt'}">${esc(displayMain || '·')}</span>${room}${salHTML}${extHTML}</div></td>`;
      }).join('');
      return `<tr>${gut(f.franja, f.hora)}${cells}</tr>`;
    }).join('');
    mount(sel, shell(banner(mono, persona.nombre, persona.rol || '', '', paFromSel(sel)), rows));
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
          return `<td class="cell" data-day="${day}" data-mk="A#${esc(cleanAsig(c.asig))}" style="background:${tint(col,.30)};border-left-color:${col}"><div class="cx"><span class="cx__asig">${esc(cleanAsig(c.asig))}</span></div></td>`;
        }
        if (c.salida) {                                // sale a terapia -> rosa + "↗ CÓD · Sesión"
          const dest = ' · ' + SESION(c.salida);       // el TIPO de sesión, no el nombre del profesional
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
    mount(sel, shell(banner(clase, nombre, 'Alumno/a · aula ' + clase, '', paFromSel(sel)), rows));
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
          if (entries.length) {
            const e = entries[entries.length - 1]; e.nota = n; e.coord = /coordina/i.test(n);
            // Asamblea cubierta ("Ty coordina"): el aula es la del tutor que coordina (Ty).
            if (e.asm && e.coord) { const ty = (n.match(/(T\d)\s*coordina/i) || [])[1]; if (ty && TUTOR_AULA[ty]) e.pref = TUTOR_AULA[ty]; }
          }
          return;
        }
        // Entrada y Asamblea: cada asamblea muestra SU AULA (Estrella: T1, Sol: T2…), no combinadas.
        const am = line.match(/^(Asamblea|Conjunta):\s*(.+)$/);
        if (am) {
          const first = (am[2].split('+')[0].trim().match(CODE_RE) || [])[1];
          const prefA = am[1] === 'Conjunta' ? 'Conjunta' : (TUTOR_AULA[first] || 'Asamblea');
          const chipsA = am[2].split('+').map(s => { s = s.trim(); const m = s.match(CODE_RE); return m ? { code: m[1], nombre: (m[2] || '').trim() || (DIR[m[1]] ? DIR[m[1]].nombre : '') } : { code: s, nombre: '' }; }).filter(c => c.code);
          entries.push({ chips: chipsA, pref: prefA, nota: '', coord: false, asm: am[1] === 'Asamblea', conj: am[1] === 'Conjunta' });
          return;
        }
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
      labeled.forEach(x => { html += `<div class="mom-cell${x.coord ? ' is-coord' : ''}"><span class="mom-pref">${esc(x.pref)}</span><span class="mom-chips">${x.chips.map(chip).join('')}</span>${x.nota ? `<span class="mom-note">${esc(x.nota)}</span>` : ''}</div>`; });
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
    // "Entrada y Asamblea": matriz aula×día. Primera columna = la clase; cada celda, quién la
    // toca ese día (una fila por aula, poca altura). Las asambleas cubiertas van en verde.
    function entradaMatrix(b) {
      const ORDER = ['Estrella', 'Sol', 'Norte', 'Luna', 'Este'];
      const perDay = {};
      DIAS.forEach(d => { const arr = (b.filas && b.filas[0] && b.filas[0].dias && b.filas[0].dias[d]) || []; perDay[d] = parseLines(arr.join('\n')); });
      const chipsHtml = es => es.length ? es.map(e => `<span class="mom-chips">${e.chips.map(chip).join('')}</span>${e.nota ? `<span class="mom-note">${esc(e.nota)}</span>` : ''}`).join('') : '<span class="mom-e__nl">·</span>';
      const rowHtml = (label, pick) => `<tr><th class="mom-lbl" scope="row">${esc(label)}</th>${DIAS.map(d => { const es = pick(d); return `<td class="mom-c${es.some(e => e.coord) ? ' is-coord' : ''}" data-day="${d}"><div class="mom-cell">${chipsHtml(es)}</div></td>`; }).join('')}</tr>`;
      // filas de aula (solo el asamblea: quién la toca)
      const aulaByPref = {}; const aulas = [];
      DIAS.forEach(d => perDay[d].filter(e => e.asm).forEach(e => { if (!(e.pref in aulaByPref)) { aulaByPref[e.pref] = {}; aulas.push(e.pref); } (aulaByPref[e.pref][d] = aulaByPref[e.pref][d] || []).push(e); }));
      aulas.sort((a, x) => { const ia = ORDER.indexOf(a), ix = ORDER.indexOf(x); return (ia < 0 ? 99 : ia) - (ix < 0 ? 99 : ix) || a.localeCompare(x); });
      let rows = aulas.map(p => rowHtml(p, d => aulaByPref[p][d] || [])).join('');
      // fila Conjunta (EBO)
      rows += rowHtml('Conjunta', d => perDay[d].filter(e => e.conj));
      return rows;
    }
    // Comedores como matriz: 1ª columna = el comedor (aula). El dato viene plano, así que se
    // agrupa por tutor: cada T1–T7 abre un comedor (su aula) y los códigos siguientes son su apoyo.
    function comedorMatrix(b) {
      const ORDER = ['Estrella', 'Sol', 'Norte', 'Luna', 'Este', 'Oeste', 'Sur'];
      const byAula = {}; const aulas = [];
      DIAS.forEach(d => {
        const arr = (b.filas && b.filas[0] && b.filas[0].dias && b.filas[0].dias[d]) || [];
        let cur = null;
        arr.forEach(x => {
          const m = clean(x).trim().match(CODE_RE); const c = m ? m[1] : clean(x).trim().split(/\s+/)[0];
          if (/^T[1-7]$/.test(c)) { const aula = TUTOR_AULA[c] || c; if (!(aula in byAula)) { byAula[aula] = {}; aulas.push(aula); } cur = (byAula[aula][d] = byAula[aula][d] || []); }
          if (cur && c) cur.push({ code: c, nombre: (m ? (m[2] || '') : '').trim() || (DIR[c] ? DIR[c].nombre : '') });
        });
      });
      aulas.sort((a, x) => { const ia = ORDER.indexOf(a), ix = ORDER.indexOf(x); return (ia < 0 ? 99 : ia) - (ix < 0 ? 99 : ix) || a.localeCompare(x); });
      return aulas.map(a => `<tr><th class="mom-lbl" scope="row">${esc(a)}</th>${DIAS.map(d => {
        const cs = byAula[a][d] || [];
        return `<td class="mom-c" data-day="${d}"><div class="mom-cell">${cs.length ? `<span class="mom-chips">${cs.map(chip).join('')}</span>` : '<span class="mom-e__nl">·</span>'}</div></td>`;
      }).join('')}</tr>`).join('');
    }
    const blockHtml = (b, comidaNo) => {
      const raw = clean((b.titulo || '').split(' — ')[0]).trim();
      const mh = raw.match(/(\d{1,2}:\d{2}\s*-\s*\d{1,2}:\d{2})/);   // clean ya pasó – a -
      const hora = mh ? mh[1].replace(/\s+/g, '') : '';
      let name = raw.replace(/\s*\([^)]*\)/g, '').replace(/\s*·\s*turno.*/i, '').trim();
      if (comidaNo) name = 'Turno ' + comidaNo + ' de comida';
      const isEntrada = /Entrada|Asamblea/i.test(name);
      const isComedor = /Comedor/i.test(name);
      const isMatrix = isEntrada || isComedor;
      // ¿alguna fila lleva etiqueta? Si no (patios, comidas…), fuera la 1ª columna vacía.
      const hasLbl = isMatrix || (b.filas || []).some(f => label(f.label).trim());
      const lblTh = hasLbl ? '<th></th>' : '';
      const rows = isEntrada ? entradaMatrix(b) : isComedor ? comedorMatrix(b) : (b.filas || []).map(f =>
        `<tr>${hasLbl ? `<th class="mom-lbl" scope="row">${esc(label(f.label))}</th>` : ''}${DIAS.map(d => `<td class="mom-c" data-day="${d}">${cell(f.dias && f.dias[d])}</td>`).join('')}</tr>`).join('');
      const cls = 'mom-table' + (isMatrix ? ' mom-table--matrix' : '') + (hasLbl ? '' : ' mom-table--nolbl');
      return `<div class="mom-block"><div class="mom-head"><h3>${esc(name)}</h3>${hora ? `<span class="mom-head__hora">${esc(hora)}</span>` : ''}</div>` +
        `<div class="grid-scroll"><table class="${cls}"><thead><tr>${lblTh}${DIAS.map(d => `<th>${esc(d)}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div></div>`;
    };
    // Tres grupos que se pueden imprimir por separado (cada uno con su botón):
    // coordinaciones/asambleas, patios+comedores y turnos de comida.
    const groupOf = t => /\bComida\b/i.test(t) ? 'comida' : /patio|comedor/i.test(t) ? 'patios' : 'coord';
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
    const legend = `<div class="mom-legend"><span class="mom-legend__t">Códigos</span>${codes.map(c => `<span class="cod"><b>${esc(c)}</b> ${esc(DIR[c].nombre)}</span>`).join('')}<span class="mom-legend__hint">verde = coordinación de la tutora</span></div>`;
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
    els('.gb-print--one', host).forEach(b => b.addEventListener('click', () => window.print()));   // imprimir este horario
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
    mergeCells(host);
  }
  // Fusiona verticalmente celdas consecutivas idénticas (mismo data-mk) por columna. Mobile-safe:
  // no borra celdas; la primera del bloque lleva rowspan y las siguientes se ocultan en escritorio
  // (en móvil, que muestra un día a la vez, se vuelven a ver como celdas normales).
  function mergeCells(host) {
    const table = el('table.grid', host); if (!table) return;
    const rows = els('tbody tr', table);
    const mat = rows.map(tr => tr.classList.contains('brk') ? { brk: true } : { tds: els('td.cell', tr) });
    for (let c = 0; c < DIAS.length; c++) {
      let run = [];
      const flush = () => { if (run.length > 1) combineRun(run); run = []; };
      for (const row of mat) {
        if (row.brk || !row.tds) { flush(); continue; }
        const td = row.tds[c];
        const mk = td && td.getAttribute('data-mk');
        if (mk && run.length && run[run.length - 1].getAttribute('data-mk') === mk) run.push(td);
        else { flush(); run = mk ? [td] : []; }
      }
      flush();
    }
  }
  // Fusiona un bloque de celdas idénticas: la 1ª lleva rowspan; las demás se ocultan (escritorio).
  // Las salidas que difieran entre franjas se COMBINAN en la celda líder para no perder nada.
  function combineRun(run) {
    const leader = run[0]; leader.rowSpan = run.length;
    const lcx = el('.cx', leader);
    const seen = new Set(els('.cx__salrow, .cx__extrow', lcx).map(n => n.textContent.replace(/\s+/g, ' ').trim()));
    const parseTip = td => { try { return JSON.parse(td.getAttribute('data-tip') || '{}').salidas || []; } catch (e) { return []; } };
    const tipSal = parseTip(leader);
    for (let i = 1; i < run.length; i++) {
      const td = run[i]; td.classList.add('cell--merged');
      const ccx = el('.cx', td);
      els('.cx__sal, .cx__ext', ccx).forEach(group => {
        const cls = group.classList.contains('cx__ext') ? 'cx__ext' : 'cx__sal';
        let target = el('.' + cls, lcx);
        els(':scope > *', group).forEach(row => {
          const t = row.textContent.replace(/\s+/g, ' ').trim();
          if (seen.has(t)) return; seen.add(t);
          if (!target) { target = document.createElement('div'); target.className = cls; lcx.appendChild(target); }
          target.appendChild(row.cloneNode(true));
        });
      });
      parseTip(td).forEach(s => { const k = s.alumno + '>' + s.a; if (!tipSal.some(x => x.alumno + '>' + x.a === k)) tipSal.push(s); });
    }
    if (tipSal.length) {
      leader.setAttribute('data-tip', JSON.stringify({ salidas: tipSal }));
      if (!leader.classList.contains('cell--sal')) {
        leader.classList.add('cell--sal');
        if (!el('.cx__flag', lcx)) { const f = document.createElement('span'); f.className = 'cx__flag'; f.setAttribute('aria-hidden', 'true'); f.textContent = '↗'; lcx.insertBefore(f, lcx.firstChild); }
      }
      leader.addEventListener('mouseenter', () => showTip(leader));   // idempotente: re-pinta el mismo tip
      leader.addEventListener('mousemove', moveTip);
      leader.addEventListener('mouseleave', hideTip);
    }
  }
  function syncDays() {
    els('.grid-host').forEach(h => h._paint && h._paint());
    const m = el('[data-momentos]'); if (m && m._paintMom) m._paintMom();   // Turnos también, día a día
  }

  /* ---- IMPRIMIR TODO: varios horarios de golpe (sin quitar el "Imprimir" simple) ----
     Monta cada horario en un contenedor #printall que solo se ve al imprimir. */
  function printItems(builders) {
    const host = el('#printall');
    if (!host || !builders.length) return;
    host.innerHTML = builders.map((_, i) => `<div class="printall__item"><div class="grid-host" data-pa="${i}"></div></div>`).join('');
    builders.forEach((fn, i) => fn(`#printall [data-pa="${i}"]`));
    document.body.classList.add('printall');
    window.print();
  }
  function printAllAula(aula) {
    if (!aula || !H.clases[aula]) return;
    const tc = H.clases[aula].tutor, t = H.tutoras[tc];
    const ninos = (H.alumnado && H.alumnado[aula]) ? Object.keys(H.alumnado[aula]) : [];
    const items = [];
    if (t) items.push(sel => renderPersona(sel, tc, Object.assign({}, t, { rol: 'Tutor/a · aula ' + aula })));
    items.push(sel => renderClase(aula, sel));                       // rejilla del aula
    ninos.forEach(n => items.push(sel => renderAlumno(sel, aula, n)));   // cada niño
    printItems(items);
  }
  function printAllPersonas(lista) {
    printItems(lista.map(p => (sel => renderPersona(sel, p.code, p.data))));
  }
  function handlePrintAll(kind) {
    if (kind === 'clases') {
      const act = el('.picker[data-for="clases"] .pk.is-active');
      printAllAula(act && act.dataset.key);
    } else if (kind === 'especialistas') {
      printAllPersonas(Object.keys(H.especialistas).sort(byCode(k => k)).map(k => ({ code: k, data: H.especialistas[k] })));
    } else if (kind === 'terapeutas') {
      printAllPersonas(terGroups().flatMap(g => Object.keys(H.terapeutas[g] || {}).sort(byCode(k => k)).map(k => ({ code: k, data: H.terapeutas[g][k] }))));
    }
  }
  // Orientación de impresión: un <style id="pageOrient"> controla @page. margin-top holgado para
  // que el logo fijo (arriba a la derecha en todas las páginas) no pise el contenido.
  function setOrient(o) {
    orient = o === 'landscape' ? 'landscape' : 'portrait';
    let st = el('#pageOrient');
    if (!st) { st = document.createElement('style'); st.id = 'pageOrient'; document.head.appendChild(st); }
    st.textContent = `@page{ size:A4 ${orient}; margin:20mm 8mm 9mm; }`;
    els('[data-orient]').forEach(b => b.classList.toggle('is-active', b.dataset.orient === orient));
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
        `<div class="tip__out"><span class="tip__arrow">↗</span><span>${esc(s.alumno)} → ${esc(s.a)} · ${esc(SESION(s.a))}</span></div>`).join('');
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
      // Dos niveles: aula (subselector) -> Tutor / "Aula (grupo)" / un alumno de esa aula.
      const keys = Object.keys(H.clases).sort(byCode(k => H.clases[k].tutor));
      const subWrap = el('.picker[data-for="clases-alumnos"]');
      const TUTOR = '__tutor__';
      function draw(aula, sel2) {
        if (sel2 === TUTOR) {
          const tc = H.clases[aula].tutor;
          const t = H.tutoras[tc];
          if (t) renderPersona('[data-grid="clases"]', tc, Object.assign({}, t, { rol: 'Tutor/a · aula ' + aula }));
          else renderClase(aula);
        }
        else if (sel2 === GRUPO) renderClase(aula);
        else renderAlumno('[data-grid="clases"]', aula, sel2);
      }
      function selAula(aula) {
        const ninos = (H.alumnado && H.alumnado[aula]) ? Object.keys(H.alumnado[aula]) : [];
        const items = [{ key: TUTOR, label: 'Tutor/a', tone: 'green' }, { key: GRUPO, label: 'Aula', tone: 'red' }]
          .concat(ninos.map(n => ({ key: n, label: n, tone: 'blue' })));
        pills(subWrap, items, TUTOR, sel2 => draw(aula, sel2));
        draw(aula, TUTOR);
      }
      pills(el('.picker[data-for="clases"]'), keys.map(k => ({ key: k, label: k })), keys[0], selAula);
      selAula(keys[0]);
    },
    especialistas() {
      const keys = Object.keys(H.especialistas).sort(byCode(k => k));
      const draw = k => renderPersona('[data-grid="especialistas"]', k, H.especialistas[k]);
      pills(el('.picker[data-for="especialistas"]'), keys.map(k => ({ key: k, label: H.especialistas[k].nombre, code: k, tone: 'green' })), keys[0], draw);
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
        pills(persWrap, keys.map(k => ({ key: k, label: H.terapeutas[g][k].nombre, code: k, tone: 'green' })), keys[0], k => drawP(g, k));
        drawP(g, keys[0]);
      }
      pills(el('.picker[data-for="terapeutas"]'), groups.map(g => ({ key: g.key, label: g.label })), groups[0].key, selG);
      selG(groups[0].key);
    },
    momentos: renderMomentos
  };

  // Sello de actualización de datos (meta.generado / meta.version): ayuda a ver de un vistazo
  // si lo desplegado está al día. Si el dato no lo trae, no se muestra nada.
  (function dataStamp() {
    const g = H.meta && (H.meta.generado || H.meta.version);
    if (!g) return;
    const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(g));
    const txt = m
      ? m[3] + ' ' + ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'][+m[2] - 1] + ' ' + m[1]
      : String(g);
    els('[data-stamp]').forEach(n => {
      n.textContent = (n.classList.contains('printhead__stamp') ? ' · actualizado ' : 'Actualizado: ') + txt;
      n.hidden = false;
    });
  })();

  // Controles de impresión estáticos en las cabeceras (viewhead): orientación + "Imprimir todo".
  els('[data-printall]').forEach(b => {
    const ico = el('.gb-print__ico', b); if (ico && !ico.innerHTML.trim()) ico.innerHTML = ICON.printer;
    b.addEventListener('click', () => handlePrintAll(b.dataset.printall));
  });
  els('[data-orient]').forEach(b => b.addEventListener('click', () => setOrient(b.dataset.orient)));
  setOrient(orient);   // crea el <style> de @page (vertical por defecto) y marca el toggle activo
  renderInicio(); rendered.inicio = true;
})();

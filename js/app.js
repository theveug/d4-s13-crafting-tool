const q = document.getElementById('q');
const clear = document.getElementById('clear');
const results = document.getElementById('results');
const pills = document.getElementById('pills');
const visibleCount = document.getElementById('visibleCount');
const totalCount = document.getElementById('totalCount');
const expandAll = document.getElementById('expandAll');
const collapseAll = document.getElementById('collapseAll');
const targetOnly = document.getElementById('targetOnly');
const clearPicks = document.getElementById('clearPicks');
const selectionPanel = document.getElementById('selectionPanel');
const selectedChips = document.getElementById('selectedChips');
const classFilter = document.getElementById('classFilter');
const showAllClasses = document.getElementById('showAllClasses');
const slotFilterEl = document.getElementById('slotFilterEl');
const helpPanel = document.getElementById('helpPanel');

const categories = [...new Set(AFFIXES.map(x => x.category))];
let activeCategory = "";
let forcedOpen = new Set(["Resources"]);
let slotFilter = "All";
let picked = new Set(JSON.parse(localStorage.getItem("d4-picked-affixes") || "[]").map(String));
let rollTargetOnly = localStorage.getItem("d4-roll-target-only") === "1";

GAME_CLASSES.forEach(c => classFilter.insertAdjacentHTML('beforeend', `<option value="${c}">${c === "All" ? "All Classes" : c}</option>`));

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

function highlight(text, term) {
  const safe = escapeHtml(text);
  if (!term) return safe;
  const rx = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
  return safe.replace(rx, '<mark>$1</mark>');
}

function classMatches(x) {
  const selected = classFilter.value;
  const classes = x.classes || ["All"];
  if (selected === "All") return true;
  return classes.includes(selected) || (showAllClasses.checked && classes.includes("All"));
}

function slotMatches(x) {
  if (slotFilter === "All") return true;
  if (!x.slots) return true; // unassigned = always show
  return x.slots.includes(slotFilter);
}

function catItems(cat) {
  const term = q.value.trim().toLowerCase();
  return AFFIXES.filter(x => {
    const hay = [x.category, x.affix, x.format, x.text, (x.classes || []).join(' ')].join(' ').toLowerCase();
    return x.category === cat && classMatches(x) && slotMatches(x) && (!rollTargetOnly || picked.has(String(x.id))) && (!term || hay.includes(term));
  }).sort((a, b) => a.affix.localeCompare(b.affix));
}

function totalInCat(cat) {
  return AFFIXES.filter(x => x.category === cat && classMatches(x) && slotMatches(x)).length;
}

function renderPills() {
  pills.innerHTML = `<span class="pill ${!activeCategory ? 'active' : ''}" data-cat="">All</span>` +
    categories.map(c => `<span class="pill ${activeCategory === c ? 'active' : ''}" data-cat="${c}">${c}</span>`).join('');
  document.querySelectorAll('.pill').forEach(p => p.onclick = () => {
    activeCategory = p.dataset.cat;
    if (activeCategory) forcedOpen.add(activeCategory);
    render();
  });
}

function render() {
  const term = q.value.trim();
  const cats = (activeCategory ? [activeCategory] : categories).filter(cat => !rollTargetOnly || activeCategory || catItems(cat).length > 0);
  let visible = 0;
  totalCount.textContent = AFFIXES.length;
  renderPills();

  results.innerHTML = cats.map(cat => {
    const items = catItems(cat);
    visible += items.length;
    const isOpen = forcedOpen.has(cat) || term || activeCategory === cat || rollTargetOnly;
    const rows = items.map(x =>
      `<div class="affix-row ${picked.has(String(x.id)) ? 'picked' : ''}" data-id="${x.id}">` +
      `<input class="rollcheck" type="checkbox" ${picked.has(String(x.id)) ? 'checked' : ''} aria-label="Select ${escapeHtml(x.affix)}">` +
      `<span>${x.format ? `<span class="format">${highlight(x.format, term)}</span> ` : ''}${highlight(x.affix, term)}${prismBadge(x)}<span class="classes">${escapeHtml((x.classes || ["All"]).join(", "))}</span></span>` +
      `<button type="button" class="copy" data-copy="${escapeHtml(x.text)}">Copy</button>` +
      `</div>`
    ).join('') || `<div class="affix-row"><span></span><span>No matching affixes.</span></div>`;
    return `<section class="category ${isOpen ? 'open' : ''}" data-cat="${cat}">` +
      `<div class="category-row"><div class="category-name">${escapeHtml(cat)}</div><div class="category-count">${items.length} / ${totalInCat(cat)}</div><div class="arrow">◆</div></div>` +
      `<div class="affix-list">${rows}</div></section>`;
  }).join('');

  if (rollTargetOnly && picked.size === 0) {
    results.innerHTML = `<section class="category open"><div class="category-row"><div class="category-name">Roll Target</div><div class="category-count">0 / 0</div><div class="arrow">◆</div></div><div class="affix-list"><div class="affix-row"><span></span><span>No affixes selected. Toggle Roll Target off, check the affixes you want, then toggle it back on.</span></div></div></section>`;
  }

  visibleCount.textContent = visible;

  document.querySelectorAll('.category-row').forEach(row => row.onclick = () => {
    const cat = row.parentElement.dataset.cat;
    forcedOpen.has(cat) ? forcedOpen.delete(cat) : forcedOpen.add(cat);
    row.parentElement.classList.toggle('open');
  });

  document.querySelectorAll('.copy').forEach(btn => btn.onclick = async e => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.textContent = 'Copied';
      setTimeout(() => btn.textContent = 'Copy', 900);
    } catch {
      btn.textContent = 'Copy failed';
    }
  });

  document.querySelectorAll('.rollcheck').forEach(cb => cb.addEventListener('change', () => {
    const id = String(cb.closest('.affix-row').dataset.id);
    if (cb.checked) picked.add(id); else picked.delete(id);
    localStorage.setItem("d4-picked-affixes", JSON.stringify([...picked]));
    cb.closest('.affix-row').classList.toggle('picked', cb.checked);
    renderSelection();
  }));

  renderSelection();
  syncUrl();
}

function renderSelection() {
  const selected = AFFIXES.filter(x => picked.has(String(x.id)));
  selectionPanel.classList.toggle('active', selected.length > 0);
  selectedChips.innerHTML = selected.map(x =>
    `<button type="button" class="selchip" data-id="${x.id}" title="Remove">${escapeHtml(x.affix)} ×</button>`
  ).join('');
  selectedChips.querySelectorAll('.selchip').forEach(chip => chip.onclick = () => {
    picked.delete(String(chip.dataset.id));
    localStorage.setItem("d4-picked-affixes", JSON.stringify([...picked]));
    render();
  });
}

function syncUrl() {
  const params = new URLSearchParams();
  if (q.value.trim()) params.set('q', q.value.trim());
  if (activeCategory) params.set('category', activeCategory);
  if (classFilter.value !== "All") params.set('class', classFilter.value);
  if (!showAllClasses.checked) params.set('includeAll', '0');
  history.replaceState(null, '', location.pathname + (params.toString() ? '?' + params : ''));
}

function loadUrl() {
  const p = new URLSearchParams(location.search);
  q.value = p.get('q') || '';
  activeCategory = p.get('category') || '';
  classFilter.value = p.get('class') || 'All';
  showAllClasses.checked = p.get('includeAll') !== '0';
  if (activeCategory) forcedOpen.add(activeCategory);
}

q.addEventListener('input', render);
classFilter.addEventListener('change', render);
showAllClasses.addEventListener('change', render);
slotFilterEl.addEventListener('change', () => { slotFilter = slotFilterEl.value; render(); });

clear.addEventListener('click', () => {
  q.value = '';
  activeCategory = '';
  classFilter.value = 'All';
  slotFilter = 'All';
  slotFilterEl.value = 'All';
  showAllClasses.checked = true;
  forcedOpen = new Set(["Resources"]);
  render();
  q.focus();
});

targetOnly.addEventListener('click', () => {
  rollTargetOnly = !rollTargetOnly;
  localStorage.setItem("d4-roll-target-only", rollTargetOnly ? "1" : "0");
  if (rollTargetOnly) forcedOpen = new Set(categories);
  render();
});

clearPicks.addEventListener('click', () => {
  picked.clear();
  localStorage.removeItem("d4-picked-affixes");
  rollTargetOnly = false;
  localStorage.removeItem("d4-roll-target-only");
  render();
});

expandAll.addEventListener('click', () => { forcedOpen = new Set(categories); render(); });
collapseAll.addEventListener('click', () => { forcedOpen = new Set(); render(); });
document.getElementById('helpToggle').addEventListener('click', () => helpPanel.classList.toggle('active'));

loadUrl();
render();

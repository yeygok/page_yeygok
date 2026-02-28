/* ═══════════════════════════════════════════════════
   SymParts — JavaScript principal
   Responsabilidades:
   1. Menú móvil (hamburger toggle)
   2. Búsqueda global en parts.json
   3. Renderizado dinámico de partes por categoría (en páginas internas)
   ═══════════════════════════════════════════════════ */

// ── Estado global ───────────────────────────────
let allParts = [];

// ── Utils ───────────────────────────────────────

/**
 * Normaliza texto: minúsculas + sin tildes
 * @param {string} str
 * @returns {string}
 */
function normalize(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Carga parts.json desde la raíz del proyecto
 * Detecta si estamos en una sub-carpeta (pages/) y ajusta la ruta
 * @returns {Promise<Array>}
 */
async function loadParts() {
  const isSubPage = window.location.pathname.includes('/pages/');
  const basePath = isSubPage ? '../data/parts.json' : 'data/parts.json';

  try {
    const res = await fetch(basePath);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error cargando parts.json:', err);
    return [];
  }
}

// ── Menú móvil ──────────────────────────────────

function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Cerrar al hacer click en un enlace
  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── Búsqueda global ─────────────────────────────

function initSearch() {
  const input = document.getElementById('searchInput');
  const resultsBox = document.getElementById('searchResults');
  if (!input || !resultsBox) return;

  let debounceTimer;

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = normalize(input.value.trim());
      if (query.length < 2) {
        resultsBox.hidden = true;
        resultsBox.innerHTML = '';
        return;
      }
      const filtered = allParts.filter(part => {
        const searchable = normalize(
          `${part.name} ${part.sku} ${part.category} ${part.compatible.join(' ')} ${part.equivalents.join(' ')} ${part.notes || ''}`
        );
        return searchable.includes(query);
      });
      renderSearchResults(filtered, resultsBox);
    }, 250);
  });

  // Cerrar resultados al hacer click fuera
  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !resultsBox.contains(e.target)) {
      resultsBox.hidden = true;
    }
  });
}

function renderSearchResults(parts, container) {
  if (parts.length === 0) {
    container.innerHTML = '<p class="search-results__empty">No se encontraron repuestos. Intenta con otra búsqueda.</p>';
    container.hidden = false;
    return;
  }

  const categoryPages = {
    'Motor': 'pages/motor.html',
    'Frenos': 'pages/frenos.html',
    'Suspensión': 'pages/suspension.html',
    'Transmisión': 'pages/transmision.html',
    'Otros': 'pages/otros.html',
    'Dirección': 'pages/direccion.html',
  };

  const isSubPage = window.location.pathname.includes('/pages/');
  const prefix = isSubPage ? '../' : '';

  container.innerHTML = parts.slice(0, 12).map(part => {
    const pageUrl = prefix + (categoryPages[part.category] || '#');
    return `
      <a href="${pageUrl}" class="search-result__item">
        <div>
          <div class="search-result__name">${part.name}</div>
          <div class="search-result__cat">${part.category} · <span class="search-result__compat">${part.sku}</span></div>
          <div class="search-result__compat">${part.compatible.join(', ')}</div>
        </div>
      </a>
    `;
  }).join('');

  if (parts.length > 12) {
    container.innerHTML += `<p class="search-results__empty">${parts.length - 12} resultados más…</p>`;
  }

  container.hidden = false;
}

// ── Renderizado de partes en páginas de categoría ─

function initCategoryPage() {
  const grid = document.getElementById('partsGrid');
  const categoryAttr = grid ? grid.dataset.category : null;
  if (!grid || !categoryAttr) return;

  const filtered = allParts.filter(p => normalize(p.category) === normalize(categoryAttr));

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="state-msg">No hay repuestos en esta categoría aún. ¡Pronto añadiremos más!</p>';
    return;
  }

  grid.innerHTML = filtered.map(part => `
    <article class="part-card">
      <h3 class="part-card__name">${part.name}</h3>
      <p class="part-card__sku">SKU: ${part.sku}</p>
      <p class="part-card__compat">Compatible: ${part.compatible.join(', ')}</p>
      <div class="part-card__equiv">
        ${part.equivalents.map(eq => `<span class="equiv-tag">${eq}</span>`).join('')}
      </div>
      ${part.notes ? `<p class="part-card__notes">${part.notes}</p>` : ''}
    </article>
  `).join('');
}

// ── Init ────────────────────────────────────────

document.addEventListener('DOMContentLoaded', async () => {
  initMobileMenu();
  allParts = await loadParts();
  initSearch();
  initCategoryPage();
});

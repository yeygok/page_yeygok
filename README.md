# page_yeygok 
página en html, css y js
# iComer — Especificación del proyecto (Portfolio)

# SymParts — Especificación del proyecto

Objetivo
- Construir un sitio estático que permita buscar repuestos compatibles para motos SYM (y homologaciones conocidas) a partir de los datos que tenéis en un PDF del grupo. El objetivo es mostrar buenas prácticas (SEO, accesibilidad, performance) y desplegarlo en GitHub Pages.

Casos de uso principales
- Buscar por referencia o por parte (ej. "kit de arrastre", "bujía", "ref XYZ").
- Ver detalles de la pieza: imágenes, referencias alternativas/homologadas, compatibilidad por modelo/año.
- Filtrar por categoría y/o modelo de moto.
- Enlaces para descarga de PDF original y contacto del grupo.

Fuentes de datos y estrategia
- Origen: grupo de whatt y PDF con listados de piezas y homologaciones.
- Conversión a datos: convertir el PDF a JSON/CSV (herramientas sugeridas: `tabula`, `pdfplumber`, `camelot` o export manual). Guardar resultado en `data/parts.json`.
- Estructura recomendada `parts.json` (ejemplo):
  {
    "id": "PART-001",
    "name": "Filtro de aceite",
    "sku": "XYZ-123",
    "compatible": ["SYM NHX 190 2020", "SYM Otra 2019"],
    "equivalents": ["OEM-456", "REF-789"],
    "category": "Filtrado",
    "price": null,
    "images": ["/assets/images/part-001.jpg"],
    "notes": "Homologado por...",
    "source_pdf_page": 12
  }

Búsqueda y UX
- Implementación cliente: búsqueda local en `parts.json` (cargar con `fetch`), con opción de usar Fuse.js para fuzzy search.
- Paginación o lazy-load para listados grandes.
- Resultados mostrar: título, sku, compatibilidades principales y enlaces "ver detalles".
- Detalle: modal o página estática (`product-id.html`) — para SEO, preferir páginas estáticas generadas si hay tiempo.

Accesibilidad y SEO
- Cada producto tendrá metadatos: `title`, `meta description`, `canonical` y JSON‑LD `Product` con `offers` si procede.
- `aria-*` en controles; suficiente contraste en UI; foco visible.
- Optimizar imágenes (`srcset`, `loading="lazy"`) y usar `width/height` para evitar layout shift.

Estrategias de despliegue (GitHub Pages)
- Opción A (rápida): sitio estático en la carpeta `docs/` y publicar desde `main` → `docs/` (GitHub Pages). Ideal si no necesitas rama separada.
- Opción B: `gh-pages` branch usando `gh-pages` npm package (útil si hay build step).

Comandos mínimos para publicar (ejemplo sin build, usando `docs/`):
```bash
# en tu repo local
git add .
git commit -m "feat(symparts): add scaffold"
git push origin main
# luego en GitHub: Repo Settings → Pages → Source: main /docs
```

Si usas build (por ejemplo con un bundler o generador estático):
```bash
npm run build # genera carpeta dist/ o docs/
# push según método elegido (gh-pages o main/docs)
```

Estructura de archivos sugerida
- page_yeygok/symparts/
  - index.html (buscador y listado)
  - product.html (plantilla de detalle opcional)
  - docs/ (si publicas desde `main`)
  - src/
    - css/styles.css
    - js/search.js (carga `data/parts.json`, realiza búsqueda)
    - js/ui.js
  - data/parts.json
  - assets/images/
  - README.md (instrucciones de despliegue y cómo actualizar `parts.json` desde PDF)

Criterios de aceptación
- Búsqueda funcional por texto y SKU.
- Detalle de pieza accesible y legible.
- Páginas indexables (si eliges generar páginas estáticas) o JSON‑LD claro para productos.
- Despliegue en GitHub Pages y URL pública funcionando.

Sprints iniciales (pequeños pasos)
1. Convertir y preparar `data/parts.json` (puedes empezar manualmente con 20 piezas como muestra).
2. Scaffold estático: `index.html`, `src/css/styles.css`, `src/js/search.js`, `data/parts.json`.
3. Implementar búsqueda simple y mostrar resultados.
4. Añadir detalle modal y JSON‑LD básico.
5. Preparar deploy en GitHub Pages (usar `docs/` o `gh-pages`).




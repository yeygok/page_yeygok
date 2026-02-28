# Proyecto 1 — Guía de estudio: HTML / CSS / JavaScript (Básico → Intermedio)

Objetivo
- Pulir fundamentos web para entrevistas y livecoding: DOM, eventos, manipulación de arrays/strings, asincronía básica y responsive design.

Duración sugerida
- 2–4 semanas (dependiendo de tiempo disponible). Dividir en días/semana con ejercicios prácticos.

Estructura de la guía
1. Fundamentos (HTML semántico, accesibilidad básica)
2. CSS (Box model, Flexbox, Grid, responsive)
3. JavaScript (tipos, funciones, DOM, eventos, fetch, promesas)
4. Proyectos y ejercicios prácticos (incrementales)
5. Preparación para livecoding (ejercicios cronometrados y técnicas)

Requisitos previos
- Editor (VSCode), navegador (Chrome/Firefox), terminal, Git.

Sección 1 — HTML
- Objetivos:
  - Estructurar páginas con etiquetas semánticas (`header`, `nav`, `main`, `article`, `section`, `footer`).
  - Formularios básicos y atributos importantes (`label`, `for`, `required`).
- Ejercicios:
  - Crear una landing page estática con secciones: hero, features, pricing, contacto.
  - Añadir meta tags y favicon.

Sección 2 — CSS
- Objetivos:
  - Dominar box model, display, posicionamiento relativo/absoluto.
  - Uso práctico de Flexbox y Grid para layouts responsivos.
  - Media queries y unidades relativas (`rem`, `%`, `vh/vw`).
- Ejercicios:
  - Maquetar la landing page responsiva (mobile-first).
  - Rehacer layout con Grid y con Flexbox (comparar soluciones).

Sección 3 — JavaScript (DOM + lógica)
- Objetivos:
  - Manipular nodos (querySelector, createElement, appendChild), manejar eventos.
  - Conceptos: closures, scope, this, hoisting, promesas/async-await.
  - Estructuras de datos y algoritmos básicos: arrays (map, filter, reduce), objetos.
- Ejercicios básicos:
  - Contador con incremento/decremento y persistencia en `localStorage`.
  - Validación simple de formularios y mensajes de error.

Sección 4 — Ejercicios incrementales (Proyecto 1 tasks)
- Task A — To‑Do List (mínimos aceptables):
  - Añadir tareas, marcar completadas, eliminar, filtrar (all/active/completed).
  - Guardar en `localStorage`.
  - Criterio de aceptación: estado persistente al recargar.
  - Stretch: ordenar por prioridad, edición inline.

- Task B — Calculadora básica (UI + lógica):
  - Operaciones + - * /, manejo de decimales y cadena de entrada.
  - Criterio: evitar errores al dividir por cero y manejar múltiples pulsaciones.

- Task C — Juego de memoria (intermedio):
  - Grid de cartas volteables, detectar pares, contador de movimientos, reinicio.
  - Criterio: detectar victoria y mostrar tiempo/movimientos.

- Task D — Mini app con fetch (API pública):
  - Consumir una API pública (p.ej. JSONPlaceholder), mostrar lista, detalle modal.
  - Manejar loading y errores.

Sección 5 — Livecoding prep
- Técnicas:
  - Hablar en voz alta: pensar en voz alta durante la solución.
  - Esbozar la estructura antes de codificar: archivos, funciones principales.
  - Escribir casos simples primero y luego refactorizar.
- Ejercicios para practicar cronometrados (15–30 min):
  - Implementar `debounce(fn, wait)` y `throttle(fn, wait)`.
  - Escribir una función que agrupe un array de objetos por una clave.
  - Implementar `deepClone(obj)` simple para objetos sin funciones.

Buenas prácticas y commits
- Commits pequeños y atómicos: `feat(todo): add addTask handler`, `fix(calc): handle divide by zero`.
- Estructura mínima de proyecto sugerida:
  - `index.html`
  - `src/styles.css`
  - `src/app.js`
  - `assets/`

Sugerencias de estudio diario (ejemplo 2 semanas)
- Semana 1: HTML + CSS (maquetar + responsive) + ejercicios To‑Do.
- Semana 2: JavaScript DOM + fetch + calculadora + memory game + livecoding drills.

Recursos recomendados
- MDN Web Docs — HTML/CSS/JS
- freeCodeCamp — ejercicios interactivos
- Frontend Mentor — desafíos de maquetado
- LeetCode / HackerRank — desafíos algorítmicos (práctica diaria)

Aceptación para entrevistas
- Ser capaz de reconstruir la To‑Do en 30–45 minutos con explicación.
- Resolver un reto DOM + lógica en 20 minutos: documentar pasos y cubrir edge cases.

Próximos pasos que puedo hacer por ti
- Generar el scaffold inicial del Proyecto 1 (archivos base + ejemplo To‑Do).
- Proporcionar ejercicios cronometrados y tests (si quieres practicar livecoding).

---
Guía creada para trabajar en pasos incrementales y preparar entrevistas. Si quieres, genero ahora el scaffold del Proyecto 1 con un ejemplo funcional de To‑Do y commits sugeridos.
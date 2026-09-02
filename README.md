# Parafarmacia M. José Granero — El Genovés (Valencia)

Proyecto clonado a partir de la plantilla reutilizable de negocio local
(Next.js + TypeScript + Tailwind CSS v4). Ver el proyecto plantilla en
`../mi-primera-web` para referencia de arquitectura.

## Estado

Contenido real ya cargado en `app/business.ts`: nombre (del logo:
"Parafarmacia M. José Granero"), dirección, teléfono, WhatsApp, email,
horario y servicios (parafarmacia, cestas para bebé, Loterías y Apuestas
del Estado) — todo proporcionado por la clienta, nada inventado.

Fotos reales en `public/images/` (seleccionadas de las que envió, sin
usar ninguna en la que aparezcan personas identificables, por privacidad):
`hero.jpg`, `fachada.jpg`, `interior.jpg`, `dermocosmetica.jpg`,
`bebes.jpg`. También está `logo-original.jpg` (el archivo tal cual, sin
recortar — no se usa todavía en la web).

La paleta de marca (`--brand-*` en `app/globals.css`) sale del azul real
del logo (promedio de color extraído de `Logo tenda.jpg`: `#140f8d`), no
es un color inventado. Contraste verificado con WCAG AA.

La sección "Nuestro espacio" (antes "Proyectos"/"Marcas" en la plantilla
genérica) se repensó como galería del local, con 4 fotos reales
(fachada, interior, dermocosmética, bebé).

### Pendiente antes de publicar

- **Dominio real** para `business.seo.siteUrl` (ahora mismo un placeholder
  `.example` que nunca resuelve). De él dependen `metadataBase`, Open
  Graph, `robots.txt` y `sitemap.xml`.
- **Confirmar los textos "borrador"**: el titular del hero, la descripción,
  y los 3 pasos de "Cómo trabajamos" son una redacción mía a partir de los
  datos que teníamos — revisar con la clienta antes de publicar (están sin
  marcar en el código porque ya no son inventados de la nada, pero sí sin
  confirmar palabra por palabra).
- **Logo**: tengo el archivo original (`logo-original.jpg`, fondo azul
  marino cuadrado, formato tipo post de Instagram) pero no lo he metido en
  el Navbar — encajaría mal tal cual (recuadro de color pisando la cabecera
  blanca). Si quieres el logo en la cabecera, lo ideal es pedir una versión
  recortada/con fondo transparente, o que yo intente aislar el icono de la
  cruz + texto si me confirmas que quieres eso.
- **Fotos con personas**: había fotos con una persona detrás del mostrador
  y con un menor visible de fondo — no las usé por privacidad, sin
  confirmación expresa de que se puede publicar la cara de esa persona. Si
  quieres una foto de equipo/atención al cliente, hay que confirmarlo
  explícitamente (idealmente con una foto pensada para eso, no una de
  trabajo del día a día).

## Desarrollo

```bash
npm run dev     # servidor de desarrollo
npm run lint    # ESLint
npm run build   # build de producción
npm run start   # sirve el build de producción
```

Verificado con `npm run lint`, `npm run build` y una comprobación visual
en navegador real (Playwright) en escritorio y móvil.

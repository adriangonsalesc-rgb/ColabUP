# ColabUp — Startup & Networking Platform

Plataforma de networking, colaboración y empleabilidad para estudiantes, egresados y emprendedores. Construida 100% con **HTML5, CSS3 y JavaScript ES6+** (sin frameworks), con autenticación y persistencia de datos simuladas mediante `localStorage`.

## 🚀 Cómo ejecutar el proyecto

No requiere build ni dependencias. Solo necesitas un servidor estático local (recomendado para que las rutas relativas y `fetch`/storage funcionen igual que en producción):

**Opción 1 — VS Code (recomendado)**
1. Abre la carpeta del proyecto en Visual Studio Code.
2. Instala la extensión **Live Server**.
3. Clic derecho sobre `index.html` → "Open with Live Server".

**Opción 2 — Python**
```bash
python3 -m http.server 8080
```
Luego abre `http://localhost:8080`.

**Opción 3 — Node**
```bash
npx serve .
```

## 🔑 Cuenta demo

```
Correo:     demo@colabup.app
Contraseña: ColabUp2026!
```
También puedes registrar una cuenta nueva desde `register.html`; los usuarios se guardan en `localStorage`.

## 📁 Estructura del proyecto

```
ColabUp/
├── index.html              Landing page
├── login.html / register.html
├── dashboard.html           Panel principal del usuario autenticado
├── profile.html             Perfil, portafolio, experiencia, skills
├── projects.html            Listado, filtros, búsqueda y postulación a proyectos
├── groups.html               Grupos, chat grupal, tareas (kanban), archivos
├── messages.html              Chat 1 a 1 con estado en línea, emoji y adjuntos
├── notifications.html        Centro de notificaciones
├── settings.html              Cuenta, notificaciones, privacidad, apariencia
├── help.html                  Centro de ayuda + FAQ + formulario de soporte
├── faq.html / privacy.html / terms.html / sitemap.html   (páginas públicas)
├── 404.html
├── robots.txt / sitemap.xml
├── css/
│   ├── style.css        Design tokens + landing page
│   ├── dashboard.css    App shell compartido (sidebar, topbar, paneles)
│   ├── auth.css         Login / Registro
│   ├── profile.css / projects.css / groups.css / messages.css
│   ├── notifications.css / help.css / legal.css
│   └── chatbot.css      Widget flotante
├── js/
│   ├── auth.js          Simulación de autenticación (localStorage)
│   ├── dashboard.js      Sidebar, dropdowns de notificaciones/mensajes, ColabStore
│   ├── main.js           Interacciones del landing
│   ├── profile.js / projects.js / groups.js / messages.js
│   ├── notifications.js / settings.js / help.js
│   └── chatbot.js        Asistente virtual flotante (respuestas simuladas)
└── assets/images/logo.png
```

## ✨ Funcionalidades clave

- **Autenticación simulada** con `localStorage`/`sessionStorage`, sesión persistente y rutas protegidas.
- **Dashboard** con estadísticas, actividad reciente y recomendaciones dinámicas.
- **Perfil editable**: experiencia, educación, skills, certificaciones y portafolio.
- **Proyectos**: búsqueda, filtros por categoría/estado, favoritos, vista grilla/lista, modal de detalle y postulación, creación de nuevos proyectos.
- **Grupos**: creación, chat grupal persistente, tablero de tareas, archivos y calendario.
- **Mensajes**: chat en tiempo real simulado, estado en línea, emojis, adjuntos.
- **Notificaciones**: centro completo + dropdown desde la barra superior, sincronizados en tiempo real.
- **Configuración**: cuenta, notificaciones, privacidad y apariencia con toggles persistentes.
- **Chatbot flotante** con respuestas simuladas a preguntas frecuentes.
- **Accesibilidad**: foco visible, roles ARIA, navegación por teclado, contraste AA.
- **Responsive**: optimizado para móvil, tablet, laptop, desktop y 4K.

## 🎨 Paleta de colores

| Token | Valor |
|---|---|
| `--color-navy` | `#1E3A5F` |
| `--color-navy-dark` | `#142A47` |
| `--color-violet` | `#3B2F6B` |
| `--color-celeste` | `#4DA8DA` |
| `--color-green` | `#6FCF97` |
| `--color-orange` | `#F2994A` |

Tipografía: **Plus Jakarta Sans** (display) + **Inter** (cuerpo). Iconografía: Font Awesome 6.

## ⚠️ Notas

- Todos los datos (usuarios, proyectos, grupos, mensajes, notificaciones, preferencias) se almacenan localmente en el navegador — no hay backend real. Para producción, reemplaza `js/auth.js` y los módulos de datos por llamadas a tu API.
- Las imágenes de portada de proyectos/portafolio usan Unsplash como placeholder; reemplázalas por tus propios assets cuando tengas el backend listo.

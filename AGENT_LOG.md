# AGENT_LOG

## [Fecha: 2026-02-16] Inicio del Proyecto

**Task:** Inicialización del proyecto de portafolio y planificación.

**Decision:**
- Se opta por **React + Vite** como stack tecnológico.
- **Integración Drive:** Se selecciona la **Opción A (GitHub Actions)**.
  - La Service Account se autenticará mediante credenciales en GitHub Secrets.
  - El acceso a Drive se gestionará compartiendo la carpeta específica con el email de la Service Account.
- Se utiliza **TypeScript** y **TailwindCSS**.

**Status:** Estructura creada. Dependencias instaladas. Script de conexión a Drive (`scripts/fetch-drive.js`) listo.
**Bloqueo:** Resuelto. Conexión a Drive exitosa. Archivos obtenidos correctamente en `src/data/certificates.json`.

**Status:** Corrección crítica de estilos. Se eliminó `display: flex` del `body` en `index.css` que centraba la app y limitaba el ancho. Ahora ocupa el 100% real de la pantalla.
**Next Steps:** Subir a GitHub y desplegar.



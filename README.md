# Portafolio Profesional Integrado con Google Drive

Este proyecto es un portafolio personal construido con **React**, **Vite**, **TypeScript** y **TailwindCSS**.
Incluye una integración automatizada con **Google Drive** para mostrar tus certificados y cursos sin necesidad de actualizar el código manualmente.

## 🚀 Características

- **Diseño Premium:** Estilo moderno, oscuro y minimalista con animaciones suaves.
- **Integración Drive:** Los certificados se cargan desde una carpeta de Google Drive.
- **Automatización:** GitHub Actions actualiza la lista de certificados diariamente o en cada push.
- **Responsive:** Totalmente adaptado a móviles y escritorio.

## ⚙️ Configuración para Despliegue (GitHub Pages)

Para que la automatización funcione, necesitas configurar dos "Secretos" en tu repositorio de GitHub:

1.  Ve a `Settings` > `Secrets and variables` > `Actions`.
2.  Haz clic en `New repository secret`.

### Secretos Requeridos

| Nombre | Valor |
|--------|-------|
| `GDRIVE_CREDENTIALS` | El contenido completo de tu archivo `scripts/service-account.json`. Abre el archivo en tu PC, copia todo y pégalo. |
| `GDRIVE_FOLDER_ID` | El ID de la carpeta de Drive (ej. `1BVAPCw...`). Es el mismo que pusiste en el `.env`. |

## 🛠️ Desarrollo Local

1.  Instalar dependencias:
    ```bash
    npm install
    ```
2.  Configurar variables de entorno:
    - Crea un archivo `.env` basado en el ejemplo anterior.
    - Asegúrate de tener `scripts/service-account.json` (este archivo está ignorado por git por seguridad).
3.  Ejecutar servidor de desarrollo:
    ```bash
    npm run dev
    ```
4.  Probar sincronización de Drive:
    ```bash
    node scripts/fetch-drive.js
    ```

## 📦 Despliegue Manual

El despliegue es automático al hacer push a `main`. Si quieres forzar una actualización de certificados:
1.  Ve a la pestaña `Actions` en GitHub.
2.  Selecciona el workflow "Deploy to GitHub Pages".
3.  Haz clic en "Run workflow".

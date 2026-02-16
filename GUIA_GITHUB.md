# Guía de Publicación en GitHub Pages

Sigue estos pasos para subir tu proyecto y activar la página web.

## Paso 1: Preparar el Repositorio en GitHub

1.  Inicia sesión en [GitHub](https://github.com).
2.  Crea un **Nuevo Repositorio** (botón verde "New").
3.  Nombre: `portfolio` (o el que gustes).
4.  Público o Privado: **Público** (recomendado para Pages gratuito) o Privado.
5.  **NO** inicialices con README, .gitignore ni License (ya los tenemos).
6.  Haz clic en "Create repository".

## Paso 2: Subir tu Código (Desde tu PC)

Abre una terminal en la carpeta de tu proyecto (`C:\Users\PC-USER\Desktop\Presentation`) y ejecuta:

```bash
# 1. Inicializar git (si no lo has hecho)
git init

# 2. Agregar todos los archivos
git add .

# 3. Crear el primer commit
git commit -m "Initial commit: Proyecto Portafolio React"

# 4. Conectar con GitHub (reemplaza TU_USUARIO y TU_REPO)
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git

# 5. Cambiar nombre de rama a main
git branch -M main

# 6. Subir código
git push -u origin main
```

## Paso 3: Configurar Secretos (Para Automatización)

Para que se actualicen los certificados desde Drive, necesitas configurar los secretos:

1.  En tu repositorio en GitHub, ve a **Settings** > **Secrets and variables** > **Actions**.
2.  Crea un **New repository secret**:
    *   Nombre: `GDRIVE_CREDENTIALS`
    *   Valor: (Copia y pega todo el contenido de `scripts/service-account.json` de tu PC)
3.  Crea otro **New repository secret**:
    *   Nombre: `GDRIVE_FOLDER_ID`
    *   Valor: `1BVAPCwMnzz5cdWw3eKpewk1Eo9iveLpI`

## Paso 4: Activar GitHub Pages

El "workflow" que configuramos (`.github/workflows/deploy.yml`) se encargará de todo, pero necesitas verificar una cosa:

1.  Ve a la pestaña **Actions** en tu repositorio.
2.  Deberías ver un workflow corriendo llamado "Deploy to GitHub Pages".
3.  Si termina en verde (Success) ✅:
    *   Ve a **Settings** > **Pages**.
    *   En "Branch", asegúrate de que esté seleccionado `gh-pages` (el bot lo habrá creado).
    *   Guarda los cambios si hace falta.

¡Listo! GitHub te mostrará la URL de tu página (ej. `https://tu-usuario.github.io/portfolio/`).

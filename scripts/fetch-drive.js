
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

// Configuración
const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];
const CREDENTIALS_PATH = path.join(process.cwd(), 'scripts', 'service-account.json');
const OUTPUT_FILE = path.join(process.cwd(), 'src', 'data', 'certificates.json');
// ID de la carpeta compartido por el usuario. Si no existe en ENV, usar un valor dummy o fallar.
const FOLDER_ID = process.env.GDRIVE_FOLDER_ID;

async function fetchCertificates() {
    console.log('🚀 Iniciando sincronización con Google Drive...');

    if (!fs.existsSync(CREDENTIALS_PATH)) {
        console.error(`❌ Error: No se encontró el archivo de credenciales en ${CREDENTIALS_PATH}`);
        process.exit(1);
    }

    if (!FOLDER_ID) {
        console.error('❌ Error: No se ha definido GDRIVE_FOLDER_ID en el archivo .env');
        process.exit(1);
    }

    const auth = new google.auth.GoogleAuth({
        keyFile: CREDENTIALS_PATH,
        scopes: SCOPES,
    });

    const drive = google.drive({ version: 'v3', auth });

    try {
        console.log(`📂 Buscando archivos en la carpeta ID: ${FOLDER_ID}...`);

        const res = await drive.files.list({
            q: `'${FOLDER_ID}' in parents and trashed = false`,
            fields: 'files(id, name, mimeType, webViewLink, webContentLink, thumbnailLink, createdTime)',
            orderBy: 'createdTime desc',
            pageSize: 100,
        });

        const files = res.data.files || [];

        if (files.length === 0) {
            console.log('⚠️ No se encontraron archivos en la carpeta.');
        } else {
            console.log(`✅ Se encontraron ${files.length} archivos.`);
        }

        // Asegurar directorio de salida
        const dir = path.dirname(OUTPUT_FILE);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(files, null, 2));
        console.log(`💾 Datos guardados en ${OUTPUT_FILE}`);

    } catch (error) {
        console.error('❌ Error al obtener archivos de Drive:', error.message);
        if (error.code === 404) {
            console.error('   -> Posible causa: El ID de la carpeta es incorrecto o la Service Account no tiene permiso de acceso.');
        }
        process.exit(1);
    }
}

fetchCertificates();

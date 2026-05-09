const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// configuración segura de almacenamiento
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// filtro de archivos seguros
const fileFilter = (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/gif'];

    if (allowed.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Solo imágenes permitidas'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 } // 2MB
});

// formulario
router.get('/upload', (req, res) => {
    res.send(`
        <h2>Upload seguro</h2>
        <form method="POST" enctype="multipart/form-data" action="/upload">
            <input type="file" name="file"/>
            <button type="submit">Subir</button>
        </form>
    `);
});

// subida segura
router.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.send("Archivo no válido");
    }

    res.send(`Archivo subido correctamente: ${req.file.filename}`);
});

module.exports = router;
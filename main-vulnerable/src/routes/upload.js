const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'main-vulnerable/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// formulario
router.get('/upload', (req, res) => {
    res.send(`
        <h2>Subida de archivos (VULNERABLE)</h2>
        <form method="POST" enctype="multipart/form-data">
            <input type="file" name="file"/>
            <button type="submit">Subir</button>
        </form>
    `);
});

// subida vulnerable (SIN validación)
router.post('/upload', upload.single('file'), (req, res) => {
    res.send("Archivo subido: " + req.file.originalname);
});

module.exports = router;
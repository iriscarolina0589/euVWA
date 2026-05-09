const express = require('express');
const router = express.Router();
const os = require('os');

// información interna expuesta
router.get('/debug', (req, res) => {
    res.send(`
        <h2>DEBUG MODE (VULNERABLE)</h2>

        <p>Hostname: ${os.hostname()}</p>
        <p>Plataforma: ${os.platform()}</p>
        <p>Arquitectura: ${os.arch()}</p>
        <p>Memoria libre: ${os.freemem()}</p>
        <p>Directorio actual: ${process.cwd()}</p>
        <p>Node version: ${process.version}</p>
    `);
});

module.exports = router;
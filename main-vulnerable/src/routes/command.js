const express = require('express');
const router = express.Router();
const { exec } = require('child_process');

// formulario
router.get('/ping', (req, res) => {
    res.send(`
        <h2>Ping Tool</h2>
        <form method="POST">
            IP: <input name="ip"/>
            <button type="submit">Enviar</button>
        </form>
    `);
});

// VULNERABLE: ejecuta comando del sistema
router.post('/ping', (req, res) => {
    const ip = req.body.ip;

    exec(`ping ${ip}`, (error, stdout) => {
        res.send(`<pre>${stdout}</pre>`);
    });
});

module.exports = router;
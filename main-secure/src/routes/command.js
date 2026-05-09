const express = require('express');
const router = express.Router();

// validación de IP simple
const isValidIP = (ip) => {
    return /^(\d{1,3}\.){3}\d{1,3}$/.test(ip);
};

// formulario
router.get('/ping', (req, res) => {
    res.send(`
        <h2>Ping seguro</h2>
        <form method="GET" action="/ping-result">
            IP: <input name="ip"/>
            <button type="submit">Enviar</button>
        </form>
    `);
});

// versión segura (NO ejecuta comandos del sistema)
router.get('/ping-result', (req, res) => {
    const ip = req.query.ip;

    if (!ip) {
        return res.send("IP requerida");
    }

    // validación estricta
    if (!isValidIP(ip)) {
        return res.send("IP inválida");
    }

    // NO exec
    res.send(`
        <h3>Resultado simulado</h3>
        <p>Ping a ${ip}: OK</p>
    `);
});

module.exports = router;
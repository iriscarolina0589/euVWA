const express = require('express');
const router = express.Router();

// función de escape HTML
const escapeHTML = (str) => {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

// formulario
router.get('/xss', (req, res) => {
    res.send(`
        <h2>XSS SEGURO</h2>
        <form method="GET" action="/xss-result">
            Nombre: <input name="name"/>
            <button type="submit">Enviar</button>
        </form>
    `);
});

// respuesta segura
router.get('/xss-result', (req, res) => {
    let name = req.query.name || "";

    // sanitización
    name = escapeHTML(name);

    res.send(`<h3>Hola ${name}</h3>`);
});

module.exports = router;
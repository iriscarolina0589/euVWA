const express = require('express');
const router = express.Router();

// almacenamiento simulado
let comments = [];

// escape HTML
const escapeHTML = (str) => {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

// formulario
router.get('/comments', (req, res) => {
    let html = `
        <h2>Comentarios (SECURE)</h2>
        <form method="POST" action="/comments">
            <input name="message" placeholder="Escribe algo"/>
            <button type="submit">Enviar</button>
        </form>
        <hr>
    `;

    comments.forEach(c => {
        html += `<p>${c}</p>`;
    });

    res.send(html);
});

// guardar comentario seguro
router.post('/comments', (req, res) => {
    let message = req.body.message || "";

    // sanitización
    message = escapeHTML(message);

    comments.push(message);

    res.redirect('/comments');
});

module.exports = router;
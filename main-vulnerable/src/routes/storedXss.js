const express = require('express');
const router = express.Router();

// "base de datos" en memoria
let messages = [];

// mostrar formulario + mensajes
router.get('/comments', (req, res) => {
    res.send(`
        <h2>Comentarios</h2>

        <form method="POST">
            <input name="message" placeholder="Escribe algo"/>
            <button type="submit">Enviar</button>
        </form>

        <h3>Mensajes:</h3>
        ${messages.map(m => `<p>${m}</p>`).join('')}
    `);
});

// guardar mensaje (VULNERABLE)
router.post('/comments', (req, res) => {
    const message = req.body.message;

    messages.push(message);

    res.redirect('/comments');
});

module.exports = router;
const express = require('express');
const router = express.Router();

// base de datos simulada
const users = [
    { id: 1, username: "admin", email: "admin@test.com" },
    { id: 2, username: "maria", email: "maria@test.com" }
];

// formulario
router.get('/sql', (req, res) => {
    res.send(`
        <h2>Buscar usuario (SECURE)</h2>
        <form method="GET" action="/sql-result">
            ID: <input name="id"/>
            <button type="submit">Buscar</button>
        </form>
    `);
});

// versión segura
router.get('/sql-result', (req, res) => {
    const id = req.query.id;

    // validación estricta
    if (!id) {
        return res.send("ID requerido");
    }

    // solo números permitidos
    if (!/^\d+$/.test(id)) {
        return res.send("ID inválido");
    }

    const user = users.find(u => u.id === parseInt(id));

    if (!user) {
        return res.send("Usuario no encontrado");
    }

    res.send(`
        <h3>Resultado seguro</h3>
        <p>${user.username} - ${user.email}</p>
    `);
});

module.exports = router;
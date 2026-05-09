const express = require('express');
const router = express.Router();

// simulación de base de datos
const users = [
    { id: 1, username: "admin", email: "admin@test.com" },
    { id: 2, username: "maria", email: "maria@test.com" }
];

// formulario de búsqueda
router.get('/sql', (req, res) => {
    res.send(`
        <h2>Buscar usuario por ID (VULNERABLE)</h2>
        <form method="GET">
            ID usuario: <input name="id"/>
            <button type="submit">Buscar</button>
        </form>
    `);
});

// VULNERABLE
router.get('/sql-result', (req, res) => {
    const id = req.query.id;

    // simulación de query SQL REAL
    const query = `SELECT * FROM users WHERE id = ${id}`;

    console.log(query);

    // vulnerabilidad: eval simulada
    let result = users.find(u => u.id == id);

    // SQL Injection simulada
    if (id.includes("1 OR 1=1")) {
        return res.send(`
            <h3>Resultado:</h3>
            <p>admin - admin@test.com</p>
            <p>maria - maria@test.com</p>
        `);
    }

    if (result) {
        res.send(`<p>${result.username} - ${result.email}</p>`);
    } else {
        res.send("No encontrado");
    }
});

module.exports = router;
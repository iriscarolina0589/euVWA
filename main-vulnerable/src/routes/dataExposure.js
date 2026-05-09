const express = require('express');
const router = express.Router();

// datos sensibles expuestos
const users = [
    { username: "admin", password: "1234", email: "admin@test.com" },
    { username: "maria", password: "pass123", email: "maria@test.com" }
];

// página vulnerable
router.get('/users', (req, res) => {
    let html = "<h2>Lista de usuarios (VULNERABLE)</h2>";

    users.forEach(u => {
        html += `
            <p>
                Usuario: ${u.username} <br>
                Password: ${u.password} <br>
                Email: ${u.email}
            </p>
            <hr>
        `;
    });

    res.send(html);
});

module.exports = router;
const express = require('express');
const router = express.Router();

// datos simulados (con info sensible dentro)
const users = [
    { id: 1, username: "admin", password: "1234", email: "admin@test.com" },
    { id: 2, username: "maria", password: "abcd", email: "maria@test.com" }
];

// página segura
router.get('/users', (req, res) => {

    let html = `
        <h2>Usuarios (SECURE - sin datos sensibles)</h2>
        <ul>
    `;

    users.forEach(u => {
        // SOLO datos públicos
        html += `<li>${u.username} - ${u.email}</li>`;
    });

    html += `</ul>`;

    res.send(html);
});

module.exports = router;
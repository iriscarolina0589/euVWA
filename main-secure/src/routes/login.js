const express = require('express');
const router = express.Router();

// usuarios simulados
const user = {
    username: "admin",
    password: "1234"
};

router.get('/login', (req, res) => {
    res.send(`
        <h2>Login SECURE</h2>
        <form method="POST">
            Usuario: <input name="username"/><br/>
            Password: <input name="password"/><br/>
            <button type="submit">Login</button>
        </form>
    `);
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // validación fuerte
    if (!username || !password) {
        return res.send("Campos obligatorios");
    }

    // comparación segura
    if (username === user.username && password === user.password) {
        return res.send("Login correcto (SECURE)");
    }

    res.send("Credenciales incorrectas");
});

module.exports = router;
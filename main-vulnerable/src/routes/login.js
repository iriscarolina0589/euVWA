const express = require('express');
const router = express.Router();

// usuario falso
const user = {
    username: "admin",
    password: "1234"
};

// formulario login
router.get('/login', (req, res) => {
    res.send(`
        <h2>Login Vulnerable</h2>
        <form method="POST">
            Usuario: <input name="username"/><br/>
            Password: <input name="password"/><br/>
            <button type="submit">Login</button>
        </form>
    `);
});

// login vulnerable
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (
    username === user.username &&
    (password === user.password || password.includes("' OR '1'='1"))
) {
        res.send("Login correcto");
    } else {
        res.send("Login incorrecto");
    }
});

module.exports = router;
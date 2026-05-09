const express = require('express');
const router = express.Router();

// XSS reflejado (vulnerable)
router.get('/xss', (req, res) => {
    const name = req.query.name;

    res.send(`
        <h2>Hola ${name}</h2>
        <form>
            <input name="name" placeholder="Iris"/>
            <button type="submit">Enviar</button>
        </form>
    `);
});

module.exports = router;
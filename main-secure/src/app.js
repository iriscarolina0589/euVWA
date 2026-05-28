const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Seguridad básica
app.disable('x-powered-by');
app.use(bodyParser.urlencoded({ extended: true }));

// RUTAS
const loginRoutes = require('./routes/login');
const xssRoutes = require('./routes/xss');
const storedXssRoutes = require('./routes/storedXss');
const commandRoutes = require('./routes/command');
const uploadRoutes = require('./routes/upload');
const sqlRoutes = require('./routes/sql');
const sensitiveRoutes = require('./routes/sensitive');

app.use('/', loginRoutes);
app.use('/', xssRoutes);
app.use('/', storedXssRoutes);
app.use('/', commandRoutes);
app.use('/', uploadRoutes);
app.use('/', sqlRoutes);
app.use('/', sensitiveRoutes);

// HOME
app.get('/', (req, res) => {
    res.send('euVWA SECURE funcionando');
});


// 404 HANDLER 
app.use((req, res) => {
    res.status(404).send("Página no encontrada");
});


// ERROR HANDLER
app.use((err, req, res) => {
    console.error(err.message); // solo consola (backend)

    res.status(500).send("Algo salió mal. Intenta más tarde.");
});


//SERVIDOR
app.listen(3000, () => {
    console.log('Servidor SECURE en http://localhost:3000');
});
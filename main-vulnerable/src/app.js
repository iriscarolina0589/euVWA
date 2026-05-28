const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// rutas
const loginRoutes = require('./routes/login');
const xssRoutes = require('./routes/xss');
const storedXssRoutes = require('./routes/storedXss');
const commandRoutes = require('./routes/command');
const uploadRoutes = require('./routes/upload');
const sqlRoutes = require('./routes/sqlInjection');
const dataRoutes = require('./routes/dataExposure');
const misconfigRoutes = require('./routes/misconfig');

// montar rutas
app.use('/', loginRoutes);
app.use('/', xssRoutes);
app.use('/', storedXssRoutes);
app.use('/', commandRoutes);
app.use('/', uploadRoutes);
app.use('/', sqlRoutes);
app.use('/', dataRoutes);
app.use('/', misconfigRoutes);

// ruta principal
app.get('/', (req, res) => {
    res.send('euVWA vulnerable funcionando');
});

app.listen(3000, () => {
    console.log('Servidor vulnerable en http://localhost:3000');
});// trigger vulnerable pipeline

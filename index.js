const express = require('express');
const morgan = require('morgan');
const app = express();

// Requiriendo Rutas
const routes = require('./routes');
const routesApi = require('./routes-api.js');

// Settings
app.set('appName', 'Mi Primer Server');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('combined'));

// Routes
app.use(routes);
app.use('/api', routesApi);

app.listen(3000, () => {
    console.log('Servidor respondiendo en el puerto 3000');
    console.log('Nombre de la App', app.get('appName'));
});
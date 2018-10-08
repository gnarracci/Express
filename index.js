const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('Hello World');
});

app.listen(3000, () => {
    console.log('Servidor respondiendo en el puerto 3000');
});
const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/aliments', routesHandler);

const port = 3000; // port du backend

app.listen(port, () => {
    console.log('Serveur démarré au port ' + port);
});
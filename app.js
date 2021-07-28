let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://testUser:pYeVS3UoRmkAi1pf@cluster0.di9rh.mongodb.net/Beelab-be?retryWrites=true&w=majority"
);

mongoose.set("debug", true);

require("./models/User");
require('./config/passport');

// Objeto global de la app
let app = express();

// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/v1', require('./routes'));

// Manejando los errores 404
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Iniciando el servidor...
let server = app.listen(process.env.PORT || 3000, function () {
    console.log('Escuchando en el puerto ' + server.address().port);
});

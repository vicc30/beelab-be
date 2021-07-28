let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();
const mongoose = require('mongoose');

// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
    "mongodb+srv://testUser:pYeVS3UoRmkAi1pf@cluster0.di9rh.mongodb.net/Beelab-be?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).catch(error=>console.log(error));

let isProduction = process.env.NODE_ENV === 'production';

// mongoose.connect(
//     process.env.MONGODB_URI, // obtiene la url de conexión desde las variables de entorno
//     { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
// ).catch(error=>console.log(error));

const errorhandler = require('errorhandler')
if (!isProduction) {
    mongoose.set('debug', true)
    app.use(errorhandler())
    // imprimirá los errores en development
    app.use(function (err, req, res, next) {
        console.log(err.stack);
        res.status(err.status || 500);
        res.json({
            'errors': {
                message: err.message,
                error: err
            }
        })
    })
}

require("./models/User");
require('./config/passport');

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

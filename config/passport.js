const passport = require('passport');                       //Importando passport, middleware para autenticación.
const LocalStrategy = require('passport-local').Strategy;   //Importando estrategia autenticación. --> passport-local
const mongoose = require('mongoose');
const User = mongoose.model('User');

passport.use(new LocalStrategy({                            //Configurando elementos utilizados para habilitar sesión.
    usernameField: 'userName',
    passwordField: 'password'
}, function (userName, password, done) {
    User.findOne({ userName: userName }).then(function (user) {
        if (!user || !user.validarPassword(password)) {
            return done(null, false, { errors: { 'usuario o contraseña': 'equivocado(a)' } });
        }
        return done(null, user);
    }).catch(done);
}));

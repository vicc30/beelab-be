const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../config').secret;
 
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "no puede estar vacío"],
    match: [/^[a-zA-Z0-9]+$/, "Debe contener solo simbolos alfanumericos"],
    index: true,
  },
  firstname: {
    type: String,
    required: [true, "Se debe proporcionar firstName"],
    match: [/^[a-zA-Z]+$/, "Debe contener solo caracteres"],
  },
  lastname: {
    type: String,
    required: [true, "Se debe proporcionar lastName"],
    match: [/^[a-zA-Z]+$/, "Debe contener solo caracteres alfanumericos"],
  },
  email: {
    type: String,
    required: [true, "Se debe proporcionar un email"],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Debe contener solo caracteres validos"],
    index: true,
  },
  phone: {
    type: String,
    required: [true, "Se debe proporcionar phone"],
    match: [/^[0-9]+$/, "Solo debe incluir numeros"],
  },
  notifications: Boolean,
  avatar: String,
  deleted: Boolean,
  hash: String, //este campo se utilizará para la sesión
  salt: String, //este campo se utilizará para la sesión
}, { timestamps: true });

UserSchema.plugin(uniqueValidator, { message: "Ya existe" });

UserSchema.methods.createPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex"); // generando una "sal" random para cada usuario
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex"); // generando un hash utilizando la sal
};

/**
 * Recibe el password, genera y compara el has con el de la base de datos
 */
UserSchema.methods.validatePassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
};

UserSchema.methods.generateJWT = function () {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60); // 60 días antes de expirar

  return jwt.sign({
    id: this._id,
    userName: this.userName,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
};

/**
 * Devuelve la representación de un usuario después de autenticar
 */
UserSchema.methods.toAuthJSON = function () {
  return {
    userName: this.userName,
    email: this.email,
    token: this.generateJWT()
  };
};

/**
* Devuelve la representación de un usuario, sólo datos públicos
*/
UserSchema.methods.publicData = function () {
  return {
    id: this.id,
    userName: this.userName,
    email: this.email,
    phone: this.phone,
    firstname: this.firstname,
    lastname: this.lastname,
    avatar: this.avatar,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  };
};

mongoose.model("User", UserSchema);

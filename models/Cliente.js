const mongoose = require('mongoose');

// el modelo que hacemos es el que vamos a montar en postman

const clienteSchema = mongoose.Schema({

    nombre:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        require: true
    },
    documento: {
        type: Number,
        require: true
    },
    correo:{
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        require: true
    },
    direccion:{
        type: String,
        required: true
    },



}, {versionkey:false})

module.exports = mongoose.model('Cliente',clienteSchema);

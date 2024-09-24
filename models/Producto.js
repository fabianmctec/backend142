const mongoose = require('mongoose');

// el modelo que hacemos es el que vamos a montar en postman

const productoSchema = mongoose.Schema({

    nombre:{
        type: String,
        required: true
    },
    valor:{
        type: Number,
        require: true
    },
    vigente:{
        type: String,
        require: false
    },
    linea:{
        type: String,
        require: false
    },



}, {versionkey:false})

module.exports = mongoose.model('Producto' ,productoSchema);

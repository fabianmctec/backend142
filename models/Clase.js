const mongoose = require('mongoose');

// el modelo que hacemos es el que vamos a montar en postman

const claseSchema = mongoose.Schema({

    nombre:{
        type: String,
        required: true
    },
    nivel:{
        type: String,
        require: true
    },
    grado: {type:String,
        require:true
    },
    dia: {
        type: String,
        require: true
    },
    hora: {
        type: String,
        require: true
    },
    enExterior:{
        type: Boolean,
        require:true
    },
    salon:{
        type: String,
        required: false
    },
    textoReferencia: {
        type: String,
        require: false
    },
}, {versionkey:false})

module.exports = mongoose.model('Clase',claseSchema);

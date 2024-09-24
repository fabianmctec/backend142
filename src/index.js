const express = require("express");
const conectarBD = require('../configdb/db');
const cors = require('cors')


const app = express();
// montar puerto
// al probar el back end
// puerto e 5000
const puerto = process.env.PORT || 5001;

//llamamos a nuestra funcion conectarBD
conectarBD();
app.use(cors());
app.use(express.json());

//Rutas del proyecto

app.use('/api/clientes', require('../routes/clientesRutas'));
app.use('/api/productos', require('../routes/productosRutas'));
app.use('/api/clases', require('../routes/clasesRutas'));


// crea ruta desde la WEB

app.get('/',(req, res)=>{
    res.send("Bienvenidos estamos desde el navegador");
})

// ruta propia

app.listen(puerto,() => console.log("Estamos conectados desde el servidor",puerto));

// comando para iniciar el servidor:
//npm run start
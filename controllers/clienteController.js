// con el nombre del modelo se enlaza 
const Cliente = require('../models/Cliente');

//funcion agregar clientes 

exports.agregarClientes = async(req, res) => {
    try{
        let clientes;
        clientes = new Cliente(req.body)
        await clientes.save();
        res.json(clientes);

    } catch (error){
        console.log(error)
        res.status(500).send('hubo un error al agregar clientes')

    }

}

// funcion buscar clientes

exports.mostrarClientes = async (req, res) => {
try{

    const clientes = await Cliente.find();
    res.json(clientes);

} catch(error){
    console.log(error)
    res.status(500).send('hubo un error al mostrar los clientes')
}
}


// bscar un cliente

exports.BuscarCliente = async(req,res) => {
try{
    let clientes = await Cliente.findById(req.params.id);
    if (!clientes){
        res.status(404).send({msg:"el cliente no se encuentra por id"})
    }else{
        res.json(clientes);
    }

}
catch(error){
console.log(error)
res.status(500).send({msg:"hubo un error a l buscar un cliente"})

}


}

//  modificar clientes

exports.modificarClientes = async(req, res) =>{
    try{
        const clientes = await Cliente.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        if (!clientes){
            res.status(404).send({msg:"el cliente no encontrado"})
        }else{
            res.json(clientes);
        }
    
    } catch (error){


console.log(error)
res.status(500).send({msg:"hubo un error a l editar un cliente"})

    }
}

// funcion editar usando patch

exports.editarClientes = async(req, res) =>{
    try{
        const clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body,{new:true});
        if (!clientes){
            res.status(404).send({msg:"el cliente no existe"});

    }
    res.json(clientes);
 } catch (error){

        console.log(error)
        res.status(500).send({msg:"hubo un error a l editar un cliente"});

    }

}
// borrar cliente
//
exports.eliminarClientes = async(req,res) => {
    try{
        let clientes = await Cliente.findById({_id:  req.params.id});
        if (!clientes){
            res.status(404).send({msg:"al eliminar el cliente no se encuentra por id"});
            return
        }

        
        await Cliente.findOneAndDelete({_id: req.params.id})
    res.json({msg:"El cliente fue eliminado con exito"});

    }
    catch(error){
    console.log(error)
    res.status(500).send("hubo un error al buscar un cliente")
    
    }
}

// con el nombre del modelo se enlaza 
const Clase = require('../models/Clase');

//funcion agregar clases 

exports.agregarClases = async(req, res) => {
    try{
        let clases;
        clases = new Clase(req.body)
        await clases.save();
        res.json(clases);

    } catch (error){
        console.log(error)
        res.status(500).send('hubo un error al agregar clases')

    }

}

// funcion buscar clases

exports.mostrarClases = async (req, res) => {
try{

    const clases = await Clase.find();
    res.json(clases);

} catch(error){
    console.log(error)
    res.status(500).send('hubo un error al mostrar las clases')
}
}


// bscar un clase

exports.BuscarClase = async(req,res) => {
try{
    let clases = await Clase.findById(req.params.id);
    if (!clases){
        res.status(404).send({msg:"la clase no se encuentra por id"})
    }else{
        res.json(clases);
    }

}
catch(error){
console.log(error)
res.status(500).send({msg:"hubo un error al buscar una clase"})

}


}

//  modificar clases

exports.modificarClases = async(req, res) =>{
    try{
        const clases = await Clase.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        if (!clases){
            res.status(404).send({msg:"clase no encontrada"})
        }else{
            res.json(clases);
        }
    
    } catch (error){

console.log(error)
res.status(500).send({msg:"hubo un error al editar una clase"})
    }
}

// funcion editar usando patch
exports.editarClases = async(req, res) =>{
    try{
        const clases = await Clase.findByIdAndUpdate(req.params.id, req.body,{new:true});
        if (!clases){
            res.status(404).send({msg:"la clase no existe"});

    }
    res.json(clases);
 } catch (error){

        console.log(error)
        res.status(500).send({msg:"hubo un error al editar una clase"});

    }

}
// borrar clase
//
exports.eliminarClases = async(req,res) => {
    try{
        let clases = await Clase.findById({_id:  req.params.id});
        if (!clases){
            res.status(404).send({msg:"al eliminar el clase no se encuentra por id"});
            return
        }

        await Clase.findOneAndDelete({_id: req.params.id})
    res.json({msg:"La clase fue eliminada con exito"});

    }
    catch(error){
    console.log(error)
    res.status(500).send("hubo un error al buscar un clase")
    
    }
}

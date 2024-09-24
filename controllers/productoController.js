// con el nombre del modelo se enlaza 
const Producto = require('../models/Producto');

//funcion agregar productos 

exports.agregarProductos = async(req, res) => {
    try{
        let productos;
        productos = new Producto(req.body)
        await productos.save();
        res.json(productos);
        res.status(500).send('se agregó el registro')

    } catch (error){
        console.log(error)
        res.status(500).send('hubo un error al agregar productos')

    }

}


// funcion buscar productos

exports.mostrarProductos = async (req, res) => {
    try{
    
        const productos = await Producto.find();
        res.json(productos);
    
    } catch(error){
        console.log(error)
        res.status(500).send('hubo un error al mostrar los productos')
    }
    }
    
    
    // bscar un producto
    
    exports.BuscarProducto = async(req,res) => {
    try{
        let productos = await Producto.findById(req.params.id);
        if (!productos){
            res.status(404).send({msg:"el producto no se encuentra por id"})
        }else{
            res.json(productos);
        }
    
    }
    catch(error){
    console.log(error)
    res.status(500).send({msg:"hubo un error a l buscar un producto"})
    
    }
    
    
    }
    
    //  modificar productos
    
    exports.modificarProductos = async(req, res) =>{
        try{
            const productos = await Producto.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
            if (!productos){
                res.status(404).send({msg:"el producto no encontrado"})
            }else{
                res.json(productos);
            }
        
        } catch (error){
    
    
    console.log(error)
    res.status(500).send({msg:"hubo un error a l editar un producto"})
    
        }
    }
    
    // funcion editar usando patch
    
    exports.editarProductos = async(req, res) =>{
        try{
            const productos = await Producto.findByIdAndUpdate(req.params.id, req.body,{new:true});
            if (!productos){
                res.status(404).send({msg:"el producto no existe"});
    
        }
        res.json(productos);
     } catch (error){
    
            console.log(error)
            res.status(500).send({msg:"hubo un error a l editar un producto"});
    
        }
    
    }
    // borrar producto
//
exports.eliminarProductos = async(req,res) => {
    try{
        let productos = await Producto.findById({_id:  req.params.id});
        if (!productos){
            res.status(404).send({msg:"al eliminar el producto no se encuentra por id"});
            return
        }

        
        await Producto.findOneAndDelete({_id: req.params.id})
    res.json({msg:"El producto fue eliminado con exito"});

    }
    catch(error){
    console.log(error)
    res.status(500).send("hubo un error al buscar un producto")
    
    }
}

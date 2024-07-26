import { Testimonial } from "../models/Testimoniales.js";


export const guardarTestimonial = async(req,res) =>{
    
    const {nombre,correo,mensaje} = req.body

    const errores = [];
    console.log("Received data:", { nombre, correo, mensaje });
    if(nombre.trim() === ""){
        errores.push({mensaje: "El nombre no puede ir vacío"})
    }
    if(correo.trim() === ""){
        errores.push({mensaje:"El correo no puede ir vacío"})
    }
    if(mensaje.trim() === ""){
        errores.push({mensaje:"El mensaje no puede ir vacío"})
    }

    // tengo que pasarle los testimoniales existentes a la vista renderizada ya que al crear el programa
    // no se contempla que hay que pasar los testimoniales aqui para mostrarlos en la vista
    // sino sale undefined
    // leer los testimoniales para luego mandarlos a la vista
    const testimoniales = await Testimonial.findAll({
        attributes: ["id","nombre","correo","mensaje"]
    })
    if(errores.length > 0){
        console.log("Validation errors:", errores);
        res.render('testimoniales',{
            pagina :"Testimoniales",
            errores,
            correo,
            nombre,
            mensaje,
            testimoniales
        })

    }
    else {
        // Almacenar a la base de datos
        try {
            console.log("Attempting to save testimonial");
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })
            console.log("Testimonial saved successfully");
            res.redirect('/testimoniales');
        } catch (error) {
            console.error("Error saving testimonial:", error);
            res.render('testimoniales', {
                pagina: "Testimoniales",
                errores: [{ mensaje: "Hubo un error al guardar el testimonio. Inténtalo de nuevo." }],
                correo,
                nombre,
                mensaje
            });
        }
    }
}

export default{
    guardarTestimonial
}
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

    if(errores.length > 0){
        console.log("Validation errors:", errores);
        res.render('testimoniales',{
            pagina :"Testimoniales",
            errores,
            correo,
            nombre,
            mensaje
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
import { Testimonial } from "../models/Testimoniales.js";


export const guardarTestimonial = async(req,res) =>{
    
    const {nombre,correo,mensaje} = req.body

    const errores = [];

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
            await Testimonial.create({
                attributes:
                id,
                nombre,
                correo,
                mensaje
            })
            
        } catch (error) {
            
        }
    }
}

export default{
    guardarTestimonial
}
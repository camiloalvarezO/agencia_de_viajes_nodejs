
export const guardarTestimonial = (req,res) =>{
    
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

}

export default{
    guardarTestimonial
}
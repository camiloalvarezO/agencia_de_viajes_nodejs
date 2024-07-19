import {Viaje} from "../models/Viaje.js"


export const paginaInicio = (req,res) => {
    res.render('inicio',{
        "pagina" : "Inicio"
    })
}

export const paginaViajes = async (req,res,next) => {
    const viajes = await Viaje.findAll({
        attributes: ['id', 'titulo', 'precio', 'fecha_ida', 'fecha_vuelta', 'imagen', 'descripcion', 'disponibles', 'slug']  // Excluir 'createdAt' y 'updatedAt'
    });
    console.log(viajes); // todo esto vendría siendo un arreglo []
    res.render('viajes',{
        "pagina" : "Próximos Viajes",
        viajes, // recordar que esto es un arreglo []
    })
    return next()
}
export const paginaTestimoniales = (req,res) => {
    res.render('testimoniales',{
        "pagina" : "Testimoniales"
    })
}


export const paginaNosotros = (req,res) =>{
    res.render('nosotros',{
        "pagina": "Nosotros"
    })
}
export default {
    paginaInicio,
    paginaViajes,
    paginaTestimoniales,
    paginaNosotros
}
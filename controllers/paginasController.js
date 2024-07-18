import {Viajes} from "../models/Viaje.js"


export const paginaInicio = (req,res) => {
    res.render('inicio',{
        "pagina" : "Inicio"
    })
}

export const paginaViajes = async (req,res) => {
    const viaje = await Viajes.findAll()

    console.log(viaje);
    res.render('viajes',{
        "pagina" : "Viajes"
    })
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
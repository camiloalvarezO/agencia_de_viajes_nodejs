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
export const paginaDetalleViaje= async (req,res) =>{

    const {slug} = req.params // en este punto el clic va a tener el slug que viene de la bd, anteriormente
    // rellenado para cada viaje en su card
    //al hacer clic en el botón de más info, se usa el comodín
    try {
        const viaje = await Viaje.findOne({
            where : {
                slug: slug
            },
        })// encontrar donde el slug(comodin) sea "viaje-destino"
        console.log(viaje);
        res.render('viaje',{
        pagina: "Información Viaje",
        viaje
    })
    } catch (error) {
        console.log(error);
    }
    console.log(req.params);
}

export default {
    paginaInicio,
    paginaViajes,
    paginaTestimoniales,
    paginaNosotros,
    paginaDetalleViaje
}
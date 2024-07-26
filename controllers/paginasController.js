import Testimonial from "../models/Testimoniales.js";
import {Viaje} from "../models/Viaje.js"


export const paginaInicio = async(req,res) => {

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({ limit : 3}))
    promiseDB.push(Testimonial.findAll({limit:3}))
    try {
        const resultado = await Promise.all(promiseDB)
        // const viajes = await Viaje.findAll({ limit : 3})
        // const testimoniales = await Testimonial.findAll({limit:3})
        console.log(resultado);
        console.log(resultado[0]);
        console.log(resultado[1]);
        res.render('inicio',{
            "pagina" : "Inicio",
            "clase" : "home",
            viajes: resultado[0],
            testimoniales: resultado[1]
        })
    } catch (error) {
        console.log("error encontrando los 3 registros en la base de datos");
        console.log(error);
    }
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
export const paginaTestimoniales = async(req,res) => {

    try {
        const testimoniales = await Testimonial.findAll({
            attributes: ["id","nombre","correo","mensaje"]
        })
        console.log(testimoniales);
        res.render('testimoniales',{
            "pagina" : "Testimoniales",
            testimoniales
        })
    } catch (error) {
        console.log(error);
    }
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
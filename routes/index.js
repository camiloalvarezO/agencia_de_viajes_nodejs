import express from 'express';

const router = express.Router();

router.get('/',(req,res) => {
    res.render('inicio',{
        "pagina" : "Inicio"
    })
})

router.get('/viajes',(req,res) => {
    res.render('viajes',{
        "pagina" : "Viajes"
    })
})

router.get('/testimoniales',(req,res) => {
    res.render('testimoniales',{
        "pagina" : "Testimoniales"
    })
})
router.get('/nosotros', (req,res) =>{

    const viajes = 'viaje a san juan'
    // solo con colocar el nombre del archivo escaneará el que tenga el .pug
    res.render('nosotros',{ // recordar que esto aqui para mandar como segundo parametro es un objeto
        viajes,
        "pagina": "Nosotros"
    }) 
})
export default router;

import express from "express";
import router from "./routes/index.js"
import db from "./config/db.js";
import dotenv from "dotenv"
dotenv.config({path: "variables.env"})

const app = express();

//conexión a la base de datos mysql
db.authenticate()
    .then( () => console.log("base de datos conectada"))
    .catch( error => console.log("error en la conexión a la base de datos"))
    

// establecer public como carpeta publica para el usuario
// agregando la carpeta public como archivos estáticos de express

app.use( (req,res,next)=>{
    const year = new Date();

    const fechaActual = year.getFullYear();
    res.locals.fechaActual= fechaActual;
    res.locals.nombresitio= "agencia de viajes" 
    // res.locals.nuevaVariable = "nueva variable"
    // console.log(res.locals.nuevaVariable);
    // se puede colocar next sin return pero si se queda trabado ponerle return
    return next();
})
// agregar body parser para leer los datos de un formulario
app.use(express.urlencoded({extended:true}))


app.use(express.static('public'))
//habilitar pug
app.set('view engine','pug')
// use habilita que se hagan todos los que verbos de http y ese es use
app.use('/',router) 

// Asignar los puertos y el host

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;

app.listen( port,host, () =>{
    console.log(`ejecutandose en el puerto ${port}`);
    console.log(`ejecutandose en el host ${host}`);
})
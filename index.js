
import express from "express";
import router from "./routes/index.js"
const app = express();

const port = process.env.PORT || 4000;
// establecer public como carpeta publica para el usuario
// agregando la carpeta public como archivos estáticos de express
app.use(express.static('public'))
//habilitar pug
app.set('view engine','pug')

// use habilita que se hagan todos los que verbos de http y ese es use
app.use('/',router) 


app.listen( port, () =>{
    console.log(`ejecutandose en el puerto ${port}`);
})
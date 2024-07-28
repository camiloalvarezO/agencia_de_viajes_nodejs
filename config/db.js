import  Sequelize  from "sequelize";
import dotenv from "dotenv"
dotenv.config({path: "variables.env"})
console.log(process.env.DB_HOST);
console.log(process.env.DB_NOMBRE);
console.log(process.env.DB_USER); 
console.log(process.env.DB_PASS);  
console.log(process.env.DB_PORT); 
const db = new Sequelize(process.env.DB_NOMBRE,
  process.env.DB_USER,
  process.env.DB_PASS || "",
    {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  logging: false, // Desactiva el registro de consultas SQL
  define:{
    timestamp:false,
    createdAt: false,
        updatedAt: false
  },
  pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operationAliases: false

})

export default db;
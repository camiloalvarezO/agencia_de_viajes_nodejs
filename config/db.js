import  Sequelize  from "sequelize";


const db = new Sequelize('agenciaviajes','root','',{
  host: '127.0.0.1',
  port: '3306',
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
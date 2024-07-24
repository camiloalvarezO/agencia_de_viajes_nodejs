import Sequelize from "sequelize";
import db from "../config/db.js";


export const Testimonial = db.define('testimonios', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.TEXT
    }, 
    createdAt:{
        type: Sequelize.TEXT
    },
    updateAt:{
        type: Sequelize.TEXT
    },
    timestamps: false // Desactiva los timestamps
});

export default Testimonial;

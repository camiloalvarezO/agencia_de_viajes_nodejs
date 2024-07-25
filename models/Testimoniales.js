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
    timestamps: false, // Desactiva los timestamps
    createdAt: false,  // Evita la creación de createdAt
    updatedAt: false   // Evita la creación de updatedAt
});

export default Testimonial;

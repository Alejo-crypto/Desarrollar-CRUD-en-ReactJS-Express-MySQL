//Importación de conexion al db
import db from "../database/db.js";

//Importación de Sequelize
import { DataTypes } from "sequelize";

const BlogModel = db.define('blogs', {
    title: {type: DataTypes.STRING },  //definimos el tipo de campo
    content: {type: DataTypes.STRING }, // Agrega `allowNull: false` si es requerido
}, {
    timestamps: true // Sequelize agregará automáticamente `createdAt` y `updatedAt`*/
    /*timestamps: false  // Esto deshabilita `createdAt` y `updatedAt`*/
});

export default BlogModel;
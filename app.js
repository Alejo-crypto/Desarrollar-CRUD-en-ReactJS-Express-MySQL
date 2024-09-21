import express from 'express'; //esto es para que correctamente funcione junto con el " "type": "module", " en el "package.json"
import cors from 'cors';

//importación de la conexión DB
import db from "./database/db.js";

import blogRoutes from './routes/routes.js'; //importador de enrutador

const app = express();

app.use( cors());
app.use(express.json());
app.use('/blogs', blogRoutes);

try {
    await db.authenticate();
    console.log('Conexion Exitosamente a la base');
} catch (error) {
    console.log('Conexion Erronea de: ${error}');
}

//Mensaje que saldrá al ejecutarse
/*app.get('/', (req, res)=>{
    res.send('Hola a TODO el MUNDO');
})*/
//Mensaje que saldrá al ejecutarse

app.listen(8000, ()=>{
    console.log('Server arriba (UP) corriendo en http://localhost:8000/');
})
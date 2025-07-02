import app from './app.js';
import logger from  './config/logger.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    logger.info(`Servidor corriendo en http://localhost:${PORT}`);
})


import dotenv from 'dotenv';
import "reflect-metadata";
import app from "./app";
import AppDataSource from "./data-source";

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(
    port, 
    () => {
        console.log(`Servidor iniciado na porta ${port}`);

        AppDataSource
            .initialize()
            .then(() => console.log(`Banco conectado`))
            .catch(error => console.log(`error.message :>> ${error.message}`));
    }
);
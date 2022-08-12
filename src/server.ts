
import "reflect-metadata";
import app from "./app";
import AppDataSource from "./data-source";

const port = 3000;

app.listen(
    port, 
    () => {
        console.log(`Servidor ouvindo em http://localhost:${port}`)

        AppDataSource
            .initialize()
            .then(() => console.log(`Banco conectado`))
            .catch(error => console.log(`error.message :>> ${error.message}`))
    }
);
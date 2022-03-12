const { response } = require('express');
const express = require('express');

class Server {
     
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.routes()
    }

    routes(){
        this.app.get('/', (req, res = response) => {
            res.send('Hola Mundo')
        })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo por el puerto ${this.port}`)
        })
    }

}

module.exports = Server;
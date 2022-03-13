const express = require('express');
const cors = require('cors');

class Server {
     
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use( cors());
    }

    routes(){
        this.app.use('/api', require('../routes/ruta'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo por el puerto ${this.port}`)
        })
    }

}

module.exports = Server;
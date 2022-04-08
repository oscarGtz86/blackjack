const express = require('express');

class Server {
    constructor () {
        this.app = express();
        this.port = process.env.PORT;
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log(`Server started at port ${this.port}`);
        });
    }
}

module.exports = Server;
const express = require('express');
const app = express();
const cors = require('cors')
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const validator = require('express-validator');
const session = require('express-session');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const passport = require('passport');
const fileUpload = require('express-fileupload');
//const { config } = require('dotenv/types');

const port = process.env.PORT || config.app.port;;
module.exports = class Application {
    constructor() {
        this.setupExpress();
        this.setMongoConnection();
        this.setConfig();
        this.setRouters();
    }

    setupExpress() {
        const server = http.createServer(app);
        server.listen(port, () => console.log('Listening on port ' + port));
        //server.timeout=2000000;
        //server.keepAliveTimeout = 60000 * 2;

    }

    setMongoConnection() {
        mongoose.Promise = global.Promise;
        mongoose.connect(config.database.url);
    }

    /**
     * Express Config
     */
    setConfig() {

        app.use(express.static('public'));
        app.set('view engine', 'ejs');
        app.set('views', path.resolve('./resource/views'));

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(session({...config.session}));
        app.use(cookieParser('mysecretkey'));
        app.use(flash());


    }

    setRouters() {

      //app.use(cors()); // it enables all cors requests
      app.use(fileUpload({
        limits: { fileSize: 5000 * 1024 * 1024 },
        //debug:true
      }));

        app.use(require('app/routes/api'));
        app.use(require('app/routes/web'));
    }
}

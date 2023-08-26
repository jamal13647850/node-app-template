const express = require("express");
const app = express();
const http = require("http");
const port = process.env.PORT || 8754;
const path = require('path')

import { NotFoundError, ErrorHandler} from "./util/ErrorHandler";
module.exports = class Application {
  constructor() {
    this.setDB();
    this.setupExpress();
    this.setConfig();
    this.setStatic();
    this.setRouters();
  }

  setupExpress() {
    const server = http.createServer(app);
    server.listen(port, () => console.log("Listening on port " + port));
  }

  /**
   * Express Config
   */
  setConfig() {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
  }

  setRouters() {
    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.header("Cache-Control", "max-age=2592000000");
      next();
    });
    app.use(require('app/routes/api'));
    app.use(require("app/routes/web"));
   
    app.use(NotFoundError);
    app.use(ErrorHandler);
  }

  setDB() {
    require("app/config/mongo.config")
  }

  setStatic(){
    app.use('/static', express.static(path.join(__dirname, '../../public')))
    
  }
};

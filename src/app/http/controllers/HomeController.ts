const controller = require('app/http/controllers/controller');


class HomeController extends controller {

      async index(req, res) {

            res.send("Wellcome")


      }





}

module.exports = new HomeController();


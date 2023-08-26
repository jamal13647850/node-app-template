const express2 = require('express');
const router1 = express2.Router();

// Controllers
const HomeController1 = require('app/http/controllers/HomeController');


router1.get("/", HomeController1.index);

module.exports = router1;

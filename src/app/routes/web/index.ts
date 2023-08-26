
const express1 = require("express");
const router = express1.Router();


// Home Router
const homeRouter = require('app/routes/web/home');
router.use('/' , homeRouter);


module.exports = router;
import { Router } from 'express';
const HomeRouter = Router();

// Controllers
const HomeController = require('app/http/controllers/HomeController');


/**
 * @swagger
 * /:
 *  get:
 *      summary: index of routes 
 *      tags: [IndexPage]
 *      description : get all need data for index page
 *      responses:
 *          200:
 *              description: success
 *              schema: 
 *                  type: string
 *                  example : Index Page Store
 *          404: 
 *              description: not Found
 */
HomeRouter.get("/", HomeController.index);



module.exports = HomeRouter;

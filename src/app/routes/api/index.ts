
import { Router } from 'express';
const routerAPI = Router();


// insert Router

const HomeRouter = require('app/routes/api/Home.route');

routerAPI.use('/api/v1/' , HomeRouter);

module.exports = routerAPI;
export default routerAPI;
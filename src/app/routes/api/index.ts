
import { Router } from 'express';
const routerAPI = Router();


// insert Router
const CategoriesRouter = require('app/routes/api/Categories');
const ProductsRouter = require('app/routes/api/Products');
routerAPI.use('/api/v1/' , CategoriesRouter);
routerAPI.use('/api/v1/' , ProductsRouter);

module.exports = routerAPI;
export default routerAPI;
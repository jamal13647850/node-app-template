import { Router } from 'express';
const ProductsRouter = Router();

// Controllers
const ProductController = require('app/http/controllers/ProductController');


ProductsRouter.get("/products/:catid", ProductController.getProducts);
ProductsRouter.get("/product/:infotype/:pid", ProductController.getProductInfo);


module.exports = ProductsRouter;

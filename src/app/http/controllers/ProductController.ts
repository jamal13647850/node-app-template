import controller from "./controller";
import CategoryModel from "../models/categories.model";
import ProductModel from "../models/Products.model";

import mongoose, { model } from "mongoose";
const WC_CK = process.env.WC_CK;
const WC_CS = process.env.WC_CS;

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { generateCategories,convertImages } from "../../../bot/helpers/Functions";


let WooCommerce = new WooCommerceRestApi({
  url: "https://calindairy.com",
  consumerKey: WC_CK,
  consumerSecret: WC_CS,
  wpAPI: true,
  version: "wc/v3",
});

class ProductController extends controller {
  async getProducts(req, res) {
   try {
      const category=await CategoryModel.findOne({categoryId:req.params.catid})
      
      const products = await ProductModel.find({
        categories:{$in:[category._id]}
      })
      

      res.status(200).send({ data: products });

    } catch (error) {
     console.error(`Error fetching products: ${error}`);
     res.status(500).send({ error: 'An error occurred while fetching products' });
    }
  }

  async getProductInfo(req,res){
    try {
      const infoType=req.params.infotype
      const pid=req.params.pid
      
      const products = await ProductModel.findOne({
        _id:new mongoose.Types.ObjectId(pid)
      })
      
      let result=null;
      switch(infoType){
        case 'image':
          result=products.images;
          break;
        case 'video':
          result=products.videos;
          break;
        case 'recipies':
          result=products.recipies;
          break;
        case 'desc':
          result=products.description;
          break;
      }
      console.log(result);
      res.status(200).send({ data: result});

    } catch (error) {
     console.error(`Error fetching products: ${error}`);
     res.status(500).send({ error: 'An error occurred while fetching products' });
    }
  }

  
  
}

module.exports = new ProductController();

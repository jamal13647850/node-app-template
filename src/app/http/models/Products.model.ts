import { ObjectId, Schema, model } from 'mongoose';
import CategoryModel from './categories.model';

interface IProduct{
    productID:number,
    name:string,
    permalink:string,
    description:string,
    short_description:string,
    categories: { _id: ObjectId }[],
    images:[{
        src:string,
        alt:string
    }],
    videos:[{
        src:string,
        desc:string
    }],
    recipies:[{
        title:string,
        url:string
    }]

}


const productSchema = new Schema<IProduct>({
    productID: { type: Number, required: true,unique: true },
    name: { type: String, required: true },
    permalink: { type: String, required: true,unique: true },
    description: { type: String },
    short_description: { type: String },
    categories:[{ type: Schema.Types.ObjectId, ref: 'Category' }],
    images:[{
        src:{ type: String, required: true},
        alt:{ type: String }
    }],
    videos:[{
        src:{ type: String, required: true},
        desc:{ type: String }
    }],
    recipies:[{
        title:{ type: String, required: true },
        url:{ type: String, required: true }
    }]
  
   
   },{
     timestamps:true
   });
 
 
   const ProductModel = model<IProduct>('product',productSchema); 
 
   export default ProductModel;
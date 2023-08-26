import { Schema, model } from 'mongoose';



interface ICategory {
    categoryId:number;
    name: string;
    parent: number;
    description: string;
    image: string;
  
    
  }
  
  // 2. Create a Schema corresponding to the document interface.
  const categorySchema = new Schema<ICategory>({
   categoryId: { type: Number, required: true,unique: true },
   name: { type: String, required: true },
   parent: { type: Number, required: true },
   description: { type: String, required: false },
   image: { type: String, required: false },
  },{
    timestamps:true
  });


  const CategoryModel = model<ICategory>('category',categorySchema); 

  export default CategoryModel;
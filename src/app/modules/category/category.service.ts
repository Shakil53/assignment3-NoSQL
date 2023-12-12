import { TCategory } from "./category.interface";
import { CategoryModel } from "./category.model";



const createCategoryIntoDB = async (category: TCategory) => {
    const result = await CategoryModel.create(category); 
      
    return result;

    };

//get all courses
const getAllCategoriesFromDB = async () => {
    const result = await CategoryModel.find()
    
        return result;
      };
    
export const CategoryServices = {createCategoryIntoDB,getAllCategoriesFromDB}
        
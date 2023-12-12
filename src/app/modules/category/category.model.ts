import { Schema, model } from 'mongoose';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const categorySchema = new Schema({
    name: {
      type: String,
      unique: true,
      required: true
    }
    });

    categorySchema.pre('save', async function (next) {
    const isCategoryExist = await CategoryModel.findOne({
      title: this.name,
    });
  
    if (isCategoryExist) {
      throw new AppError(
        httpStatus.NOT_FOUND,
        'This Category is already exist!',
      );
    }
  
    next();
  });
  
  //create model 
 export const CategoryModel = model('Category', categorySchema);
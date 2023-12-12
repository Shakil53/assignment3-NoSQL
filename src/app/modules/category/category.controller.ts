import httpStatus from "http-status";
import catchAsync from "../../utility/catchAsync";
import sendResponse from "../../utility/sendResponse";
import { CategoryServices } from "./category.service";



//creating Category
const createCategory = catchAsync(async (req, res) => {

    const result = await CategoryServices.createCategoryIntoDB(req.body);
  
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Category created successfully",
      data: result,
    });
  });
  
//get all categories
const getAllCategories = catchAsync(async (req, res) => {

      const result = await CategoryServices.getAllCategoriesFromDB();
    
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Categories retrieved successfully',
        data: result,
      })
    })
  


  export const CategoryControllers = {
      createCategory,
      getAllCategories
  }
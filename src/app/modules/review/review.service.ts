import { TReview } from "./review.interface";
import { ReviewModel } from "./review.model";




//create reviews
const createReviewIntoDB = async (review: TReview) => {
    
    const result = await ReviewModel.create(review); 
   
  
    return result;
};

//getAll reviews
const getAllReviewsFromDB = async () => {
    const result = await ReviewModel.find()

    return result;
  };

export const ReviewServices = {
    createReviewIntoDB,
    getAllReviewsFromDB
}
    
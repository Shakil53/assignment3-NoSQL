import httpStatus from "http-status";
import { ReviewServices } from "./review.service";
import sendResponse from "../../utility/sendResponse";
import catchAsync from "../../utility/catchAsync";


//create Review
const createReview = catchAsync(async (req, res) => {
  const result = await ReviewServices.createReviewIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Review created successfully",
    data: result,
  });
});


//getAll reviews
const getAllReviews = catchAsync(async (req, res) => {
  const result = await ReviewServices.getAllReviewsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Reviews retrieved successfully",
    data: result,
  });
});



export const ReviewControllers = {
  createReview,
  getAllReviews,
};
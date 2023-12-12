import { CourseService } from "./course.service";
import catchAsync from "../../utility/catchAsync";
import sendResponse from "../../utility/sendResponse";
import httpStatus from "http-status";



//create course
const createCourse = catchAsync(async (req, res) => {
    
    const result = await CourseService.createCourseIntoDB(req.body)
    
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Course created successfully",
        data: result
    })
   
})

const getAllCourse = catchAsync(async (req, res) => {
    const result = await CourseService.getAllCourses();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Courses retrieved successfully",
        data: result
    })
    
})

//get single course
const getSingleCourseWithReview = catchAsync(async (req, res) => {
  const  {courseId }  = req.params;
  const course = await CourseService.getSingleCourseWithReviewFromDB(courseId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course and Reviews retrieved successfully',
    data: {course : course},
  });
});


export const CourseController = {
    createCourse,
    getAllCourse,
    getSingleCourseWithReview
   

}
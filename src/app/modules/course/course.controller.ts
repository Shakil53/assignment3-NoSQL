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


// const getSingleCourse = catchAsync(async (req, res) => {
//     const { id } = req.params;
//     const result = await CourseService.getSingleCourse(id)

//     // TODO sendResponse
// })

// const updateCourse = catchAsync(async (req, res) => {
//     const { id } = req.params;
//     const resutl = await CourseService.updateCourseIntoDB(id, req.body)


//     // TODO sendResponse
// })



export const CourseController = {
    createCourse,
    getAllCourse,
   

}
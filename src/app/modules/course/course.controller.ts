import { RequestHandler,Request, Response, NextFunction } from "express";
import { CourseService } from "./course.service";
import catchAsync from "../../utility/catchAsync";






const createCourse = catchAsync(async (req, res, next) => {
    
    const result = await CourseService.createCourseIntoDB(req.body)
    
        // TODO  sendrespose message

   
})

const getAllCourse = catchAsync(async (req, res) => {
    const result = await CourseService.getAllCourses();

    // TODO sendResponse
})


const getSingleCourse = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await CourseService.getSingleCourse(id)

    // TODO sendResponse
})

const updateCourse = catchAsync(async (req, res) => {
    const { id } = req.params;
    const resutl = await CourseService.updateCourseIntoDB(id, req.body)


    // TODO sendResponse
})



export const CourseController = {
    createCourse,
    getAllCourse,
    getSingleCourse,
    updateCourse,

}
import { TCourse } from "./course.interface";
import {  CourseModel } from "./course.model";




const createCourseIntoDB = async (payload: TCourse) => {
    const result = await CourseModel.create(payload);
    return result;
}


const getAllCourses = async () => {
    const result = await CourseModel.find()
    return result;
}


const getSingleCourse = async (id: string) => {
    const result = await CourseModel.findById(id);
    return result;
}

const updateCourseIntoDB = async (id: string,
    payload: Partial<TCourse>) => {
    const result = await CourseModel.findOneAndUpdate(
        {
            _id: id
        },
        payload,
        {
            new: true,
        }
    ) 
    return result;
}


export const CourseService ={
    createCourseIntoDB,
    getAllCourses,
    getSingleCourse,
    updateCourseIntoDB



}
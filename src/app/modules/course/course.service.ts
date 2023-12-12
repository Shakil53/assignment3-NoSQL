import { TCourse } from "./course.interface";
import {  CourseModel } from "./course.model";




const createCourseIntoDB = async (payload: TCourse) => {

    const startDate  = new Date(payload.startDate);
    const endDate = new Date(payload.endDate);

    const durationInWeeks: number = Math.round((endDate.getTime() - startDate.getTime()) / (7 * 24 * 60 * 60 * 1000));
    payload.durationInWeeks = durationInWeeks
    
    const result = await CourseModel.create(payload);
    return result;
}

//getAll Courses
const getAllCourses = async () => {
    const result = await CourseModel.find()
    return result;
}


// const getSingleCourse = async (id: string) => {
//     const result = await CourseModel.findById(id);
//     return result;
// }

// const updateCourseIntoDB = async (id: string,
//     payload: Partial<TCourse>) => {
//     const result = await CourseModel.findOneAndUpdate(
//         {
//             _id: id
//         },
//         payload,
//         {
//             new: true,
//         }
//     ) 
//     return result;
// }


export const CourseService ={
    createCourseIntoDB,
    getAllCourses,
    getSingleCourse,
    updateCourseIntoDB



}
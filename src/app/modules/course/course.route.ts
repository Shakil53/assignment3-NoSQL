import express from 'express'
import { CourseController } from './course.controller'
import validateRequest from '../../middlewares/validateRequest';
import { CourseValidations } from './course.validation';


 const router = express.Router()


router.post('/course',
    validateRequest(CourseValidations.CourseValidationSchema),
    CourseController.createCourse)

router.get('/courses', CourseController.getAllCourse)

router.get('/courses/:courseId/reviews',CourseController.getSingleCourseWithReview)


export const CourseRoutes = router;
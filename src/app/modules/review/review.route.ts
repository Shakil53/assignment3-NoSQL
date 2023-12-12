import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewValidations } from './review.validation';
import { ReviewControllers } from './review.controller';



const router = express.Router();


router.post('/reviews',
    validateRequest(ReviewValidations.ReviewValidationSchema),
    ReviewControllers.createReview)
    

router.get('/review',ReviewControllers.getAllReviews)


export const ReviewRoutes = router
import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { CategoryValidations } from './category.validation'
import { CategoryControllers } from './category.controller'

const router = express.Router()

//create route
router.post('/categories',
    validateRequest(CategoryValidations.CategoryValidationSchema),
    CategoryControllers.createCategory)


//get route
router.get('/categories',CategoryControllers.getAllCategories)



export const CategoryRoutes = router;
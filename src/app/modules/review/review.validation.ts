import { z } from 'zod';

  
const ReviewValidationSchema = z.object({
    body: z.object({
        rating: z.number(),
        review: z.string(),
        courseId: z.string({
            invalid_type_error: 'Course Id must be string',
            required_error: 'courseId is required',
        }),
      })
})
  

export const ReviewValidations = {
    ReviewValidationSchema,
};
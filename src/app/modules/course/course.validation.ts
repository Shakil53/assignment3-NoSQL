import { z } from 'zod';

const TagValidationSchema = z.object({
    name: z.string(),
    isDeleted: z.boolean(),
  });
  
  const CourseDetailsValidationSchema = z.object({
    level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    description: z.string(),
  });

  const CourseValidationSchema = z.object({
    body : z.object({
        title: z.string(),
        instructor: z.string(),
        categoryId: z.string({
            invalid_type_error: 'Category Id must be string',
            required_error: 'Category is required',
        }),
        price: z.number(),
        tags: z.array(TagValidationSchema),
        startDate: z.string(),
        endDate: z.string(),
        language: z.string(),
        provider: z.string(),
        durationInWeeks: z.number().optional(),
        details: CourseDetailsValidationSchema,
      })
  })

  export const CourseValidations = {
    CourseValidationSchema
  };
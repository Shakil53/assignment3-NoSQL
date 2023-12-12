import { Schema, model } from "mongoose";
import { TCourse, TTags } from "./course.interface";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const tagsSchema = new Schema<TTags>({
    name: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}) 


const courseSchema = new Schema<TCourse>({
   
    title: {
        type: String,
        unique: true,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    tags: [tagsSchema],
    startDate: {
        type: String,
        required: true
        
    },
    endDate: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
      },
    provider: {
        type: String,
        required: true
    },
    durationInWeeks: {
        type: Number,
        required: true
    },
    details: {
        level: {
            type: String,
            required: true,
            enum: ['Beginner', 'Intermediate', 'Advanced']
       }
    },
    description: {
        type: String,
        required: true
    }
}, {
    toJSON: {
        virtuals: true,
    },
})

courseSchema.virtual('reviews', {
    ref: 'Review', 
    localField: '_id',
    foreignField: 'courseId',
});
  

//pre hook middleware
courseSchema.pre('findOne', function (next) {
    this.populate('reviews');
    next();
  })

  
courseSchema.pre('save', async function (next) {
    const isCourseExist = await CourseModel.findOne({
        title: this.title,
    })
    if (isCourseExist) {
        throw new AppError(
            httpStatus.NOT_FOUND,
            'This Course is already exist!'
        )
    }
    next()
})

//model create with courseSchema
export const CourseModel = model<TCourse>('Course', courseSchema)
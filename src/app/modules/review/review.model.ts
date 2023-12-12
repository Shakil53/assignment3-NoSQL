import { Schema, model } from 'mongoose';
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { CourseModel } from '../course/course.model';

const reviewSchema = new Schema({
    review: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
      unique: true
    },
    });

    // if already have review
    reviewSchema.pre('save', async function (next) {
    const isCourseIdExist = await ReviewModel.findOne({
      courseId: this.courseId,
    });
  
    if (isCourseIdExist) {
      throw new AppError(
        httpStatus.NOT_FOUND,
        'This Course Id Have already your review',
      );
    }
  
    next();
  });



  //checking the course is avaiable or not 
  reviewSchema.pre('save', async function (next) {
    const isCourseIdExist = await CourseModel.findOne({
      _id: this.courseId,
    });
  
    if (!isCourseIdExist) {
      throw new AppError(
        httpStatus.NOT_FOUND,
        'There is no Course with this courseId',
      );
    }
  
    next();
  });


  //create model with schema
 export const ReviewModel = model('Review', reviewSchema);
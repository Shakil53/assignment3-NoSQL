import { Schema, model } from "mongoose";
import { TCourse, TDetails, TTags } from "./course.interface";

const tagsSchema = new Schema<TTags>({
    name: {
        type: String,
    },
    isDeleted: {
        type: Boolean
    }
}) 
const detailsSchema = new Schema<TDetails>({
    level: String,
    description: String,
})

const courseSchema = new Schema<TCourse>({
    _id: {
        type: Schema.Types.ObjectId
    },
    title: {
        type: String,
    },
    instructor: {
        type: String
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    price: {
        type: Number
    },
    tags: [tagsSchema],
    startDate: {
        type: String
    },
    endDate: {
        type: String
    },
    provider: {
        type: String
    },
    durationInWeeks: {
        type: Number
    },
    details: {
        type: detailsSchema
    }
})

//model create with courseSchema
export const CourseModel = model<TCourse>('Course', courseSchema)
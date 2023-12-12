import { Types } from "mongoose";


export type TReview = {
review : string;
courseId:  Types.ObjectId;
rating : number

}
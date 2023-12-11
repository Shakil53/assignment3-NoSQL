import { Response} from 'express';
import { Schema } from 'mongoose';

// type TResBody = {
//     _id: Schema.Types.ObjectId,
//     title: string,
//     instructor: string,
//     categoryId: Schema.Types.ObjectId,
//     price: number,

// }
type TResponse<T> = {
    success: boolean,
    statusCode: number,
    message: string,
    data: T
}

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
    res.status(data?.statusCode).json({
        success: data.success,
        message: data.message,
        data: data.data
    })
}


export default sendResponse;
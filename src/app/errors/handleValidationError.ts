import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponse => {
  const errorSources: TErrorSources = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );

  const statusCode = 400;
console.log(errorSources,"kaka")
 const errorMessage:string = errorSources.map(errorSource =>{
  const message = errorSource.message.replace(/`/g, '').replace(/Path\s+/g, '').replace(/path\s+/gi, '').trim();

  return (
  `${message}`)

}).join(' ')
 

  return {
    statusCode,
    message: 'Validation Error',
    errorMessage : errorMessage,
    errorSources,
  };
};

export default handleValidationError;
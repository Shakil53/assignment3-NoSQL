import { ZodError, ZodIssue } from "zod";
import { TErrorSources, TGenericErrorResponse } from "../interface/error";

const handleZodError = (err: ZodError): TGenericErrorResponse => {
  const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });
  errorSources.forEach((el) => console.log(el));

  const errorMessage = errorSources.map(errorSource => `${errorSource.path} is ${errorSource.message}`).join('. ')

  const statusCode = 400;

  return {
    statusCode,
    message: "Validation Error",
    errorMessage : errorMessage,
    errorSources,
  };
};

export default handleZodError;
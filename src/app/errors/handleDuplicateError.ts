import { TErrorSources, TGenericErrorResponse } from './../interface/error'

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);

  const extractedMessage = match && match[1];

  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extractedMessage}`,
    },
  ];

  const statusCode = 400;
  const errorMessage = errorSources.map(errorSource => `${errorSource.message} is already exists`).join('. ')
  return {
    statusCode,
    message: 'Invalid ID',
    errorSources,
    errorMessage
  };
};

export default handleDuplicateError;
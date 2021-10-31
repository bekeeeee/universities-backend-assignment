import { Response, Request } from "express";
import { AppError } from "../errors/app-error";
import { BaseHttpResponse } from "../services/base-http-response";

export const sendErrorDev = (err: any, req: Request, res: Response) => {
  if (process.env.NODE_ENV === "development") {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }
};

export const sendErrorProd = (err: any, req: Request, res: Response) => {
  let response: BaseHttpResponse;
  // A) Operational, trusted error: send message to client
  if (err.isOperational) {
    response = BaseHttpResponse.failed(err.message, err.statusCode);

    return res.status(response.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  // B) Programming or other unknown error: don't leak error details
  // 1) Log error
  // 2) Send generic message
  response = BaseHttpResponse.failed(err.message, err.statusCode);
  return res.status(500).json(response);
};

export const handleCastErrorDB = (err: any): AppError => {
  const message = `Invalid ${err.path}: ${err.value}.`;

  return new AppError(message, 400);
};

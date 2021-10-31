import { NextFunction, Response, Request } from "express";

import { CustomeError } from "../errors/custome-error";
import {
  sendErrorDev,
  sendErrorProd,
  handleCastErrorDB,
} from "../controller/error-controller";
import { BaseHttpResponse } from "../services/base-http-response";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (err instanceof CustomeError) {
    const respnse = BaseHttpResponse.failed(err.serializeErrors()?.message);
    return res.status(respnse.statusCode).json(respnse);
  }
  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    error.message = err.message;

    if (error.name === "CastError") error = handleCastErrorDB(error);
    sendErrorProd(error, req, res);
  }
};

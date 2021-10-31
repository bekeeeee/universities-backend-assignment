import { Response, Request } from "express";
import { catchAsync } from "../services/catchAsync";
import { BaseHttpResponse } from "../services/base-http-response";
import { Program } from "../models/Program-model";
import { ProgamDto } from "../dto/program";

export const createProgram = catchAsync(async (req: Request, res: Response) => {
  const program = await Program.create(req.body);
  await program.save();
  const programDTo = ProgamDto.from(program);
  const response = BaseHttpResponse.success(programDTo, 201);

  res.status(response.statusCode).json(response);
});



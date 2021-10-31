import { Response, Request } from "express";
import { catchAsync } from "../services/catchAsync";
import { BaseHttpResponse } from "../services/base-http-response";
import { Program } from "../models/Program-model";
import { ProgamDto } from "../dto/program";
import { BadRequestError } from "../errors/bad-request-error";

export const createProgram = catchAsync(async (req: Request, res: Response) => {
  const program = await Program.create(req.body);
  await program.save();
  const programDTo = ProgamDto.from(program);
  const response = BaseHttpResponse.success(programDTo, 201);

  res.status(response.statusCode).json(response);
});

export const getProgram = catchAsync(async (req: Request, res: Response) => {
  let program = await Program.findById(req.body.id);
  if (!program) {
    throw new BadRequestError("Program not found");
  }

  const programDto = ProgamDto.from(program);
  const response = BaseHttpResponse.success(programDto);
  res.status(200).json(response);
});

export const updateProgram = catchAsync(async (req: Request, res: Response) => {
  let program = await Program.findById(req.params.id);
  if (!program) {
    throw new BadRequestError("Progarm not found");
  }

  if (req.body.school) {
    program.school = req.body.school;
  }
  if (req.body.program) {
    program.program = req.body.program;
  }

  if (req.body.location) {
    program.location = req.body.location;
  }

  if (req.body.length) {
    program.length = req.body.length;
  }

  program.save();
  const response = BaseHttpResponse.success(program);
  res.status(200).json(response);
});

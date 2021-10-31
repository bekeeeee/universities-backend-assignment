import { Router } from "express";
import { createProgram, getProgram } from "../controller/program-controller";
import { CreateProgramDto, GetProgramDto } from "../dto/program";
import { ValidateRequestMiddleware } from "../middlewares/validate-requset-middleware";
const router = Router();
router.post(
  "/",
  ValidateRequestMiddleware.with(CreateProgramDto),
  createProgram
);

router.get(
  "/:id",
  ValidateRequestMiddleware.withParams(GetProgramDto),
  getProgram
);

export { router as programRouter };

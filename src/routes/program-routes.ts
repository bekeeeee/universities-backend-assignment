import { Router } from "express";
import { createProgram } from "../controller/program-controller";
import { CreateProgramDto } from "../dto/program";
import { ValidateRequestMiddleware } from "../middlewares/validate-requset-middleware";
const router = Router();
router.post(
  "/",
  ValidateRequestMiddleware.with(CreateProgramDto),
  createProgram
);

export { router as programRouter };

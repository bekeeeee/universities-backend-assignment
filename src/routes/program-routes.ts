import { Router } from "express";
import {
  createProgram,
  getProgram,
  updateProgram,
  deleteProgram,
  getPrograms,
} from "../controller/program-controller";
import {
  CreateProgramDto,
  GetProgramDto,
  UpdateProgramDto,
} from "../dto/program";
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

router.patch(
  "/:id",
  ValidateRequestMiddleware.withParams(UpdateProgramDto),
  updateProgram
);

router.delete(
  "/:id",
  ValidateRequestMiddleware.withParams(GetProgramDto),
  deleteProgram
);

router.get("/", getPrograms);

export { router as programRouter };

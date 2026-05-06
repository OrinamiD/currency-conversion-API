// routes/conversion.routes.ts

import express, { Router } from "express";

import { conversionSchema } from "./conversion.schema.js";
import { validate } from "../../middleware/validate.js";
import { conversionController } from "./conversion.controller.js";

const router: Router = express.Router();

router.post(
  "/convert",
  validate(conversionSchema),
  conversionController.convert,
);

export default router;

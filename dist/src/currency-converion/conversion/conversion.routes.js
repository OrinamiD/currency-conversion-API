// routes/conversion.routes.ts
import express, { Router } from "express";
import { convert } from "./conversion.controller.js";
import { conversionSchema } from "./conversion.schema.js";
import { validate } from "../../middleware/validate.js";
const router = express.Router();
router.post("/convert", validate(conversionSchema), convert);
console.log("Conversion route hit");
export default router;
//# sourceMappingURL=conversion.routes.js.map
// middlewares/validate.ts

import type { ZodSchema } from "zod";
import type { Request, Response, NextFunction } from "express";

export const validate =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error: any) {
      return res.status(400).json({
        error: error.errors.map((e: any) => e.message),
      });
    }
  };

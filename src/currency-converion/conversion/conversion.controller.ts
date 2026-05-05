// controllers/conversion.controller.ts

import type { Request, Response } from "express";
import { ConversionService } from "./conversion.service.js";

const service = new ConversionService();

export const convert = async (req: Request, res: Response) => {
  console.log("Conversion route hit"); // ✅ real hit
  try {
    const { fromCurrency, toCurrency, amount } = req.body;

    const result = await service.convertCurrency(
      fromCurrency,
      toCurrency,
      amount,
    );

    res.status(200).json({
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

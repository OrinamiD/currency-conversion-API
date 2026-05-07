import type { Request, Response } from "express";
import {
  conversionService,
  type ConversionService,
} from "./conversion.service.js";

export class ConversionController {
  constructor(private conversionService: ConversionService) {}

  convert = async (req: Request, res: Response) => {
    try {
      const { fromCurrency, toCurrency, amount } = req.body;

      const result = await this.conversionService.convertCurrency(
        fromCurrency,
        toCurrency,
        amount,
      );

      return res.status(200).json({
        success: true,
        data: {
          fromCurrency: result.fromCurrency,
          toCurrency: result.toCurrency,
          amount: result.amount,
          exchangeRate: result.exchangeRate,
          convertedAmount: result.convertedAmount,
          createdAt: result.createdAt,
        },
      });
    } catch (error: any) {
      if (error.message === "Invalid input") {
        return res.status(400).json({ success: false, message: error.message });
      }
      if (error.message === "Failed to fetch exchange rates") {
        return res.status(503).json({ success: false, message: error.message });
      }
      if (error.message === "Invalid toCurrency: ${to}") {
        return res.status(400).json({ success: false, message: error.message });
      }
      if (
        error.message === "Invalid fromCurrency: ${from}. Only USD is supported"
      ) {
        return res.status(422).json({ success: false, message: error.message });
      }
      if (error.message === "Currency rate not found") {
        return res.status(404).json({ success: false, message: error.message });
      } else {
        return res.status(500).json({ success: false, message: error.message });
      }
    }
  };
}

export const conversionController = new ConversionController(conversionService);

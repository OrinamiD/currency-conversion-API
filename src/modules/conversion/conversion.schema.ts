import { z } from "zod";

export const conversionSchema = z.object({
  fromCurrency: z
    .string()
    .length(3, "Currency must be 3 letters")
    .trim()
    .transform((val) => val.toUpperCase()),

  toCurrency: z
    .string()
    .length(3, "Currency must be 3 letters")
    .trim()
    .transform((val) => val.toUpperCase()),

  amount: z.number().positive("Amount must be greater than 0"),
});

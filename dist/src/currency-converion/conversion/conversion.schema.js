import { z } from "zod";
export const conversionSchema = z.object({
    fromCurrency: z
        .string()
        .length(3, "Currency must be a 3-letter code")
        .toUpperCase(),
    toCurrency: z
        .string()
        .length(3, "Currency must be a 3-letter code")
        .toUpperCase(),
    amount: z.number().positive("Amount must be greater than 0"),
});
//# sourceMappingURL=conversion.schema.js.map
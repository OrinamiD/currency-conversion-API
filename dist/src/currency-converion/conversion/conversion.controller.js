// controllers/conversion.controller.ts
import { ConversionService } from "./conversion.service.js";
const service = new ConversionService();
export const convert = async (req, res) => {
    console.log("Conversion route hit"); // ✅ real hit
    try {
        const { fromCurrency, toCurrency, amount } = req.body;
        const result = await service.convertCurrency(fromCurrency, toCurrency, amount);
        res.status(200).json({
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};
//# sourceMappingURL=conversion.controller.js.map
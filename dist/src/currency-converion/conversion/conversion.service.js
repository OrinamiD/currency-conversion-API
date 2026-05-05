// services/conversion.service.ts
import { getExchangeRates } from "../../utils/apiClient.js";
import { ConversionRepository } from "./conversion.repository.js";
export class ConversionService {
    repository = new ConversionRepository();
    async convertCurrency(fromCurrency, toCurrency, amount) {
        if (!fromCurrency || !toCurrency || amount <= 0) {
            throw new Error("Invalid input");
        }
        const rates = await getExchangeRates();
        const rateData = rates.find((r) => r.currency === toCurrency);
        if (!rateData) {
            throw new Error("Currency not found");
        }
        const exchangeRate = rateData.buyValue;
        const convertedAmount = amount * exchangeRate;
        const conversion = await this.repository.create({
            fromCurrency,
            toCurrency,
            amount,
            exchangeRate,
            convertedAmount,
        });
        return conversion;
    }
}
//# sourceMappingURL=conversion.service.js.map
// services/conversion.service.ts

import { getExchangeRates } from "../../utils/apiClient.js";
import { ConversionRepository } from "./conversion.repository.js";

export class ConversionService {
  private repository = new ConversionRepository();

  async convertCurrency(
    fromCurrency: string,
    toCurrency: string,
    amount: number,
  ) {
    if (!fromCurrency || !toCurrency || amount <= 0) {
      throw new Error("Invalid input");
    }

    const rates = await getExchangeRates();

    const rateData = rates.find((r: any) => r.currency === toCurrency);

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

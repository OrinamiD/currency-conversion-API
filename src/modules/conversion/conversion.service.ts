import { getExchangeRates } from "../../utils/apiClient.js";
import {
  conversionRepository,
  type ConversionRepository,
} from "./conversion.repository.js";

export class ConversionService {
  constructor(private conversionRepository: ConversionRepository) {}

  async convertCurrency(
    fromCurrency: string,
    toCurrency: string,
    amount: number,
  ) {
    if (!fromCurrency || !toCurrency || amount <= 0) {
      throw new Error("Invalid input");
    }

    const from = fromCurrency.toUpperCase();
    const to = toCurrency.toUpperCase();

    let rates;

    try {
      rates = await getExchangeRates();
    } catch (error) {
      throw new Error("Failed to fetch exchange rates");
    }

    //  Extract valid currencies
    const validCurrencies = rates.map((r: any) => r.currency);

    //  Validate toCurrency
    if (!validCurrencies.includes(to)) {
      throw new Error(`Invalid toCurrency: ${to}`);
    }

    //  Enforce USD as base (based on API design)
    if (from !== "USD") {
      throw new Error(`Invalid fromCurrency: ${from}. Only USD is supported`);
    }

    const rateData = rates.find((r: any) => r.currency === to);

    if (!rateData) {
      throw new Error("Currency rate not found");
    }

    const exchangeRate = rateData.buyValue;
    const convertedAmount = amount * exchangeRate;

    return await this.conversionRepository.create({
      fromCurrency: from,
      toCurrency: to,
      amount,
      exchangeRate,
      convertedAmount,
      createdAt: new Date(),
    });
  }
}

export const conversionService = new ConversionService(conversionRepository);

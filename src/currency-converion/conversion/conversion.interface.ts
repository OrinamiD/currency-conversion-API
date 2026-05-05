// interfaces/conversion.interface.ts

export interface ConversionDTO {
  fromCurrency: string;
  toCurrency: string;
  amount: number;
  exchangeRate: number;
  convertedAmount: number;
  createdAt?: Date;
}

// utils/apiClient.ts

import axios from "axios";

export const getExchangeRates = async () => {
  const response = await axios.get(
    "https://staging-api.payfusion.io/transactions/public/v1/currency-rates",
  );

  return response.data.data;
};

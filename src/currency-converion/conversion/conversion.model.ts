// model

import mongoose, { Schema } from "mongoose";
import type { ConversionDTO } from "./conversion.interface.js";

const conversionSchema: Schema<ConversionDTO> = new mongoose.Schema(
  {
    fromCurrency: {
      type: String,
      required: true,
    },
    toCurrency: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    exchangeRate: {
      type: Number,
      required: true,
    },
    convertedAmount: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const ConversionModel = mongoose.model<ConversionDTO>(
  "ConversionModel",
  conversionSchema,
);

export default ConversionModel;

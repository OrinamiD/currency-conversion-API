// model
import mongoose, { Schema } from "mongoose";
const conversionSchema = new mongoose.Schema({
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
}, { timestamps: true });
const ConversionModel = mongoose.model("ConversionModel", conversionSchema);
export default ConversionModel;
//# sourceMappingURL=conversion.model.js.map
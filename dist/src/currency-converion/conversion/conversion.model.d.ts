import mongoose from "mongoose";
import type { ConversionDTO } from "./conversion.interface.js";
declare const ConversionModel: mongoose.Model<ConversionDTO, {}, {}, {}, mongoose.Document<unknown, {}, ConversionDTO, {}, mongoose.DefaultSchemaOptions> & ConversionDTO & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, ConversionDTO>;
export default ConversionModel;
//# sourceMappingURL=conversion.model.d.ts.map
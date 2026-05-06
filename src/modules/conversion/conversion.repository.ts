import type { Model } from "mongoose";
import type { ConversionDTO } from "./conversion.interface.js";
import ConversionModel from "./conversion.model.js";

export class ConversionRepository {
  constructor(private conversionModel: Model<ConversionDTO>) {}

  async create(data: ConversionDTO): Promise<ConversionDTO> {
    return await this.conversionModel.create(data);
  }
}

export const conversionRepository = new ConversionRepository(ConversionModel);

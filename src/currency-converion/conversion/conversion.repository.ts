import type { ConversionDTO } from "./conversion.interface.js";
import ConversionModel from "./conversion.model.js";

export class ConversionRepository {
  async create(data: ConversionDTO): Promise<ConversionDTO> {
    return await ConversionModel.create(data);
  }
}

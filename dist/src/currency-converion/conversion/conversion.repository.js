import ConversionModel from "./conversion.model.js";
export class ConversionRepository {
    async create(data) {
        return await ConversionModel.create(data);
    }
}
//# sourceMappingURL=conversion.repository.js.map
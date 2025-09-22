import { UmbMockDBBase } from '../mock-db-base.js';
export class UmbCultureMockDbBase extends UmbMockDBBase {
    constructor(data) {
        super(data);
    }
    create(item) {
        this.data.push(item);
    }
    read(isoCode) {
        return this.data.find((item) => item.isoCode === isoCode);
    }
    update(isoCode, updatedItem) {
        const itemIndex = this.data.findIndex((item) => item.isoCode === isoCode);
        this.data[itemIndex] = updatedItem;
    }
    delete(isoCode) {
        this.data = this.data.filter((item) => item.isoCode !== isoCode);
    }
}

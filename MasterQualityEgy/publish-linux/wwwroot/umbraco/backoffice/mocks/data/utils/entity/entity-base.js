import { UmbMockDBBase } from '../mock-db-base.js';
export class UmbEntityMockDbBase extends UmbMockDBBase {
    constructor(data) {
        super(data);
    }
    create(item) {
        this.data.push(item);
    }
    read(id) {
        return this.data.find((item) => item.id === id);
    }
    update(id, updatedItem) {
        const itemIndex = this.data.findIndex((item) => item.id === id);
        this.data[itemIndex] = updatedItem;
    }
    delete(id) {
        this.data = this.data.filter((item) => item.id !== id);
    }
}

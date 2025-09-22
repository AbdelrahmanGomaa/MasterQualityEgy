import { UmbMockDBBase } from '../mock-db-base.js';
export class UmbFileSystemMockDbBase extends UmbMockDBBase {
    constructor(data) {
        super(data);
    }
    create(item) {
        this.data.push(item);
    }
    read(path) {
        return this.data.find((item) => item.path === path);
    }
    update(existingPath, updatedItem) {
        const itemIndex = this.data.findIndex((item) => item.path === existingPath);
        this.data[itemIndex] = updatedItem;
    }
    delete(path) {
        this.data = this.data.filter((item) => item.path !== path);
    }
}

export class UmbMockDBBase {
    constructor(data) {
        this.data = [];
        this.data = data;
    }
    getAll() {
        return this.data;
    }
    get total() {
        return this.data.length;
    }
    get(options) {
        const skip = options.skip ? options.skip : 0;
        const take = options.take ? options.take : 100;
        const mockItems = this.getAll();
        const paginatedItems = mockItems.slice(skip, skip + take);
        return { items: paginatedItems, total: mockItems.length };
    }
}

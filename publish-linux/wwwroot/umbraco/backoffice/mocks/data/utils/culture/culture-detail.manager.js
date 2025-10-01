export class UmbMockCultureDetailManager {
    #db;
    #createMockItemMapper;
    #readResponseMapper;
    constructor(db, createMockItemMapper, readResponseMapper) {
        this.#db = db;
        this.#createMockItemMapper = createMockItemMapper;
        this.#readResponseMapper = readResponseMapper;
    }
    create(request) {
        const mockItem = this.#createMockItemMapper(request);
        // create mock item in mock db
        this.#db.create(mockItem);
        return mockItem.isoCode;
    }
    read(id) {
        const item = this.#db.read(id);
        if (!item)
            throw new Error('Item not found');
        const mappedItem = this.#readResponseMapper(item);
        return mappedItem;
    }
    update(isoCode, item) {
        const mockItem = this.#db.read(isoCode);
        const updatedMockItem = {
            ...mockItem,
            ...item,
        };
        this.#db.update(isoCode, updatedMockItem);
    }
    delete(isoCode) {
        this.#db.delete(isoCode);
    }
}

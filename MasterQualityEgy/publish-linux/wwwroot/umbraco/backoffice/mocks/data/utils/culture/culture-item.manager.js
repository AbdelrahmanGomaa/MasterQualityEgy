export class UmbMockCultureItemManager {
    #db;
    #itemReadMapper;
    constructor(db, itemReadMapper) {
        this.#db = db;
        this.#itemReadMapper = itemReadMapper;
    }
    getItems(isoCodes) {
        const items = this.#db.getAll().filter((item) => isoCodes.includes(item.isoCode));
        return items.map((item) => this.#itemReadMapper(item));
    }
}

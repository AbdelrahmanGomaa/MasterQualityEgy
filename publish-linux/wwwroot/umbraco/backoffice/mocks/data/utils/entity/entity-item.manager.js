export class UmbMockEntityItemManager {
    #db;
    #itemReadMapper;
    constructor(db, itemReadMapper) {
        this.#db = db;
        this.#itemReadMapper = itemReadMapper;
    }
    getItems(ids) {
        const items = this.#db.getAll().filter((item) => ids.includes(item.id));
        return items.map((item) => this.#itemReadMapper(item));
    }
}

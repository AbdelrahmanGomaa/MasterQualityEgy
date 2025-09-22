export class UmbMockMediaCollectionManager {
    #mediaDb;
    #collectionMapper;
    constructor(mediaDb, collectionMapper) {
        this.#mediaDb = mediaDb;
        this.#collectionMapper = collectionMapper;
    }
    getCollectionMedia({ id, skip = 0, take = 100, }) {
        const collection = !id
            ? this.#mediaDb.getAll().filter((item) => item.parent === null)
            : this.#mediaDb.getAll().filter((item) => item.parent?.id === id);
        const items = collection.map((item) => this.#collectionMapper(item)).slice(skip, skip + take);
        const total = collection.length;
        return { items: items, total };
    }
}

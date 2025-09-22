export class UmbMockDocumentCollectionManager {
    #documentDb;
    #collectionMapper;
    constructor(documentDb, collectionMapper) {
        this.#documentDb = documentDb;
        this.#collectionMapper = collectionMapper;
    }
    getCollectionDocumentById({ id, skip = 0, take = 100, }) {
        const collection = this.#documentDb.getAll().filter((item) => item.parent?.id === id);
        const items = collection.map((item) => this.#collectionMapper(item)).slice(skip, skip + take);
        const total = collection.length;
        return { items: items, total };
    }
}

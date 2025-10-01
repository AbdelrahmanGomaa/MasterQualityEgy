export class UmbMockFileSystemItemManager {
    #db;
    constructor(db) {
        this.#db = db;
    }
    getItems(paths) {
        const items = this.#db.getAll().filter((item) => paths.includes(item.path));
        return items.map((item) => createFileItemResponseModelBaseModel(item));
    }
}
const createFileItemResponseModelBaseModel = (item) => ({
    path: item.path,
    name: item.name,
    parent: item.parent,
    isFolder: item.isFolder,
});

export class UmbMockEntityFolderManager {
    #db;
    #createMockFolderMapper;
    constructor(db, createMockFolderMapper) {
        this.#db = db;
        this.#createMockFolderMapper = createMockFolderMapper;
    }
    create(request) {
        const newFolder = this.#createMockFolderMapper(request);
        this.#db.create(newFolder);
        return newFolder.id;
    }
    read(id) {
        const mockItem = this.#db.read(id);
        if (mockItem?.isFolder) {
            return this.#defaultReadMapper(mockItem);
        }
        else {
            return undefined;
        }
    }
    update(id, request) {
        const mockItem = this.#db.read(id);
        const updatedMockItem = {
            ...mockItem,
            name: request.name,
        };
        this.#db.update(id, updatedMockItem);
    }
    delete(id) {
        const dbItem = this.#db.read(id);
        if (dbItem?.isFolder) {
            this.#db.delete(id);
        }
    }
    #defaultReadMapper = (item) => {
        return {
            name: item.name,
            id: item.id,
        };
    };
}

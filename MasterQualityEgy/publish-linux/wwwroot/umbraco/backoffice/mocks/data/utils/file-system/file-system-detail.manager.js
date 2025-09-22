export class UmbMockFileSystemDetailManager {
    #db;
    constructor(db) {
        this.#db = db;
    }
    create(request) {
        let path = request.parent ? `${request.parent.path}/${request.name}` : request.name;
        // ensure dash prefix if its not there
        path = path.startsWith('/') ? path : `/${path}`;
        const mockItem = this.#defaultCreateMockItemMapper(path, request);
        // create mock item in mock db
        this.#db.create(mockItem);
        return path;
    }
    read(path) {
        const item = this.#db.read(path);
        if (!item)
            throw new Error('Item not found');
        const mappedItem = this.#defaultReadResponseMapper(item);
        return mappedItem;
    }
    update(path, item) {
        const mockItem = this.#db.read(path);
        const updatedMockItem = {
            ...mockItem,
            content: item.content,
        };
        this.#db.update(path, updatedMockItem);
    }
    delete(path) {
        this.#db.delete(path);
    }
    rename(path, name) {
        const currentMockItem = this.#db.read(path);
        if (!currentMockItem)
            throw new Error('Item not found');
        const createRequest = {
            name,
            parent: currentMockItem.parent,
            content: currentMockItem.content,
        };
        this.delete(path);
        const newPath = this.create(createRequest);
        return newPath;
    }
    #defaultCreateMockItemMapper = (path, request) => {
        return {
            name: request.name,
            content: request.content,
            path: path,
            parent: request.parent || null,
            isFolder: false,
            hasChildren: false,
        };
    };
    #defaultReadResponseMapper = (item) => {
        return {
            path: item.path,
            parent: item.parent,
            name: item.name,
            content: item.content,
        };
    };
}

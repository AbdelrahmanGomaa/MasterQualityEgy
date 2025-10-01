export class UmbMockFileSystemFolderManager {
    #db;
    constructor(db) {
        this.#db = db;
    }
    create(request) {
        let path = request.parent ? `${request.parent.path}/${request.name}` : request.name;
        // ensure dash prefix if its not there
        path = path.startsWith('/') ? path : `/${path}`;
        const newFolder = {
            path,
            parent: request.parent ? { path: request.parent.path } : null,
            name: request.name,
            hasChildren: false,
            isFolder: true,
            content: '',
        };
        this.#db.create(newFolder);
        return path;
    }
    read(path) {
        const mockItem = this.#db.read(path);
        if (mockItem?.isFolder) {
            return this.#defaultReadMapper(mockItem);
        }
        else {
            return undefined;
        }
    }
    delete(path) {
        const dbItem = this.#db.read(path);
        if (dbItem?.isFolder) {
            this.#db.delete(path);
        }
    }
    #defaultReadMapper = (item) => {
        return {
            path: item.path,
            name: item.name,
            parent: item.parent,
        };
    };
}

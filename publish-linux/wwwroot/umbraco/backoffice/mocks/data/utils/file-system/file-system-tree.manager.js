import { pagedResult } from '../paged-result.js';
export class UmbMockFileSystemTreeManager {
    #db;
    constructor(mockDb) {
        this.#db = mockDb;
    }
    getRoot({ skip = 0, take = 100 } = {}) {
        const items = this.#db.getAll().filter((item) => item.parent === null);
        return this.#pagedTreeResult({ items, skip, take });
    }
    getChildrenOf({ parentPath, skip = 0, take = 100 }) {
        const items = this.#db.getAll().filter((item) => item.parent?.path === parentPath);
        return this.#pagedTreeResult({ items, skip, take });
    }
    #pagedTreeResult({ items, skip, take }) {
        const paged = pagedResult(items, skip, take);
        const treeItems = paged.items.map((item) => createFileSystemTreeItem(item));
        const treeItemsHasChildren = treeItems.map((item) => {
            const children = this.#db.getAll().filter((child) => child.parent?.path === item.path);
            return {
                ...item,
                hasChildren: children.length > 0,
            };
        });
        return { items: treeItemsHasChildren, total: paged.total };
    }
}
export const createFileSystemTreeItem = (item) => {
    return {
        path: item.path,
        parent: item.parent ?? null,
        name: item.name,
        hasChildren: item.hasChildren ?? false,
        isFolder: item.isFolder ?? false,
    };
};

import { pagedResult } from '../paged-result.js';
import { UmbId } from '@umbraco-cms/backoffice/id';
export class UmbMockEntityTreeManager {
    #db;
    #treeItemMapper;
    constructor(mockDb, treeItemMapper) {
        this.#db = mockDb;
        this.#treeItemMapper = treeItemMapper;
    }
    getRoot({ skip = 0, take = 100 } = {}) {
        const items = this.#db.getAll().filter((item) => item.parent === null);
        return this.#pagedTreeResult({ items, skip, take });
    }
    getChildrenOf({ parentId, skip = 0, take = 100 }) {
        const items = this.#db.getAll().filter((item) => item.parent?.id === parentId);
        return this.#pagedTreeResult({ items, skip, take });
    }
    getAncestorsOf({ descendantId }) {
        const items = [];
        let currentId = descendantId;
        while (currentId) {
            const item = this.#db.read(currentId);
            if (!item)
                break;
            items.push(item);
            currentId = item.parent?.id;
        }
        return items.reverse();
    }
    #pagedTreeResult({ items, skip, take }) {
        const paged = pagedResult(items, skip, take);
        const treeItems = paged.items.map((item) => this.#treeItemMapper(item));
        const treeItemsHasChildren = treeItems.map((item) => {
            const children = this.#db.getAll().filter((child) => child.parent?.id === item.id);
            return {
                ...item,
                hasChildren: children.length > 0,
            };
        });
        return { items: treeItemsHasChildren, total: paged.total };
    }
    move(ids, destinationId) {
        const destinationItem = this.#db.read(destinationId);
        if (!destinationItem)
            throw new Error(`Destination item with id ${destinationId} not found`);
        const items = [];
        ids.forEach((id) => {
            const item = this.#db.read(id);
            if (!item)
                throw new Error(`Item with id ${id} not found`);
            items.push(item);
        });
        const movedItems = items.map((item) => {
            return {
                ...item,
                parent: destinationId ? { id: destinationId } : null,
            };
        });
        movedItems.forEach((movedItem) => this.#db.update(movedItem.id, movedItem));
        destinationItem.hasChildren = true;
        this.#db.update(destinationItem.id, destinationItem);
    }
    copy(ids, destinationId) {
        const destinationItem = this.#db.read(destinationId);
        if (!destinationItem)
            throw new Error(`Destination item with id ${destinationId} not found`);
        // Notice we don't add numbers to the 'copy' name.
        const items = [];
        ids.forEach((id) => {
            const item = this.#db.read(id);
            if (!item)
                throw new Error(`Item with id ${id} not found`);
            items.push(item);
        });
        const copyItems = items.map((item) => {
            return {
                ...item,
                name: item.name + ' Copy',
                id: UmbId.new(),
                parentId: destinationId,
            };
        });
        copyItems.forEach((copyItem) => this.#db.create(copyItem));
        const newIds = copyItems.map((item) => item.id);
        destinationItem.hasChildren = true;
        this.#db.update(destinationItem.id, destinationItem);
        return newIds;
    }
}

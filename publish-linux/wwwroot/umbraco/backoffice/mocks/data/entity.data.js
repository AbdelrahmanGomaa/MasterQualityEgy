import { UmbMockDBBase } from './utils/mock-db-base.js';
import { UmbId } from '@umbraco-cms/backoffice/id';
// Temp mocked database
export class UmbEntityData extends UmbMockDBBase {
    constructor(data) {
        super(data);
    }
    getList(skip, take) {
        return this.data.slice(skip, skip + take);
    }
    getById(id) {
        return this.data.find((item) => item.id === id);
    }
    getByIds(ids) {
        return this.data.filter((item) => {
            if (!item.id)
                throw new Error('Item has no id');
            ids.includes(item.id);
        });
    }
    insert(item) {
        // TODO: Remove this fix when all types come with an ID them selfs.
        if (!item.id) {
            item.id = UmbId.new();
        }
        const exits = this.data.find((i) => i.id === item.id);
        if (exits) {
            throw new Error(`Item with key ${item.id} already exists`);
        }
        this.data.push(item);
    }
    save(id, saveItem) {
        // We need the ID in our data:
        saveItem = { ...saveItem, id: id };
        const foundIndex = this.data.findIndex((item) => item.id === id);
        if (foundIndex !== -1) {
            // update
            this.data[foundIndex] = saveItem;
            //this.updateData(saveItem);// This does not seem to do anything...
        }
        else {
            // new
            this.data.push(saveItem);
        }
    }
    trash(ids) {
        const trashedItems = [];
        ids.forEach((id) => {
            const item = this.getById(id);
            if (!item)
                return;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            item.isTrashed = true;
            this.updateData(item);
            trashedItems.push(item);
        });
        return trashedItems;
    }
    delete(ids) {
        this.data = this.data.filter((item) => {
            if (!item.id)
                throw new Error('Item has no id');
            return !ids.includes(item.id);
        });
    }
    updateData(updateItem) {
        const itemIndex = this.data.findIndex((item) => item.id === updateItem.id);
        const item = this.data[itemIndex];
        if (!item)
            return;
        // TODO: revisit this code, seems like something we can solve smarter/type safer now:
        const itemKeys = Object.keys(item);
        const newItem = {};
        for (const [key] of Object.entries(updateItem)) {
            if (itemKeys.indexOf(key) !== -1) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                newItem[key] = updateItem[key];
            }
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.data[itemIndex] = newItem;
    }
}

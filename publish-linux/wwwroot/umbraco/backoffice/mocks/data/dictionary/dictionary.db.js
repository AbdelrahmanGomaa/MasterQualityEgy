import { UmbMockEntityTreeManager } from '../utils/entity/entity-tree.manager.js';
import { UmbMockEntityItemManager } from '../utils/entity/entity-item.manager.js';
import { UmbMockEntityDetailManager } from '../utils/entity/entity-detail.manager.js';
import { UmbEntityMockDbBase } from '../utils/entity/entity-base.js';
import { data } from './dictionary.data.js';
import { UmbId } from '@umbraco-cms/backoffice/id';
export class UmbDictionaryMockDB extends UmbEntityMockDbBase {
    constructor(data) {
        super(data);
        this.tree = new UmbMockEntityTreeManager(this, treeItemMapper);
        this.item = new UmbMockEntityItemManager(this, itemMapper);
        this.detail = new UmbMockEntityDetailManager(this, createMockMapper, detailResponseMapper);
    }
    getOverview() {
        const all = this.getAll();
        const items = all.map((item) => {
            return {
                name: item.name,
                id: item.id,
                translatedIsoCodes: item.translatedIsoCodes,
                parent: item.parent,
            };
        });
        return { items, total: all.length };
    }
}
const treeItemMapper = (model) => {
    return {
        name: model.name,
        id: model.id,
        parent: model.parent,
        hasChildren: model.hasChildren,
    };
};
const createMockMapper = (request) => {
    return {
        name: request.name,
        id: request.id ? request.id : UmbId.new(),
        parent: request.parent,
        translations: request.translations,
        hasChildren: false,
        translatedIsoCodes: [],
    };
};
const detailResponseMapper = (model) => {
    return {
        name: model.name,
        id: model.id,
        translations: model.translations,
    };
};
const itemMapper = (model) => {
    return {
        name: model.name,
        id: model.id,
    };
};
export const umbDictionaryMockDb = new UmbDictionaryMockDB(data);

import { UmbEntityMockDbBase } from '../utils/entity/entity-base.js';
import { UmbMockEntityTreeManager } from '../utils/entity/entity-tree.manager.js';
import { UmbMockEntityItemManager } from '../utils/entity/entity-item.manager.js';
import { data } from './template.data.js';
import { UmbMockTemplateDetailManager } from './template-detail.manager.js';
import { UmbMockTemplateQueryManager } from './template-query.manager.js';
class UmbTemplateMockDB extends UmbEntityMockDbBase {
    constructor(data) {
        super(data);
        this.tree = new UmbMockEntityTreeManager(this, treeItemMapper);
        this.item = new UmbMockEntityItemManager(this, itemMapper);
        this.detail = new UmbMockTemplateDetailManager(this);
        this.query = new UmbMockTemplateQueryManager();
    }
}
const treeItemMapper = (model) => {
    return {
        name: model.name,
        hasChildren: model.hasChildren,
        id: model.id,
        parent: model.parent,
    };
};
const itemMapper = (item) => {
    return {
        id: item.id,
        name: item.name,
        alias: item.alias,
    };
};
export const umbTemplateMockDb = new UmbTemplateMockDB(data);

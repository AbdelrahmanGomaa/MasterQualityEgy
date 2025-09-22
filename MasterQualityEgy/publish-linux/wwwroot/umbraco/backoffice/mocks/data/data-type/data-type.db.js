import { UmbEntityMockDbBase } from '../utils/entity/entity-base.js';
import { UmbMockEntityFolderManager } from '../utils/entity/entity-folder.manager.js';
import { UmbMockEntityTreeManager } from '../utils/entity/entity-tree.manager.js';
import { UmbMockEntityItemManager } from '../utils/entity/entity-item.manager.js';
import { UmbMockEntityDetailManager } from '../utils/entity/entity-detail.manager.js';
import { data } from './data-type.data.js';
import { UmbId } from '@umbraco-cms/backoffice/id';
class UmbDataTypeMockDB extends UmbEntityMockDbBase {
    constructor(data) {
        super(data);
        this.tree = new UmbMockEntityTreeManager(this, treeItemMapper);
        this.folder = new UmbMockEntityFolderManager(this, createFolderMockMapper);
        this.item = new UmbMockEntityItemManager(this, itemResponseMapper);
        this.detail = new UmbMockEntityDetailManager(this, createDetailMockMapper, detailResponseMapper);
    }
}
const treeItemMapper = (model) => {
    return {
        name: model.name,
        hasChildren: model.hasChildren,
        id: model.id,
        parent: model.parent,
        isFolder: model.isFolder,
        isDeletable: model.isDeletable,
    };
};
const createFolderMockMapper = (request) => {
    return {
        name: request.name,
        id: request.id ? request.id : UmbId.new(),
        parent: request.parent,
        isFolder: true,
        hasChildren: false,
        editorAlias: '',
        editorUiAlias: '',
        isDeletable: true,
        canIgnoreStartNodes: false,
        values: [],
    };
};
const createDetailMockMapper = (request) => {
    return {
        id: request.id ? request.id : UmbId.new(),
        parent: request.parent,
        name: request.name,
        editorAlias: request.editorAlias,
        editorUiAlias: request.editorUiAlias,
        values: request.values,
        canIgnoreStartNodes: false,
        isFolder: false,
        hasChildren: false,
        isDeletable: true,
    };
};
const detailResponseMapper = (item) => {
    return {
        id: item.id,
        name: item.name,
        editorAlias: item.editorAlias,
        editorUiAlias: item.editorUiAlias,
        values: item.values,
        isDeletable: item.isDeletable,
        canIgnoreStartNodes: item.canIgnoreStartNodes,
    };
};
const itemResponseMapper = (item) => {
    return {
        id: item.id,
        name: item.name,
        editorAlias: item.editorAlias,
        isDeletable: item.isDeletable,
    };
};
export const umbDataTypeMockDb = new UmbDataTypeMockDB(data);

import { UmbEntityMockDbBase } from '../utils/entity/entity-base.js';
import { UmbMockEntityTreeManager } from '../utils/entity/entity-tree.manager.js';
import { UmbMockEntityItemManager } from '../utils/entity/entity-item.manager.js';
import { UmbMockEntityDetailManager } from '../utils/entity/entity-detail.manager.js';
import { data } from './member-type.data.js';
import { UmbId } from '@umbraco-cms/backoffice/id';
class UmbMemberTypeMockDB extends UmbEntityMockDbBase {
    constructor(data) {
        super(data);
        this.tree = new UmbMockEntityTreeManager(this, memberTypeTreeItemMapper);
        this.item = new UmbMockEntityItemManager(this, itemResponseMapper);
        this.detail = new UmbMockEntityDetailManager(this, createDetailMockMapper, detailResponseMapper);
    }
}
const createDetailMockMapper = (request) => {
    return {
        id: request.id ? request.id : UmbId.new(),
        name: request.name,
        description: request.description,
        alias: request.alias,
        icon: request.icon,
        properties: request.properties,
        containers: request.containers,
        allowedAsRoot: request.allowedAsRoot,
        variesByCulture: request.variesByCulture,
        variesBySegment: request.variesBySegment,
        isElement: request.isElement,
        compositions: request.compositions,
        hasChildren: false,
        parent: null,
        hasListView: false,
    };
};
const detailResponseMapper = (item) => {
    return {
        name: item.name,
        id: item.id,
        description: item.description,
        alias: item.alias,
        icon: item.icon,
        properties: item.properties,
        containers: item.containers,
        allowedAsRoot: item.allowedAsRoot,
        variesByCulture: item.variesByCulture,
        variesBySegment: item.variesBySegment,
        isElement: item.isElement,
        compositions: item.compositions,
    };
};
const memberTypeTreeItemMapper = (item) => {
    return {
        name: item.name,
        hasChildren: item.hasChildren,
        id: item.id,
        parent: item.parent,
        isFolder: false,
        icon: item.icon,
    };
};
const itemResponseMapper = (item) => {
    return {
        id: item.id,
        name: item.name,
        icon: item.icon,
    };
};
export const umbMemberTypeMockDb = new UmbMemberTypeMockDB(data);

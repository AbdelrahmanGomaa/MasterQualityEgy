import { UmbMockEntityDetailManager } from '../utils/entity/entity-detail.manager.js';
import { UmbEntityMockDbBase } from '../utils/entity/entity-base.js';
import { data } from './relationType.data.js';
class UmbRelationTypeMockDB extends UmbEntityMockDbBase {
    constructor(data) {
        super(data);
        this.item = new UmbMockEntityDetailManager(this, itemResponseMapper, createDetailMockMapper);
        this.detail = new UmbMockEntityDetailManager(this, createDetailMockMapper, detailResponseMapper);
    }
}
const createDetailMockMapper = () => {
    throw new Error('Not possible to create a relation type');
};
const detailResponseMapper = (item) => {
    return {
        id: item.id,
        isBidirectional: item.isBidirectional,
        isDependency: item.isDependency,
        name: item.name,
        alias: item.alias,
        childObject: item.childObject,
        parentObject: item.parentObject,
    };
};
const itemResponseMapper = (item) => {
    return {
        id: item.id,
        name: item.name,
        isDeletable: item.isDeletable,
    };
};
export const umbRelationTypeMockDb = new UmbRelationTypeMockDB(data);

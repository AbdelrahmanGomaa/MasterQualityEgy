import { UmbMockEntityDetailManager } from '../utils/entity/entity-detail.manager.js';
import { UmbEntityMockDbBase } from '../utils/entity/entity-base.js';
import { data } from './relation.data.js';
class UmbRelationMockDB extends UmbEntityMockDbBase {
    constructor(data) {
        super(data);
        this.item = new UmbMockEntityDetailManager(this, itemResponseMapper, createDetailMockMapper);
    }
}
const createDetailMockMapper = () => {
    throw new Error('Not possible to create a relation');
};
const itemResponseMapper = (item) => {
    return {
        id: item.id,
        child: item.child,
        createDate: item.createDate,
        parent: item.parent,
        relationType: item.relationType,
        comment: item.comment,
    };
};
export const umbRelationMockDb = new UmbRelationMockDB(data);

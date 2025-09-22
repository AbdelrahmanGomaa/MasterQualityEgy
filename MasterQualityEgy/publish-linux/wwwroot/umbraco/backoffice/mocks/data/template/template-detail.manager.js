import { UmbMockEntityDetailManager } from '../utils/entity/entity-detail.manager.js';
import { createTemplateScaffold } from './template.data.js';
import { UmbId } from '@umbraco-cms/backoffice/id';
export class UmbMockTemplateDetailManager extends UmbMockEntityDetailManager {
    constructor(db) {
        super(db, createDetailMockMapper, detailResponseMapper);
    }
    createScaffold() {
        return createTemplateScaffold('master');
    }
}
const createDetailMockMapper = (request) => {
    return {
        id: UmbId.new(),
        parent: null,
        name: request.name,
        hasChildren: false,
        alias: request.alias,
        content: request.content,
    };
};
const detailResponseMapper = (item) => {
    return {
        id: item.id,
        name: item.name,
        alias: item.alias,
        content: item.content,
    };
};

import { UmbEntityMockDbBase } from '../utils/entity/entity-base.js';
import { UmbMockEntityFolderManager } from '../utils/entity/entity-folder.manager.js';
import { UmbMockEntityTreeManager } from '../utils/entity/entity-tree.manager.js';
import { UmbMockEntityItemManager } from '../utils/entity/entity-item.manager.js';
import { UmbMockEntityDetailManager } from '../utils/entity/entity-detail.manager.js';
import { data } from './document-type.data.js';
import { UmbId } from '@umbraco-cms/backoffice/id';
class UmbDocumentTypeMockDB extends UmbEntityMockDbBase {
    constructor(data) {
        super(data);
        this.tree = new UmbMockEntityTreeManager(this, documentTypeTreeItemMapper);
        this.folder = new UmbMockEntityFolderManager(this, createMockDocumentTypeFolderMapper);
        this.item = new UmbMockEntityItemManager(this, documentTypeItemMapper);
        this.detail = new UmbMockEntityDetailManager(this, createMockDocumentTypeMapper, documentTypeDetailMapper);
    }
    getAllowedChildren(id) {
        const documentType = this.detail.read(id);
        const allowedDocumentTypes = documentType.allowedDocumentTypes.map((sortModel) => this.detail.read(sortModel.documentType.id));
        const mappedItems = allowedDocumentTypes.map((item) => allowedDocumentTypeMapper(item));
        return { items: mappedItems, total: mappedItems.length };
    }
    getAllowedAtRoot() {
        const mockItems = this.data.filter((item) => item.allowedAsRoot);
        const mappedItems = mockItems.map((item) => allowedDocumentTypeMapper(item));
        return { items: mappedItems, total: mappedItems.length };
    }
}
const createMockDocumentTypeFolderMapper = (request) => {
    return {
        name: request.name,
        id: request.id ? request.id : UmbId.new(),
        parent: request.parent,
        description: '',
        alias: '',
        icon: '',
        properties: [],
        containers: [],
        allowedAsRoot: false,
        variesByCulture: false,
        variesBySegment: false,
        isElement: false,
        allowedDocumentTypes: [],
        compositions: [],
        isFolder: true,
        hasChildren: false,
        allowedTemplates: [],
        cleanup: {
            preventCleanup: false,
            keepAllVersionsNewerThanDays: null,
            keepLatestVersionPerDayForDays: null,
        },
    };
};
const createMockDocumentTypeMapper = (request) => {
    return {
        name: request.name,
        id: request.id ? request.id : UmbId.new(),
        description: request.description,
        alias: request.alias,
        icon: request.icon,
        properties: request.properties,
        containers: request.containers,
        allowedAsRoot: request.allowedAsRoot,
        variesByCulture: request.variesByCulture,
        variesBySegment: request.variesBySegment,
        isElement: request.isElement,
        allowedDocumentTypes: request.allowedDocumentTypes,
        compositions: request.compositions,
        parent: request.parent,
        isFolder: false,
        hasChildren: false,
        allowedTemplates: [],
        cleanup: {
            preventCleanup: false,
            keepAllVersionsNewerThanDays: null,
            keepLatestVersionPerDayForDays: null,
        },
    };
};
const documentTypeDetailMapper = (item) => {
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
        allowedDocumentTypes: item.allowedDocumentTypes,
        compositions: item.compositions,
        allowedTemplates: item.allowedTemplates,
        cleanup: item.cleanup,
        collection: item.collection,
    };
};
const documentTypeTreeItemMapper = (item) => {
    return {
        name: item.name,
        hasChildren: item.hasChildren,
        id: item.id,
        parent: item.parent,
        isFolder: item.isFolder,
        icon: item.icon,
        isElement: item.isElement,
    };
};
const documentTypeItemMapper = (item) => {
    return {
        id: item.id,
        name: item.name,
        icon: item.icon,
        isElement: item.isElement,
    };
};
const allowedDocumentTypeMapper = (item) => {
    return {
        id: item.id,
        name: item.name,
        description: item.description,
        icon: item.icon,
    };
};
export const umbDocumentTypeMockDb = new UmbDocumentTypeMockDB(data);

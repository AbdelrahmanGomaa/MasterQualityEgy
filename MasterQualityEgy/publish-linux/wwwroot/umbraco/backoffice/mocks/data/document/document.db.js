import { UmbMockEntityTreeManager } from '../utils/entity/entity-tree.manager.js';
import { UmbMockEntityItemManager } from '../utils/entity/entity-item.manager.js';
import { UmbMockEntityDetailManager } from '../utils/entity/entity-detail.manager.js';
import { umbDocumentTypeMockDb } from '../document-type/document-type.db.js';
import { UmbEntityMockDbBase } from '../utils/entity/entity-base.js';
import { UmbEntityRecycleBin } from '../utils/entity/entity-recycle-bin.js';
import { data } from './document.data.js';
import { UmbMockDocumentCollectionManager } from './document-collection.manager.js';
import { UmbMockDocumentPublishingManager } from './document-publishing.manager.js';
import { DocumentVariantStateModel } from '@umbraco-cms/backoffice/external/backend-api';
import { UmbId } from '@umbraco-cms/backoffice/id';
export class UmbDocumentMockDB extends UmbEntityMockDbBase {
    constructor(data) {
        super(data);
        this.tree = new UmbMockEntityTreeManager(this, treeItemMapper);
        this.item = new UmbMockEntityItemManager(this, itemMapper);
        this.detail = new UmbMockEntityDetailManager(this, createMockDocumentMapper, detailResponseMapper);
        this.recycleBin = new UmbEntityRecycleBin(this.data, treeItemMapper);
        this.publishing = new UmbMockDocumentPublishingManager(this);
        this.collection = new UmbMockDocumentCollectionManager(this, collectionMapper);
    }
    // permissions
    getUserPermissionsForDocument() {
        return [];
    }
    getDomainsForDocument() {
        return { defaultIsoCode: 'en-us', domains: [] };
    }
    getConfiguration() {
        return {
            allowEditInvariantFromNonDefault: true,
            allowNonExistingSegmentsCreation: true,
            disableDeleteWhenReferenced: true,
            disableUnpublishWhenReferenced: true,
            reservedFieldNames: [],
        };
    }
}
const treeItemMapper = (model) => {
    const documentType = umbDocumentTypeMockDb.read(model.documentType.id);
    if (!documentType)
        throw new Error(`Document type with id ${model.documentType.id} not found`);
    return {
        ancestors: model.ancestors,
        documentType: {
            icon: documentType.icon,
            id: documentType.id,
        },
        hasChildren: model.hasChildren,
        id: model.id,
        isProtected: model.isProtected,
        isTrashed: model.isTrashed,
        noAccess: model.noAccess,
        parent: model.parent,
        variants: model.variants,
        createDate: model.createDate,
    };
};
const createMockDocumentMapper = (request) => {
    const documentType = umbDocumentTypeMockDb.read(request.documentType.id);
    if (!documentType)
        throw new Error(`Document type with id ${request.documentType.id} not found`);
    const isRoot = request.parent === null || request.parent === undefined;
    let ancestors = [];
    if (!isRoot) {
        const parentId = request.parent.id;
        const parentAncestors = umbDocumentMockDb.tree.getAncestorsOf({ descendantId: parentId }).map((ancestor) => {
            return {
                id: ancestor.id,
            };
        });
        ancestors = [...parentAncestors, { id: parentId }];
    }
    const now = new Date().toString();
    return {
        ancestors,
        documentType: {
            id: documentType.id,
            icon: documentType.icon,
            collection: undefined, // TODO: get list from doc type when ready
        },
        hasChildren: false,
        id: request.id ? request.id : UmbId.new(),
        createDate: now,
        isProtected: false,
        isTrashed: false,
        noAccess: false,
        parent: request.parent,
        // TODO: Currently trusting we did send the editorAlias to the create end point:
        values: request.values,
        variants: request.variants.map((variantRequest) => {
            return {
                culture: variantRequest.culture,
                segment: variantRequest.segment,
                name: variantRequest.name,
                createDate: now,
                updateDate: now,
                state: DocumentVariantStateModel.DRAFT,
                publishDate: null,
            };
        }),
        urls: [],
    };
};
const detailResponseMapper = (model) => {
    return {
        documentType: model.documentType,
        id: model.id,
        isTrashed: model.isTrashed,
        template: model.template,
        urls: model.urls,
        values: model.values,
        variants: model.variants,
    };
};
const itemMapper = (model) => {
    return {
        documentType: {
            collection: model.documentType.collection,
            icon: model.documentType.icon,
            id: model.documentType.id,
        },
        hasChildren: model.hasChildren,
        id: model.id,
        isProtected: model.isProtected,
        isTrashed: model.isTrashed,
        parent: model.parent,
        variants: model.variants,
    };
};
const collectionMapper = (model) => {
    return {
        ancestors: model.ancestors,
        creator: null,
        documentType: {
            id: model.documentType.id,
            alias: '',
            icon: model.documentType.icon,
        },
        id: model.id,
        isProtected: model.isProtected,
        isTrashed: model.isTrashed,
        sortOrder: 0,
        updater: null,
        values: model.values,
        variants: model.variants,
    };
};
export const umbDocumentMockDb = new UmbDocumentMockDB(data);

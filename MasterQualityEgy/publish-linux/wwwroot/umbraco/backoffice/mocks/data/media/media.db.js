import { UmbMockEntityTreeManager } from '../utils/entity/entity-tree.manager.js';
import { UmbMockEntityItemManager } from '../utils/entity/entity-item.manager.js';
import { UmbMockEntityDetailManager } from '../utils/entity/entity-detail.manager.js';
import { umbMediaTypeMockDb } from '../media-type/media-type.db.js';
import { UmbEntityMockDbBase } from '../utils/entity/entity-base.js';
import { UmbEntityRecycleBin } from '../utils/entity/entity-recycle-bin.js';
import { UmbMockMediaCollectionManager } from './media-collection.manager.js';
import { data } from './media.data.js';
import { UmbId } from '@umbraco-cms/backoffice/id';
export class UmbMediaMockDB extends UmbEntityMockDbBase {
    constructor(data) {
        super(data);
        this.tree = new UmbMockEntityTreeManager(this, treeItemMapper);
        this.item = new UmbMockEntityItemManager(this, itemMapper);
        this.detail = new UmbMockEntityDetailManager(this, createMockMediaMapper, detailResponseMapper);
        this.recycleBin = new UmbEntityRecycleBin(this.data, treeItemMapper);
        this.collection = new UmbMockMediaCollectionManager(this, collectionMapper);
    }
}
const treeItemMapper = (model) => {
    const mediaType = umbMediaTypeMockDb.read(model.mediaType.id);
    if (!mediaType)
        throw new Error(`Media type with id ${model.mediaType.id} not found`);
    return {
        mediaType: {
            collection: model.mediaType.collection,
            icon: model.mediaType.icon,
            id: model.mediaType.id,
        },
        hasChildren: model.hasChildren,
        id: model.id,
        isTrashed: model.isTrashed,
        noAccess: model.noAccess,
        parent: model.parent,
        variants: model.variants,
        createDate: model.createDate,
    };
};
const createMockMediaMapper = (request) => {
    const mediaType = umbMediaTypeMockDb.read(request.mediaType.id);
    if (!mediaType)
        throw new Error(`Media type with id ${request.mediaType.id} not found`);
    const now = new Date().toString();
    return {
        mediaType: {
            id: mediaType.id,
            icon: mediaType.icon,
            collection: mediaType.collection,
        },
        hasChildren: false,
        id: request.id ? request.id : UmbId.new(),
        createDate: now,
        isTrashed: false,
        noAccess: false,
        parent: request.parent,
        // We trust blindly that we send of the editorAlias to the create end point.
        values: request.values,
        variants: request.variants.map((variantRequest) => {
            return {
                culture: variantRequest.culture,
                segment: variantRequest.segment,
                name: variantRequest.name,
                createDate: now,
                updateDate: now,
                publishDate: null,
            };
        }),
        urls: [],
    };
};
const detailResponseMapper = (model) => {
    return {
        mediaType: model.mediaType,
        id: model.id,
        isTrashed: model.isTrashed,
        urls: model.urls,
        values: model.values,
        variants: model.variants,
    };
};
const itemMapper = (model) => {
    return {
        mediaType: {
            collection: model.mediaType.collection,
            icon: model.mediaType.icon,
            id: model.mediaType.id,
        },
        hasChildren: model.hasChildren,
        id: model.id,
        isTrashed: model.isTrashed,
        parent: model.parent,
        variants: model.variants,
    };
};
const collectionMapper = (model) => {
    return {
        creator: null,
        id: model.id,
        mediaType: {
            id: model.mediaType.id,
            alias: '',
            icon: model.mediaType.icon,
        },
        sortOrder: 0,
        values: model.values,
        variants: model.variants,
    };
};
export const umbMediaMockDb = new UmbMediaMockDB(data);

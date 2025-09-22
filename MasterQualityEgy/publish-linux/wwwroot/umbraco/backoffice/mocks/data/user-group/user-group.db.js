import { queryFilter } from '../utils.js';
import { UmbEntityMockDbBase } from '../utils/entity/entity-base.js';
import { UmbMockEntityDetailManager } from '../utils/entity/entity-detail.manager.js';
import { UmbMockEntityItemManager } from '../utils/entity/entity-item.manager.js';
import { data } from './user-group.data.js';
import { UmbId } from '@umbraco-cms/backoffice/id';
const userGroupQueryFilter = (filterOptions, item) => queryFilter(filterOptions.filter, item.name);
export class UmbUserGroupMockDB extends UmbEntityMockDbBase {
    constructor(data) {
        super(data);
        this.item = new UmbMockEntityItemManager(this, itemMapper);
        this.detail = new UmbMockEntityDetailManager(this, createMockMapper, detailResponseMapper);
    }
    /**
     * Returns a list of permissions for the given user group ids
     * @param {string[]} userGroupIds
     * @returns {*}  {string[]}
     * @memberof UmbUserGroupData
     */
    getPermissions(userGroupIds) {
        const permissions = this.data
            .filter((userGroup) => userGroupIds.map((reference) => reference.id).includes(userGroup.id))
            .map((userGroup) => (userGroup.permissions?.length ? userGroup.permissions : []))
            .flat();
        // Remove duplicates
        const uniqueArray = Array.from(new Set(permissions.map((e) => JSON.stringify(e)))).map((e) => JSON.parse(e));
        return uniqueArray;
    }
    getFallbackPermissions(userGroupIds) {
        const fallbackPermissions = this.data
            .filter((userGroup) => userGroupIds.map((reference) => reference.id).includes(userGroup.id))
            .map((userGroup) => (userGroup.fallbackPermissions?.length ? userGroup.fallbackPermissions : []))
            .flat();
        // Remove duplicates
        return Array.from(new Set(fallbackPermissions));
    }
    getAllowedSections(userGroupIds) {
        const sections = this.data
            .filter((userGroup) => userGroupIds.map((reference) => reference.id).includes(userGroup.id))
            .map((userGroup) => (userGroup.sections?.length ? userGroup.sections : []))
            .flat();
        // Remove duplicates
        return Array.from(new Set(sections));
    }
    filter(options) {
        const allItems = this.getAll();
        const filterOptions = {
            skip: options.skip || 0,
            take: options.take || 25,
            filter: options.filter,
        };
        const filteredItems = allItems.filter((item) => userGroupQueryFilter(filterOptions, item));
        const totalItems = filteredItems.length;
        const paginatedItems = filteredItems.slice(filterOptions.skip, filterOptions.skip + filterOptions.take);
        return { total: totalItems, items: paginatedItems };
    }
}
const itemMapper = (item) => {
    return {
        id: item.id,
        name: item.name,
        icon: item.icon,
    };
};
const createMockMapper = (item) => {
    return {
        alias: item.alias,
        documentRootAccess: item.documentRootAccess,
        documentStartNode: item.documentStartNode,
        hasAccessToAllLanguages: item.hasAccessToAllLanguages,
        icon: item.icon,
        id: UmbId.new(),
        languages: item.languages,
        mediaRootAccess: item.mediaRootAccess,
        mediaStartNode: item.mediaStartNode,
        name: item.name,
        fallbackPermissions: item.fallbackPermissions,
        permissions: item.permissions,
        sections: item.sections,
        aliasCanBeChanged: true,
        isDeletable: true,
    };
};
const detailResponseMapper = (item) => {
    return {
        alias: item.alias,
        documentRootAccess: item.documentRootAccess,
        documentStartNode: item.documentStartNode,
        hasAccessToAllLanguages: item.hasAccessToAllLanguages,
        icon: item.icon,
        id: item.id,
        languages: item.languages,
        mediaRootAccess: item.mediaRootAccess,
        mediaStartNode: item.mediaStartNode,
        name: item.name,
        fallbackPermissions: item.fallbackPermissions,
        permissions: item.permissions,
        sections: item.sections,
        aliasCanBeChanged: item.aliasCanBeChanged,
        isDeletable: item.isDeletable,
    };
};
export const umbUserGroupMockDb = new UmbUserGroupMockDB(data);

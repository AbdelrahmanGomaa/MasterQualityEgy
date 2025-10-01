import { UmbMockCultureItemManager } from '../utils/culture/culture-item.manager.js';
import { UmbCultureMockDbBase } from '../utils/culture/culture-base.js';
import { UmbMockCultureDetailManager } from '../utils/culture/culture-detail.manager.js';
import { data } from './language.data.js';
class UmbLanguageMockDB extends UmbCultureMockDbBase {
    constructor(data) {
        super(data);
        this.item = new UmbMockCultureItemManager(this, itemResponseMapper);
        this.detail = new UmbMockCultureDetailManager(this, createDetailMockMapper, detailResponseMapper);
    }
}
const createDetailMockMapper = (request) => {
    return {
        fallbackIsoCode: request.fallbackIsoCode,
        isDefault: request.isDefault,
        isMandatory: request.isMandatory,
        isoCode: request.isoCode,
        name: request.name,
    };
};
const detailResponseMapper = (item) => {
    return {
        fallbackIsoCode: item.fallbackIsoCode,
        isDefault: item.isDefault,
        isMandatory: item.isMandatory,
        isoCode: item.isoCode,
        name: item.name,
    };
};
const itemResponseMapper = (item) => {
    return {
        isoCode: item.isoCode,
        name: item.name,
    };
};
export const umbLanguageMockDb = new UmbLanguageMockDB(data);

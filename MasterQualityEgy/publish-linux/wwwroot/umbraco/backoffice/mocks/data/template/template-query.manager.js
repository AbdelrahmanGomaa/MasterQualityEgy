import { templateQueryResult, templateQuerySettings } from './template.data.js';
export class UmbMockTemplateQueryManager {
    constructor() {
        this.getQuerySettings = () => templateQuerySettings;
        this.getQueryResult = () => templateQueryResult;
    }
}

import { UmbEntityMockDbBase } from './entity-base.js';
import { UmbMockEntityTreeManager } from './entity-tree.manager.js';
export class UmbEntityRecycleBin extends UmbEntityMockDbBase {
    constructor(data, treeItemMapper) {
        super(data);
        this.tree = new UmbMockEntityTreeManager(this, treeItemMapper);
    }
    trash(ids) {
        const models = ids.map((id) => this.read(id)).filter((model) => !!model);
        models.forEach((model) => {
            model.isTrashed = true;
        });
        models.forEach((model) => {
            this.update(model.id, model);
        });
    }
}

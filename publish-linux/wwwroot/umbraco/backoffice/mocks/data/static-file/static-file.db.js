import { UmbFileSystemMockDbBase } from '../utils/file-system/file-system-base.js';
import { UmbMockFileSystemItemManager } from '../utils/file-system/file-system-item.manager.js';
import { UmbMockFileSystemTreeManager } from '../utils/file-system/file-system-tree.manager.js';
import { data as staticFileData } from './static-file.data.js';
class UmbStaticFileMockDB extends UmbFileSystemMockDbBase {
    constructor(data) {
        super(data);
        this.tree = new UmbMockFileSystemTreeManager(this);
        this.item = new UmbMockFileSystemItemManager(this);
    }
}
export const umbStaticFileMockDb = new UmbStaticFileMockDB(staticFileData);

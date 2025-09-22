import { UmbFileSystemMockDbBase } from '../utils/file-system/file-system-base.js';
import { UmbMockFileSystemFolderManager } from '../utils/file-system/file-system-folder.manager.js';
import { UmbMockFileSystemItemManager } from '../utils/file-system/file-system-item.manager.js';
import { UmbMockFileSystemTreeManager } from '../utils/file-system/file-system-tree.manager.js';
import { UmbMockFileSystemDetailManager } from '../utils/file-system/file-system-detail.manager.js';
import { data as scriptData } from './script.data.js';
class UmbScriptMockDB extends UmbFileSystemMockDbBase {
    constructor(data) {
        super(data);
        this.tree = new UmbMockFileSystemTreeManager(this);
        this.folder = new UmbMockFileSystemFolderManager(this);
        this.item = new UmbMockFileSystemItemManager(this);
        this.file = new UmbMockFileSystemDetailManager(this);
    }
}
export const umbScriptMockDb = new UmbScriptMockDB(scriptData);

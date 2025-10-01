import { UmbFileSystemMockDbBase } from '../utils/file-system/file-system-base.js';
import { UmbMockFileSystemDetailManager } from '../utils/file-system/file-system-detail.manager.js';
import { UmbMockFileSystemFolderManager } from '../utils/file-system/file-system-folder.manager.js';
import { UmbMockFileSystemItemManager } from '../utils/file-system/file-system-item.manager.js';
import { UmbMockFileSystemTreeManager } from '../utils/file-system/file-system-tree.manager.js';
import { data } from './stylesheet.data.js';
class UmbStylesheetMockDb extends UmbFileSystemMockDbBase {
    constructor(data) {
        super(data);
        this.tree = new UmbMockFileSystemTreeManager(this);
        this.item = new UmbMockFileSystemItemManager(this);
        this.folder = new UmbMockFileSystemFolderManager(this);
        this.file = new UmbMockFileSystemDetailManager(this);
    }
}
export const umbStylesheetMockDb = new UmbStylesheetMockDb(data);

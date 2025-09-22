import { UmbFileSystemMockDbBase } from '../utils/file-system/file-system-base.js';
import { UmbMockFileSystemFolderManager } from '../utils/file-system/file-system-folder.manager.js';
import { UmbMockFileSystemItemManager } from '../utils/file-system/file-system-item.manager.js';
import { UmbMockFileSystemTreeManager } from '../utils/file-system/file-system-tree.manager.js';
import { UmbMockFileSystemDetailManager } from '../utils/file-system/file-system-detail.manager.js';
import { data, snippets } from './partial-view.data.js';
class UmbPartialViewMockDB extends UmbFileSystemMockDbBase {
    constructor(data) {
        super(data);
        this.tree = new UmbMockFileSystemTreeManager(this);
        this.folder = new UmbMockFileSystemFolderManager(this);
        this.item = new UmbMockFileSystemItemManager(this);
        this.file = new UmbMockFileSystemDetailManager(this);
    }
    getSnippets() {
        const snippetItems = snippets.map((item) => createSnippetItem(item));
        const total = snippetItems.length;
        return { items: snippetItems, total };
    }
    getSnippet(id) {
        return snippets.find((item) => item.id === id);
    }
}
const createSnippetItem = (item) => {
    return {
        name: item.name,
        id: item.id,
    };
};
export const umbPartialViewMockDB = new UmbPartialViewMockDB(data);

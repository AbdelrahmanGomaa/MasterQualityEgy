import { pagedResult } from '../paged-result.js';
const contentQueryFilter = () => {
    return true;
    console.log('implement filter logic for content items');
    //queryFilter(filterOptions.filter, item.name);
};
export class UmbMockContentCollectionManager {
    #db;
    #collectionItemReadMapper;
    constructor(db, collectionItemReadMapper) {
        this.#db = db;
        this.#collectionItemReadMapper = collectionItemReadMapper;
    }
    getItems(options) {
        const allItems = this.#db.getAll();
        const filterOptions = {
            skip: options.skip || 0,
            take: options.take || 25,
            filter: options.filter,
        };
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const filteredItems = allItems.filter((item) => contentQueryFilter(filterOptions, item));
        const paginatedResult = pagedResult(filteredItems, filterOptions.skip, filterOptions.take);
        const mappedItems = paginatedResult.items.map((item) => this.#collectionItemReadMapper(item));
        return { items: mappedItems, total: paginatedResult.total };
    }
}

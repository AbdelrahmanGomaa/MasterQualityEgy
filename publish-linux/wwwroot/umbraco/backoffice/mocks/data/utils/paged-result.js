/**
 *
 * @param allItems
 * @param skip
 * @param take
 */
export function pagedResult(allItems, skip, take) {
    const total = allItems.length;
    const paginatedItems = allItems.slice(skip, take + skip);
    return { items: paginatedItems, total };
}

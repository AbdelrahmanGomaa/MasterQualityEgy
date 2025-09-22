export const arrayFilter = (filterBy, value) => {
    // if a filter is not set, return all items
    if (!filterBy) {
        return true;
    }
    return filterBy.some((filterValue) => value?.includes(filterValue));
};
export const objectArrayFilter = (filterBy, value, key) => {
    if (!filterBy || !value) {
        return true;
    }
    return value.map((value) => value[key]).some((value) => filterBy.includes(value));
};
export const stringFilter = (filterBy, value) => {
    // if a filter is not set, return all items
    if (!filterBy || !value) {
        return true;
    }
    return filterBy.includes(value);
};
export const queryFilter = (filterBy, value) => {
    if (!filterBy || !value) {
        return true;
    }
    const query = filterBy.toLowerCase();
    return value.toLowerCase().includes(query);
};
/**
 * Creates a problem details object.
 * @param {object} problemDetails The problem details object.
 * @param {string} problemDetails.title The title of the problem, which will be shown to the user.
 * @param {string} problemDetails.detail A human-readable explanation specific to this occurrence of the problem, which will be shown to the user.
 * @param {number} problemDetails.status The HTTP status code for this occurrence of the problem.
 * @param {string} problemDetails.type A URI reference that identifies the problem type.
 * @returns {object} The problem details object.
 */
export function createProblemDetails(problemDetails) {
    return problemDetails;
}

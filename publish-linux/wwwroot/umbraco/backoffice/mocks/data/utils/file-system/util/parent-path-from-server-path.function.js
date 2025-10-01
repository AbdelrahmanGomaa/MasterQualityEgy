export const getParentPathFromServerPath = (serverPath) => {
    const parentPath = serverPath.substring(0, serverPath.lastIndexOf('/'));
    return parentPath || null;
};

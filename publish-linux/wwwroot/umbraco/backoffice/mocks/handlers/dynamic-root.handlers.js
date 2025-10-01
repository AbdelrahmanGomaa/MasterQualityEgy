import { umbDocumentMockDb } from '../data/document/document.db.js';
import { umbracoPath } from '@umbraco-cms/backoffice/utils';
const { rest } = window.MockServiceWorker;
export const handlers = [
    rest.post(umbracoPath('/dynamic-root/query'), async (req, res, ctx) => {
        const response = umbDocumentMockDb.tree
            .getRoot()
            .items.map((item) => item.id)
            .slice(0, 1);
        return res(ctx.status(200), ctx.json(response));
    }),
];

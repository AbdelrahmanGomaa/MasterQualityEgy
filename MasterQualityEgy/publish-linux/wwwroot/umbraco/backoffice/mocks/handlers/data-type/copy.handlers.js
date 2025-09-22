const { rest } = window.MockServiceWorker;
import { umbDataTypeMockDb } from '../../data/data-type/data-type.db.js';
import { UMB_SLUG } from './slug.js';
import { umbracoPath } from '@umbraco-cms/backoffice/utils';
export const copyHandlers = [
    rest.post(umbracoPath(`${UMB_SLUG}/:id/copy`), async (req, res, ctx) => {
        const id = req.params.id;
        if (!id)
            return res(ctx.status(400, 'no id found'));
        const requestBody = (await req.json());
        if (!requestBody)
            return res(ctx.status(400, 'no body found'));
        if (!requestBody.target?.id)
            return res(ctx.status(400, 'no targetId found'));
        const newIds = umbDataTypeMockDb.tree.copy([id], requestBody.target.id);
        return res(ctx.status(201), ctx.set({ Location: newIds[0] }));
    }),
];

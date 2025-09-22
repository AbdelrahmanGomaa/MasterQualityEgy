const { rest } = window.MockServiceWorker;
import { umbDataTypeMockDb } from '../../data/data-type/data-type.db.js';
import { UMB_SLUG } from './slug.js';
import { umbracoPath } from '@umbraco-cms/backoffice/utils';
export const moveHandlers = [
    rest.put(umbracoPath(`${UMB_SLUG}/:id/move`), async (req, res, ctx) => {
        const id = req.params.id;
        if (!id)
            return res(ctx.status(400));
        const requestBody = (await req.json());
        if (!requestBody)
            return res(ctx.status(400, 'no body found'));
        if (!requestBody.target?.id)
            return res(ctx.status(400, 'no targetId found'));
        umbDataTypeMockDb.tree.move([id], requestBody.target.id);
        return res(ctx.status(200));
    }),
];

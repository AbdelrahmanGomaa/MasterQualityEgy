const { rest } = window.MockServiceWorker;
import { umbracoPath } from '@umbraco-cms/backoffice/utils';
export const handlers = [
    rest.get(umbracoPath('/profiling/status'), (_req, res, ctx) => {
        return res(
        // Respond with a 200 status code
        ctx.status(200), ctx.json({ enabled: true }));
    }),
    rest.put(umbracoPath('/profiling/status'), (_req, res, ctx) => {
        return res(
        // Respond with a 200 status code
        ctx.status(200));
    }),
];

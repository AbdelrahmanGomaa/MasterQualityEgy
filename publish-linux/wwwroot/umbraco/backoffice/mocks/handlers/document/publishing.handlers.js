const { rest } = window.MockServiceWorker;
import { createProblemDetails } from '../../data/utils.js';
import { umbDocumentMockDb } from '../../data/document/document.db.js';
import { UMB_SLUG } from './slug.js';
import { umbracoPath } from '@umbraco-cms/backoffice/utils';
export const publishingHandlers = [
    rest.put(umbracoPath(`${UMB_SLUG}/:id/publish`), async (req, res, ctx) => {
        const id = req.params.id;
        if (!id)
            return res(ctx.status(400));
        const requestBody = (await req.json());
        if (!requestBody)
            return res(ctx.status(400, 'no body found'));
        try {
            umbDocumentMockDb.publishing.publish(id, requestBody);
            return res(ctx.status(200));
        }
        catch (error) {
            if (error instanceof Error) {
                return res(ctx.status(400), ctx.json(createProblemDetails({ title: 'Schedule', detail: error.message })));
            }
            throw new Error('An error occurred while publishing the document');
        }
    }),
    rest.put(umbracoPath(`${UMB_SLUG}/:id/unpublish`), async (req, res, ctx) => {
        const id = req.params.id;
        if (!id)
            return res(ctx.status(400));
        const requestBody = (await req.json());
        if (!requestBody)
            return res(ctx.status(400, 'no body found'));
        umbDocumentMockDb.publishing.unpublish(id, requestBody);
        return res(ctx.status(200));
    }),
    rest.get(umbracoPath(`${UMB_SLUG}/:id/published`), async (req, res, ctx) => {
        const id = req.params.id;
        if (!id)
            return res(ctx.status(400));
        const document = umbDocumentMockDb.detail.read(id);
        if (!document)
            return res(ctx.status(404));
        const responseModel = {
            documentType: document.documentType,
            id: document.id,
            isTrashed: document.isTrashed,
            urls: document.urls,
            values: document.values,
            variants: document.variants,
            template: document.template,
        };
        return res(ctx.status(200), ctx.json(responseModel));
    }),
];

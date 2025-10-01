const { rest } = window.MockServiceWorker;
import { umbMediaMockDb } from '../../data/media/media.db.js';
import { items as referenceData } from '../../data/tracked-reference.data.js';
import { UMB_SLUG } from './slug.js';
import { umbracoPath } from '@umbraco-cms/backoffice/utils';
export const detailHandlers = [
    rest.post(umbracoPath(`${UMB_SLUG}`), async (req, res, ctx) => {
        const requestBody = (await req.json());
        if (!requestBody)
            return res(ctx.status(400, 'no body found'));
        const id = umbMediaMockDb.detail.create(requestBody);
        return res(ctx.status(201), ctx.set({
            Location: req.url.href + '/' + id,
            'Umb-Generated-Resource': id,
        }));
    }),
    rest.get(umbracoPath(`${UMB_SLUG}/:id/referenced-by`), (_req, res, ctx) => {
        const id = _req.params.id;
        if (!id)
            return;
        const PagedTrackedReference = {
            total: referenceData.length,
            items: referenceData,
        };
        return res(ctx.status(200), ctx.json(PagedTrackedReference));
    }),
    rest.get(umbracoPath(`${UMB_SLUG}/:id`), (req, res, ctx) => {
        const id = req.params.id;
        if (!id)
            return res(ctx.status(400));
        const response = umbMediaMockDb.detail.read(id);
        return res(ctx.status(200), ctx.json(response));
    }),
    rest.put(umbracoPath(`${UMB_SLUG}/:id/validate`), async (req, res, ctx) => {
        const id = req.params.id;
        if (!id)
            return res(ctx.status(400));
        const model = await req.json();
        if (!model)
            return res(ctx.status(400));
        const hasMediaPickerOrFileUploadValue = model.values.some((v) => {
            return v.editorAlias === 'Umbraco.UploadField' && v.value;
        });
        if (!hasMediaPickerOrFileUploadValue) {
            return res(ctx.status(400, 'No media picker or file upload value found'));
        }
        return res(ctx.status(200));
    }),
    rest.put(umbracoPath(`${UMB_SLUG}/:id`), async (req, res, ctx) => {
        const id = req.params.id;
        if (!id)
            return res(ctx.status(400));
        const requestBody = (await req.json());
        if (!requestBody)
            return res(ctx.status(400, 'no body found'));
        umbMediaMockDb.detail.update(id, requestBody);
        return res(ctx.status(200));
    }),
    rest.delete(umbracoPath(`${UMB_SLUG}/:id`), (req, res, ctx) => {
        const id = req.params.id;
        if (!id)
            return res(ctx.status(400));
        umbMediaMockDb.detail.delete(id);
        return res(ctx.status(200));
    }),
];

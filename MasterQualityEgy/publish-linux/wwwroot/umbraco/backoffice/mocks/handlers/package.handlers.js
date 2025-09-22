const { rest } = window.MockServiceWorker;
import { UmbId } from '@umbraco-cms/backoffice/id';
import { umbracoPath } from '@umbraco-cms/backoffice/utils';
export const handlers = [
    rest.get(umbracoPath('/package/configuration'), (_req, res, ctx) => {
        return res(
        // Respond with a 200 status code
        ctx.status(200), ctx.json({
            marketplaceUrl: 'https://marketplace.umbraco.com',
        }));
    }),
    rest.get(umbracoPath('/package/migration-status'), (_req, res, ctx) => {
        return res(
        // Respond with a 200 status code
        ctx.status(200), ctx.json({
            total: 3,
            items: [
                {
                    hasPendingMigrations: true,
                    packageName: 'Named Package',
                },
                {
                    hasPendingMigrations: true,
                    packageName: 'My Custom Migration',
                },
                {
                    hasPendingMigrations: false,
                    packageName: 'Package with a view',
                },
            ],
        }));
    }),
    rest.post(umbracoPath('/package/:name/run-migration'), async (_req, res, ctx) => {
        const name = _req.params.name;
        if (!name)
            return res(ctx.status(404));
        return res(ctx.status(200));
    }),
    rest.get(umbracoPath('/package/created'), async (_req, res, ctx) => {
        // read all
        return res(ctx.status(200), ctx.json({
            total: packageArray.length,
            items: packageArray,
        }));
    }),
    rest.post(umbracoPath('/package/created'), async (_req, res, ctx) => {
        //save
        const data = await _req.json();
        const newPackage = { ...data, id: UmbId.new(), packagePath: '' };
        packageArray.push(newPackage);
        return res(ctx.status(200), ctx.json(newPackage));
    }),
    rest.get(umbracoPath('/package/created/:id'), (_req, res, ctx) => {
        //read 1
        const id = _req.params.id;
        if (!id)
            return res(ctx.status(404));
        const found = packageArray.find((p) => p.id == id);
        if (!found)
            return res(ctx.status(404));
        return res(ctx.status(200), ctx.json(found));
    }),
    rest.put(umbracoPath('/package/created/:id'), async (_req, res, ctx) => {
        //update
        const data = await _req.json();
        if (!data.id)
            return;
        const index = packageArray.findIndex((x) => x.id === data.id);
        packageArray[index] = data;
        return res(ctx.status(200));
    }),
    rest.delete(umbracoPath('/package/created/:id'), (_req, res, ctx) => {
        //delete
        const id = _req.params.id;
        if (!id)
            return res(ctx.status(404));
        const index = packageArray.findIndex((p) => p.id == id);
        if (index <= -1)
            return res(ctx.status(404));
        packageArray.splice(index, 1);
        return res(ctx.status(200));
    }),
    rest.get(umbracoPath('/package/created/:id/download'), (_req, res, ctx) => {
        //download
        return res(ctx.status(200));
    }),
];
const packageArray = [
    {
        id: '2a0181ec-244b-4068-a1d7-2f95ed7e6da6',
        packagePath: '',
        name: 'My Package',
        contentNodeId: null,
        contentLoadChildNodes: false,
        mediaIds: [],
        mediaLoadChildNodes: false,
        documentTypes: [],
        mediaTypes: [],
        dataTypes: [],
        templates: [],
        partialViews: [],
        stylesheets: [],
        scripts: [],
        languages: [],
        dictionaryItems: [],
    },
    {
        id: '2a0181ec-244b-4068-a1d7-2f95ed7e6da7',
        packagePath: '',
        name: 'My Second Package',
        contentNodeId: null,
        contentLoadChildNodes: false,
        mediaIds: [],
        mediaLoadChildNodes: false,
        documentTypes: [],
        mediaTypes: [],
        dataTypes: [],
        templates: [],
        partialViews: [],
        stylesheets: [],
        scripts: [],
        languages: [],
        dictionaryItems: [],
    },
    {
        id: '2a0181ec-244b-4068-a1d7-2f95ed7e6da8',
        packagePath: '',
        name: 'My Third Package',
        contentNodeId: null,
        contentLoadChildNodes: false,
        mediaIds: [],
        mediaLoadChildNodes: false,
        documentTypes: [],
        mediaTypes: [],
        dataTypes: [],
        templates: [],
        partialViews: [],
        stylesheets: [],
        scripts: [],
        languages: [],
        dictionaryItems: [],
    },
];

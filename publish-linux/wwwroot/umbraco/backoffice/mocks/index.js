const { setupWorker } = window.MockServiceWorker;
import { handlers } from './browser-handlers.js';
import { umbracoPath } from '@umbraco-cms/backoffice/utils';
const worker = setupWorker(...handlers);
export { setupWorker };
export const onUnhandledRequest = (req) => {
    if (req.url.pathname.startsWith(umbracoPath(''))) {
        console.warn('Found an unhandled %s request to %s', req.method, req.url.href);
    }
};
export const startMockServiceWorker = (config) => worker.start({
    onUnhandledRequest,
    // TODO: this can not rely on a VITE variable
    quiet: import.meta.env.VITE_MSW_QUIET === 'on',
    ...config,
});

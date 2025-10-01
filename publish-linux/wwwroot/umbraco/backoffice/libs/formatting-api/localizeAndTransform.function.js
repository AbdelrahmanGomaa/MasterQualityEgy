import { UmbFormattingController } from './formatting.controller.js';
/**
 * @param host
 * @param input
 * @deprecated - Use the `<umb-ufm-render>` component instead. This method will be removed in Umbraco 15.
 */
export function localizeAndTransform(host, input) {
    return new UmbFormattingController(host).transform(input);
}

import { isUmbContextProvideEventType, UMB_CONTEXT_PROVIDE_EVENT_TYPE } from '../provide/context-provide.event.js';
import { UmbContextRequestEventImplementation } from './context-request.event.js';
/**
 * @class UmbContextConsumer
 */
export class UmbContextConsumer {
    #skipHost;
    #stopAtContextMatch;
    #callback;
    #promise;
    #promiseResolver;
    #instance;
    get instance() {
        return this.#instance;
    }
    #contextAlias;
    #apiAlias;
    #discriminator;
    /**
     * Creates an instance of UmbContextConsumer.
     * @param {Element} host - The host element.
     * @param {string} contextIdentifier - The context identifier, an alias or a Context Token.
     * @param {UmbContextCallback} callback - The callback.
     * @memberof UmbContextConsumer
     */
    constructor(host, contextIdentifier, callback) {
        this.#stopAtContextMatch = true;
        this._onResponse = (instance) => {
            if (this.#instance === instance) {
                return true;
            }
            if (instance === undefined) {
                throw new Error('Not allowed to set context api instance to undefined.');
            }
            if (this.#discriminator) {
                // Notice if discriminator returns false, we do not want to setInstance.
                if (this.#discriminator(instance)) {
                    this.setInstance(instance);
                    return true;
                }
            }
            else {
                this.setInstance(instance);
                return true;
            }
            return false;
        };
        this.#handleNewProvider = (event) => {
            // Does seem a bit unnecessary, we could just assume the type via type casting...
            if (!isUmbContextProvideEventType(event))
                return;
            if (this.#contextAlias === event.contextAlias) {
                this.request();
            }
        };
        if (typeof host === 'function') {
            this._retrieveHost = host;
        }
        else {
            this._retrieveHost = () => host;
        }
        const idSplit = contextIdentifier.toString().split('#');
        this.#contextAlias = idSplit[0];
        this.#apiAlias = idSplit[1] ?? 'default';
        this.#callback = callback;
        this.#discriminator = contextIdentifier.getDiscriminator?.();
    }
    /**
     * @public
     * @memberof UmbContextConsumer
     * @description Make the consumption skip the contexts provided by the Host element.
     * @returns {UmbContextConsumer} - The current instance of the UmbContextConsumer.
     */
    skipHost() {
        this.#skipHost = true;
        return this;
    }
    /**
     * @public
     * @memberof UmbContextConsumer
     * @description Pass beyond any context aliases that matches this.
     * The default behavior is to stop at first Context Alias match, this is to avoid receiving unforeseen descending contexts.
     * @returns {UmbContextConsumer} - The current instance of the UmbContextConsumer.
     */
    passContextAliasMatches() {
        this.#stopAtContextMatch = false;
        return this;
    }
    setInstance(instance) {
        this.#instance = instance;
        const promiseResolver = this.#promiseResolver; // Get the promise resolver, as it might be destroyed as a reaction of the callback [NL]
        this.#callback?.(instance); // Resolve callback first as it might perform something you like completed before resolving the promise, as the promise might be used to determine when things are ready/initiated [NL]
        if (promiseResolver && instance !== undefined) {
            promiseResolver(instance);
            this.#promise = undefined;
        }
    }
    /**
     * @public
     * @memberof UmbContextConsumer
     * @description Get the context as a promise.
     * @returns {UmbContextConsumer} - A promise that resolves when the context is consumed.
     */
    asPromise() {
        return (this.#promise ??
            (this.#promise = new Promise((resolve) => {
                if (this.#instance) {
                    resolve(this.#instance);
                }
                else {
                    this.#promiseResolver = resolve;
                }
            })));
    }
    /**
     * @public
     * @memberof UmbContextConsumer
     * @description Request the context from the host element.
     */
    request() {
        const event = new UmbContextRequestEventImplementation(this.#contextAlias, this.#apiAlias, this._onResponse, this.#stopAtContextMatch);
        (this.#skipHost ? this._retrieveHost()?.parentNode : this._retrieveHost())?.dispatchEvent(event);
    }
    hostConnected() {
        // TODO: We need to use closets application element. We need this in order to have separate Backoffice running within or next to each other.
        window.addEventListener(UMB_CONTEXT_PROVIDE_EVENT_TYPE, this.#handleNewProvider);
        //window.addEventListener(umbContextUnprovidedEventType, this.#handleRemovedProvider);
        this.request();
    }
    hostDisconnected() {
        // TODO: We need to use closets application element. We need this in order to have separate Backoffice running within or next to each other.
        window.removeEventListener(UMB_CONTEXT_PROVIDE_EVENT_TYPE, this.#handleNewProvider);
        //window.removeEventListener(umbContextUnprovidedEventType, this.#handleRemovedProvider);
    }
    #handleNewProvider;
    //Niels: I'm keeping this code around as it might be relevant, but I wanted to try to see if leaving this feature out for now could work for us.
    /*
    #handleRemovedProvider = (event: Event) => {
        // Does seem a bit unnecessary, we could just assume the type via type casting...
        if (!isUmbContextUnprovidedEventType(event)) return;

        if (this.#contextAlias === event.contextAlias && event.instance === this.#instance) {
            this.#unProvide();
        }
    };

    #unProvide() {
        if (this.#instance !== undefined) {
            this.#instance = undefined;
            this.#callback?.(undefined);
        }
    }
    */
    destroy() {
        this.hostDisconnected();
        this._retrieveHost = undefined;
        this.#callback = undefined;
        this.#promise = undefined;
        this.#promiseResolver = undefined;
        this.#instance = undefined;
        this.#discriminator = undefined;
    }
}

export const UMB_CONTEXT_PROVIDE_EVENT_TYPE = 'umb:context-provide';
/**
 * @class UmbContextProvideEventImplementation
 * @augments {Event}
 * @implements {UmbContextProvideEvent}
 */
export class UmbContextProvideEventImplementation extends Event {
    constructor(contextAlias) {
        super(UMB_CONTEXT_PROVIDE_EVENT_TYPE, { bubbles: true, composed: true });
        this.contextAlias = contextAlias;
    }
}
export const isUmbContextProvideEventType = (event) => {
    return event.type === UMB_CONTEXT_PROVIDE_EVENT_TYPE;
};
export const UMB_CONTEXT_UNPROVIDED_EVENT_TYPE = 'umb:context-unprovided';
/**
 * @class UmbContextUnprovidedEventImplementation
 * @augments {Event}
 * @implements {UmbContextUnprovidedEvent}
 */
/*
    export class UmbContextUnprovidedEventImplementation extends Event implements UmbContextUnprovidedEvent {
        public constructor(
            public readonly contextAlias: string | UmbContextToken,
            public readonly instance: unknown,
        ) {
            super(UMB_CONTEXT_UNPROVIDED_EVENT_TYPE, { bubbles: true, composed: true });
        }
    }

    export const isUmbContextUnprovidedEventType = (event: Event): event is UmbContextUnprovidedEventImplementation => {
        return event.type === UMB_CONTEXT_UNPROVIDED_EVENT_TYPE;
    };
*/

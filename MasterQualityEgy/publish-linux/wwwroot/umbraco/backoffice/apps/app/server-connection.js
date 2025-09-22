import { RuntimeLevelModel, ServerService } from '@umbraco-cms/backoffice/external/backend-api';
import { UmbBooleanState, UmbNumberState } from '@umbraco-cms/backoffice/observable-api';
import { tryExecute } from '@umbraco-cms/backoffice/resources';
export class UmbServerConnection {
    #url;
    #status;
    #isConnected;
    #versionCheckPeriod;
    #allowLocalLogin;
    #allowPasswordReset;
    constructor(serverUrl) {
        this.#status = RuntimeLevelModel.UNKNOWN;
        this.#isConnected = new UmbBooleanState(false);
        this.isConnected = this.#isConnected.asObservable();
        this.#versionCheckPeriod = new UmbNumberState(undefined);
        this.versionCheckPeriod = this.#versionCheckPeriod.asObservable();
        this.#allowLocalLogin = new UmbBooleanState(false);
        this.allowLocalLogin = this.#allowLocalLogin.asObservable();
        this.#allowPasswordReset = new UmbBooleanState(false);
        this.allowPasswordReset = this.#allowPasswordReset.asObservable();
        this.#url = serverUrl;
    }
    /**
     * Connects to the server.
     * @memberof UmbServerConnection
     */
    async connect() {
        await this.#setStatus();
        await this.#setServerConfiguration();
        return this;
    }
    /**
     * Gets the URL of the server.
     * @returns {*}
     * @memberof UmbServerConnection
     */
    getUrl() {
        return this.#url;
    }
    /**
     * Gets the status of the server.
     * @returns {string}
     * @memberof UmbServerConnection
     */
    getStatus() {
        if (!this.getIsConnected())
            throw new Error('Server is not connected. Remember to await connect()');
        return this.#status;
    }
    /**
     * Checks if the server is connected.
     * @returns {boolean}
     * @memberof UmbServerConnection
     */
    getIsConnected() {
        return this.#isConnected.getValue();
    }
    async #setStatus() {
        const { data, error } = await tryExecute(ServerService.getServerStatus());
        if (error) {
            throw error;
        }
        this.#isConnected.setValue(true);
        this.#status = data?.serverStatus ?? RuntimeLevelModel.UNKNOWN;
    }
    async #setServerConfiguration() {
        const { data, error } = await tryExecute(ServerService.getServerConfiguration());
        if (error) {
            throw error;
        }
        this.#versionCheckPeriod.setValue(data?.versionCheckPeriod);
        this.#allowLocalLogin.setValue(data?.allowLocalLogin ?? false);
        this.#allowPasswordReset.setValue(data?.allowPasswordReset ?? false);
    }
}

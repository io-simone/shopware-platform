import ApiService from '../api.service';

/**
 * @package system-settings
 */
class SystemConfigApiService extends ApiService {
    constructor(httpClient, loginService, apiEndpoint = 'system-config') {
        super(httpClient, loginService, apiEndpoint);
        this.name = 'systemConfigApiService';
    }

    checkConfig(domain, additionalParams = {}, additionalHeaders = {}) {
        return this.httpClient
            .get('_action/system-config/check', {
                params: { domain, ...additionalParams },
                headers: this.getBasicHeaders(additionalHeaders),
            })
            .then((response) => {
                return ApiService.handleResponse(response);
            });
    }

    getConfig(domain, additionalParams = {}, additionalHeaders = {}) {
        return this.httpClient
            .get('_action/system-config/schema', {
                params: { domain, ...additionalParams },
                headers: this.getBasicHeaders(additionalHeaders),
            })
            .then((response) => {
                return ApiService.handleResponse(response);
            });
    }

    getValues(domain, salesChannelId = null, additionalParams = {}, additionalHeaders = {}) {
        return this.httpClient
            .get('_action/system-config', {
                params: { domain, salesChannelId, ...additionalParams },
                headers: this.getBasicHeaders(additionalHeaders),
            })
            .then((response) => {
                return ApiService.handleResponse(response);
            }).then((data) => {
                // If config is empty we will receive an empty array.
                // We have to return an empty object instead because of reactivity
                return Array.isArray(data) ? {} : data;
            });
    }

    saveValues(values, salesChannelId = null, additionalParams = {}, additionalHeaders = {}) {
        return this.httpClient
            .post(
                '_action/system-config',
                values,
                {
                    params: { salesChannelId, ...additionalParams },
                    headers: this.getBasicHeaders(additionalHeaders),
                },
            )
            .then((response) => {
                return ApiService.handleResponse(response);
            });
    }

    batchSave(values, additionalParams = {}, additionalHeaders = {}) {
        return this.httpClient
            .post(
                '_action/system-config/batch',
                values,
                {
                    params: { ...additionalParams },
                    headers: this.getBasicHeaders(additionalHeaders),
                },
            )
            .then((response) => {
                return ApiService.handleResponse(response);
            });
    }
}

// eslint-disable-next-line sw-deprecation-rules/private-feature-declarations
export default SystemConfigApiService;

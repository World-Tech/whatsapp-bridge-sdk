/* tslint:disable */
/* eslint-disable */
/**
 * whatsapp-bridge Node Api
 * The whatsapp-bridge API description
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { MessageResponseDto } from '../models';
import { ReadMessageDto } from '../models';
import { ReadMessageResponseDataDto } from '../models';
import { SendTemplateDataDto } from '../models';
import { SendTextDataResponseDto } from '../models';
import { SendTextDto } from '../models';
/**
 * MessagesApi - axios parameter creator
 * @export
 */
export const MessagesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} branchId 
         * @param {number} chatId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMessages: async (branchId: number, chatId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'branchId' is not null or undefined
            if (branchId === null || branchId === undefined) {
                throw new RequiredError('branchId','Required parameter branchId was null or undefined when calling getMessages.');
            }
            // verify required parameter 'chatId' is not null or undefined
            if (chatId === null || chatId === undefined) {
                throw new RequiredError('chatId','Required parameter chatId was null or undefined when calling getMessages.');
            }
            const localVarPath = `/api/messages`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (branchId !== undefined) {
                localVarQueryParameter['branchId'] = branchId;
            }

            if (chatId !== undefined) {
                localVarQueryParameter['chatId'] = chatId;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {ReadMessageDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readMessage: async (body: ReadMessageDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling readMessage.');
            }
            const localVarPath = `/api/messages/read`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {SendTemplateDataDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendTemplateMessage: async (body: SendTemplateDataDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling sendTemplateMessage.');
            }
            const localVarPath = `/api/messages/send-template`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {SendTextDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendTextMessage: async (body: SendTextDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling sendTextMessage.');
            }
            const localVarPath = `/api/messages/send-text`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MessagesApi - functional programming interface
 * @export
 */
export const MessagesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} branchId 
         * @param {number} chatId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMessages(branchId: number, chatId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<MessageResponseDto>>> {
            const localVarAxiosArgs = await MessagesApiAxiosParamCreator(configuration).getMessages(branchId, chatId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {ReadMessageDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async readMessage(body: ReadMessageDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ReadMessageResponseDataDto>>> {
            const localVarAxiosArgs = await MessagesApiAxiosParamCreator(configuration).readMessage(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {SendTemplateDataDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendTemplateMessage(body: SendTemplateDataDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SendTextDataResponseDto>>> {
            const localVarAxiosArgs = await MessagesApiAxiosParamCreator(configuration).sendTemplateMessage(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {SendTextDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendTextMessage(body: SendTextDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SendTextDataResponseDto>>> {
            const localVarAxiosArgs = await MessagesApiAxiosParamCreator(configuration).sendTextMessage(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MessagesApi - factory interface
 * @export
 */
export const MessagesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {number} branchId 
         * @param {number} chatId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMessages(branchId: number, chatId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<MessageResponseDto>> {
            return MessagesApiFp(configuration).getMessages(branchId, chatId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ReadMessageDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async readMessage(body: ReadMessageDto, options?: AxiosRequestConfig): Promise<AxiosResponse<ReadMessageResponseDataDto>> {
            return MessagesApiFp(configuration).readMessage(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SendTemplateDataDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendTemplateMessage(body: SendTemplateDataDto, options?: AxiosRequestConfig): Promise<AxiosResponse<SendTextDataResponseDto>> {
            return MessagesApiFp(configuration).sendTemplateMessage(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SendTextDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendTextMessage(body: SendTextDto, options?: AxiosRequestConfig): Promise<AxiosResponse<SendTextDataResponseDto>> {
            return MessagesApiFp(configuration).sendTextMessage(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MessagesApi - object-oriented interface
 * @export
 * @class MessagesApi
 * @extends {BaseAPI}
 */
export class MessagesApi extends BaseAPI {
    /**
     * 
     * @param {number} branchId 
     * @param {number} chatId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    public async getMessages(branchId: number, chatId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<MessageResponseDto>> {
        return MessagesApiFp(this.configuration).getMessages(branchId, chatId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {ReadMessageDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    public async readMessage(body: ReadMessageDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<ReadMessageResponseDataDto>> {
        return MessagesApiFp(this.configuration).readMessage(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {SendTemplateDataDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    public async sendTemplateMessage(body: SendTemplateDataDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<SendTextDataResponseDto>> {
        return MessagesApiFp(this.configuration).sendTemplateMessage(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {SendTextDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    public async sendTextMessage(body: SendTextDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<SendTextDataResponseDto>> {
        return MessagesApiFp(this.configuration).sendTextMessage(body, options).then((request) => request(this.axios, this.basePath));
    }
}

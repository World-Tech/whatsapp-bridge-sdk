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
import { SendTextDto } from '../models';
import { SendTextResponseDto } from '../models';
/**
 * MessagesApi - axios parameter creator
 * @export
 */
export const MessagesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} chatId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMessages: async (chatId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * @param {SendTextDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendMessage: async (body: SendTextDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling sendMessage.');
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
         * @param {number} chatId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMessages(chatId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<MessageResponseDto>>> {
            const localVarAxiosArgs = await MessagesApiAxiosParamCreator(configuration).getMessages(chatId, options);
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
        async sendMessage(body: SendTextDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SendTextResponseDto>>> {
            const localVarAxiosArgs = await MessagesApiAxiosParamCreator(configuration).sendMessage(body, options);
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
         * @param {number} chatId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMessages(chatId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<MessageResponseDto>> {
            return MessagesApiFp(configuration).getMessages(chatId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SendTextDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendMessage(body: SendTextDto, options?: AxiosRequestConfig): Promise<AxiosResponse<SendTextResponseDto>> {
            return MessagesApiFp(configuration).sendMessage(body, options).then((request) => request(axios, basePath));
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
     * @param {number} chatId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    public async getMessages(chatId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<MessageResponseDto>> {
        return MessagesApiFp(this.configuration).getMessages(chatId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {SendTextDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    public async sendMessage(body: SendTextDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<SendTextResponseDto>> {
        return MessagesApiFp(this.configuration).sendMessage(body, options).then((request) => request(this.axios, this.basePath));
    }
}

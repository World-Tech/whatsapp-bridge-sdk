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
import { AssignToMeDto } from '../models';
import { MarkChatUnreadDto } from '../models';
import { PaginationChatResponseDto } from '../models';
import { WhatsappChatResponseDTO } from '../models';
/**
 * ChatsApi - axios parameter creator
 * @export
 */
export const ChatsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {AssignToMeDto} body 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assignToMe: async (body: AssignToMeDto, id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling assignToMe.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling assignToMe.');
            }
            const localVarPath = `/api/chats/{id}/assign-to-me`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChat: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getChat.');
            }
            const localVarPath = `/api/chats/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
         * @param {number} branchId 
         * @param {string} [q] 
         * @param {boolean} [unassigned] 
         * @param {boolean} [unread] 
         * @param {number} [rowsPerPage] 
         * @param {number} [currentPage] 
         * @param {number} [userId] 
         * @param {boolean} [externallyInitiated] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChats: async (branchId: number, q?: string, unassigned?: boolean, unread?: boolean, rowsPerPage?: number, currentPage?: number, userId?: number, externallyInitiated?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'branchId' is not null or undefined
            if (branchId === null || branchId === undefined) {
                throw new RequiredError('branchId','Required parameter branchId was null or undefined when calling getChats.');
            }
            const localVarPath = `/api/chats`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (unassigned !== undefined) {
                localVarQueryParameter['unassigned'] = unassigned;
            }

            if (unread !== undefined) {
                localVarQueryParameter['unread'] = unread;
            }

            if (rowsPerPage !== undefined) {
                localVarQueryParameter['rowsPerPage'] = rowsPerPage;
            }

            if (currentPage !== undefined) {
                localVarQueryParameter['currentPage'] = currentPage;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (branchId !== undefined) {
                localVarQueryParameter['branchId'] = branchId;
            }

            if (externallyInitiated !== undefined) {
                localVarQueryParameter['externallyInitiated'] = externallyInitiated;
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
         * @param {MarkChatUnreadDto} body 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        markChatUnread: async (body: MarkChatUnreadDto, id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling markChatUnread.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling markChatUnread.');
            }
            const localVarPath = `/api/chats/{id}/mark-chat-unread`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
 * ChatsApi - functional programming interface
 * @export
 */
export const ChatsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {AssignToMeDto} body 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async assignToMe(body: AssignToMeDto, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await ChatsApiAxiosParamCreator(configuration).assignToMe(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getChat(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<WhatsappChatResponseDTO>>> {
            const localVarAxiosArgs = await ChatsApiAxiosParamCreator(configuration).getChat(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {number} branchId 
         * @param {string} [q] 
         * @param {boolean} [unassigned] 
         * @param {boolean} [unread] 
         * @param {number} [rowsPerPage] 
         * @param {number} [currentPage] 
         * @param {number} [userId] 
         * @param {boolean} [externallyInitiated] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getChats(branchId: number, q?: string, unassigned?: boolean, unread?: boolean, rowsPerPage?: number, currentPage?: number, userId?: number, externallyInitiated?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<PaginationChatResponseDto>>> {
            const localVarAxiosArgs = await ChatsApiAxiosParamCreator(configuration).getChats(branchId, q, unassigned, unread, rowsPerPage, currentPage, userId, externallyInitiated, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {MarkChatUnreadDto} body 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async markChatUnread(body: MarkChatUnreadDto, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await ChatsApiAxiosParamCreator(configuration).markChatUnread(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ChatsApi - factory interface
 * @export
 */
export const ChatsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {AssignToMeDto} body 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async assignToMe(body: AssignToMeDto, id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return ChatsApiFp(configuration).assignToMe(body, id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getChat(id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<WhatsappChatResponseDTO>> {
            return ChatsApiFp(configuration).getChat(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} branchId 
         * @param {string} [q] 
         * @param {boolean} [unassigned] 
         * @param {boolean} [unread] 
         * @param {number} [rowsPerPage] 
         * @param {number} [currentPage] 
         * @param {number} [userId] 
         * @param {boolean} [externallyInitiated] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getChats(branchId: number, q?: string, unassigned?: boolean, unread?: boolean, rowsPerPage?: number, currentPage?: number, userId?: number, externallyInitiated?: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<PaginationChatResponseDto>> {
            return ChatsApiFp(configuration).getChats(branchId, q, unassigned, unread, rowsPerPage, currentPage, userId, externallyInitiated, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {MarkChatUnreadDto} body 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async markChatUnread(body: MarkChatUnreadDto, id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return ChatsApiFp(configuration).markChatUnread(body, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ChatsApi - object-oriented interface
 * @export
 * @class ChatsApi
 * @extends {BaseAPI}
 */
export class ChatsApi extends BaseAPI {
    /**
     * 
     * @param {AssignToMeDto} body 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatsApi
     */
    public async assignToMe(body: AssignToMeDto, id: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return ChatsApiFp(this.configuration).assignToMe(body, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatsApi
     */
    public async getChat(id: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<WhatsappChatResponseDTO>> {
        return ChatsApiFp(this.configuration).getChat(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {number} branchId 
     * @param {string} [q] 
     * @param {boolean} [unassigned] 
     * @param {boolean} [unread] 
     * @param {number} [rowsPerPage] 
     * @param {number} [currentPage] 
     * @param {number} [userId] 
     * @param {boolean} [externallyInitiated] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatsApi
     */
    public async getChats(branchId: number, q?: string, unassigned?: boolean, unread?: boolean, rowsPerPage?: number, currentPage?: number, userId?: number, externallyInitiated?: boolean, options?: AxiosRequestConfig) : Promise<AxiosResponse<PaginationChatResponseDto>> {
        return ChatsApiFp(this.configuration).getChats(branchId, q, unassigned, unread, rowsPerPage, currentPage, userId, externallyInitiated, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {MarkChatUnreadDto} body 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatsApi
     */
    public async markChatUnread(body: MarkChatUnreadDto, id: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return ChatsApiFp(this.configuration).markChatUnread(body, id, options).then((request) => request(this.axios, this.basePath));
    }
}

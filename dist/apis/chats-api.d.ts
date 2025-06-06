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
import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { AssignToMeDto } from '../models';
import { MarkChatUnreadDto } from '../models';
import { PaginationChatResponseDto } from '../models';
import { WhatsappChatResponseDTO } from '../models';
/**
 * ChatsApi - axios parameter creator
 * @export
 */
export declare const ChatsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @param {AssignToMeDto} body
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    assignToMe: (body: AssignToMeDto, id: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChat: (id: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
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
    getChats: (branchId: number, q?: string, unassigned?: boolean, unread?: boolean, rowsPerPage?: number, currentPage?: number, userId?: number, externallyInitiated?: boolean, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {MarkChatUnreadDto} body
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    markChatUnread: (body: MarkChatUnreadDto, id: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * ChatsApi - functional programming interface
 * @export
 */
export declare const ChatsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @param {AssignToMeDto} body
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    assignToMe(body: AssignToMeDto, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
    /**
     *
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChat(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<WhatsappChatResponseDTO>>>;
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
    getChats(branchId: number, q?: string, unassigned?: boolean, unread?: boolean, rowsPerPage?: number, currentPage?: number, userId?: number, externallyInitiated?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<PaginationChatResponseDto>>>;
    /**
     *
     * @param {MarkChatUnreadDto} body
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    markChatUnread(body: MarkChatUnreadDto, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
};
/**
 * ChatsApi - factory interface
 * @export
 */
export declare const ChatsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @param {AssignToMeDto} body
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    assignToMe(body: AssignToMeDto, id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChat(id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<WhatsappChatResponseDTO>>;
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
    getChats(branchId: number, q?: string, unassigned?: boolean, unread?: boolean, rowsPerPage?: number, currentPage?: number, userId?: number, externallyInitiated?: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<PaginationChatResponseDto>>;
    /**
     *
     * @param {MarkChatUnreadDto} body
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    markChatUnread(body: MarkChatUnreadDto, id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
};
/**
 * ChatsApi - object-oriented interface
 * @export
 * @class ChatsApi
 * @extends {BaseAPI}
 */
export declare class ChatsApi extends BaseAPI {
    /**
     *
     * @param {AssignToMeDto} body
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatsApi
     */
    assignToMe(body: AssignToMeDto, id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatsApi
     */
    getChat(id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<WhatsappChatResponseDTO>>;
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
    getChats(branchId: number, q?: string, unassigned?: boolean, unread?: boolean, rowsPerPage?: number, currentPage?: number, userId?: number, externallyInitiated?: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<PaginationChatResponseDto>>;
    /**
     *
     * @param {MarkChatUnreadDto} body
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatsApi
     */
    markChatUnread(body: MarkChatUnreadDto, id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
}

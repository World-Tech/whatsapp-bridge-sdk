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
import { ChatsResponseDTO } from '../models';
import { WhatsappChatResponseDTO } from '../models';
/**
 * ChatsApi - axios parameter creator
 * @export
 */
export declare const ChatsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChat: (id: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChats: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * ChatsApi - functional programming interface
 * @export
 */
export declare const ChatsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChat(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<WhatsappChatResponseDTO>>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChats(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ChatsResponseDTO>>>;
};
/**
 * ChatsApi - factory interface
 * @export
 */
export declare const ChatsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChat(id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<WhatsappChatResponseDTO>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChats(options?: AxiosRequestConfig): Promise<AxiosResponse<ChatsResponseDTO>>;
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
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatsApi
     */
    getChat(id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<WhatsappChatResponseDTO>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatsApi
     */
    getChats(options?: AxiosRequestConfig): Promise<AxiosResponse<ChatsResponseDTO>>;
}

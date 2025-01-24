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
import { MessageResponseDto } from '../models';
/**
 * MessagesApi - axios parameter creator
 * @export
 */
export declare const MessagesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @param {number} chatId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMessages: (chatId: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * MessagesApi - functional programming interface
 * @export
 */
export declare const MessagesApiFp: (configuration?: Configuration) => {
    /**
     *
     * @param {number} chatId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMessages(chatId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<MessageResponseDto>>>;
};
/**
 * MessagesApi - factory interface
 * @export
 */
export declare const MessagesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @param {number} chatId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMessages(chatId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<MessageResponseDto>>;
};
/**
 * MessagesApi - object-oriented interface
 * @export
 * @class MessagesApi
 * @extends {BaseAPI}
 */
export declare class MessagesApi extends BaseAPI {
    /**
     *
     * @param {number} chatId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    getMessages(chatId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<MessageResponseDto>>;
}

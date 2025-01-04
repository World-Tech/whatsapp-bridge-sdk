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
/**
 * HealthchecksApi - axios parameter creator
 * @export
 */
export declare const HealthchecksApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    healthcheckControllerLiveness: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    healthcheckControllerReadiness: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * HealthchecksApi - functional programming interface
 * @export
 */
export declare const HealthchecksApiFp: (configuration?: Configuration) => {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    healthcheckControllerLiveness(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    healthcheckControllerReadiness(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
};
/**
 * HealthchecksApi - factory interface
 * @export
 */
export declare const HealthchecksApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    healthcheckControllerLiveness(options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    healthcheckControllerReadiness(options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
};
/**
 * HealthchecksApi - object-oriented interface
 * @export
 * @class HealthchecksApi
 * @extends {BaseAPI}
 */
export declare class HealthchecksApi extends BaseAPI {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthchecksApi
     */
    healthcheckControllerLiveness(options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthchecksApi
     */
    healthcheckControllerReadiness(options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
}

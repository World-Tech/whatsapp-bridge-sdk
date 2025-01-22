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

import { WhatsappChatDto } from './whatsapp-chat-dto';
 /**
 * 
 *
 * @export
 * @interface WhatsappContactDto
 */
export interface WhatsappContactDto {

    /**
     * @type {number}
     * @memberof WhatsappContactDto
     * @example 23
     */
    id: number;

    /**
     * @type {number}
     * @memberof WhatsappContactDto
     * @example 5493814123123
     */
    phoneNumber: number;

    /**
     * @type {string}
     * @memberof WhatsappContactDto
     * @example Jhon Doe
     */
    pushName: string;

    /**
     * @type {string}
     * @memberof WhatsappContactDto
     * @example https://pps.whatsapp.net/v/t61.24694-24/457509556_2356010488071107_6417764276476104496_n.jpg?ccb=11-4&oh=01_Q5AaIIFucBhJzpQiltPNuSAmyUkHd0uxhyBTWGxrhxSmEaU2&oe=677BCB9A&_nc_sid=5e03e0&_nc_cat=101
     */
    profilePicUrl: string | null;

    /**
     * @type {WhatsappChatDto}
     * @memberof WhatsappContactDto
     */
    chat: WhatsappChatDto | null;
}

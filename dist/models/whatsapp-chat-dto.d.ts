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
import { WhatsappContactDto } from './whatsapp-contact-dto';
import { WhatsappMessageDto } from './whatsapp-message-dto';
/**
*
*
* @export
* @interface WhatsappChatDto
*/
export interface WhatsappChatDto {
    /**
     * @type {number}
     * @memberof WhatsappChatDto
     * @example 23
     */
    id: number;
    /**
     * @type {string}
     * @memberof WhatsappChatDto
     * @example cm55pog2s0042cbkmvehdw2ig
     */
    externalChatId: string;
    /**
     * @type {string}
     * @memberof WhatsappChatDto
     * @example 15551578788@s.whatsapp.net
     */
    remoteJid: string;
    /**
     * @type {string}
     * @memberof WhatsappChatDto
     * @example Jhon Doe
     */
    name: string;
    /**
     * @type {number}
     * @memberof WhatsappChatDto
     * @example 3
     */
    unreadMessages: number;
    /**
     * @type {Array<WhatsappMessageDto>}
     * @memberof WhatsappChatDto
     */
    messages: Array<WhatsappMessageDto>;
    /**
     * @type {WhatsappContactDto}
     * @memberof WhatsappChatDto
     */
    contact: WhatsappContactDto;
}

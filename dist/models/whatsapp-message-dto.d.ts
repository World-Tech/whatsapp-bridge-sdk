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
import { ConversationMessageDto } from './conversation-message-dto';
import { WhatsappMessageKeyDto } from './whatsapp-message-key-dto';
/**
*
*
* @export
* @interface WhatsappMessageDto
*/
export interface WhatsappMessageDto {
    /**
     * @type {number}
     * @memberof WhatsappMessageDto
     * @example 9
     */
    id: number;
    /**
     * @type {string}
     * @memberof WhatsappMessageDto
     * @example cm5o4kbjf001o8gppboeyg0xo
     */
    externalMessageId: string;
    /**
     * @type {number}
     * @memberof WhatsappMessageDto
     * @example 1736452031
     */
    messageTimestamp: number;
    /**
     * @type {ConversationMessageDto}
     * @memberof WhatsappMessageDto
     */
    message: ConversationMessageDto;
    /**
     * @type {WhatsappMessageKeyDto}
     * @memberof WhatsappMessageDto
     */
    key: WhatsappMessageKeyDto;
}

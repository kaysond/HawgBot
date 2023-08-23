import { Client, Message } from "npm:discord.js@14.13.0";
import { BaseMessageHandler } from "./MessageHandler.ts";

export class DiabloMessageHandler extends BaseMessageHandler {
  protected conditions = [
    BaseMessageHandler.not_sent_by_me,
    (_: Message, __: Client) => Math.random() < 0.33,
    (message: Message, _: Client) => message.content.search(/diablo/gi) > -1,
  ];

  protected content_options = [
    "Does anyone know what level Mike is in Diablo? I don't really care I just wanna know",
    "WHAT LEVEL IS MIKE IN DIABLO??!?",
  ];
}

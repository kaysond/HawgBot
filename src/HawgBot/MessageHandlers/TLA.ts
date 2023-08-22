import { Client, Message } from "npm:discord.js@14.13.0";
import { BaseMessageHandler } from "./MessageHandler.ts";

export class TLAMessageHandler extends BaseMessageHandler {
  protected conditions = [
    BaseMessageHandler.not_sent_by_me,
    (message: Message, _: Client) =>
      message.content.search(/ceo|cfo|cto/gi) > -1,
  ];

  protected content_options = [
    "Stop using acronyms you don't understand",
    "Don't you morons know what a quorum is?",
  ];
}

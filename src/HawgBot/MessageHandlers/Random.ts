import { Client, Message } from "npm:discord.js@14.13.0";
import { BaseMessageHandler } from "./MessageHandler.ts";

export class RandomMessageHandler extends BaseMessageHandler {
  protected conditions = [
    BaseMessageHandler.not_sent_by_me,
    (_: Message, __: Client) => Math.random() < 0.02,
  ];

  protected content_options = [
    "crossplay is cancer",
    "excuse me",
  ];
}

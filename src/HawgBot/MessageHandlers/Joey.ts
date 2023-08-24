import { Client, Message } from "npm:discord.js@14.13.0";
import { BaseMessageHandler } from "./MessageHandler.ts";
import { HawgIDs } from "../HawgIDs.ts";

export class JoeyMessageHandler extends BaseMessageHandler {
  protected conditions = [
    BaseMessageHandler.not_sent_by_me,
    (_: Message, __: Client) => Math.random() < 0.05,
    (message: Message, _: Client) => message.author.id === HawgIDs["joey"],
  ];

  protected content_options = [
    "You should just leave",
  ];
}

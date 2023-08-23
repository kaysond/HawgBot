import { Client, Message } from "npm:discord.js@14.13.0";
import { BaseMessageHandler } from "./MessageHandler.ts";
import { HawgIDs } from "../HawgIDs.ts";

export class AdamMessageHandler extends BaseMessageHandler {
  protected conditions = [
    BaseMessageHandler.not_sent_by_me,
    (_: Message, __: Client) => Math.random() < 0.3,
    (message: Message, _: Client) => message.author.id === HawgIDs["adam"],
  ];

  protected content_options = [
    "Adam is currently connecting to AOL...",
    "The only fiber Adam will pay for is dietary",
    "Adam fix your shitty internet",
    "Can you tell me more about your needs, wants, and wishes?",
  ];
}

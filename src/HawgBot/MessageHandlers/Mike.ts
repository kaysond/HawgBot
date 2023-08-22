import { Client, Message } from "npm:discord.js@14.13.0";
import { BaseMessageHandler } from "./MessageHandler.ts";

export class MikeMessageHandler extends BaseMessageHandler {
  protected conditions = [
    BaseMessageHandler.not_sent_by_me,
    (_: Message, __: Client) => Math.random() < 0.05,
    (message: Message, _: Client) => message.author.id === "592219730396315669",
  ];

  protected content_options = [
    "God dammit Mike",
    "console optimization is a myth",
    "your bad",
  ];
}

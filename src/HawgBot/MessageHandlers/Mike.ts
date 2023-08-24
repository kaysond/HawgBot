import { Client, Message } from "npm:discord.js@14.13.0";
import { BaseMessageHandler } from "./MessageHandler.ts";
import { HawgIDs } from "../HawgIDs.ts";

export class MikeMessageHandler extends BaseMessageHandler {
  protected conditions = [
    BaseMessageHandler.not_sent_by_me,
    (_: Message, __: Client) => Math.random() < 0.05,
    (message: Message, _: Client) => message.author.id === HawgIDs["mike"],
  ];

  protected content_options = [
    "God dammit Mike!",
    "console optimization is a myth",
    "your bad",
    "Mike, what level of hell goblin are you? You shantying fuck.",
    "Mike, if you tell us your level in Diablo, I have some fresh quest for you to snort off this mirror",
  ];
}

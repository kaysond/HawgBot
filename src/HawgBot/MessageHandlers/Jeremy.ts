import { Client, Message } from "npm:discord.js@14.13.0";
import { BaseMessageHandler } from "./MessageHandler.ts";
import { HawgIDs } from "../HawgIDs.ts";

export class JeremyMessageHandler extends BaseMessageHandler {
  protected conditions = [
    BaseMessageHandler.not_sent_by_me,
    (_: Message, __: Client) => Math.random() < 0.05,
    (message: Message, _: Client) => message.author.id === HawgIDs["jeremy"],
  ];

  protected content_options = [
    "Ye olde landline doth ring, good sir!",
    "Suppose you had to pick 10 numbers with which to contact you. What would they be?",
    "Jeremy what's your landline number?",
    "Jeremy is typing in his sleep again...",
  ];
}

import { Client, Message } from "npm:discord.js@14.13.0";
import { BaseMessageHandler } from "./MessageHandler.ts";
import { HawgIDs } from "../HawgIDs.ts";

export class ZachMessageHandler extends BaseMessageHandler {
  protected conditions = [
    BaseMessageHandler.not_sent_by_me,
    (_: Message, __: Client) => Math.random() < 0.05,
    (message: Message, _: Client) => message.author.id === HawgIDs["zach"],
  ];

  protected content_options = [
    "Jackie's asleep? Time to party!",
    "Are you a vampire?",
    "Can I make you party leader?",
    "Start the game already!",
  ];
}

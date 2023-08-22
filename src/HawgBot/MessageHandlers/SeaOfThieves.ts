import { Client, Message } from "npm:discord.js@14.13.0";
import { BaseMessageHandler } from "./MessageHandler.ts";

export class SeaOfThievesMessageHandler extends BaseMessageHandler {
  protected conditions = [
    BaseMessageHandler.not_sent_by_me,
    (message: Message, _: Client) =>
      message.content.search(/sea\s+of\s+thieves/gi) > -1,
  ];

  private sea_rhymes = [
    "bee",
    "brie",
    "cree",
    "fee",
    "flea",
    "ghee",
    "glee",
    "key",
    "knee",
    "pea",
    "pee",
    "plea",
    "quay",
    "ski",
    "spree",
    "sprit",
    "tea",
    "tee",
    "tree",
    "wee",
  ];

  private thieves_rhymes = [
    "eaves",
    "eves",
    "greaves",
    "leaves",
    "peeves",
    "sleeves",
    "believes",
    "greensleeves",
    "reprieves",
  ];
  public handle(message: Message, _: Client) {
    const sea =
      this.sea_rhymes[Math.floor(Math.random() * this.sea_rhymes.length)];
    const thieves = this
      .thieves_rhymes[
        Math.floor(Math.random() * this.thieves_rhymes.length)
      ];
    const content = `Wait but have you heard of the game ${sea} of ${thieves}`;
    return message.channel.send({
      "content": content,
      "reply": { "messageReference": message },
    });
  }
}

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

  private contents = [
    "Wait but have you heard of the game",
    "You mean",
    "What about",
  ];

  public constructor() {
    super();
    this.content_options = [this.contents, this.sea_rhymes, this.thieves_rhymes]
      .reduce(
        (product, array) =>
          product.flatMap((combination) =>
            array.map((item) => [...combination, item])
          ),
        [[]] as string[][],
      ).map((combination) =>
        `${combination[0]} ${combination[1]} of ${combination[2]}?`
      );
  }
}

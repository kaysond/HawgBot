import { Client, Message } from "npm:discord.js@14.13.0";

export type MessageCondition = (message: Message, client: Client) => boolean;

export interface IMessageHandler {
  should_handle(message: Message, client: Client): boolean;
  handle(message: Message, client: Client): Promise<Message | null>;
}

export class BaseMessageHandler implements IMessageHandler {
  protected conditions!: MessageCondition[];
  protected content_options = [""];
  protected content_options_used: boolean[];

  public constructor() {
    this.content_options_used = this.content_options.map((_) => false);
  }

  public static not_sent_by_me(message: Message, client: Client) {
    return client.user?.id !== null && client.user?.id !== message.author.id;
  }

  public should_handle(message: Message, client: Client) {
    for (const condition of this.conditions) {
      if (!condition.call(this, message, client)) {
        return false;
      }
    }
    return true;
  }

  protected all_content_options_used() {
    return this.content_options_used.reduce(
      (prev, current) => prev && current,
      true,
    );
  }

  protected get_random_unused_content() {
    if (this.all_content_options_used()) {
      this.content_options_used = this.content_options.map((_) => false);
    }

    let index: number;
    do {
      index = Math.random() * this.content_options.length >> 0;
    } while (this.content_options_used[index]);

    this.content_options_used[index] = true;
    return this.content_options[index];
  }

  public handle(message: Message, _: Client) {
    return message.channel.send({
      "content": this.get_random_unused_content(),
      "reply": { "messageReference": message },
    });
  }
}

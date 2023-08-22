import { Client, Message } from "npm:discord.js@14.13.0";

export type MessageCondition = (message: Message, client: Client) => boolean;

export interface IMessageHandler {
  should_handle(message: Message, client: Client): boolean;
  handle(message: Message, client: Client): Promise<Message | null>;
}

export class BaseMessageHandler implements IMessageHandler {
  protected conditions!: MessageCondition[];
  protected content_options: string[] | undefined;

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

  public handle(message: Message, _: Client) {
    const content = this.content_options === undefined
      ? ""
      : this.content_options[Math.random() * this.content_options.length >> 0];
    return message.channel.send({
      "content": content,
      "reply": { "messageReference": message },
    });
  }
}

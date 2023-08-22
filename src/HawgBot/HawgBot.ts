import { Client, Message } from "npm:discord.js@14.13.0";
import { DiabloMessageHandler } from "./MessageHandlers/Diablo.ts";
import { IMessageHandler } from "./MessageHandlers/MessageHandler.ts";
import { RandomMessageHandler } from "./MessageHandlers/Random.ts";
import { SeaOfThievesMessageHandler } from "./MessageHandlers/SeaOfThieves.ts";
import { TLAMessageHandler } from "./MessageHandlers/TLA.ts";
import { MikeMessageHandler } from "./MessageHandlers/Mike.ts";

class HawgBot {
  client: Client;
  message_handlers: IMessageHandler[];
  public constructor(client: Client) {
    this.client = client;
    this.message_handlers = [
      new DiabloMessageHandler(),
      new RandomMessageHandler(),
      new SeaOfThievesMessageHandler(),
      new TLAMessageHandler(),
      new MikeMessageHandler(),
    ];
  }

  public on_message(message: Message) {
    for (let i = 0; i < this.message_handlers.length; i++) {
      if (this.message_handlers[i].should_handle(message, this.client)) {
        console.log(`Responding to message #${message.id}`);
        return this.message_handlers[i].handle(message, this.client);
      }
    }
    return Promise.resolve(null);
  }
}

export default HawgBot;

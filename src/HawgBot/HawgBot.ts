import { Client, Message } from "npm:discord.js@14.13.0";
import { DiabloMessageHandler } from "./MessageHandlers/Diablo.ts";
import { IMessageHandler } from "./MessageHandlers/MessageHandler.ts";
import { RandomMessageHandler } from "./MessageHandlers/Random.ts";
import { SeaOfThievesMessageHandler } from "./MessageHandlers/SeaOfThieves.ts";
import { TLAMessageHandler } from "./MessageHandlers/TLA.ts";
import { MikeMessageHandler } from "./MessageHandlers/Mike.ts";
import { JeremyMessageHandler } from "./MessageHandlers/Jeremy.ts";
import { AdamMessageHandler } from "./MessageHandlers/Adam.ts";
import { DerekMessageHandler } from "./MessageHandlers/Derek.ts";
import { JoeyMessageHandler } from "./MessageHandlers/Joey.ts";
import { JustinMessageHandler } from "./MessageHandlers/Justin.ts";
import { ZachMessageHandler } from "./MessageHandlers/Zach.ts";
import { KeithMessageHandler } from "./MessageHandlers/Keith.ts";

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
      new JeremyMessageHandler(),
      new AdamMessageHandler(),
      new DerekMessageHandler(),
      new JoeyMessageHandler(),
      new JustinMessageHandler(),
      new ZachMessageHandler(),
      new KeithMessageHandler(),
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

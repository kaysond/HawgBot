import { Client, Events, GatewayIntentBits } from "npm:discord.js@14.13.0";
import "https://deno.land/std@0.199.0/dotenv/load.ts";
import HawgBot from "./HawgBot/HawgBot.ts";

const token = Deno.env.get("DISCORD_TOKEN");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
const hawgbot = new HawgBot(client);

client.login(token);
client.once(Events.ClientReady, (c) => {
  console.log(`Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, (message) => {
  console.log(
    `Received message #${message.id} from ${message.author.displayName}: ${message.content}`,
  );
  hawgbot.on_message(message).catch(() =>
    console.error("Error handling message")
  );
});

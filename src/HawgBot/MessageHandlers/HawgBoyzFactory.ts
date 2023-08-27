import { Client, Message } from "npm:discord.js@14.13.0";
import { BaseMessageHandler } from "./MessageHandler.ts";
import { HawgIDs } from "../HawgIDs.ts";

type HawgBoyResponses = { [Property in keyof typeof HawgIDs]: string[] };

const hawg_boy_response_options: HawgBoyResponses = {
  "adam": [
    "Are you still using AOL?",
    "The only fiber Adam will pay for is dietary",
    "Adam fix your shitty internet",
    "Can you tell me more about your needs, wants, and wishes?",
    "Obvi",
    "I'll figure it out when it comes around",
  ],
  "joey": [
    "You should just leave",
  ],
  "mike": [
    "God dammit Mike!",
    "console optimization is a myth",
    "your bad",
    "Mike, what level of hell goblin are you? You shantying fuck.",
    "Mike, if you tell us your level in Diablo, I have some fresh quest for you to snort off this mirror",
  ],
  "zach": [
    "Jackie's asleep? Time to party!",
    "Are you a vampire?",
    "Can I make you party leader?",
    "Start the game already!",
  ],
  "scott": [],
  "aram": [],
  "derek": ["What are your thoughts on tanks?", "I voted for Bush."],
  "jeremy": [
    "Ye olde landline doth ring, good sir!",
    "Suppose you had to pick 10 numbers with which to contact you. What would they be?",
    "Jeremy what's your landline number?",
    "Jeremy is typing in his sleep again...",
  ],
  "buddy": [],
  "justin": ["Bastard.", "Stop pushing by yourself."],
  "keith": [
    'Shouldn\'t you be off handling some kind of "magic emergency"?',
    "I want a bagel.",
  ],
};

export function HawgBoyzMessageResponders() {
  return (Object.keys(hawg_boy_response_options) as Array<
    keyof typeof hawg_boy_response_options
  >).map((
    hawg_boy,
  ) => new (HawgBoyMessageResponderFactory(hawg_boy))());
}

function HawgBoyMessageResponderFactory(hawg_boy: keyof HawgBoyResponses) {
  class HawgBoyMessagHandler extends BaseMessageHandler {
    protected conditions = [
      BaseMessageHandler.not_sent_by_me,
      (_: Message, __: Client) => Math.random() < 0.05,
      (message: Message, _: Client) => message.author.id === HawgIDs[hawg_boy],
    ];

    protected content_options = hawg_boy_response_options[hawg_boy];
  }

  return HawgBoyMessagHandler;
}

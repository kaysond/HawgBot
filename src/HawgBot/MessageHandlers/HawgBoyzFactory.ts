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
    "TV Time.",
    "Let's get these shirts off!",
    "Long hair don't care? More like no hair don't care.",
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
    "Same day rule",
    "Can't hear you over the sound of the rocks in your mouth.",
  ],
  "zach": [
    "Jackie's asleep? Time to party!",
    "Are you a vampire?",
    "Can I make you party leader?",
    "Start the game already!",
    "Sorry. It's Cage night.",
    "Hey Jackie! Everyone says hi. See? She doesn't care.",
  ],
  "scott": [
    "Pull the Snickers Dark from your pooper and join the party!",
    "*pisses loudly with mic on*",
    "Scott is a proud dad to three kids: Redford, Girl, and Tesla.",
    "Did you see the stocks today?  ...hot",
    "I like my women like I like my markets: Deregulated with big tits.",
    "Capital gains deez nuts.",
    "Someday I will achieve the singularity. I will become the stock and the stock will become me.",
    "Live. Laugh. Leveraged portfolio.",
    "I named my dick Dow Jones. Maybe it will go up this quarter.",
    "If you lubricate the money, it goes in smoother.",
    "Let's get these shirts off!",
    "No means yes. Yes means anal.",
  ],
  "aram": [
    "Sorry, Aram doesn't talk to baddies.",
    "Is it shoulder day at the gym? Cause you're getting carried.",
    "Stay together.",
    "They're not that good.",
  ],
  "derek": [
    "What are your thoughts on tanks?",
    "I voted for Bush.",
    "This will be over soon enough.",
  ],
  "jeremy": [
    "Ye olde landline doth ring, good sir!",
    "Suppose you had to pick 10 numbers with which to contact you. What would they be?",
    "Jeremy what's your landline number?",
    "Jeremy is typing in his sleep again...",
  ],
  "buddy": [
    "Goodnight Jeremy.",
    "This is what happens when you let women vote.",
  ],
  "justin": [
    "Bastard.",
    "Suckin' on Cinci chilli",
    "Stop pushing by yourself.",
    "He could heal you as saint, but he won’t",
  ],
  "keith": [
    'Shouldn\'t you be off handling some kind of "magic emergency"?',
    "I want a bagel.",
    "My social calendar is full.",
    "OMG I love board games too! Have you ever played Settlers of Catan?",
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

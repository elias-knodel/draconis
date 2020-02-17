/* import modules */
import { Client, Collection } from "discord.js";

/* require controller */
const controller: any = require("require.all")("./controller");

/* require events */
const events: any = require("require.all")("./events");

/* create bot */
const client: Client = new Client();

/* execute controller */
const commandCollections: Collection<string,any> = controller.commandHandlerController.run(client);

/* bot events */
client.on("ready", () => {
  events.ready.run(client);
});

client.on("message", (msg: any) => {
  events.message.run(client, msg, commandCollections, controller);
});

/* login bot */
controller.loginController.run(client);

/* available client.on events */
//  channelCreate
//  channelDelete
//  channelPinsUpdate
//  channelUpdate
//  clientUserGuildSettingsUpdate
//  clientUserSettingsUpdate
//  debug
//  disconnect
//  emojiCreate
//  emojiDelete
//  emojiUpdate
//  error
//  guildBanAdd
//  guildBanRemove
//  guildCreate
//  guildDelete
//  guildMemberAdd
//  guildMemberAvailable
//  guildMemberRemove
//  guildMembersChunk
//  guildMemberSpeaking
//  guildMemberUpdate
//  guildUnavailable
//  guildUpdate
//  guildIntegrationsUpdate
//  message
//  messageDelete
//  messageDeleteBulk
//  messageReactionAdd
//  messageReactionRemove
//  messageReactionRemoveAll
//  messageUpdate
//  presenceUpdate
//  rateLimit
//  ready
//  reconnecting
//  resume
//  roleCreate
//  roleDelete
//  roleUpdate
//  typingStart
//  typingStop
//  userNoteUpdate
//  userUpdate
//  voiceStateUpdate
//  warn
//  webhookUpdate

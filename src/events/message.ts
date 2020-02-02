import { Collection } from "discord.js";

module.exports.run = (client: any, msg: any, botCommands: Collection<string,any>) => {

  /* declare dcuser */
  let dcuser: any;
  if (!msg.mentions.users.first()) {
    dcuser = msg.author;
  } else {
    dcuser = msg.mentions.users.first();
  }

  const prefix = ".";
  const args = msg.content.slice(prefix.length).trim().split(" ");
  const cmd = args.shift().toLowerCase();

  /* if author is bot or type is dm return */
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  /* Command Handler 2 */
  if (msg.content.startsWith(prefix)) {

    // get commands and execute it
    const commandfile = botCommands.get(cmd);

    const bundle = {
      client,
      msg,
      args,
      dcuser,
      botCommands
    }

    if (commandfile) commandfile.run(bundle);
    if (msg.content.indexOf(prefix) !== 0) return;
  }

};

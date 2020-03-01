import { getJsonFile } from "../export/jsonHandler";

module.exports.run = (client: any, msg: any, commandCollections: any, controller: any) => {

  /* declare dcuser */
  let dcuser: any;
  if (!msg.mentions.users.first()) {
    dcuser = msg.author;
  } else {
    dcuser = msg.mentions.users.first();
  }

  /* set prefix / custom prefix */
  let prefix: string;
  const botConfig: any = require("../../json/configs/botconfig.json");

  const prefixConfig: any = getJsonFile("./json/gen/settings/prefixes.json");

  const defaultPrefix: string = botConfig.defaultPrefix;
  let customPrefix: string;

  /* if file and custom prefix for bot exists let prefix be custom or not */
  if(prefixConfig[msg.member.guild.id]) {

    customPrefix = prefixConfig[msg.member.guild.id];

    if (customPrefix) {
      prefix = customPrefix;
    } else {
      prefix = defaultPrefix;
    }

  } else {
    prefix = defaultPrefix;
  }

  /* if author is bot or type is dm return */
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  /* if the command starts with the prefix */
  if (msg.content.startsWith(prefix) || msg.content.startsWith(defaultPrefix)) {

    /* split arguments and declare args */
    if (msg.content.startsWith(defaultPrefix)) prefix = defaultPrefix;
    const args = msg.content.slice(prefix.length).trim().split(" ");
    const cmd = args.shift().toLowerCase();

    /* make bundle with all modules you want to use */
    const bundle: object = {
      client,
      msg,
      args,
      dcuser,
      commandCollections,
      botConfig,
      prefixConfig,
      controller
    }

    /* get commands */
    const commandFile = commandCollections.botAliases.get(cmd);

    /* and run them if they exist */
    if (commandFile) commandFile.run(bundle);
    if (msg.content.indexOf(prefix) !== 0) return;
  }

};

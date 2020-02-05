import { RichEmbed, Collection } from "discord.js";

module.exports.run = (bundle: any) => {

  const msg = bundle.msg;
  const args = bundle.args;
  const commandHelp: Collection<string, any> = bundle.commandCollections.botCommands;
  const commandCategory: Collection<string, string[]> = bundle.commandCollections.categoryCollection;
  const customPrefix = bundle.prefixConfig[msg.member.guild.id];
  const defaultPrefix = bundle.botConfig.defaultPrefix;

  const helpEmbed: RichEmbed = new RichEmbed();
  helpEmbed.setColor(bundle.botConfig.colors.red);

  if (customPrefix) {
    helpEmbed.setFooter("Default prefix: " + defaultPrefix + " | Custom server Prefix: " + customPrefix);
  } else {
    helpEmbed.setFooter("Default prefix:  " + defaultPrefix);
  }

  if (!args[0]) {
    helpEmbed.setAuthor("Available commands:");
    helpEmbed.setDescription("Use  `.help <name>`  to get more information of a command!");
    commandCategory.keyArray().forEach((i: any) => {
      helpEmbed.addField(i, commandCategory.get(i), true);
    });
  } else if (commandHelp.get(args[0]) === undefined) {
    helpEmbed.setAuthor("Warning! There is no such command like: " + args[0]);
  } else {
    helpEmbed.setAuthor("Here are some infos about: " + args[0]);
    const cusHelp = commandHelp.get(args[0]);
    helpEmbed.addField("**Alias(es):**", cusHelp.help.alias, true);
    helpEmbed.addField("**Categories:**", cusHelp.help.categories, true);
    helpEmbed.addField("**Description:**", cusHelp.help.description, true);
    helpEmbed.addField("**Usage:**", cusHelp.help.usage, true);
  }

  /* send embed */
  msg.channel.send(helpEmbed);

};

module.exports.help = {
  name: "help",
  alias: [
    "help"
  ],
  categories: [
    "information"
  ],
  description: "This command provides help for commands.",
  usage: ".help <command you want to get help from>"
};

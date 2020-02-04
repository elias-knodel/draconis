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
  helpEmbed.setAuthor("Available commands:");

  if (customPrefix) {
    helpEmbed.setFooter("Default prefix: " + defaultPrefix + " | Custom server Prefix: " + customPrefix);
  } else {
    helpEmbed.setFooter("Default prefix:  " + defaultPrefix);
  }

  if (!args[0]) {
    helpEmbed.setDescription("Use  `.help <name>`  to get more information of a command!");
    commandCategory.forEach((i: any) => {
      helpEmbed.addField(i, i[0], true);
    });
    console.log(commandCategory);
  } else if (commandHelp.get(args[0]) === undefined) {
    helpEmbed.setDescription("**Warning** There is no such command like: " + args[0]);
  } else {
    const cusHelp = commandHelp.get(args[0]);
    helpEmbed.addField("**Name**", cusHelp.help.name, true);
    helpEmbed.addField("**Alias**", cusHelp.help.alias, true);
    helpEmbed.addField("**Description**", cusHelp.help.description, true);
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

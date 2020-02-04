module.exports.run = (bundle: any) => {

  const msg = bundle.msg;
  const args = bundle.args;

  if (!msg.member.hasPermission("ADMINISTRATOR")) {

    msg.channel.send("**You don't have Administrator permission to execute that command!**");
    return;

  } else if (!args[0]) {
    msg.channel.send("**Please provide a prefix:  `.prefix <prefix>`**");
  } else {

    msg.channel.send("**The prefix was changed to:** " + args[0]);

    /* check json data | requires the file you want to exist */
    const prefixJsonFile = bundle.controller.jsonCheckController.run("./json/gen/settings/prefixes.json");

    /* require and edit file */
    if(!prefixJsonFile[msg.member.guild.id]) {
      prefixJsonFile[msg.member.guild.id] = {}
    }

    prefixJsonFile[msg.member.guild.id] = args[0];

    /* write json data | requires the file path and the file*/
    bundle.controller.jsonWriteController.run("./json/gen/settings/prefixes.json", prefixJsonFile);

  }

};

module.exports.help = {
  name: "prefix",
  alias: [
    "prefix"
  ],
  categories: [
    "administration"
  ],
  description: "This command sets a custom prefix for the Discord.",
  usage: ".prefix <the prefix you want>"
};

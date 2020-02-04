//import { RichEmbed } from "discord.js";

module.exports.run = (bundle: any) => {

  const msg = bundle.msg;
  //const args = bundle.args;
  const dcuser = bundle.dcuser;
  //const help = bundle.botCommands;

  // let helpName;
  // let helpDescription;
  // let helpAlias;

  // for (let i = 1; i < help.length-1; i+=2) {
  //   const e = help[i];
  //   console.log(e)
  // }

  // help.forEach((e: any) => {
  //   console.log(e);
  // });

  // // paste
  // const helpText: string[] = []
  // let helpName
  // let helpCommand
  // let helpAlias
  // let hasArg = false
  // const joindArgs = args.join(' ')

  // help.forEach((i: any) => {
  //   helpText.push('**' + help[i].help.name + '**')
  //   helpText.push(help[i].help.name + '\n')
  //   helpName = help[i].alias[0]
  //   helpAlias = help[i].alias[1]
  //   helpCommand = help[i].description

  //   if(joindArgs == helpName) {
  //     hasArg = true
  //     const embed: RichEmbed = new RichEmbed()
  //       .addField(help[i].name, help[i].description)
  //       .addField('Alias', helpAlias)
  //       .addField('Commands:', helpCommand)
  //       .setColor('#FF3D6C')
  //     msg.channel.send(embed)

  //   }
  // })
  // if(!hasArg) {
  //   const embed: RichEmbed = new RichEmbed()
  //     .addField('Commands:', helpText)
  //     .setColor('#FF3D6C')

  //   msg.channel.send(embed)
  // }

  // // paste end
  msg.channel.send(dcuser + " here will be content soon!");

};

module.exports.help = {
  name: "help",
  alias: [
    "help",
    "info"
  ],
  description: "This command provides help."
};

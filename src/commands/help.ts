module.exports.run = (bundle: any) => {

  const msg = bundle.msg;
  const dcuser = bundle.dcuser;
  // const help = bundle.botCommands;

  // help.forEach((e: any) => {
  //   console.log(e);
  // });

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

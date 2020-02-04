module.exports.run = (bundle: any) => {

  const msg = bundle.msg;
  const dcuser = bundle.dcuser;

  msg.channel.send(dcuser + " | Pong!");

};

module.exports.help = {
  name: "ping",
  alias: [
    "ping",
    "pong"
  ],
  categories: [
    "administration"
  ],
  description: "This command is for testing.",
  usage: ".ping <mention somebody you want to disturb>"
};

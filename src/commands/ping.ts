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
  description: "This command is only for testing."
};

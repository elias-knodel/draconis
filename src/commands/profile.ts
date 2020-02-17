module.exports.run = (bundle: any) => {

  const msg = bundle.msg;
  const dcuser = bundle.dcuser;

  msg.channel.send(dcuser.username + " || **So lautet sein Name!**");

};

module.exports.help = {
  name: "profile",
  alias: [
    "profile"
  ],
  categories: [
    "economy"
  ],
  description: "This command gives information about a user.",
  usage: ".profile <mention somebody you want to get information from>"
};

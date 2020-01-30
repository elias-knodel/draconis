module.exports.run = (client: any, msg: any) => {
  client;
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
};

/* require modules */
const modules = {
  discord: require("discord.js")
};

/* require controller */
const controller = require("require.all")("./controller");

/* require events */
const events = require("require.all")("./events");

/* create bot */
let client = new modules.discord.Client();

/* Events */
client.on("ready", () => {
  events.ready.run(client);
});

client.on("message", (msg: any) => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});

/* login bot */
let token: any;
token = controller.loginController.run(token);
client.login(token);

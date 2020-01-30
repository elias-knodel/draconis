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
  events.message.run(client, msg);
});

/* login bot */
let token: any = controller.loginController.run();
client.login(token);

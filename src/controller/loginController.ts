import { Client } from "discord.js";

module.exports.run = (client: Client) => {

  /* require env reader */
  require("dotenv").config();

  /* set variables */
  const envInstance: any = process.env.NODE_ENV;
  let token: any;

  /* login selector */
  try {
    if (envInstance === "test") {
      token = process.env.BOT_TEST;
    } else if (envInstance === "prod") {
      token = process.env.BOT_PROD;
    }
  } catch (error) {
    console.error(error)
  }

  /* log output */
  client.login(token);

};

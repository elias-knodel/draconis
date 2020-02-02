import { Collection } from "discord.js";
import * as fs from "fs";

module.exports.run = () => {

  const botCommands = new Collection();
  fs.readdir("./dist/commands/", (err: Error | null, files: string[]) => {

    /* if exists log error */
    if (err) console.log(err);

    /* filter files and only use the ones with .js endings */
    files.filter((f: string) => f.split(".").pop() === "js").forEach((e: string) => {

      /* remove .js ending */
      const cmdFile = e.substr(0, e.length -3);

      /* require the files */
      const props = require(`../commands/${cmdFile}`);

      /* add the aliases to your discord collection */
      props.help.alias.forEach((i: string) => {
        botCommands.set(i, props);
      });

      /* log the files which are successfully loaded */
      console.log(props.help.name + " loaded!");
    });
  });

  return botCommands;

};

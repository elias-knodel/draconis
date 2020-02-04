import { Collection } from "discord.js";
import * as fs from "fs";

module.exports.run = () => {

  /* make new collection */
  const botCommands = new Collection();
  const botAliases = new Collection();

  /* read folder in which commands are saved */
  fs.readdir("./dist/commands/", (err: Error | null, files: string[]) => {

    /* if exists log error */
    if (err) console.log(err);

    /* filter files and only use the ones with .js endings */
    files.filter((f: string) => f.split(".").pop() === "js").forEach((e: string) => {

      /* remove .js ending */
      const cmdFile = e.substr(0, e.length -3);

      /* require the files */
      const props: any = require(`../commands/${cmdFile}`);

      /* add the plain commands to your collection */
      botCommands.set(props.help.name, props);

      /* add the aliases to your discord collection */
      props.help.alias.forEach((i: string) => {
        botAliases.set(i, props);
      });

      /* log the files which are successfully loaded */
      console.log(props.help.name + " loaded!");
    });
  });

  const collections = {
    botCommands,
    botAliases
  };

  return collections;

};

module.exports.run = (client: any) => {

  /* require files */
  const packageJson = require("../../package.json");

  /* set variables */
  const output: string = "Logged in as " + client.user.tag + " on " + client.guilds.size + " Servers!";
  const output2: string = "https://discordapp.com/oauth2/authorize/?permissions=536014032&scope=bot&client_id="
    + client.user.id;

  const restartTime = 1;
  const statusTime = 360;

  /* set activities */
  const activities: string[] = [
    ".help | on " + client.guilds.size + " discords",
    ".help | music commands coming soon",
    ".help | auto channel coming soon",
    ".help | pet system coming soon"
  ];

  enum Activities {
    PLAYING = "PLAYING",
    STREAMING = "STREAMING",
    LISTENING = "LISTENING",
    WATCHING = "WATCHING"
  }

  /* set bot status and activity */
  client.user.setStatus("dnd");
  client.user.setActivity("launching version " + packageJson.version, {
    type: Activities.STREAMING
  });

  /* get random status from array */
  function randomStatus() {
    const i: number = Math.floor(Math.random() * activities.length);
    client.user.setActivity(activities[i], {
      type: "LISTENING"
    });
  }

  /* make timeout */
  setTimeout(() => {

    /* change status for first 6h */
    client.user.setStatus("online");
    randomStatus();

    /* change status every 6h */
    setInterval(() => {
      randomStatus();
    }, 1000 * 60 * statusTime);

  }, 1000 * 60 * restartTime);

  /* log output */
  console.log(output + "\n" + output2);

};

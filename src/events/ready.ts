module.exports.run = (client: any) => {

  /* require files */
  const packageJson = require("../../package.json");

  /* set variables */
  let output: string = "Logged in as " + client.user.tag + " on " + client.guilds.size + " Servers!";
  let output2: string = "https://discordapp.com/oauth2/authorize/?permissions=536014032&scope=bot&client_id=" + client.user.id;

  let restartTime: number = 1;
  let statusTime: number = 360;

  /* set activities */
  const activities: string[] = [
    ".help | on " + client.guilds.size + " discords!",
    ".help | also try .info",
    ".help | try my auto channel!",
    ".help | pet system comming soon"
  ];

  /* set bot status and activity */
  client.user.setStatus("dnd");
  client.user.setActivity("launching version " + packageJson.version, {
    type: "PLAYING"
  });

  setTimeout(() => {

    /* change status for first 6h */
    client.user.setStatus("online");
    randomStatus();

    /* change status every 6h */
    setInterval(() => {
      randomStatus();
    }, 1000 * 60 * statusTime);

  }, 1000 * 60 * restartTime);

  /* get random status from array */
  function randomStatus() {
    let i: number = Math.floor(Math.random() * activities.length);
    client.user.setActivity(activities[i], {
      type: "LISTENING"
    });
  }

  /* log output */
  console.log(output + "\n" + output2);

};

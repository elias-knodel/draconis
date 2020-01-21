module.exports.run = (token: any) => {

  /* use reqiuire.all */
  require("dotenv").config();

  /* set variables */
  const environment = process.env.NODE_ENV;
  let output: string = "NODE_ENV is valid!";

  /* login selector */
  switch (environment) {
  case "prod":
    token = process.env.BOT_PROD;
    break;
  case "test":
    token = process.env.BOT_TEST;
    break;
  default:
    output = "NODE_ENV is not valid!";
    break;
  }

  /* log output */
  console.log(output);
  return token;

};

module.exports.run = () => {

  /* use reqiuire.all */
  require("dotenv").config();

  /* set variables */
  const environment = process.env.NODE_ENV;
  let output: any;

  /* login selector */
  try {
    switch (environment) {
    case "prod":
      output = process.env.BOT_PROD;
      break;
    case "test":
      output = process.env.BOT_TEST;
      break;
    }
  } catch (error) {
    console.log(error);
  }

  /* log output */
  return output;

};

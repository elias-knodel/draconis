module.exports.run = () => {

  /* require env reader */
  require("dotenv").config();

  /* set variables */
  const envSystem: any = process.env.NODE_ENV;
  let output: any;

  /* login selector */
  try {
    if (envSystem === "test") {
      output = process.env.BOT_TEST;
    } else if (envSystem === "test") {
      output = process.env.BOT_PROD;
    }
  } catch (error) {
    console.error(error)
  }

  /* log output */
  return output;

};

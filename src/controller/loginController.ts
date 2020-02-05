module.exports.run = () => {

  /* require env reader */
  require("dotenv").config();

  /* set variables */
  const envSystem: any = process.env.NODE_ENV;
  const envVariable: any = envSystem.toUpperCase();
  let output: any;

  /* login selector */
  try {
    if (envVariable === "TEST") {
      output = process.env.BOT_TEST;
    } else if (envVariable === "PROD") {
      output = process.env.BOT_PROD;
    }
  } catch (error) {
    console.error(error)
  }

  /* log output */
  return output;

};

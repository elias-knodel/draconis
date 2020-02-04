import * as fs from "fs";

module.exports.run = (jsonFilePath: any) => {

  let outputFile: any;

  if(fs.existsSync(jsonFilePath)) {
    /* file exists */
    jsonFilePath = "../." + jsonFilePath;
    outputFile = require(jsonFilePath);
  } else {
    /* file doesn't exists */
    fs.writeFileSync(jsonFilePath, "{}", "utf8");

    jsonFilePath = "../." + jsonFilePath;
    outputFile = require(jsonFilePath);
  }

  outputFile = require(jsonFilePath);

  return outputFile;

};

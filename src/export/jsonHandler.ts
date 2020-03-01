import { writeFile, existsSync, writeFileSync, mkdirSync } from "fs";
import { dirname } from "path";

export function getJsonFile(jsonFilePath: any) {
  let outputFile: any;

  if(existsSync(jsonFilePath)) {
    /* file exists */
    jsonFilePath = "../." + jsonFilePath;
    outputFile = require(jsonFilePath);
  } else {
    /* file doesn't exists */
    mkdirSync(dirname(jsonFilePath), { recursive: true} );

    writeFileSync(jsonFilePath, "{}", "utf8");

    jsonFilePath = "../." + jsonFilePath;

    outputFile = require(jsonFilePath);
  }

  outputFile = require(jsonFilePath);

  return outputFile;
}

export function setJsonFile(jsonFilePath: string, jsonFileName: any) {
  writeFile(jsonFilePath, JSON.stringify(jsonFileName, null, 2), "utf8", (err: any) => {
    if(err) console.log(err);
  });
}

export function createJsonFiles() {
  const output = "wow";

  return output;
}

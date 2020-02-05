import * as fs from "fs";

module.exports.run = (jsonFilePath: any, jsonFileName: any) => {

  fs.writeFile(jsonFilePath, JSON.stringify(jsonFileName, null, 2), "utf8", (err: any) => {
    if(err) console.log(err);
  });

};

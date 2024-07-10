require("dotenv").config();
const path = require("path");

module.exports = {
  rootPath: process.cwd(),
  pjson: require(path.join(this.rootPath, "./package.json")),
  PORT: process.env.PORT || 3111,
  DATABASE_NAME: process.env.DATABASE_NAME || pjson.name,
};

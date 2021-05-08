const multiPart = require("connect-multiparty");
const multiPartMiddleWare = multiPart({
  uploadDir: "./src/subidas",
});
module.exports = multiPartMiddleWare;

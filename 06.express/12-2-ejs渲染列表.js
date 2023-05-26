const ejs = require("ejs");
const fs = require("fs");

const mankind = ["路人A", "路人B", "路人C", "路人D"];

let result = ejs.render(fs.readFileSync("./html/index2.html").toString(), {
  mankind,
});

console.log(result);

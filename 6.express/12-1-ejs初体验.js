const ejs = require("ejs");
const fs = require("fs");

let numStr1 = "123";
let numStr2 = "456";

let html = fs.readFileSync("./html/index.html").toString();

// 使用ejs渲染
let result = ejs.render(html, { numStr1, numStr2 });

console.log(result);

// express
const express = require("express");

const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.send("OK");
});

// 监听端口，启动服务
app.listen(3000, () => {
  console.log("服务已启动，端口 http://localhost:3000");
});

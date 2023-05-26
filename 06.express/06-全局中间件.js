// express
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// 声明中间件函数
function recordMiddleware(req, res, next) {
  let { url, ip } = req;

  fs.appendFileSync(
    path.resolve(__dirname, "./log/access.log"),
    `${url} ${ip}\n`
  );

  // 调用 next 执行路由后续的操作
  next();
}

// 使用中间件函数
app.use(recordMiddleware);

app.get("/home", (req, res) => {
  res.send("前台首页");
});

app.get("/admin", (req, res) => {
  res.send("后台首页");
});

app.all("*", (req, res) => {
  res.send("<h1>404 NOt Found</h1>");
});

// 监听端口，启动服务
app.listen(3000, () => {
  console.log("服务已启动，端口 http://localhost:3000");
});

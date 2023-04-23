// express
const express = require("express");

const app = express();

// 声明中间件
app.use((req, res, next) => {
  // 检测请求头中的 referer 是否为 127.0.0.1
  // 获取 referer（通过html访问才有referer，referer是请求来源地址）
  let referer = req.get("referer");

  if (referer) {
    // 实例化
    let url = new URL(referer);
    // 获取 hostname
    let hostname = url.hostname;
    // 判断
    if (hostname != "127.0.0.1") res.status(404).send("<h1>Not Found</h1>");
    else next();
  }
});

app.use(express.static(__dirname + "/public"));

// 监听端口，启动服务
app.listen(3000, () => {
  console.log("服务已启动，端口 http://localhost:3000");
});

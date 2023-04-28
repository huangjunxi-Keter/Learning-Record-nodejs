const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

//#region 设置 cookie
app.get("/set-cookie", (req, res) => {
  //   res.cookie("name", "zhangsan"); // 特点：会在浏览器关闭时删除

  res.cookie("name", "lisi", {
    maxAge: 60 * 60 * 8500 // 过期时间
  });

  res.send("测试数据");
});
//#endregion

//#region 移除 cookie
app.get("/removue-cookie", (req, res) => {
  res.clearCookie("name");
  res.send("删除成功");
});
//#endregion

//#region 获取cookie
app.get("/get-cookie", (req, res) => {
  console.log(req.cookies);
  res.send("获取 cookies");
});
//#endregion

app.listen(3000);

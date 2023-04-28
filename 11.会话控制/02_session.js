const express = require("express");
const MongoStore = require("connect-mongo");
const session = require("express-session");

const app = express();

app.use(
  session({
    // 设置 cookie 的 name，默认值是 connect.sid
    name: "sid",
    // 签名（参与加密的字符）
    secret: "keter",
    // 每次请求是否都设置一个 cookies 来保存 session 的 id
    saveUninitialized: false,
    // 每次请求时是否重新保存 session
    resave: true,
    store: MongoStore.create({
      // mongodb 连接配置
      mongoUrl: "mongodb://127.0.0.1:27017/Learning-Record-nodejs",
    }),
    cookie: {
      // 开启后前端无法通过 JS 操作
      httpOnly: true,
      // 储存 sessionID 的 cookie 的过期时间
      maxAge: 1000 * 60 * 5,
    },
  })
);

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/login", (req, res) => {
  if (req.query.username == "admin" && req.query.password == "admin") {
    req.session.username = "admin";
    res.send("登录成功!");
  } else {
    res.send("登录失败");
  }
});

// 读取 session
app.get("/cart", (req, res) => {
  // 检测 session 是否存在用户数据
  if (req.session.username) {
    res.send("购物车", `欢迎 ${req.session.username}`);
  } else {
    res.send("未登录");
  }
});

// session 销毁
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.send("退出登录");
  });
});

app.listen(3000);

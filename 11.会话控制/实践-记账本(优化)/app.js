var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/web/index");
var authRouter = require("./routes/web/auth");
const accoountRouter = require("./routes/api/account");

const MongoStore = require("connect-mongo");
const session = require("express-session");

const config = require("./config/config");

var app = express();

// 中间件
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
      mongoUrl: `mongodb://${config.DBHOST}:${config.DBPORT}/${config.DBNAME}`,
    }),
    cookie: {
      // 开启后前端无法通过 JS 操作
      httpOnly: true,
      // 储存 sessionID 的 cookie 的过期时间（七天）
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/", authRouter);
app.use("/api", accoountRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

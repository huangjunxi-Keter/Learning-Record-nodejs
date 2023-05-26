const express = require("express");
const router = express.Router();
const UserModel = require("../../models/UserModel");
const md5 = require("md5");

//#region 注册（页面）
router.get("/reg", (req, res) => {
  res.render("reg");
});
//#endregion

//#region 注册（操作）
router.post("/reg", (req, res) => {
  // 密码加密
  req.body.password = md5(req.body.password);
  // 写入数据库
  UserModel.create(req.body)
    .then((data) => {
      console.log(data);
      res.render("success", { msg: "注册成功", url: "/login" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("注册失败");
    });
});
//#endregion

//#region 登录（页面）
router.get("/login", (req, res) => {
  res.render("login");
});
//#endregion

//#region 登录（操作）
router.post("/login", (req, res) => {
  // 密码加密
  req.body.password = md5(req.body.password);
  // 查询数据库
  UserModel.findOne(req.body)
    .then((data) => {
      if (data) {
        req.session.loginUser = data;
        res.render("success", { msg: "登录成功", url: "/account" });
      } else {
        res.status(500).send("账号或密码错误");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("登录失败");
    });
});
//#endregion

//#region 退出登录
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.render("success", { msg: "登出成功", url: "/login" });
  });
});
//#endregion

module.exports = router;

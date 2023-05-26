const express = require("express");
const router = express.Router();
const UserModel = require("../../models/UserModel");
const md5 = require("md5");
const jwt = require("jsonwebtoken");

//#region 登录（操作）
router.post("/login", (req, res) => {
  // 密码加密
  req.body.password = md5(req.body.password);
  // 查询数据库
  UserModel.findOne(req.body)
    .then((data) => {
      if (data) {
        // req.session.loginUser = data;
        // res.render("success", { msg: "登录成功", url: "/account" });

        /** 创建token */
        let token = jwt.sign({ username: data.username }, "huangjunxi-Keter", {
          expiresIn: 60 * 60 * 2.5,
        });
        /** 响应 toke */
        res.json({
          code: "0000",
          msg: "登录成功！",
          data: token,
        });
      } else {
        // res.status(500).send("账号或密码错误");
        res.json({
          code: "2002",
          msg: "用户名或密码错误",
          data: null,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      //   res.status(500).send("登录失败");
      res.json({
        code: "2001",
        msg: "数据库读取失败",
        data: null,
      });
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

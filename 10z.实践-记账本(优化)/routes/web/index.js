const express = require("express");
const router = express.Router();
const moment = require("moment");
const AccountModel = require("../../models/AccountModel");

// 记账本列表
router.get("/account", function (req, res, next) {
  // 获取所有的账单信息
  // let accouonts = db.get("accouonts").value();
  // 获取数据库信息
  AccountModel.find()
    .sort({ time: "desc" })
    .then((accouonts) => {
      res.render("list", { accouonts, moment });
    });
});

// 添加记录(页面)
router.get("/account/create", function (req, res, next) {
  res.render("create");
});

// 新增记录
router.post("/account", (req, res) => {
  // // 获取请求体的数据
  // console.log(req.body);
  // // 生成 id
  // let id = shortid.generate();
  // // 写入文件
  // db.get("accouonts")
  //   .unshift({ id, ...req.body })
  //   .write();

  req.body.time = moment(req.body.time).toDate();
  AccountModel.create({ ...req.body })
    .then((data) => {
      res.render("success", { msg: ":) 添加成功", url: "/account" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("添加失败!");
    });
});

// 删除记录
router.get("/account/:id", (req, res) => {
  // // 获取 params 的 id 参数
  // let id = req.params.id;
  // // 删除
  // db.get("accouonts").remove({ id }).write();

  AccountModel.deleteOne({ _id: req.params.id }).then((...a) => {
    // 成功提示
    res.render("success", { msg: ":) 删除成功", url: "/account" });
  });
});

module.exports = router;

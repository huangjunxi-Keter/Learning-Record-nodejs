const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync(__dirname + "/../data/db.json");
const shortid = require("shortid");

// 获取 db 对象
const db = low(adapter);

// 记账本列表
router.get("/account", function (req, res, next) {
  // 获取所有的账单信息
  let accouonts = db.get('accouonts').value();
  res.render("list", { accouonts });
});

// 添加记录
router.get("/account/create", function (req, res, next) {
  res.render("create");
});

// 新增记录
router.post("/account", (req, res) => {
  // 获取请求体的数据
  // console.log(req.body);

  // 生成 id
  let id = shortid.generate();
  // 写入文件
  db.get("accouonts")
    .unshift({ id, ...req.body })
    .write();
  // 成功提醒
  res.render('success', { msg: ':) 添加成功', url: '/account'});
});

module.exports = router;

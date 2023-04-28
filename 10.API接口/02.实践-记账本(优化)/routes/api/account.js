const express = require("express");
const router = express.Router();
const moment = require("moment");
const AccountModel = require("../../models/AccountModel");

//#region 记账本列表
router.get("/account", function (req, res, next) {
  AccountModel.find()
    .sort({ time: "desc" })
    .then((accouonts) => {
      res.json({
        // 响应编号
        code: "0000",
        // 响应信息
        msg: "读取成功",
        // 响应数据
        data: { accouonts, moment },
      });
    })
    .catch((err) => {
      res.json({
        code: "1001",
        msg: "读取失败",
        data: null,
      });
    });
});
//#endregion

//#region 新增记录
router.post("/account", (req, res) => {
  req.body.time = moment(req.body.time).toDate();
  AccountModel.create({ ...req.body })
    .then((data) => {
      res.json({
        code: "0000",
        msg: "创建成功",
        data,
      });
    })
    .catch((err) => {
      res.json({
        code: "1001",
        msg: "添加失败",
        data: null,
      });
    });
});
//#endregion

//#region 获取单个账单信息
router.get("/account/:id", (req, res) => {
  let id = req.params.id;

  AccountModel.findById(id)
    .then((data) => {
      res.json({
        code: "0000",
        msg: "获取成功",
        data,
      });
    })
    .catch((err) => {
      res.json({
        code: "1001",
        msg: "获取失败",
        data: null,
      });
    });
});
//#endregion

//#region 更新账单
router.patch("/account/:id", (req, res) => {
  let id = req.params.id;
  AccountModel.updateOne({ _id: id }, req.body)
    .then((data) => {
      res.json({
        code: "0000",
        msg: "更新成功",
        data,
      });
    })
    .catch((err) => {
      res.json({
        code: "1001",
        msg: "更新失败",
        data: null,
      });
    });
});
//#endregion

//#region 删除记录
router.get("/account/:id", (req, res) => {
  AccountModel.deleteOne({ _id: req.params.id }).then((...a) => {
    // 成功提示
    res.render("success", { msg: ":) 删除成功", url: "/account" });
  });
});
//#endregion

module.exports = router;

const mongoose = require("mongoose");

let AccountSchem = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  time: Date,
  type: {
    type: Number,
    default: -1,
  },
  account: {
    type: Number,
    required: true,
  },
  remarks: {
    type: String,
  },
});

// 创建模型对象 对文档操作的封装对象
let AccountModel = mongoose.model("accounts", AccountSchem);

// 暴露模型对象
module.exports = AccountModel;

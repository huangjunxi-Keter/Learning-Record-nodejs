const mongoose = require("mongoose");

let UserSchem = new mongoose.Schema({
  username: String,
  password: String
});

// 创建模型对象 对文档操作的封装对象
let UserModel = mongoose.model("Users", UserSchem);

// 暴露模型对象
module.exports = UserModel;

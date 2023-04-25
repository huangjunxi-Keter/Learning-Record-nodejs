const mongoose = require("mongoose");

// 设置 strictQuery 为 true（非必选，用于消除警告）
mongoose.set("strictQuery", true);

// 连接服务
mongoose.connect("mongodb://localhost:27017/Learning-Record-nodejs");

// 设置连接成功回调，once -> 只执行一次
mongoose.connection.once("open", () => {
  console.log("连接成功");

  // 创建文档的结构对象（设置文档的属性和属性值类型）
  let BookSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true, // 不能为空
      unique: true, // 唯一值（要生效必须重建集合，无法在旧的集合中使用）
    },
    author: {
      type: String,
      default: "Keter", // 默认值
    },
    style: {
      type: String,
      enum: ["111", "222", "333", "444", "555"], // 枚举值，存入的值只能是这里指定的
    },
    price: Number,
  });

  let BookModel = mongoose.model("books", BookSchema);

  // 价格 小于 20
  // BookModel.find({ price: { $lt: 20 } }).then((data) => {
  //   console.log(data);
  // });

  // 逻辑 或
  // BookModel.find({ $or: [{ author: "测试1" }, { author: "测试2" }] }).then(
  //   (data) => {
  //     console.log(data);
  //   }
  // );

  // 逻辑 与
  // BookModel.find({
  //   $and: [{ price: { $gt: 10 } }, { price: { $lt: 20 } }],
  // }).then((data) => {
  //   console.log(data);
  // });

  // 正则表达式
  BookModel.find({ name: /3/ }).then((data) => {
    console.log(data);
  });
});

// 设置连接错误回调
mongoose.connection.on("error", () => {
  console.log("连接失败");
});

// 设置连接关闭回调
mongoose.connection.on("close", () => {
  console.log("连接关闭");
});

// 关闭连接
// setTimeout(() => {
//     mongoose.disconnect();
// }, 2000)

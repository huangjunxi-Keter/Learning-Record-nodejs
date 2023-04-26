const db = require("./db/db");

const BookModel = require("./models/BookModel");

db(
  () => {
    console.log("连接成功");

    BookModel.create({
      name: "绝世唐门",
      author: "唐家三少",
      price: 25,
    })
      .then((data) => {
        console.log(data);
        // 关闭数据库连接
        mongoose.disconnect();
      })
      .catch((err) => {
        console.log(err);
        // 关闭数据库连接
        mongoose.disconnect();
      });
  },
  () => {
    console.error("连接失败");
  }
);

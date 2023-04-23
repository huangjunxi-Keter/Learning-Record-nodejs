var express = require("express");
var router = express.Router();

// 导入 formidable
const formidable = require("formidable");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// 显示网页（表单）
router.get("/portrait", (req, res) => {
  res.render("portrait");
});

// 处理文件上传
router.post("/portrait", (req, res) => {
  // 创建表单对象
  const form = formidable({
    multiples: true,
    // 上传文件的保存路径
    uploadDir: __dirname + "/../public/images",
    // 保持文件后缀
    keepExtensions: true,
  });

  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }

    // 获取图片的访问URL
    let url = "/images/" + files.portrait.newFilename;

    res.send("http://127.0.0.1:3000" + url);
  });
});

module.exports = router;

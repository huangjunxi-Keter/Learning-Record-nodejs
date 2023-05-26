const http = require("http");
const fs = require("fs");
const path = require("path");
const mimes = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  png: "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
  mp4: "video/mp4",
  mp3: "audio/mpeg",
  json: "application/json",
};

const server = http.createServer((request, response) => {
  let { pathname } = new URL(request.url, "http://localhost");

  if (pathname == "/html/table-only.html" || pathname == "/") {
    // response.setHeader('content-type', 'text/html;charset=gbk');
    response.end(fs.readFileSync(__dirname + "/html/table-only.html"));
  } else {
    let filePath = __dirname + pathname;

    fs.readFile(filePath, (err, data) => {
      if (err) {
        response.setHeader("content-type", "text/html;charset=utf-8");

        switch (err.code) {
          case "ENOENT":
            response.statusCode = 404;
            response.end("<h1>404 Not Found</h1>");
            break;
        }

        return;
      }

      // 设置mime类型
      let ext = path.extname(filePath).slice(1); // 获取文件后缀
      let type = mimes[ext]; // 获取类型对应的mime
      if (type) response.setHeader("content-type", `${type};charset=utf-8`);
      else response.setHeader("content-type", "application/octet-stream");

      response.end(data);
    });
  }
});

server.listen(9000, () => {
  console.log("服务已启动...");
});

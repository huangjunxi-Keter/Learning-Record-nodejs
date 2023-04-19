const http = require('http');

const url = require('url');

// 创建服务对象
const server = http.createServer((request, response) => { // 接收到http请求时触发回调
    // console.log(request.url);

    // 参数二 ture 表示把 query 转为对象
    let urlData = url.parse(request.url, true);
    // console.log(urlData);

    console.log(urlData.pathname);

    console.log(urlData.query);

    response.end('Hello HTTP Server'); // 设置响应体
});

// 监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已启动...');
});
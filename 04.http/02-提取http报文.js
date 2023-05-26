const http = require('http');

// 创建服务对象
const server = http.createServer((request, response) => { // 接收到http请求时触发回调
    // 获取请求方法
    console.log('method', request.method);
    // 获取请求URL
    console.log('url', request.url);
    // HTTP协议的版本号
    console.log('httpVersion', request.httpVersion);
    // 获取请求头
    console.log('headers', request.headers);

    response.end('Hello HTTP Server'); // 设置响应体
});

// 监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已启动...');
});
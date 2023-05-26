const http = require('http');

// 创建服务对象
const server = http.createServer((request, response) => { // 接收到http请求时触发回调
    // response.end('Hello HTTP Server'); // 设置响应体

    // 返回中文需要设置字符集
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.end('中文');
});

// 监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已启动...');
});
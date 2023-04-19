const http = require('http');

// 创建服务对象
const server = http.createServer((request, response) => { // 接收到http请求时触发回调
    let body = '';

    request.on('data', chunk => {
        body += chunk;
    });

    request.on('end', () => {
        console.log(body);
    });

    response.end('Hello HTTP Server'); // 设置响应体
});

// 监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已启动...');
});
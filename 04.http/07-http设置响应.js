const http = require('http');

const server = http.createServer((request, response) => {
    // 设置响应状态码
    response.statusCode = 201;
    // 设置响应状态的表述
    response.statusMessage = 'Keter'; // 不能设置中文
    // 设置响应头
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.setHeader('Server', 'Node.js');
    // 设置同名响应头
    response.setHeader('Keter', ['k1', 'k2', 'k3']);
    // 设置响应体
    response.write('Keter\t');
    response.write('keke\t');
    response.end("response body");
});

server.listen(9000, () => {
    console.log('服务已启动');
});
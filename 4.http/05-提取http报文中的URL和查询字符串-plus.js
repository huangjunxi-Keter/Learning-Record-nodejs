const http = require('http');

// 创建服务对象
const server = http.createServer((request, response) => { // 接收到http请求时触发回调
    // let url = new URL('http://localhost:9000/123?name=123&pass=456');
    let url = new URL(request.url, 'http://126.0.0.1'); // 参数2用于补全 request.url，防止 URL 对象报错

    console.log(url);

    // 通过 key 获取 query 参数时要使用 get
    console.log(url.searchParams.get('name'));

    response.end('Hello HTTP Server'); // 设置响应体
});

// 监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已启动...');
});
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    let result = '';

    // 获取请求url的路径
    let {pathname} = new URL(request.url, 'http://localhost');
    
    if (pathname == '/') {
        // 读取文件内容
        result = fs.readFileSync(__dirname + '/html/table-only.html');
    } else {
        result = fs.readFileSync(__dirname + pathname);
    }

    response.end(result);
});

server.listen(9000, () => {
    console.log('服务已启动');
});
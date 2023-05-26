const http = require('http');

const server = http.createServer((request, response) => {
    let result = '';

    let url = new URL(request.url, 'http://localhost');

    if (request.method == 'GET') {
        switch(url.pathname) {
            case '/login':
                result = '登录页面'
                break;
            case '/reg':
                result = '注册页面'
                break;
            default:
                result = 'Not Found'
                break;
        }
    }
    
    response.setHeader('content-type', 'text/html;charset=utf-8');

    response.end(result);
});

server.listen(9000, () => {
    console.log('服务已启动');
});
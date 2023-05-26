const http = require('http');

const server = http.createServer((request, response) => {
    let result = `
        <table border='1'>
            <tr>
                <th>test</th>
            </tr>
        </table>
    `;

    response.end(result);
});

server.listen(9000, () => {
    console.log('服务已启动');
});
// express
const express = require('express');

const app = express();

app.get('/response', (req, res) => {
    // 原生响应
    // res.statusCode = 404;
    // res.statusMessage = 'Not Found';
    // res.setHeader('xxx', 'XXX');
    // res.write('Hello');
    // res.end();

    // express 响应
    // res.status(500);
    // res.set('aaa', 'AAA');
    // res.send('这是中文');
    res.status(500).set('aaa', 'AAA').send('这是中文');

})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，端口 http://localhost:3000');
})
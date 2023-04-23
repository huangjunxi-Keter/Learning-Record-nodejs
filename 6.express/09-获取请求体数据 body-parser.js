// 导入 express
const express = require('express');
const bodyParser = require('body-parser');

// 创建应用对象
const app = new express();

app.get('/login', (req, res) => {
    // res.send('表单页面');
    res.sendFile(__dirname + '/html/login.html');
})

// 解析json格式请求体的中间件
const jsonParser = bodyParser.json();

// 解析querystring格式请求头的中间件
const urlencodedparser = bodyParser.urlencoded({ extended: false });

app.post('/login', urlencodedparser, (req, res) => {
    // res.end('获取用户数据');
    console.log(req.body);
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，端口 http://localhost:3000');
})
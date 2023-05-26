// express
const express = require('express');

const app = express();

app.get('/other', (req, res) => {

    // 跳转响应
    // res.redirect('http://huangjunxi-keter.github.io');

    // 下载响应
    // res.download(__dirname + '/package.json');

    // json 响应
    // res.json({
    //     name: 'Keter',
    //     age: 23
    // });

    // 响应文件内容
    res.sendFile(__dirname + '/html/index.html');

    // res.end('hello express')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，端口 http://localhost:3000');
})
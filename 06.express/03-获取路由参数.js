// 导入 express
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由
app.get('/:id.html', (req, res) => {
    // 获取 URL 路由参数
    console.log(req.params.id); // params 存储所有的路由参数

    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.end('路由占位符 xxx.html');
});

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，端口 http://localhost:3000');
})
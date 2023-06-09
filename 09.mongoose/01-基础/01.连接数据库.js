const mongoose = require("mongoose");

// 设置 strictQuery 为 true（非必选，用于消除警告）
mongoose.set('strictQuery', true);

// 连接服务
mongoose.connect("mongodb://localhost:27017/Learning-Record-nodejs");

// 设置连接成功回调，once -> 只执行一次
mongoose.connection.once('open', () => {
    console.log('连接成功');
});

// 设置连接错误回调
mongoose.connection.on('error', () => {
    console.log('连接失败');
});

// 设置连接关闭回调
mongoose.connection.on('close', () => {
    console.log('连接关闭');
});

// 关闭连接
setTimeout(() => {
    mongoose.disconnect();
}, 2000)
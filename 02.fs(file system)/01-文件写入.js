/*
* 需求：
* 新建一个文件，写入内容
*/

// 导入fs
const fs = require("fs");

// 写入文件（异步）
fs.writeFile('./新建文件.txt', '这是文件内容', err => {
    // 写入失败 err 是一个错误对象，写入成功是 null
    if (err)
        console.log('写入失败');
    else
        console.log('写入成功');
});

// 同步写入
fs.writeFileSync('新建文件1.txt', '这是文件内容1');
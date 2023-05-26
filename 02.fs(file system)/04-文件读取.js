const fs = require('fs');

// 异步
fs.readFile('新建文件.txt', (err, data) => {
    if (err)
        console.log('读取失败');
    else
        console.log(data.toString());
});

// 同步
let result = fs.readFileSync('新建文件.txt').toString();
console.log(result);
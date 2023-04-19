const fs = require('fs');

// 创建读取文件流
let rs = fs.createReadStream('图片.jpeg');

// 绑定 data 事件
rs.on('data', chunk => {
    console.log(chunk.length); // 每次读取 64kb
});

// 文件读取完后会触发 end 事件
rs.on('end', () => {
    console.log('读取完成');
})
const fs = require('fs');

// 创建写入流对象
const ws = fs.createWriteStream('新建文件2.txt');

// 写入
ws.write('123\n');
ws.write('456\n');
ws.write('789\n');

// 关闭写入流
ws.close();
const fs = require('fs');
const path = require('path');

// 使用 resolve 拼接规范的路径
// console.log(__dirname + './index');
// console.log(path.resolve(__dirname , './index'));

// sep 分隔符
// console.log(path.sep); // windows中是 \，Linux中是 /

// parse
let filePath = __filename; // 当前文件的绝对路径
console.log(path.parse(filePath));

// basename 文件名
console.log(path.basename(filePath));

// dirname 获取文件所在路径
console.log(path.dirname(filePath));

// extname 获取扩展名
console.log(path.extname(filePath));
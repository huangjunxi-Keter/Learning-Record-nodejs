const fs = require('fs');

// 读取当前目录
const files = fs.readdirSync('./code');

// 遍历数组
files.forEach(item => {
    // 判断-前的数字是不是小于10
    let [num, name] = item.split('-');
    
    if (Number(num) < 10) {
        fs.renameSync(`./${item}`, `./0${num}-${name}`);
    }
});
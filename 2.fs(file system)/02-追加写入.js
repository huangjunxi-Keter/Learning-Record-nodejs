const fs = require('fs');

// 追加写入（异步）
// fs.appendFile('新建文件.txt', '，这是追加的内容', err => {
//     if (err)
//         console.log('追加写入失败');
//     else
//         console.log('追加写入成功');
// });

// 同步
// fs.appendFileSync('新建文件1.txt', '，这是追加的内容1');

// writeFile 的追加写入（通过 配置对象）
let options = {
    flag: 'a'
}

fs.writeFile('新建文件.txt', '，这是追加的内容', options, err => {
    if (err)
        console.log('追加写入失败');
    else
        console.log('追加写入成功');
});
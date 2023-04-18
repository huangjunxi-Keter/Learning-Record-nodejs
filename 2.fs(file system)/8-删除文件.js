const fs = require('fs');

// fs.unlink('新建文件.txt', err => {
//     if (err)
//         console.log('删除失败');
//     else
//         console.log('删除成功');
// });

// nodejs 14.4 的新方法
fs.rm('1.xtx', err => {
    if (err)
        console.log('删除失败');
    else
        console.log('删除成功');
})
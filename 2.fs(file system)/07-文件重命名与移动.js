const fs = require('fs');

// 重命名
// fs.rename('图片.jpeg', '重命名图片.jpeg', (err) => {
//     if (err)
//         console.log('操作失败');
//     else
//         console.log('重命名成功！');
// });

// 移动
fs.rename('复制文件-练习.jpeg', './img/复制文件-练习.jpeg', err => {
    if (err)
        console.log('操作失败！');
    else
        console.log('移动成功！');
});
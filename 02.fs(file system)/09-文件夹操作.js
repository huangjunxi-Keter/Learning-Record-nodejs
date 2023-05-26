const fs = require('fs');

// 创建文件夹
// fs.mkdir('./创建的文件夹', err => {
//     if (err)
//         console.log('创建失败');
//     else
//         console.log('创建成功');
// });

// 递归创建
// let options = {
//     recursive: true
// }

// fs.mkdir('./a/b/c', options, err => {
//     if (err)
//         console.log('创建失败');
//     else
//         console.log('创建成功');
// });

// 读取文件夹
// fs.readdir('./', (err, data) => {
//     if (err)
//         console.log('读取失败!');
//     else
//         console.log(data.toString());
// });

// 删除文件夹
// fs.rmdir('./创建的文件夹', err => {
//     if (err)
//         console.log('删除失败！');
//     else
//         console.log('删除成功！');
// });

// 递归删除
let options = {
    recursive: true
}

fs.rmdir('./a', options,err => {
    if (err)
        console.log('删除失败！');
    else
        console.log('删除成功！');
});
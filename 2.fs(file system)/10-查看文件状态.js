const fs = require('fs');

fs.stat('./img/复制文件-练习.jpeg', (err, data) => {
    if (err)
        console.log('操作失败！');
    else
        console.log(data);

        console.log(data.isFile);
        console.log(data.isDirectory);
});
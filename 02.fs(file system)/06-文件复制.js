const fs = require('fs');

let ws = fs.createWriteStream('复制文件-练习.jpeg');
let rs = fs.createReadStream('图片.jpeg');

rs.on('data', chunk => {
    ws.write(chunk);
});

rs.on('end', () => {
    ws.close(); 
});
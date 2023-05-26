// buffer 与 字符串的转换
let buf = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf.toString()); // utf-8

// 下标
let buf_2 = Buffer.from('Keter');
console.log(buf_2[0]);
buf_2[0] = 95;
console.log(buf_2.toString());

// 中文
let buf_3 = Buffer.from("你好");
console.log(buf_3); // 一个 utf-8 的中文占三个字节
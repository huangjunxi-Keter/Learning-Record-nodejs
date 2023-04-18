//1. alloc
let buf = Buffer.alloc(10);
console.log(buf);

// 2. allocUnsafe
let buf_2 = Buffer.allocUnsafe(10);
console.log(buf_2);

// 3. from
let buf_3 = Buffer.from("Keter");
console.log(buf_3); // 每个字符都转成了UniCode码（UniCode兼容ASCII，但是UniCode是16进制）
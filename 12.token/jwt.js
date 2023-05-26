const jwt = require("jsonwebtoken");

/**
 * 创建 token
 * 用户数据、加密字符串、配置东西
 */
let token = jwt.sign({ username: "Keter" }, "huangjunxi-Keter", {
  expiresIn: 60, // 单位是秒
});
console.log(token);

/**
 * 校验token
 */
jwt.verify(token, "huangjunxi-Keter", (err, data) => {
  if (err) {
    console.error("校验失败");
  } else {
    console.log(data);
  }
});

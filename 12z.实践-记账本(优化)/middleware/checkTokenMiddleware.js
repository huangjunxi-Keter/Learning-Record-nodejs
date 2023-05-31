/** token 验证中间件 */

const jwt = require("jsonwebtoken");
const { secret } = require('../config/config');

module.exports = (req, res, next) => {
  // 获取 token
  let token = req.get("token");

  if (token) {
    // 校验 token
    jwt.verify(token, secret, (err, data) => {
      if (err) {
        res.json({
          code: "2004",
          msg: "token 验证失败",
          data: null,
        });
      } else {
        // 保存用户信息
        req.user = data;
        // token 校验成功继续执行请求接口
        next();
      }
    });
  } else {
    res.json({
      code: "2003",
      msg: "token缺失",
      data: null,
    });
  }
};

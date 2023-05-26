/** token 验证中间件 */

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // 获取 token
  let token = req.get("token");

  if (token) {
    // 校验 token
    jwt.verify(token, "huangjunxi-Keter", (err, data) => {
      if (err) {
        res.json({
          code: "2004",
          msg: "token 验证失败",
          data: null,
        });
      } else {
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

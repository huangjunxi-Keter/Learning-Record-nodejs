module.exports = (req, res, next) => {
  // 验证是否登录
  if (!req.session.loginUser) {
    return res.redirect("/login");
  } else {
    next();
  }
};

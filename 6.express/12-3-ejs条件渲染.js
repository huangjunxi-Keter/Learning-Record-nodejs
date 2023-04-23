const ejs = require("ejs");
const fs = require("fs");

let result = ejs.render(
  `
  <% if(isLogin) { %>
    <span>欢迎回来</span>
  <% } else { %>
    <button>登录</button>
    <button>注册</button>
  <% } %>
`,
  { isLogin: false }
);

console.log(result);

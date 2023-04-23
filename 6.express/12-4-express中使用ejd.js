const express = require('express');
const path = require('path');
const ejs = require("ejs");

const app = express();

// 设置模板引擎
app.set('view engine', 'ejs');

// 设置模板文件的存放位置
app.set('views', path.resolve(__dirname, './views'));

app.get('/home', (req, res) => {
  let title = 'Keter';
  res.render('home', { title })
})

app.listen(3000, () => {
  console.log('http://localhost:3000/home');
})

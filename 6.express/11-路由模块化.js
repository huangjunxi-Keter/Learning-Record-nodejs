const express = require("express");

const app = new express();

app.use(require('./routers/homeRouter.js'));

app.use(require('./routers/adminRouter.js'));

app.all("*", (req, res) => {
  res.send("<h1>404 Not Found</1>");
});

app.listen(3000, () => {
    console.log('http://localhost:3000/home');
});
const db = require("./db/db");

const MovieModel = require("./models/MovieModel");

db(() => {
  MovieModel.create({ title: "让子弹飞", director: "姜文" }).then(
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    }
  );
});

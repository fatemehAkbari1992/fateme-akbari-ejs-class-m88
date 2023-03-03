const express = require("express");
const app = express();
const user = require("./db/users-data.json");
const userRouter=require('./router/users')


app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/user", userRouter);

app.get("/home", function (req, res) {
  res.render("home", {
    // profile: req.params.name,
    firstName: req.params.firstname,
    lastName: req.params.lastname,
    age: req.params.age,
  });
});

app.listen(8080);

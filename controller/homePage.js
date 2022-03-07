const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
const userSchema = mongoose.Schema({
  email: String,
});

const NewsLetter = mongoose.model("NewsLetter", userSchema);

exports.getHomePage = (req, res) => {
  res.render("index");
};

exports.postHomePage = (req, res) => {
  const newUser = new NewsLetter({
    email: req.body.email,
  });

  newUser.save((err,data) => {
    if (err) {
        res.send("failure");
    } else {
        res.send("Great Success");
    }
  });
};

var express = require("express");
var router = express.Router();
const User = require("../models/User.model");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/all", function (req, res, next) {
  User.find()
    .then((allUsers) => {
      res.json(allUsers);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.post("/signup", function (req, res, next) {
  const { email } = req.body;

  User.create({ email })
    .then((userCreated) => {
      res.json(userCreated);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

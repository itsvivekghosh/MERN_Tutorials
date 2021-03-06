const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => {
      if (users.length === 0) {
        return res.json("No users found!");
      }
      return res.json(users);
    })
    .catch((error) => res.status(400).json("Error: " + error));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added Successfully!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;

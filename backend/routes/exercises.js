const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Exercise.find()
    .then((exe) => {
      if (exe.length === 0) return res.json("No Exercises Found!");
      return res.json(exe);
    })
    .catch((err) => res.json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = req.body.duration;
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exersice Added"))
    .catch((err) => res.json("Error: " + err));
});

module.exports = router;

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Cors Middleware
app.use(cors());
app.use(express.json());

// Mongoose Connection
const URI = process.env.ATLAS_URI;
mongoose.connect(URI, {
  useNewUrlParser: true,
  // userCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

// Accessing Routes
// const exerciseRouter = require("./routes/exercises");
const userRouter = require("./routes/users");
// app.use("/exercises", exerciseRouter);
app.use("/users", userRouter);

// Starting server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

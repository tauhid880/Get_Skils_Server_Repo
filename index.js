const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

const Courses = require("./Data/Courses.json");

// Single course data load here
app.get("/courses/category", (req, res) => {
  res.send(Courses);
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Example app listening on port", port);
});

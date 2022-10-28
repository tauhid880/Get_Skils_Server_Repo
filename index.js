const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

const Courses = require("./Data/Courses.json");

// Single course category data load here
app.get("/courses/category", (req, res) => {
  res.send(Courses);
});
//  Single course data load here
const course = require("./Data/courseData.json");
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selected_course = course.find((c) => c.id === id);
  res.send(selected_course);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Example app listening on port", port);
});

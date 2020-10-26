var express = require("express");
var cors = require('cors')

var app = express();
const courses = [
  { code: "A", teachers: ["1"], students: ["a", "b", "c", "d"] },
  { code: "B", teachers: ["2", "3"], students: ["a", "b"] },
  { code: "C", teachers: ["2"], students: [] },
  { code: "D", teachers: ["1", "3"], students: ["a", "b", "d"] },
];

const students = [
  {
    id: "a",
    name: "John",
    type: "student",
    attends: courses.filter((c) => c.students.includes("a")).map((c) => c.code),
    semester: 1,
  },
  {
    id: "b",
    name: "Jimmy",
    type: "student",
    attends: courses.filter((c) => c.students.includes("b")).map((c) => c.code),
    semester: 2,
  },
  {
    id: "c",
    name: "Laura",
    type: "student",
    attends: courses.filter((c) => c.students.includes("c")).map((c) => c.code),
    semester: 3,
  },
  {
    id: "d",
    name: "Peter",
    type: "student",
    attends: courses.filter((c) => c.students.includes("d")).map((c) => c.code),
    semester: 4,
  },
];

const teachers = [
  {
    id: "1",
    name: "Mr. Shady",
    type: "teacher",
    teaches: courses.filter((c) => c.teachers.includes("1")).map((c) => c.code),
  },
  {
    id: "2",
    name: "Mr. Slim",
    type: "teacher",
    teaches: courses.filter((c) => c.teachers.includes("2")).map((c) => c.code),
  },
  {
    id: "3",
    name: "Mrs. Julie",
    type: "teacher",
    teaches: courses.filter((c) => c.teachers.includes("3")).map((c) => c.code),
  },
  {
    id: "4",
    name: "Mrs. Judy",
    type: "teacher",
    teaches: courses.filter((c) => c.teachers.includes("4")).map((c) => c.code),
  },
];

app.use(cors())

app.get("/persons", function (_req, res) {
  res.send([...students, ...teachers]);
});

app.listen(8080, function () {
  console.log("Server listening on the port 8080!");
});

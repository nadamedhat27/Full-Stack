const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: String,
  grade: String
});

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  level: Number,
  registeredCourses: [courseSchema] 
});

module.exports = mongoose.model("Student", studentSchema);



/* TO ADD A STUDENT IN ANOTHER FILE

const newStudent = new Student({
  name: 'John Doe',
  age: 20,
  email: 'john.doe@example.com',
  level: 2,
  registeredCourses: [
    { courseName: 'Math', grade: 99 },
    { courseName: 'Science', grade: 99 },
    { courseName: 'English', grade: 99 }
  ]
});

*/
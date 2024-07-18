// bun
// import express from 'express' 
// import { mongoose } from 'mongoose';

//node
const express = require('express'); 
const mongoose = require('mongoose');
const Student = require('./Schemas/studentSchema');

const app = express();
const port = 3000;

const dbURL = 'mongodb://localhost:27017'
mongoose.connect(dbURL, {})
  .then((res)=> console.log("Connected to DB"))
  .catch((err)=> console.log("Failed to connect" + err))

const newStudent = new Student({
  name: 'Ahmed',
  age: 19,
  email: 'ak@ak.com',
  level: 3,
  registeredCourses: [
    { courseName: 'Math', grade: C },
    { courseName: 'Web Programming', grade: B },
    { courseName: 'Data Structures', grade: A }
  ]
});

app.get('/', (req, res) => {
  newStudent.save()
    .then((result)=>{
      res.send(result)
    }).catch((err)=> res.send("Couldn't save to the database"))
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
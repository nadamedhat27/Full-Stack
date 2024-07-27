# MongoDB and Mongoose in Node.js

## Table of Contents

1. [Introduction](#1-introduction)
2. [Why Use MongoDB and Mongoose?](#2-why-use-mongodb-and-mongoose)
3. [Comparison to SQL](#3-comparison-to-sql)
4. [Setting Up MongoDB](#4-setting-up-mongodb)
5. [Installing Mongoose](#5-installing-mongoose)
6. [Connecting to MongoDB with Mongoose](#6-connecting-to-mongodb-with-mongoose)
7. [Creating a Database and Collection](#7-creating-a-database-and-collection)
8. [CRUD Operations](#8-crud-operations)
9. [Example Application](#9-example-application)
10. [Sources](#10-sources)

---

## 1. Introduction

MongoDB is a NoSQL database that stores data in a BSON (Binary JSON) format. It is known for its flexibility, scalability, and high performance, making it a popular choice for modern web applications.

## 2. Why Use MongoDB and Mongoose?

- **Schema-less**: MongoDB allows for flexible document structures, which means you don't have to define the schema upfront.
- **Scalable**: MongoDB is designed to handle large amounts of data and easily scales.
- **High Performance**: MongoDB is optimized for read and write operations, providing high performance for your applications.

## 3. Comparison to SQL

- **SQL (Relational Databases)**: Uses a fixed schema, tables, and supports complex transactions. Examples include MySQL, PostgreSQL, and SQL Server.
- **MongoDB (NoSQL Database)**: Uses a flexible schema, stores data in collections of documents, and supports simpler transactions. It's designed to handle large-scale, distributed data.

## 4. Setting Up MongoDB

#### Install MongoDB

First, you need to install MongoDB. Follow the instructions for your operating system from the official MongoDB download page:

[Download MongoDB Community Edition](https://www.mongodb.com/try/download/community)
[Download MongoDB Shell](https://www.mongodb.com/try/download/shell)

After installation, start the MongoDB server. The default port is 27017.

#### MongoDB Shell

MongoDB comes with a shell called `mongosh` that you can use to interact with your database.

* see setup page to set up correctly

```sh
mongosh
```

Once in the shell, you can use various commands to interact with MongoDB.

### Extra : MongoDB Shell Commands & Operators:
```sh
# 1. Switch to a database / Create
use mydatabase

# 2. Create a collection
db.createCollection('students')

# 3. Insert a single document
db.students.insertOne({
  name: 'John Doe',
  age: 20,
  gpa: 3.5
})

# 4. Insert multiple documents
db.students.insertMany([
  { name: 'Alice', age: 22, gpa: 3.8 },
  { name: 'Bob', age: 19, gpa: 2.9 },
  { name: 'Charlie', age: 21, gpa: 3.2 }
])

# 5. Find all documents in a collection
db.students.find()

# 6. Find documents with a condition (GPA >= 3.0)
db.students.find({ gpa: { $gte: 3.0 } })

# 7. Find documents with a specific field (name = 'Alice')
db.students.find({ name: 'Alice' })

# 8. Update a single document (set age to 21 where name is 'John Doe')
db.students.updateOne(
  { name: 'John Doe' },
  { $set: { age: 21 } }
)

# 9. Update multiple documents (increment age by 1 for all students with GPA < 3.0)
db.students.updateMany(
  { gpa: { $lt: 3.0 } },
  { $inc: { age: 1 } }
)

# 10. Delete a single document (name = 'John Doe')
db.students.deleteOne({ name: 'John Doe' })

# 11. Delete multiple documents (GPA < 3.0)
db.students.deleteMany({ gpa: { $lt: 3.0 } })

# 12. Sort documents by name (ascending)
db.students.find().sort({ name: 1 })

# 13. Sort documents by GPA (descending)
db.students.find().sort({ gpa: -1 })

# 14. Sort documents by age (ascending)
db.students.find().sort({ age: 1 })

# 15. Filter documents with multiple conditions (GPA between 2.5 and 3.5)
db.students.find({ gpa: { $gte: 2.5, $lte: 3.5 } })

# 16. Use $in to match any of the specified values (names 'Alice' or 'Bob')
db.students.find({ name: { $in: ['Alice', 'Bob'] } })

# 17. Use $nin to exclude specified values (names not 'Alice' or 'Bob')
db.students.find({ name: { $nin: ['Alice', 'Bob'] } })

# 18. Use $or to join multiple conditions (GPA < 3.0 or age > 20)
db.students.find({ $or: [{ gpa: { $lt: 3.0 } }, { age: { $gt: 20 } }] })

# 19. Use $and to join multiple conditions (GPA >= 3.0 and age <= 22)
db.students.find({ $and: [{ gpa: { $gte: 3.0 } }, { age: { $lte: 22 } }] })

# 20. Use $exists to match documents that have the specified field (check if 'gpa' field exists)
db.students.find({ gpa: { $exists: true } })

# 21. Use $regex to match documents where the value of a field matches a specified regular expression (name starts with 'A')
db.students.find({ name: { $regex: '^A' } })
```

### MongoDB Operators

```sh
$eq: Equal to
$ne: Not equal to
$gt: Greater than
$gte: Greater than or equal to
$lt: Less than
$lte: Less than or equal to
$in: Matches any of the values specified in an array
$nin: Does not match any of the values specified in an array
$and: Joins query clauses with a logical AND
$or: Joins query clauses with a logical OR
$not: Inverts the effect of a query expression
$exists: Matches documents that have the specified field
$regex: Matches documents where the value of a field matches a specified regular expression
```

A note on collections : MongoDB Collections aren't schemas in a sense that when you add a document/item to a collection you can add additional fields to just one item so lets say we want to add a warnings field to one student, the other students wouldnt have a warnings field nor value but this student can have a field, this is not the case when using mongoose though as we'll be showing

## 5. Installing Mongoose
Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js, mongoose lets you define schemas and use MongoDB commands and quereies within your javascript application.

Initialize Project
Create a new directory for your project.

```sh
mkdir app
cd app
```

Install Mongoose
```sh
npm install mongoose
```

## 6. Connecting to MongoDB with Mongoose
Here's how you can connect to MongoDB using Mongoose in your Node.js application.

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017', {  //replace the link with ur db instance.
  useNewUrlParser: true,
  useUnifiedTopology: true
  // these two lines are here to avoid deprecation errors.
}).then(() => {
  console.log('Connected to DB');
}).catch(err => {
  console.error('Failed to connect to DB', err);
});
```

## 7. Creating Mongoose Schemas
Create a new javascript file and create a schema in the following format
```javascript
const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
})

module.exports = mongoose.model("person", personSchema)
```

You can use arrays, nest schemas within eachother, or use an array of another schema
It's also possible to add required elements and regex validation.

```javascript
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String
})

const numberSchema = new mongoose.Schema({
  mobileNo:{
    type: Number,
    required: true
  },
  homeNo: Number
})


const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  numbers: numberSchema,
  address: addressSchema
})

module.exports = mongoose.model("person", personSchema)
```

## 8. CRUD Operations
CRUD stands for Create, Read, Update, and Delete. These are the basic operations you can perform on your data.

Create
```javascript
const newStudent = new Student({
  name: 'Ahmed',
  age: 19,
  email: 'ak@ak.com',
  level: 3,
  registeredCourses: [
    { courseName: 'Math', grade: 'C' },
    { courseName: 'Web Programming', grade: 'B' },
    { courseName: 'Data Structures', grade: 'A' }
  ]
});

newStudent.save()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

```

Read
```javascript
Student.find()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

```

EXTRA: using the where method

``` javascript
Student.where('age').gt(18).where('grade').equals('A') 
  // where age > 18 and grade == 'a'
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
```

To find with a condition

```javascript
Student.find({ level: 3 })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
```



Update
```javascript
Student.updateOne({ name: 'Ahmed' }, { $set: { age: 20 } })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

```

Delete
```javascript
Student.deleteOne({ name: 'Ahmed' })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

```


## 9. Example Application

[studentSchema.js](./Schemas/studentSchema) : Mongoose Schema

```javascript
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
```

[App.js](/app.js)

```javascript
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
```

## 10. Sources
[Net Ninja Node.js](https://www.youtube.com/watch?v=bxsemcrY4gQ)

[Mongoose Crash Course](https://www.youtube.com/watch?v=DZBGEVgL2eE)

[MongoDB Manual](https://www.mongodb.com/docs/)

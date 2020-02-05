const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const mongojs = require("mongojs");
// const path = ("path");

const PORT = process.env.PORT || 3000;

// const db = require("./Develop/models/workoutModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI  || "mongodb://localhost/userdb", { useNewUrlParser: true });

// routes
app.use(require("./routes/routes.js"));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});



// 7, 10, 11 student activities

// Look at the js files to see how many columns you need in your table

// 1 type is a String
// 2 name String
// 3 distance interger
// 4 duration interger
// 5 weight interger
// 6 sets interger
// 7 reps interger
// 8 duration interger


// As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

// create daily workouts
// track daily workouts
// log multiple exercises on a given daily
// name
// type
// weight
// sets
// reps
// duration

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    exercises: [{
    type: {
        type: String,
        trim: true,
        required: "Enter type of workout"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter name of workout"
    },
    distance: {
        type: Number,
        required: "Enter a distance amount"
    },
    duration: {
        type: Number,
        required: "Enter a duration amount"
    },
    weight: {
        type: Number,
        required: "Enter weight"
    },
    sets: {
        type: Number,
        required: "How many sets"
    },
    reps: {
        type: Number,
        required: "How many reps"
    }
    }],
    day: { 
        type: Date
    },
    totalduration:{
        type: Number,
        default: 0
    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;




// 1 type is a String
// 2 name String
// 3 distance interger
// 4 duration interger
// 5 weight interger
// 6 sets interger
// 7 reps interger
// 8 duration interger
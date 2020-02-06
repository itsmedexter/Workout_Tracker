const router = require("express").Router();
const Exercise = require("../models/workoutModel.js");
const path = require("path");
const db = require("../models/workoutModel.js");


// html route to exercise
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// html route to stats
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});



// * Add exercises to a previous workout plan.!!!!!!!!!!!
app.post("/submit", ({body}, res) => {
    db.Book.create(body)
      .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
      .then(dbLibrary => {
        res.json(dbLibrary);
      })
      .catch(err => {
        res.json(err);
      });
  });





// router.put("/api/workouts/:id", (req, res) => {
//     console.log("this is string");
//     console.log(req.body);
//     Exercise.findOneAndUpdate(
//         {
//             _id: req.params.id
//         },{
//             $push: {
//                 type: req.body.type,
//                 name: req.body.name,
//                 distance: req.body.distance,
//                 duration: req.body.duration,
//                 weight: req.body.weight,
//                 sets: req.body.sets,
//                 reps: req.body.reps
//                 // another way to push array, 
//             }
//         },
//         (error, data) => {
//             if (error) {
//                 res.send(error);
//             } else {
//               res.send(data);  
//             }
//         }
//     );
// });



// Add exercise old????
// router.post("api/workouts", (req, res) => {
//     console.log(req.body);
//     Exercise.create(body)
//     .then(dbExercise => {
//         res.json(dbExercise);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     });
// });


//   * Add new exercises to a new workout plan.

router.post("/api/workouts", function(req, res)  {
    console.log("Inside post workout");
    console.log(req.body);
    Exercise.create(req.body)
    .then(({ _id }) => Exercise.findOneAndUpdate({}, { $push: { exercise: _id } }, { new: true}))
    .then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.json(err);
    });
});






//   * View multiple the combined weight of multiple exercises on the `stats` page.
router.get("/api/workouts", (req, res) => {
    Exercise.find(
        {
        },
        (error, data) => {
          if (error) {
            res.send(error);
        }   else { 
            console.log("Inside get workout");
            console.log(data);
            res.send(data);
                 }
        }
    );
});






// create put route for /api/workouts/:id" + id
// how am I get find one and update findbyidandupdate

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    Exercise.findByIdAndUpdate(req.params.id, req.body,
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
    );
});
















// POST /api/workout add workout?????? /api/workouts
router.post("/api/workouts", (req, res) => { 
    console.log("/api/workouts/inside")
    console.log(req.body);
    Exercise.create(body)
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


// Look at public > api.js

// POST /api/new_workout add Exercise??????
// router.post("api/new_workout", (req, res) => {
//     Exercise.create(req.body)
//         .then(dbExercise => {
//             res.json(dbExercise);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// FIND All /api/workouts/range??????????
// /api/workouts !!!!!!!!
router.get("/api/workouts/range", (req, res) => {
    Exercise.find({})
    .sort({ date: -1})
    .then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


module.exports = router;




// * Add exercises to a previous workout plan.

//   * Add new exercises to a new workout plan.

//   * View multiple the combined weight of multiple exercises on the `stats` page.
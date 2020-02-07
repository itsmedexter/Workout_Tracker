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
router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
       Exercise.findOneAndUpdate({_id: req.params.id}, { $push: { exercises: req.body }, $inc: {totalDuration: req.body.duration} }, { new: true })
      .then(dbExercise => {
          console.log("some string");
          console.log(dbExercise);
        res.json(dbExercise);
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
    Exercise.create({day: Date.now()})
    .then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.json(err);
    });
});


// old post 
// router.post("/api/workouts", function(req, res)  {
//     console.log("Inside post workout");
//     console.log(req.body);
//     Exercise.create(req.body)
//     .then(({ _id }) => Exercise.findOneAndUpdate({}, { $push: { exercises: req.body } }, { new: true}))
//     //   * findOneAndUpdate({!!!!!!!}) id
//     .then(dbExercise => {
//         res.json(dbExercise);
//     })
//     .catch(err => {
//         res.json(err);
//     });
// });




//   * View multiple the combined weight of multiple exercises on the `stats` page.
router.get("/api/workouts", (req, res) => {
    Exercise.find({})
        // .populate("exercises") if you have only one model, do not populate to more
        .then(Exercises => {
            res.json(Exercises)
        })
        .catch(err =>{
            res.json(err);
        });
});

// Old get
// router.get("/api/workouts", (req, res) => {
//     Exercise.find(
//         {
//         },
//         (error, data) => {
//           if (error) {
//             res.send(error);
//         }   else { 
//             console.log("Inside get workout");
//             console.log(data);
//             res.send(data);
//                  }
//         }
//     );
// });






// create put route for /api/workouts/:id" + id
// how am I get find one and update findbyidandupdate

// router.put("/api/workouts/:id", (req, res) => {
//     console.log(req.body);
//     Exercise.findByIdAndUpdate(req.params.id, req.body,
//         (error, data) => {
//             if (error) {
//                 res.send(error);
//             } else {
//                 res.send(data);
//             }
//         }
//     );
// });




// test





// test




// POST /api/workout add workout?????? /api/workouts
// router.post("/api/workouts", (req, res) => { 
//     console.log("/api/workouts/inside")
//     console.log(req.body);
//     Exercise.create(body)
//         .then(dbExercise => {
//             res.json(dbExercise);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });


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
    .then(dbExercise => {
        console.log("some string2");
        console.log(dbExercise);
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//     app.get("/api/workouts/range", (req, res) => {
//         db.Work.find({})
//         .populate("exercises")
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.json(err)
//         })


module.exports = router;




// * Add exercises to a previous workout plan.

//   * Add new exercises to a new workout plan.

//   * View multiple the combined weight of multiple exercises on the `stats` page.






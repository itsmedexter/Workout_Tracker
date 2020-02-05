var path = require("path");

const router = require("express").Router();


// html route to exercise
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// html route to stats
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

// POST /api/workout add workout
router.post("api/previous_workout", ({ body }, res) => {
    Exercise.create(body)
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


// POST /api/new_workout add Exercise
router.post("api/new_workout", ({ body }, res) => {
    Exercise.create(body)
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


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
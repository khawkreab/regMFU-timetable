const express = require('express');
const router = express.Router();
const teacher = require('../models/teacher');
const mejor = require('../models/mejor');
const schoolof = require('../models/schoolof');


// for teacher
router.get('/teacher', (req, res) => {
    teacher.find({}).then((teacher) => {
        res.json(teacher);
    })
})

router.get('/teacher/:id', (req, res) => {
    teacher.findById({_id: req.params.id}).then((teacher) => {
        res.send(teacher);
    })
})

router.post('/addteacher', (req, res) => {
    teacher.create(req.body).then((teacher) => {
        res.send(teacher);
    })
})

// for major
router.get('/mejor', (req, res) => {
    mejor.find({}).then((mejor) => {
        res.json(mejor);
    })
})


// for school of
// router.get('/schoolof', (req, res) => {
//     schoolof.find({}).populate({path: 'majorid'}).exec(err, (schoolof) => {
//         res.json(schoolof);
//     })
// })











module.exports = router;
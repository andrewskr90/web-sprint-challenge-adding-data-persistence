const express = require('express')
const { checkDescription, checkNotes } = require('./middleware')
const Task = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.getTasks()
        res.status(200).json(tasks)
    } catch (err) {
        next(err)
    }
})

router.post('/', checkDescription, checkNotes, async (req, res, next) => {
    try {
        const newTask = await Task.insertTask(req.body)
        res.status(201).json(newTask)
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500)
        .json({
            message: err.message, 
            stack: err.stack
        })
})

module.exports = router
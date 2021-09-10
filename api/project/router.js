const express = require('express')
const Project = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.getProjects()
        res.status(200).json(projects)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    if (!req.body.project_name) {
        next({ status: 400, message: 'missing project_name field' })
    }
    try {
        const project = await Project.insertProject(req.body)
        res.status(201).json(project)
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
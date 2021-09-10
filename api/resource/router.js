const express = require('express')
const { checkName, checkDescription } = require('./middleware')
const Resource = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.getResources()
        res.status(200).json(resources)
    } catch (err) {
        next(err)
    }
})

router.post('/', checkName, checkDescription, async (req, res, next) => {
    try {
        const newResource = await Resource.insertResource(req.body)
        res.status(201).json(newResource)
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
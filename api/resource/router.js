const express = require('express')
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

router.post('/', async (req, res, next) => {
    if (!req.body.resource_name) {
        next({ status: 400, message: 'missing resource_name field'})
    }
    if (!req.body.resource_description === '') {
        req.body.resource_description = null
    }
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
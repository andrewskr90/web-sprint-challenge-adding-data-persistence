const checkName = (req, res, next) => {
    if (!req.body.resource_name) {
        next({ status: 400, message: 'missing resource_name field'})
    }
    next()
}

const checkDescription = (req, res, next) => {
    if (!req.body.resource_description === '') {
        req.body.resource_description = null
    }
    next()
}

module.exports = {
    checkName,
    checkDescription
}
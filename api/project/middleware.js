
const checkName = (req, res, next) => {
    if (!req.body.project_name) {
        next({ status: 400, message: 'missing project_name field' })
    }
    next()
}

const checkCompleted = (req, res, next) => {
    if (req.body.project_completed === 1) {
        req.body.project_completed = true
    }
    next()
}

module.exports = {
    checkName, checkCompleted
}

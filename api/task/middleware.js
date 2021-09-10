const checkDescription = (req, res, next) => {
    if (!req.body.task_description) {
        next({ status: 400, message: 'missing task_description field'})
    }
    next()
}

const checkNotes = (req, res, next) => {
    if (!req.body.task_notes === '') {
        req.body.task_notes = null
    }
    next()
}

module.exports = {
    checkDescription,
    checkNotes
}
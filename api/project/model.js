const db = require('../../data/dbConfig')

async function getProjects() {
    const projects = await db('projects')

    const projectsArray = projects.map(proj => {
        const trueOrFalse = (integer) => {
            if (integer === 0) {
                return false
            } else {
                return true
            }
        }
        return {
            project_id: proj.project_id,
            project_name: proj.project_name,
            project_description: proj.project_description,
            project_completed: trueOrFalse(proj.project_completed)
        }
    })

    return projectsArray
}

async function insertProject(requestBody) {
    const newProjectId = await db('projects').insert(requestBody)
    const trueOrFalse = (completedOrNot) => {
        if (completedOrNot) {
            return completedOrNot
        } else {
            return false
        }
    }
    const newProject = {
        project_id: newProjectId[0],
        ...requestBody,
        project_completed: trueOrFalse(requestBody.project_completed)
    }
    return newProject
}

module.exports = {
    getProjects,
    insertProject
}
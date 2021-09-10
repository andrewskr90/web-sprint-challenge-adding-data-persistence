const db = require('../../data/dbConfig')

async function getResources() {
    const resources = await db('resources')

    // const resourcesArray = resources.map(reso => {
    //     const isItNull = (nullOrNot) => {
    //         if (nullOrNot) {
    //             return nullOrNot
    //         } else {
    //             return null
    //         }
    //     }
    //     return {
    //         resource_id: reso.resource_id,
    //         resource_name: reso.resource_name,
    //         resource_description: trueOr(proj.project_completed)
    //     }
    // })

    return resources
}

async function insertResource(requestBody) {
    const newResourceId = await db('resources').insert(requestBody)
    const nullOrNot = (descValue) => {
        if (descValue) {
            return descValue
        } else {
            return null
        }
    }
    const newResource = {
        resource_id: newResourceId[0],
        ...requestBody,
        resource_description: nullOrNot(requestBody.resource_description)
    }
    return newResource
}
0
module.exports = {
    insertResource,
    getResources
}
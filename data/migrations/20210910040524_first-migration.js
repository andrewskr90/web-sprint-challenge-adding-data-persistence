
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', table => {
        table.increments('project_id')
        table.string('project_name')
    })
    .createTable('resources', table => {
        table.increments('resource_id')
        table.string('resource_name')
    })
    .createTable('tasks', table => {
        table.increments('task_id')
        table.string('task_name')
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};

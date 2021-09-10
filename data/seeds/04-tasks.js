exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      task_description: 'brainstorm database',
      task_notes: 'make sure to design your database with a strong team',
      project_id: 1
    },
    {
      task_description: 'build server and endpoints',
      project_id: 1
    },
    {
      task_description: 'create react app',
      task_notes: 'build out the front end, make it look cool too',
      project_id: 1
    },
    {
      task_description: 'gather dirty clothes and wash them',
      task_notes: 'dont forget to use cold water and hang dry them outside',
      project_id: 2
    },
    {
      task_description: 'find all the empty coffee cups',
      task_notes: 'there is a total of 8',
      project_id: 2
    },
    {
      task_description: 'make your bed',
      task_notes: 'this should be the first thing you do every morning',
      project_id: 2
    }
  ]);
};

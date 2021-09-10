
exports.seed = function(knex) {
    return knex('projects').insert([
      {
        project_name: 'pokemon card collector',
        project_description: 'build website to organize poke card collection'
      },
      {
        project_name: 'clean bedroom',
        project_description: 'Do your laundry, throw away empty coffee cups'
      }
    ]);
};

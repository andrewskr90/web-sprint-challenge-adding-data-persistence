exports.seed = function(knex) {
  return knex('resources').insert([
    {
      resource_name: 'laundry detergent',
      resource_description: 'tide brand, a nice and gentle feel'
    },
    {
      resource_name: 'garbage can'
    },
  ]);
};


exports.seed = function(knex) {
  return knex('resources').insert([
    {resource_name: 'booth', resource_description: 'recording booth'},
    {resource_name: 'keyboard', resource_description: 'mechanical'},
    {resource_name: 'headphones', resource_description: 'sennheiser hd598'},
  ]);
};


exports.seed = function(knex) {
  return knex('projects').insert([
    { project_name: 'Life is Fair 4 Me', project_description: 'album', completed: true},
    { project_name: 'My Son is the Moon He Look Just Like Me II', project_description: 'album', completed: true},
    { project_name: 'You\'ll Cowards Don\'t Even Smoke Crack', project_description: 'single', completed: false}
  ]);
};


exports.seed = function(knex) {
  return knex('tasks').insert([
    {description: 'drive to studio', notes: 'go fast', completed: false, project_id: 1},
    {description: 'spit rhymes', notes: 'dope', completed: false, project_id: 1},
    {description: 'make beat', notes: 'yeeeahhhhhhh', completed: false, project_id: 1},
    {description: 'mix and master', notes: 'we out here 1', completed: false, project_id: 1},
    {description: 'drive to studio', notes: 'go fast', completed: false, project_id: 2},
    {description: 'spit rhymes', notes: 'dope', completed: false, project_id: 2},
    {description: 'make beat', notes: 'yeeeahhhhhhh', completed: false, project_id: 2},
    {description: 'mix and master', notes: 'we out here 2', completed: false, project_id: 2},
    {description: 'drive to studio', notes: 'go fast', completed: false, project_id: 3},
    {description: 'spit rhymes', notes: 'dope', completed: false, project_id: 3},
    {description: 'make beat', notes: 'yeeeahhhhhhh', completed: false, project_id: 3},
    {description: 'mix and master', notes: 'we out here 3', completed: false, project_id: 3},
  ]);
};

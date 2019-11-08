exports.up = function(knex) {
  return knex.schema.createTable("tasks", tbl => {
    // unique values
    tbl.increments();
    tbl.string("description", 255).notNullable();
    tbl.string("notes", 255);
    tbl.boolean("completed").defaultTo(false);
    // foreign keys
    tbl
      .integer("project_id", 50)
      .unsigned()
      .references("id")
      .inTable("projects")
      .notNullable()
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tasks");
};

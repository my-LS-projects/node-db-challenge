exports.up = function(knex) {
  return knex.schema.createTable("project", tbl => {
    // unique
    tbl.increments();
    // foreign keys
    tbl
      .integer("project_id", 255)
      .unsigned()
      .references("id")
      .inTable("projects")
      .notNullable();

    tbl
      .integer("resource_id", 255)
      .unsigned()
      .references("id")
      .inTable("resources")
      .notNullable()
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("project");
};

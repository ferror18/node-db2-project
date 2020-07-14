
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
      tbl.increments();
      tbl.string('VIN', 17).unique().notNullable();
      tbl.string('make', 256).notNullable();
      tbl.string('model', 256).notNullable();
      tbl.string('milage', 256).notNullable();
      tbl.string('transmission', 256);
      tbl.string('title_status', 256);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars")
};

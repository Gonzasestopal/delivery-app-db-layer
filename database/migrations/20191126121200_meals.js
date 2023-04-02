
exports.up = function (knex) {
  return knex.schema
    .createTable('meals', meals => {
      meals.increments();
      meals
        .string('name', 40)
        .notNullable()
        .unique();
      meals
        .integer('price').notNullable()
      meals
        .text('notes', 80);
      meals
        .string('category').notNullable();
      meals
        .boolean('is_available').defaultTo(true)
      meals
        .text('image');
      meals
        .timestamps(); // will create two columns: created_at, updated_at
    })
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists('meals')
};

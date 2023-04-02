
exports.up = function (knex) {
  return knex.schema
    .createTable('meals', meals => {
      meals.increments();
      meals
        .string('name', 80)
        .notNullable()
        .unique();
      meals
        .integer('price').notNullable()
      meals
        .text('notes').notNullable();
      meals
        .string('category').notNullable();
      meals
        .boolean('is_available')
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

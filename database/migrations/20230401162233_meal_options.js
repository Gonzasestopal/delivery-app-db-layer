
exports.up = function (knex) {
    return knex.schema
        .createTable('meal_options', mealOptions => {
            mealOptions.increments();
            mealOptions
                .integer('meal_id')
                .unsigned();
            mealOptions
                .foreign('meal_id')
                .references('meals.id');
            mealOptions
                .string('name', 40)
                .notNullable()
                .unique();
            mealOptions
                .integer('price').notNullable()
            mealOptions
                .boolean('is_available').defaultTo(false)
            mealOptions
                .text('image');
            mealOptions
                .timestamps(true, true); // will create two columns: created_at, updated_at
        })
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('meal_options')
};

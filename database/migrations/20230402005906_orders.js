
exports.up = function (knex) {
    return knex.schema
        .createTable('orders', orders => {
            orders.increments();
            orders
                .string('status').notNullable().defaultTo('active')
            orders
                .integer('meal_id')
                .unsigned()
                .notNullable();
            orders
                .foreign('meal_id')
                .references('meals.id');
            orders
                .integer('user_id')
                .unsigned()
                .notNullable();
            orders
                .foreign('user_id')
                .references('users.id');
            orders
                .timestamps(true, true); // will create two columns: created_at, updated_at
        })
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('orders')
};

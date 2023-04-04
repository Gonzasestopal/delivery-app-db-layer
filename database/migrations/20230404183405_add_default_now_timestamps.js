exports.up = function(knex, Promise) {
    return knex.schema.alterTable('users', function(t) {
      t.dateTime('created_at').defaultTo(knex.fn.now()).alter();
      t.dateTime('updated_at').defaultTo(knex.fn.now()).alter();       
    }).then(function(t) {
        return knex.schema.alterTable('orders', function(t) {
            t.dateTime('created_at').defaultTo(knex.fn.now()).alter();
            t.dateTime('updated_at').defaultTo(knex.fn.now()).alter();       
        })
    }).then(function(t) {
        return knex.schema.alterTable('meals', function(t) {
            t.dateTime('created_at').defaultTo(knex.fn.now()).alter();
            t.dateTime('updated_at').defaultTo(knex.fn.now()).alter();       
        })
    }).then(function(t) {
        return knex.schema.alterTable('meal_options', function(t) {
            t.dateTime('created_at').defaultTo(knex.fn.now()).alter();
            t.dateTime('updated_at').defaultTo(knex.fn.now()).alter();       
        })
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.alterTable('users', function(t) {
      t.date('created_at').nullable().alter();
      t.date('updated_at').nullable().alter();       
    }).then(function(t) {
        return knex.schema.alterTable('orders', function(t) {
            t.date('created_at').nullable().alter();
            t.date('updated_at').nullable().alter();        
        })
    }).then(function(t) {
        return knex.schema.alterTable('meals', function(t) {
            t.date('created_at').nullable().alter();
            t.date('updated_at').nullable().alter();        
        })
    }).then(function(t) {
        return knex.schema.alterTable('meal_options', function(t) {
            t.date('created_at').nullable().alter();
            t.date('updated_at').nullable().alter();        
        })
    })
  };
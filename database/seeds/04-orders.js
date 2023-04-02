exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        { user_id: '1', meal_id: 1, status: 'verified' },
        { user_id: '1', meal_id: 2, status: 'confirmed' },
        { user_id: '2', meal_id: 1, status: 'pending' },
      ]);
    });
};

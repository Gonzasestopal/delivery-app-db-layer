
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('meal_options').del()
    .then(function () {
      // Inserts seed entries
      return knex('meal_options').insert([
        { name: 'Tomato', meal_id: 1, image: 'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png', is_available: false, price: 35 },
        { name: 'Mayonaise', meal_id: 1, image: 'https://expressjs.com/images/express-facebook-share.png', is_available: true, price: 115 },
        { name: 'Ketchup', meal_id: 1, image: 'https://i.pinimg.com/originals/34/71/4b/34714b8ef3d6d9887936a942a613064e.png', is_available: false, price: 150 },
        { name: 'Cheese', meal_id: 1, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/1200px-SQLite370.svg.png', is_available: true, price: 90 }
      ]);
    });
};

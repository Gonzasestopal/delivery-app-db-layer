
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('meals').del()
    .then(function () {
      // Inserts seed entries
      return knex('meals').insert([
        { name: 'Burger', notes: `Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.`, category: 'Software', image: 'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png', is_available: false, price: 105 },
        { name: 'Pizza', notes: `Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.`, category: 'Software', image: 'https://expressjs.com/images/express-facebook-share.png', is_available: true, price: 1430 },
        { name: 'Pasta', notes: `Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use.`, category: 'Software', image: 'https://i.pinimg.com/originals/34/71/4b/34714b8ef3d6d9887936a942a613064e.png', is_available: false, price: 1990 },
        { name: 'Taco', notes: `SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine. SQLite is the most used database engine in the world.`, category: 'Software', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/1200px-SQLite370.svg.png', is_available: true, price: 950 }
      ]);
    });
};

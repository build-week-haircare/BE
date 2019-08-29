const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
 // Inserts seed entries
    return knex('users').insert([
      { email: 'kedasha@yahoo.com', password: bcrypt.hashSync('kerr'), stylist: false }, //1
      { email: 'charles@yahoo.com', password: bcrypt.hashSync('kerr'),  stylist: true }, //2
      { email: 'ashley@yahoo.com', password: bcrypt.hashSync('kerr'),  stylist: true }, //3
      { email: 'jessica@yahoo.com', password: bcrypt.hashSync('kerr'),  stylist: true }, //4
    ]);
};

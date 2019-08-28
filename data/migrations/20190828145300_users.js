
exports.up = function(knex) {
    return knex.schema   
    .createTable('users', function(users) {
        users
        .increments();
        users
            .text('email')
            .notNullable()
            .unique();
        users
            .text('password')
            .notNullable();
        users
        .boolean('stylist');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
};

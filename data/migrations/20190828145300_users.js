
exports.up = function(knex) {
    return knex.schema   
    .createTable('users', function(users) {
        users
        .increments();
        users
            .string('email', 128)
            .notNullable()
            .unique();
        users
            .string('password', 128)
            .notNullable();
        users
        .boolean('stylist');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
};

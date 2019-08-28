
exports.up = function(knex) {
    return knex.schema   
    .createTable('stylists', function(stylists) {
        stylists
        .increments();
        stylists
            .integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        stylists
            .string('username', 255)
            .notNullable()
        stylists
            .string('about', 256)
            .notNullable();
        stylists
            .string('skills', 256);
        stylists
            .string('profile_img', 255)
            .defaultTo('https://source.unsplash.com/200x200/?hair')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('stylists')
};

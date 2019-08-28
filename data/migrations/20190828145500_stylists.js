
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
            .text('username')
            .notNullable()
        stylists
            .text('about')
            .notNullable();
        stylists
            .text('skills');
        stylists
            .text('profile_img')
            .defaultTo('https://source.unsplash.com/200x200/?hair')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('stylists')
};

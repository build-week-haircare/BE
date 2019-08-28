
exports.up = function(knex) {
    return knex.schema 
    .createTable('posts', function(posts) {
        posts
            .increments();
        posts
            .integer('stylists_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('stylists')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        posts
            .text('title')
            .notNullable()
        posts
            .text('posts_image')
            .defaultTo('https://source.unsplash.com/400x400/?hair')
        posts
            .text('description');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('posts')
};

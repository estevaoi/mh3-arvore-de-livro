import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('books', table => {
        //table.engine('InnoDB');
        table.string('_id').primary();
        table.string('title');
        table.string('img');
        table.string('author');
        table.string('description');
    });
}

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('books');
}


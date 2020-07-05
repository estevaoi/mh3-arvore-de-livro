import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('people', table => {
        //table.engine('InnoDB');
        table.string('code').primary();
        table.string('name').notNullable();
        table.string('image');
        table.string('phone');
        table.string('email').notNullable();
        table.string('password');
        table.boolean('status').notNullable();
    });
}

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('people');
}


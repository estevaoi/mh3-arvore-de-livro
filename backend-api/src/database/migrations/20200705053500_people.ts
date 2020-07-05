import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('people', table => {
        //table.engine('InnoDB');
        table.string('_id').primary();
        table.string('name');
        table.string('image');
        table.string('phone');
        table.string('email');
        table.string('password');
        table.string('type');
        table.string('class');
        table.string('status');
    });
}

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('people');
}


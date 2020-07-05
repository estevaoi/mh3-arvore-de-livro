import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('phases', table => {
        //table.engine('InnoDB');
        table.string('_id').primary();
        table.string('title');
        table.string('img');
        table.string('tasks');
        table.string('status');
        table.string('description');
        table.integer('points');
    });
}

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('phases');
}


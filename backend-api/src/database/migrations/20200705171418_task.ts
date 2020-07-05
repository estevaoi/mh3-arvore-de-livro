import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('tasks', table => {
        //table.engine('InnoDB');
        table.string('_id').primary();
        table.string('title');
        table.string('description');
        table.string('status');
        table.string('questions');
        table.string('rightAnswer');
        table.string('answer');
        table.integer('points');
    });
}

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('tasks');
}


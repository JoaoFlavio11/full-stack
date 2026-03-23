import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    await knex("products").del();
    
    await knex("products").insert([
        { name: "strogonoff", price: "21" },
    ]);
};

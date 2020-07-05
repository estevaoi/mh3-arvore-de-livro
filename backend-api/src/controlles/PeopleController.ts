import { Request, Response } from 'express';
import crypto from 'crypto';
import knex from '../database/connection';

class PeopleController {

    async create(req: Request, res: Response) {
        const {
            name,
            image,
            phone,
            email,
            password,
            type,
            status
        } = req.body;

        const trx = await knex.transaction();

        const people = {
            _id: crypto.randomBytes(16).toString('hex'),
            name,
            image,
            phone,
            email,
            password,
            type,
            status
        }

        try {

            await trx('people').insert(people);
            await trx.commit();

            return res.json({
                people
            });

        } catch (err) {

            return res.status(400).json({
                error: err.message
            });

        }

    }

    async index(req: Request, res: Response) {

        const people = await knex('people')
            .select('*');

        return res.json({
            people
        });
    }

    async view(req: Request, res: Response) {
        const { id } = req.params;

        const people = await knex('people')
            .where('_id', id)
            .first();

        if (!people)
            return res.status(400).json({
                message: 'Person not found'
            });

        return res.json({
            _id: people._id,
            name: people.name,
            image: people.image,
            phone: people.phone,
            email: people.email,
            password: people.password,
            type: people.type,
            class: people.class,
            status: people.status
        });
    }

}

export default PeopleController;
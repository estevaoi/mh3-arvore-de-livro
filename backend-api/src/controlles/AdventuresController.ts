import { Request, Response } from 'express';
import crypto from 'crypto';
import knex from '../database/connection';

class AdventuresController {

    async create(req: Request, res: Response) {
        const {
            title,
            img,
            points,
            book
        } = req.body;

        const trx = await knex.transaction();

        const adventure = {
            _id: crypto.randomBytes(16).toString('hex'),
            title,
            img,
            points,
            book
        }

        try {

            await trx('adventures').insert(adventure);
            await trx.commit();

            return res.json({
                adventure
            });

        } catch (err) {

            return res.status(400).json({
                error: err.message
            });

        }

    }

    async index(req: Request, res: Response) {

        const adventures = await knex('adventures')
            .select('*');

        return res.json({
            adventures
        });
    }

    async view(req: Request, res: Response) {
        const { id } = req.params;

        const adventure = await knex('adventures')
            .where('_id', id)
            .first();

        const book = await knex('books')
            .where('_id', adventure.book)
            .first();

        const phases = await knex('phases')
            .where('adventure', id);

        if (!adventure)
            return res.status(400).json({
                message: 'Adventure not found'
            });

        return res.json({
            _id: adventure._id,
            title: adventure.title,
            img: adventure.img,
            points: adventure.points,
            book: book,
            phases: phases
        });
    }

}

export default AdventuresController;
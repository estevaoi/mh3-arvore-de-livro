import { Request, Response } from 'express';
import crypto from 'crypto';
import knex from '../database/connection';

class BooksController {

    async create(req: Request, res: Response) {
        const {
            title,
            img,
            author,
            description
        } = req.body;

        const trx = await knex.transaction();

        const book = {
            _id: crypto.randomBytes(16).toString('hex'),
            title,
            img,
            author,
            description
        }

        try {

            await trx('books').insert(book);
            await trx.commit();

            return res.json({
                book
            });

        } catch (err) {

            return res.status(400).json({
                error: err.message
            });

        }

    }

    async index(req: Request, res: Response) {

        const people = await knex('books')
            .select('*');

        return res.json({
            people
        });
    }

    async view(req: Request, res: Response) {
        const { id } = req.params;

        const people = await knex('books')
            .where('_id', id)
            .first();

        if (!people)
            return res.status(400).json({
                message: 'Book not found'
            });

        return res.json({
            _id: people._id,
            title: people.title,
            img: people.img,
            author: people.author,
            description: people.description
        });
    }

}

export default BooksController;
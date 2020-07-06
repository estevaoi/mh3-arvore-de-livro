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

        const book = await knex('books')
            .select('*');

        return res.json({
            book
        });
    }

    async view(req: Request, res: Response) {
        const { id } = req.params;

        const book = await knex('books')
            .where('_id', id)
            .first();

        if (!book)
            return res.status(400).json({
                message: 'Book not found'
            });

        return res.json({
            _id: book._id,
            title: book.title,
            img: book.img,
            author: book.author,
            description: book.description
        });
    }

}

export default BooksController;
import { Request, Response } from 'express';
import crypto from 'crypto';
import knex from '../database/connection';

class PhasesController {

    async create(req: Request, res: Response) {
        const {
            title,
            img,
            tasks,
            status,
            description,
            points
        } = req.body;

        const { id } = req.params;

        const trx = await knex.transaction();

        const adventure = {
            _id: crypto.randomBytes(16).toString('hex'),
            title,
            img,
            tasks,
            status,
            description,
            points,
            adventure: id,
        }

        try {

            await trx('phases').insert(adventure);
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

}

export default PhasesController;
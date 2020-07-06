import express from 'express';

import PeopleController from './controlles/PeopleController';
import BooksController from './controlles/BooksController';
import AdventuresController from './controlles/AdventuresController';
import PhasesController from './controlles/PhasesController';

const routes = express.Router();

const peopleController = new PeopleController();
const booksController = new BooksController();
const adventuresController = new AdventuresController();
const phasesController = new PhasesController();

routes.post('/people', peopleController.create);
routes.get('/people', peopleController.index);
routes.get('/people/:id', peopleController.view);

routes.post('/books', booksController.create);
routes.get('/books', booksController.index);
routes.get('/books/:id', booksController.view);

routes.post('/adventures', adventuresController.create);
routes.get('/adventures', adventuresController.index);
routes.get('/adventures/:id', adventuresController.view);

routes.post('/adventures/:id/phases', phasesController.create);

export default routes;

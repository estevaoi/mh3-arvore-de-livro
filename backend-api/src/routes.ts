import express from 'express';

import PeopleController from './controlles/PeopleController';
import BooksController from './controlles/BooksController';

const routes = express.Router();

const peopleController = new PeopleController();
const booksController = new BooksController();

routes.post('/people', peopleController.create);
routes.get('/people', peopleController.index);
routes.get('/people/:id', peopleController.view);

routes.post('/books', booksController.create);
routes.get('/books', booksController.index);
routes.get('/books/:id', booksController.view);

export default routes;

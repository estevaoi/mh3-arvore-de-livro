import express from 'express';

import PeopleController from './controlles/PeopleController';

const routes = express.Router();

const peopleController = new PeopleController();

routes.post('/people', peopleController.create);
routes.get('/people', peopleController.index);
routes.get('/people/:id', peopleController.view);

export default routes;

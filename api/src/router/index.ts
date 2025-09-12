import * as app from 'express';
import usersRouter from './users-router';

const routes = app.Router();

routes.use('/users', usersRouter);

export default routes;

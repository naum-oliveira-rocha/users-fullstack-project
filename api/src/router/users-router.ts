import * as app from 'express';
import { Request, Response } from 'express';
import { UsersController } from '../controller';

const usersRouter = app.Router();

const usersController = new UsersController();

usersRouter.post(
    '/',
    async (req: Request, res: Response) =>
        await usersController.create(req, res)
);

usersRouter.get(
    '/',
    async (req: Request, res: Response) => await usersController.get(req, res)
);

usersRouter.put(
    '/:id',
    async (req: Request, res: Response) =>
        await usersController.update(req, res)
);

usersRouter.delete(
    '/:id',
    async (req: Request, res: Response) =>
        await usersController.delete(req, res)
);

usersRouter.get(
    '/:id',
    async (req: Request, res: Response) =>
        await usersController.getOne(req, res)
);

export default usersRouter;

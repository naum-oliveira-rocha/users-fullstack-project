import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UsersLogic } from '../logic';
import { UsersSchema } from '../validator';
import { ValidationUtils } from '../utils';

export class UsersController {
    public async create(req: Request, res: Response): Promise<void> {
        const payload = req.body;
        try {
            ValidationUtils.validate(UsersSchema.CREATE, payload);

            const logic = new UsersLogic();
            const response = await logic.create(payload);

            res.status(StatusCodes.CREATED).json({ response });
        } catch (error) {
            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }

    public async get(req: Request, res: Response): Promise<void> {
        try {
            const logic = new UsersLogic();
            const response = await logic.list();

            res.status(StatusCodes.OK).json({ response });
        } catch (error) {
            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }

    public async update(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        const { body } = req;
        try {
            const payload = { ...body, id };

            ValidationUtils.validate(UsersSchema.UPDATE, payload);

            const logic = new UsersLogic();
            const response = await logic.update(payload);

            res.status(StatusCodes.CREATED).json({ response });
        } catch (error) {
            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        try {
            ValidationUtils.validate(UsersSchema.DELETE, { id });

            const logic = new UsersLogic();
            const response = await logic.delete(id);

            res.status(StatusCodes.OK).json({ response });
        } catch (error) {
            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }

    public async getOne(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        try {
            ValidationUtils.validate(UsersSchema.GET, { id });

            const logic = new UsersLogic();
            const response = await logic.getOne(id);

            res.status(StatusCodes.OK).json({ response });
        } catch (error) {
            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }
}

import { prisma } from '../lib/prisma';
import { UsersDTO, UsersUpdateDTO } from '../logic/dto';
import { BadRequest, NotFound } from '../utils';

export class UserRepository {
    async create(data: UsersDTO): Promise<UsersDTO> {
        const { name, email, occupationArea } = data;
        try {
            const response = prisma.user.create({
                data: {
                    name,
                    email,
                    occupationArea,
                },
            });

            return response;
        } catch (error) {
            throw error;
        }
    }

    async update(data: UsersUpdateDTO): Promise<UsersDTO> {
        const { id, name, occupationArea } = data;
        try {
            const response = await prisma.user.update({
                data: {
                    name,
                    occupationArea,
                },
                where: {
                    id,
                },
            });

            if (!response) {
                throw new NotFound('User not found!');
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async delete(id: number): Promise<UsersDTO> {
        try {
            const response = prisma.user.delete({
                where: {
                    id,
                },
            });

            if (!response) {
                throw new NotFound('User not found!');
            }

            return response;
        } catch (error) {
            throw error;
        }
    }

    async list(): Promise<Array<UsersDTO>> {
        try {
            const response = prisma.user.findMany({
                select: {
                    id: true,
                    name: true,
                    email: true,
                    occupationArea: true,
                },
            });

            return response;
        } catch (error) {
            throw error;
        }
    }

    async find(id: number): Promise<UsersDTO> {
        try {
            const response = prisma.user.findUnique({
                where: {
                    id,
                },
            });

            if (!response) {
                throw new NotFound('User not found!');
            }

            return response;
        } catch (error) {
            throw error;
        }
    }
}

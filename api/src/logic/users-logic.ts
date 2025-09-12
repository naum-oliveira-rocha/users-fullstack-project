import { UserRepository } from '../repository';
import { UsersDTO, UsersUpdateDTO } from './dto';

export class UsersLogic {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data: UsersDTO): Promise<UsersDTO> {
        try {
            return await this.userRepository.create(data);
        } catch (error) {
            throw error;
        }
    }

    async update(data: UsersUpdateDTO): Promise<UsersDTO> {
        try {
            return await this.userRepository.update(data);
        } catch (error) {
            throw error;
        }
    }

    async delete(userId: number): Promise<UsersDTO> {
        try {
            return await this.userRepository.delete(userId);
        } catch (error) {
            throw error;
        }
    }

    async list(): Promise<Array<UsersDTO>> {
        try {
            return await this.userRepository.list();
        } catch (error) {
            throw error;
        }
    }

    async getOne(userId: number): Promise<UsersDTO> {
        try {
            return await this.userRepository.find(userId);
        } catch (error) {
            throw error;
        }
    }
}

import * as Joi from 'joi';

export const CreateUserSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    occupationArea: Joi.string()
        .valid('Suporte', 'Comercial', 'Produto', 'Desenvolvimento')
        .required(),
}).required();

export const UpdateUserSchema = Joi.object({
    id: Joi.number().required(),
    occupationArea: Joi.string()
        .valid('Suporte', 'Comercial', 'Produto', 'Desenvolvimento')
        .required(),
    name: Joi.string(),
}).required();

export const DeleteUserSchema = Joi.object({
    id: Joi.number().required(),
}).required();

export const GetUserSchema = Joi.object({
    id: Joi.number().required(),
}).required();

export const UsersSchema = {
    CREATE: CreateUserSchema,
    UPDATE: UpdateUserSchema,
    DELETE: DeleteUserSchema,
    GET: GetUserSchema,
};

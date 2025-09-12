import { z } from "zod";

export const UsersSchema = z.object({
  name: z.string()
    .regex(/[a-zA-Z\u00C0-\u00FF ]+/i, 'O nome deve conter apenas letras')
    .min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('O email deve ser válido')
})
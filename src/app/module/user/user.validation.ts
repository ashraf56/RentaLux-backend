import { z } from "zod";

const createUservalidationSchema = z.object({
    body: z.object({
        name: z.string(),
        email: z.string().email(),
        role: z.string().default('user'),
        password: z.string({ invalid_type_error: 'password must be string' }).max(8),
        phone: z.string(),
        address: z.string()
    })


})

const LoginvalidationSchema = z.object({
    body: z.object({

        email: z.string().email(),
        password: z.string({ invalid_type_error: 'password must be string' }).max(8),
    })


})



export const UserValidations = {
    createUservalidationSchema,
    LoginvalidationSchema
}
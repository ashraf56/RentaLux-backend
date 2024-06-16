"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidations = void 0;
const zod_1 = require("zod");
const createUservalidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string().email(),
        role: zod_1.z.string().default('user'),
        password: zod_1.z.string({ invalid_type_error: 'password must be string' }).max(8),
        phone: zod_1.z.string(),
        address: zod_1.z.string()
    })
});
exports.UserValidations = {
    createUservalidationSchema
};

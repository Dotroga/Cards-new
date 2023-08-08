import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().nonempty('Email is required').email(),
  password: z
    .string()
    .nonempty('Password is required')
    .min(3, 'Password cannot be shorter than 3 characters'),
  rememberMe: z.boolean().default(false),
})

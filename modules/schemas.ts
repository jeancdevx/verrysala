import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().email('Email inválido').trim(),
  password: z.string().min(8, 'Mínimo 8 caracteres').trim()
})

export const signUpSchema = z.object({
  username: z
    .string()
    .min(2, 'Mínimo 2 caracteres')
    .max(100, 'Máximo 100 caracteres')
    .trim(),
  email: z.string().email('Email inválido').trim(),
  password: z
    .string()
    .min(8, 'Mínimo 8 caracteres')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Debe contener mayúscula, minúscula y número'
    )
    .trim()
})

export type SignInData = z.infer<typeof signInSchema>
export type SignUpData = z.infer<typeof signUpSchema>

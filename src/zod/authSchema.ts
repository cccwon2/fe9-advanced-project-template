import { z } from "zod";

import { emailSchema, passwordSchema } from "./commonSchema";

export const signupSchema = z.object({
  email: emailSchema,
  nickname: z.string().min(2),
  password: passwordSchema,
  confirmPassword: passwordSchema,
});

export type SignupSchema = z.infer<typeof signupSchema>;

export const signinSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type SigninSchema = z.infer<typeof signinSchema>;

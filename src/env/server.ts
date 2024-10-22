import { z } from "zod";

const serverEnvSchema = z.object({
  NEXT_PUBLIC_STRAPI_URL: z.string().min(1),
  NEXT_PUBLIC_BASE_URL: z.string().min(1),
});

export const env = serverEnvSchema.parse(process.env);

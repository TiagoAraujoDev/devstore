import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.string().url(),
  APP_URL: z.string().url(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    "Invalid environment variables!",
    parsedEnv.error.flatten().fieldErrors,
  );

  throw new Error("⚠ Environment variables error!");
}

export const env = parsedEnv.data;

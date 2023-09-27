import { PrismaClient } from "@prisma/client";
import { inferAsyncReturnType } from "@trpc/server";

export const createContext = () => {
  const prisma = new PrismaClient();

  return {
    prisma,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;

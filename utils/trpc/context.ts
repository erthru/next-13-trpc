import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { inferAsyncReturnType } from "@trpc/server";
import { getServerSession } from "next-auth";

export const createContext = async () => {
  const prisma = new PrismaClient();
  const session = await getServerSession(authOptions);

  return {
    prisma,
    session,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;

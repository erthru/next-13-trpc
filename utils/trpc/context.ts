import { inferAsyncReturnType } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";

/** * Creates context for an incoming request * @link https://trpc.io/docs/context */
export const createContext = (opts: CreateNextContextOptions) => {
  const { req, res } = opts;

  return {
    req,
    res,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;

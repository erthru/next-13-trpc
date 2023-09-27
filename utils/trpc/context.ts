import { inferAsyncReturnType } from "@trpc/server";

export const createContext = () => {
  return {
    userId: 1,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;

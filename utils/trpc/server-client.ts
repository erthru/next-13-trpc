import { appRouter } from "@/app/api/trpc/app-router";
import { createContext } from "@/utils/trpc/context";

export const serverClient = appRouter.createCaller(createContext());

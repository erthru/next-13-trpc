import { createTRPCReact } from "@trpc/react-query";
import { type AppRouter } from "@/utils/trpc/routers";

export const client = createTRPCReact<AppRouter>({});

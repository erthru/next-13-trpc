import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/utils/trpc/routers";
import { createContext } from "@/utils/trpc/context";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext,
  });

export { handler as GET, handler as POST };

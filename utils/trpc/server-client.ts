import { httpBatchLink } from "@trpc/client";
import { appRouter } from "@/app/api/trpc/app-router";

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: "/api/trpc",
    }),
  ],
});

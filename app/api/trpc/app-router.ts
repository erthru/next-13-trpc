import { z } from "zod";
import { publicProcedure, router } from "@/utils/trpc";

export const appRouter = router({
  greetings: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input, ctx }) => {
      const { name } = input;
      return `hello ${name}`;
    }),
});

export type AppRouter = typeof appRouter;

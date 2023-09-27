import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "@/utils/trpc";

export const appRouter = router({
  register: publicProcedure
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { username, password } = input;

      const user = await ctx.prisma.user.create({
        data: {
          username,
          password,
        },
      });

      return user;
    }),

  getAllTodos: protectedProcedure.query(async ({ ctx }) => {
    const todos = await ctx.prisma.todo.findMany({
      where: { userId: ctx.session?.user.id },
    });

    return todos;
  }),

  createTodo: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { name } = input;

      const todo = await ctx.prisma.todo.create({
        data: {
          name,
          userId: ctx.session?.user.id!!,
        },
      });

      return todo;
    }),
});

export type AppRouter = typeof appRouter;

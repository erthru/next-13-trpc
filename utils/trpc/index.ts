import { TRPCError, initTRPC } from "@trpc/server";
import { Context } from "./context";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const t = initTRPC.context<Context>().create();
export const router = t.router;
export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "unauthorized",
    });
  }

  return next({
    ctx: {
      session,
    },
  });
});

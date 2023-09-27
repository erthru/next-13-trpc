import { Prisma } from "@prisma/client";
import NextAuth, { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User extends Prisma.UserGetPayload<{}> {}

  interface Session extends DefaultSession {
    user: Prisma.UserGetPayload<{}>;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends Prisma.UserGetPayload<{}> {}
}

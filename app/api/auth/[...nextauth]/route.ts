import { PrismaClient } from "@prisma/client";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {},
        password: {},
      },

      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: {
            username: credentials?.username,
            password: credentials?.password,
          },
        });

        if (!user) {
          return null as any;
        }

        return user;
      },
    }),
  ],

  callbacks: {
    jwt({ user, token }) {
      return {
        ...user,
        ...token,
      };
    },

    async session({ session, token }) {
      return {
        ...session,
        user: token,
      };
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

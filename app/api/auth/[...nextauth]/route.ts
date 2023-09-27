import { serverClient } from "@/utils/trpc/server-client";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {},
        password: {},
      },

      async authorize(credentials, req) {
        try {
          const user = await serverClient.login({
            username: credentials?.username!!,
            password: credentials?.password!!,
          });

          return user;
        } catch (err: any) {
          return null as any;
        }
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

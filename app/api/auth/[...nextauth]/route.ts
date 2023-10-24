import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
//import {PrismaAdapter} from '@next-auth/prisma-adapter'

import NextAuth from "next-auth/next";
import prisma from "../../../../db";
import { compare } from "bcrypt";

export const authOptions: AuthOptions = {
  //adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
  }),
    GithubProvider({
        clientId: 'Iv1.f690a43732c8c888',
        clientSecret: '59ebfc278fd390bb653273405f63d295842c0d9b'
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "email"},
        password: {label: "Password", type :'password'}
      },
      async authorize(credentials) {
        if(!credentials?.email || !credentials.password){
return null
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })
        if(!user){
          return null
        }

        const password = await compare(credentials.password, user.password)
        if(!password){
          return null
        }

        return {
          id: user.id + '',
          username: user.username,
          email: user.email
        }
      }, 
    }),
  ],
  callbacks: {

      async jwt({ token, user }) {
   if(user){
    return {
      ...token,
      username: user.username
    }
   }
    return token
  },

    async session({ session, token }: any) {

      session.user.name = session?.user?.name !== undefined ? `${session?.user?.name}_${token?.sub}`  : `${token.username}`;

      return session;
    },
  
  },
  secret: "default_secret_key",
  pages: {
    signIn: "/login",
},
};

const nextAuth = NextAuth(authOptions);

export { nextAuth as GET, nextAuth as POST };
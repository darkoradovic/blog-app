import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import prisma from '../../../db';
import {hash} from 'bcrypt'

export async function POST(req: Request) {
    try {
      const { username, email, password } = (await req.json()) as {
        username: string;
        email: string;
        password: string;
      };
      const hashed_password = await hash(password, 12);
  
      const user = await prisma.user.create({
        data: {
            username,
          email: email.toLowerCase(),
          password: hashed_password,
        },
      });
  
      return NextResponse.json({
        user: {
            username: user.username,
          email: user.email,
          name: user.username
        },
      });
    } catch (error: any) {
      return new NextResponse(
        JSON.stringify({
          status: "error",
          message: error.message,
        }),
        { status: 500 }
      );
    }
  }
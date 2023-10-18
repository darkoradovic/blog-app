import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../db";

export async function GET(req: NextRequest) {
   try {
    const getAllPosts = await prisma.post.findMany()
    if(getAllPosts && getAllPosts.length){
      return NextResponse.json({success: true, data: getAllPosts,})
    }else{
      return NextResponse.json({success: false, message: 'Failed to fetch data!'})
    }
   } catch (error) {
        console.log(error)

        return NextResponse.json({success: false, message: 'Someyhing went wrong!'})
   }
}
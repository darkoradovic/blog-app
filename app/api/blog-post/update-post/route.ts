import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../db";

export async function POST(req: NextRequest) {
   try {
    const extractData = await req.json()

    const comment = await prisma.comment.create({
      data:{
        content: extractData.comment,
        postId: extractData.postId,
        author: extractData.author,
        userImage: extractData.userImage
      }
    });
    
    if(comment){
      return NextResponse.json({success: true, message: 'Blog updated'})
    }else{
      return NextResponse.json({success: false, message: 'Someyhing went wrong!'})
    }
   } catch (error) {
        console.log(error)

        return NextResponse.json({success: false, message: 'Someyhing went wrong!'})
   }
}
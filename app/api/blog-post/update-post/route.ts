import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../db";

export async function PUT(req: NextRequest) {
   try {
    const extractData = await req.json()
    const updatedBlog = await prisma.post.update({
      where : {
         id: Number(extractData.id)
      },
      data: {
         comments: extractData.comments
      }
    })
    if(updatedBlog){
      return NextResponse.json({success: true, message: 'Blog updated'})
    }else{
      return NextResponse.json({success: false, message: 'Someyhing went wrong!'})
    }
   } catch (error) {
        console.log(error)

        return NextResponse.json({success: false, message: 'Someyhing went wrong!'})
   }
}
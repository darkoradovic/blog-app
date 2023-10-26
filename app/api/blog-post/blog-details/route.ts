import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../db";

export async function GET(req: NextRequest) {
   try {
      const url = new URL(req.url)
        const extractBlogId = url.searchParams.get('blogId')
        const blogDetails = await prisma.post.findUnique({
         where: {
            id: Number(extractBlogId)
         }
        })
        if(blogDetails){
         return NextResponse.json({success: true, data: blogDetails})
     }else{
         return NextResponse.json({success: false, message: 'Failed to search results!'})
     }
   } catch (error) {
        return NextResponse.json({success: false, message: 'Someyhing went wrong!'})
   }
}
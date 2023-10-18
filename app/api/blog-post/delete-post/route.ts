import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../db";

export async function DELETE(req: NextRequest) {
   try {
      const url = new URL(req.url)
        const extractBlogId = url.searchParams.get('id')
        const deleteBlog = await prisma.post.delete({
         where: {
            id: Number(extractBlogId)
         }
        })
        if(deleteBlog){
         return NextResponse.json({success: true, message: 'Blog successfully deleted!'})
     }else{
         return NextResponse.json({success: false, message: 'Failed to search results!'})
     }
   } catch (error) {
        console.log(error)

        return NextResponse.json({success: false, message: 'Someyhing went wrong!'})
   }
}
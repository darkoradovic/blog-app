import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../db";

export const GET =async (req:NextRequest) => {
    try {
        const url = new URL(req.url)
        const extractBlogId = url.searchParams.get('blogId')
        const comments = await prisma.post.findMany({
            where:{
                id: Number(extractBlogId)
            },
            include: {
                comments: {
                      select: { content: true, author: true, createdAt: true, userImage: true  },
                  },
              }
        })
        if(comments){
            return NextResponse.json({success: true, data: comments})
        }else{
            return NextResponse.json({success: false, message: 'Failed to search results!'})
        }
    } catch (error) {
        return NextResponse.json({success: false, message: 'Someyhing went wrong!'})
    }
}
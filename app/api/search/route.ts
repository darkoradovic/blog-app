import { prisma } from './../../../db/index';
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url)
        const extractQuery = url.searchParams.get('query')

        const searchPostList = await prisma.post.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: extractQuery || '',
                            mode: 'insensitive'
                        }
                    },
                    {
                        description: {
                            contains: extractQuery || '',
                            mode: 'insensitive'
                        }
                    },
                ]
            }
        })
        if(searchPostList){
            return NextResponse.json({success: true, data: searchPostList})
        }else{
            return NextResponse.json({success: false, message: 'Failed to search results!'})
        }
    } catch (error) {
        return NextResponse.json({success: false, message: 'Someyhing went wrong!'})
    }
}
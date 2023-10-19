import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../db";

export async function GET(req:NextRequest) {
    try {
        const {searchParams} = new URL(req.url)
        const extractCategoryId = searchParams.get('categoryId')

        const getBlogList = await prisma.post.findMany({
            where:{
                category: extractCategoryId || ''
            }
        })

        if(getBlogList){
            return NextResponse.json({success: true, data: getBlogList})
        }else{
            return NextResponse.json({success: false, message: 'Someyhing went wrong!'})
        }
        
    } catch (error) {
        return NextResponse.json({success: false, message: 'Someyhing went wrong!'})
    }
}
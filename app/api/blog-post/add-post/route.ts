import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../db";

export async function POST(req: NextRequest) {
   try {
    const extractData = await req.json()
   const newData = await prisma.post.create({
    data: extractData
   })

   if(newData){
    return NextResponse.json({success: true, message: 'New blog added successfully'})
   }else{
    return NextResponse.json({success: false, message: 'SOmwthing went wrong!'})
   }

    
   } catch (error) {
        console.log(error)

        return NextResponse.json({success: false, message: 'Someyhing went wrong!'})
   }
}
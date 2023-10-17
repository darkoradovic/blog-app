import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
   try {
    
   } catch (error) {
        console.log(error)

        return NextResponse.json({success: false, message: 'Someyhing went wrong!'})
   }
}
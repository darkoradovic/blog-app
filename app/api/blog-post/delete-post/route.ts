import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
   try {
    
   } catch (error) {
        console.log(error)

        return NextResponse.json({success: false, message: 'Someyhing went wrong!'})
   }
}
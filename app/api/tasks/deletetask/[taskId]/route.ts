import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function DELETE(request:Request,context:any){
    const {params} = context;
    const {taskId} = params;
    console.log("------", taskId
    )
    const deteleTask = await prisma.task.delete({
        where:{
            id:Number(taskId) //taskId
        }
    })
    return NextResponse.json(deteleTask)
}
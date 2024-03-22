import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function PUT(request:Request,context:any){
    const {params} = context;
    const {taskId} = params;
    const {title, description} = await request.json()
    const updateTask = await prisma.task.update({
        where:{
            id:Number(taskId)
        },
        data:{
            description:description
        }
    })
    return NextResponse.json(updateTask)
}
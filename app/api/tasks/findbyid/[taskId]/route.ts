import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request:Request,context:any){
    const {params} = context;
    const task = await prisma.task.findUnique({
        where:{
            id:Number(params.taskId)
        }
    })
    return NextResponse.json(task)
}
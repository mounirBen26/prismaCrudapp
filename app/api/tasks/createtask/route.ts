import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma =new PrismaClient()

export async function POST(request:Request){
    //const body = request.body;
    const {title, description} = await request.json()
    const task = await prisma.task.create({
        data:{
            title:title,
            description:description
        }
    })
    return NextResponse.json(task)
}
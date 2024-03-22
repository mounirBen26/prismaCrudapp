// import { PrismaClient } from "@prisma/client/extension";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(request:Request) {
        const tasks = await prisma.task.findMany();
        return NextResponse.json(tasks);
    }

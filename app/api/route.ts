import { NextResponse } from "next/server"
import data from '../../data.json'
// export async function GET(req:any, res:any){
//   return NextResponse.json({
//     message:'tryining to catch the api in next js'
//   })
// }

export async function GET(){
  return NextResponse.json(data)
}

export async function POST(request:Request){
  const {id:intId,name:userName, email:userEmail} = await request.json()
  return NextResponse.json({id:intId, name:userName, email:userEmail})
}
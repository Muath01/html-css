import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hello: "worlxd",
  });
}
export async function POST(request: Request) {
  const data = await request.json();
  console.log("data: ", data);
  return NextResponse.json({
    hello: "post",
  });
}

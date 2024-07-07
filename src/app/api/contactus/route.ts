import sendEmail from "@/app/actions/sendEmail";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    await sendEmail(data);
    console.log("dataxxx: ", data);
    return NextResponse.json({ hello: "post" });
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}

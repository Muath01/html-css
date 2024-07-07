import { NextResponse } from "next/server";

const users = [
  {
    user: "muath",
    age: 12,
    id: 22,
  },
  {
    user: "muath",
    age: 12,
    id: 23,
  },
  {
    user: "muath",
    age: 12,
    id: 24,
  },
];

export async function GET(request: Request, context: any) {
  console.log("first");
  const { params } = context;

  const user = users.filter((x) => params.userId === x.id.toString());

  const data = await request.json();
  console.log("data: ", data);
  return NextResponse.json({
    user: user,
  });
}

"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(email: string, score: number) {
  console.log("in the create User function: ", score);
  const user = await prisma.user.create({
    data: {
      email: email,
      country: "LY",
      dob: "21-01-21",
      first_name: "Muath",
      second_name: "Khalifa",
      Gender: "M",
      salary_range: "20,000-30,000",
      score,
    },
  });
}

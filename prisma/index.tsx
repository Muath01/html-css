"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(email: string, score: number) {
  console.log("in the create User function: ", email);

  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        country: "LY",
        dob: "21-01-21",
        first_name: "Muath",
        second_name: "Khalifa",
        Gender: "M",
        salary_range: "20,000-30,000",
        email_sent: false,
        paid: false,
        score,
      },
    });
    console.log("created: ", user);
    return user.id;
  } catch (error) {
    console.error(error);
  }
}

export async function upadeteEmailSent(userId: string) {
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      email_sent: true,
    },
  });
}

// returns is a boolean stating whethere an emailhas been sent to this user or not.

export async function emailIsSent(userId: string) {
  console.log("hererrrrrrrrrrrrrrrr: ", userId);
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      email_sent: true,
    },
  });

  if (!user) {
    console.error("User not found:", userId);
    return false; // Assuming unpaid if user is not found
  }

  return user.email_sent;
}

// function to update that the user has paid.

export async function updateUserPaid(userId: string) {
  try {
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        paid: true,
      },
    });

    console.log("user paid => ", user);
  } catch (error) {
    console.error(error);
  }
}

// returns false if user not found
// returns object that has the state of whether user has paid or not.
export async function personHasPaid(userId: string) {
  console.log("personaHasPaid Function: ", userId);
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      paid: true, // Select only the 'paid' field as that's all you need here
      score: true,
    },
  });

  console.log("user: => >> ", user);

  // Optionally handle the case where the user might not be found
  if (!user) {
    console.error("User not found:", userId);
    return false; // Assuming unpaid if user is not found
  }

  console.log("user paid status: -> ", user.paid);

  // Since 'user' is guaranteed to be non-null here, return the 'paid' status directly
  return { paid: user.paid, score: user.score };
}

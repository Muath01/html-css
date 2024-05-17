"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useState } from "react";
import { createUser } from "../../../../prisma";

function formPage() {
  const score = localStorage.getItem("qs4test");
  const [email, setEmail] = useState<string>("");

  async function sendUserData() {
    const testQ = localStorage.getItem("qs4test");

    const score = Number(testQ);
    console.log("TESTFORMSCRE: ", testQ);
    await createUser(email, score);
  }

  return (
    <div className="border-2 border-black-500 h-screen flex items-center justify-center ">
      <Card className="w-[350px] rounded-[10px] border border-black-500">
        <CardHeader>
          <CardTitle>Complete!</CardTitle>
          <CardDescription>
            Where would you like your results to be sent?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email:</Label>
                <Input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="rounded-[5px]"
                  id="name"
                  placeholder="your-email@gmail.com"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={sendUserData}
            asChild
            className="bg-orange-500 rounded-[10px] hover:bg-orange-600"
          >
            <Link href={"/complete/payment"}>Finish</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default formPage;

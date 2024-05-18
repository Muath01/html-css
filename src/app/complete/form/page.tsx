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
import LoadingScreen from "react-loading-screen";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useState } from "react";
import { createUser } from "../../../../prisma";
import { useRouter, useSearchParams } from "next/navigation";

function formPage() {
  const path = useSearchParams();

  const score = localStorage.getItem("qs4test");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [serverLoading, setServerLoading] = useState<boolean>(false);

  const router = useRouter();
  console.log("path: ", router);

  async function sendUserData() {
    setServerLoading(true);
    const testQ = localStorage.getItem("qs4test");

    const score = Number(testQ);
    console.log("TESTFORMSCRE: ", testQ);
    const user = await createUser(email, score);

    router.push(`/complete/payment/${user.id}`);
    localStorage.setItem("userId", user.id);

    setServerLoading(false);
    console.log("user =>>> ", user);
  }

  const timerId = setTimeout(() => {
    console.log("Aciton exectured after 5 seconds");
    setLoading(() => false);
  }, 5000);

  return (
    <div className="h-screen flex items-center justify-center ">
      {loading ? (
        <div className="">
          <LoadingScreen
            loading={true}
            bgColor="rgba(255,255,255,1)"
            spinnerColor="#9ee5f8"
            textColor="#676767"
            logoSrc=""
            text="Test Complete"
            className="bg-black border-2 border-black"
          >
            {" "}
          </LoadingScreen>
        </div>
      ) : (
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
              disabled={serverLoading}
              className="bg-orange-500 rounded-[10px] hover:bg-orange-600 disabled:bg-gray-900  w-24 text-white-100"
            >
              {serverLoading ? "Loading..." : "Finish"}
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}

export default formPage;

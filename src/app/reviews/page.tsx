"use client";
import { usePathname } from "next/navigation";
import React from "react";

function ReviewPage() {
  const pathname = usePathname();

  console.log("path: ", pathname);
  return <div className="active:bg-red-200">ReviewPage xx</div>;
}

export default ReviewPage;

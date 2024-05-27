"use client";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Headern from "@/components/layout/Header";
import { Nav } from "@/components/Nav";
import Pricing from "@/components/Pricing";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { deleteAllUsers } from "../../prisma";
export default function Home() {
  const pathname = usePathname();

  console.log("path: ", pathname);

  return (
    <>
      <Header />;
      <Hero />
      <Feature />
      <Pricing />
      <Footer />
    </>
  );
}

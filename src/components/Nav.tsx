"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";
import { Link as LinkScroll } from "react-scroll";
import { CiHome } from "react-icons/ci";
import { GrContact } from "react-icons/gr";
import { MdOutlineReviews } from "react-icons/md";
import { CiCircleQuestion } from "react-icons/ci";
import "./nav.css";

export function Nav({ children }: { children: ReactNode }) {
  return <nav className="">{children}</nav>;
}

type NavLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  mobile?: boolean;
};

export function NavLink({ mobile = false, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const child = props.children as IconName;
  console.log("props: ", props.children);
  return (
    <>
      {!mobile ? (
        <LinkScroll
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={1000}
          className={
            "text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all hover:cursor-pointer test animation-hover " +
            (pathname === props.href
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 a")
          }
        >
          {props.children}
        </LinkScroll>
      ) : (
        <LinkScroll
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={1000}
          className={
            "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col    items-center text-xs border-t-2 transition-all hover:cursor-pointer  " +
            (pathname === props.href
              ? "  border-orange-500 text-orange-500"
              : " border-transparent")
          }
        >
          <Icon icon={child} />
          {props.children}
        </LinkScroll>
      )}
    </>

    // <Link
    //   {...props}
    //   className={cn(
    //     "p-4 hover:bg-secondary hover:text-black focus-visible:bg-secondary text-black text-xl font-bold focus-visible:text-black",
    //     pathname === props.href && "bg-background text-black"
    //   )}
    // />
  );
}

type IconName = "About" | "Home" | "Contact" | "Testimonial";

const iconComponents = {
  Home: CiHome,
  Testimonial: MdOutlineReviews,
  About: CiCircleQuestion,
  Contact: GrContact,
};

function Icon({ icon }: { icon: IconName }) {
  const IconComponent = iconComponents[icon] || {};

  return (
    <>
      <IconComponent size={24} />
    </>
  );
}

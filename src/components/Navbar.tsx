"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { IoHomeSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SiGeeksforgeeks } from "react-icons/si";

const NAV_ITEMS = [
  {
    icon: IoHomeSharp,
    href: "/",
    label: "Home"
  },
  {
    icon: FaGithub,
    href: "https://github.com/Nizam6239",
    label: "GitHub"
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/nizam-906242226",
    label: "LinkedIn"
  },
  {
    icon: IoMdMail,
    href: "mailto:nizammalik6239@gmail.com",
    label: "Email"
  },
  {
    icon: SiGeeksforgeeks,
    href: "https://www.geeksforgeeks.org/user/nizammalik6239",
    label: "GeeksForGeeks"
  }
];

export function NavbarDemo() {
  return (
    <div className="relative flex items-center justify-center">
      <Navbar className="top-6 flex" />
    </div>
  );
}

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const handleNavigation = (href: string) => {
    if (href.startsWith('http') || href.startsWith('mailto')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = href;
    }
  };

  return (
    <div
      className={cn(
        "fixed top-10 left-0 right-0 md:mx-auto md:max-w-full px-4  flex justify-center",
        className
      )}
    >
      <Menu setActive={setActive}>
        {NAV_ITEMS.map((item) => (
          <MenuItem
            key={item.label}
            setActive={setActive}
            active={active}
            Icon={item.icon}
            onClick={() => handleNavigation(item.href)}
          />
        ))}
      </Menu>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import {Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { IoHomeSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SiGeeksforgeeks } from "react-icons/si";

export function NavbarDemo() {
  return (
    <div className="relative  flex items-center justify-center">
      <Navbar className="top-6" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-[300px] mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} Icon={IoHomeSharp} onClick={() => window.location.href = "/"} >
        </MenuItem>
        <MenuItem setActive={setActive} active={active} Icon={FaGithub} onClick={() => window.location.href = "https://www.linkedin.com/in/nizam-906242226"}>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} Icon={FaLinkedin} onClick={() => window.location.href = "https://www.linkedin.com/in/nizam-906242226"}>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} Icon={IoMdMail} onClick={() => window.location.href = "https://www.linkedin.com/in/nizam-906242226"}>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} Icon={SiGeeksforgeeks} onClick={() => window.location.href = "https://www.geeksforgeeks.org/user/nizammalik6239"}>
        </MenuItem>
      </Menu>
    </div>
  );
}

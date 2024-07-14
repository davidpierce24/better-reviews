import Image from "next/image";
import Link from "next/link";
import React from "react";
import icon from "@/app/icon.png";
import { ModeToggle } from "./ModeToggle";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { Button } from "../ui/button";

const navLinks = [
  {
    name: "Not Found",
    href: "/notfound",
  },
];

function Header() {
  return (
    <header className="flex justify-between items-center py-2 px-4 border-b sticky top-0 z-10 backdrop-blur-md bg-background xs:bg-transparent">
      <div className="flex gap-x-2 items-center">
        <Link href="/">
          <Button variant="default" size="icon">
            <MdOutlineStackedLineChart className="h-6 w-6" />
          </Button>
        </Link>
        <Link href="/">
          <h1 className="font-semibold">Better Reviews</h1>
        </Link>
      </div>

      <div className="flex gap-x-2 items-center">
        <nav>
          <ul className="flex gap-x-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href} className="hover:bg">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;

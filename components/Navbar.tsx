"use client";

import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Input } from "./ui/input";
import { NavItems } from "@/data/NavItems";
import Link from "next/link";
import { CircleUser, Menu, Search, ShoppingCart, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-2">
        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <X size={30} className="top-3 hover:text-red-500 absolute z-40 right-5" />
            ) : (
              <Menu size={24} className="mt-2" />
            )}
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold">
          <Link href="/">
            Amaze <span className="text-orange-500">Mart</span>
          </Link>
        </h1>
      </div>

      {/* Nav Items */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:gap-4 absolute top-0 lg:static bg-slate-900 lg:bg-transparent w-full left-0 lg:w-auto p-4 lg:p-0 z-10`}
      >
        {NavItems?.map((item) => (
          <li key={item?.id} className="capitalize">
            <Link
              href={item?.redirectUrl}
              className={`${
                path === item?.redirectUrl
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500"
              } block lg:inline-block py-2 lg:py-0`}
            >
              {item?.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Button Area */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <label>Login</label>
          <CircleUser />
        </div>
        <div>
          <ShoppingCart />
        </div>
      </div>

      {/* Search Bar and Mode Toggle */}
      {/* <div className="flex items-center gap-3">
        <div className="border-2 rounded-md flex items-center">
          <Input type="text" placeholder="Search Product" className="text-lg" />
          <Search role="button" className="w-10" color="orange" size="22" />
        </div>
        <ModeToggle />
      </div> */}
    </nav>
  );
}

"use client";

import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Input } from "./ui/input";
import { NavItems } from "@/data/NavItems";
import Link from "next/link";
import { CircleUser, Menu, Search, ShoppingCart, X } from "lucide-react";
import { usePathname } from "next/navigation";

const SideBar = () => {
  return (
    <section
      id="sidebar"
      className="absolute top-0 bg-slate-900 min-h-screen w-64"
    >
      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="mt-2 font-semibold text-2xl italic">
          Amaze<span className="text-orange-500">Mart</span>
        </h1>
        <X
          size={24}
          className="mt-4 cursor-pointer"
          onClick={() => {
            document.querySelector("#sidebar")?.classList.add("hidden");
          }}
        />
      </div>
      <ul className="grid gap-4 mt-10 p-1">
        {NavItems?.map((item) => (
          <div
            key={item?.id}
            className="hover:bg-slate-950 cursor-pointer hover:font-semibold w-full p-3 flex items-center gap-3"
          >
            <p>{item?.icon}</p>
            <li className="capitalize">{item?.title}</li>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default function Navbar() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full max-w-[90rem] mx-auto py-2">
      <div className="w-full px-4 py-2 flex items-center justify-between gap-10">
        <div id="toggleBtn" className="flex items-center gap-3">
          {/* Menu Icon */}
          <Menu
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden cursor-pointer"
          />
          <h1 className="font-semibold text-2xl italic">
            Amaze<span className="text-orange-500">Mart</span>
          </h1>
        </div>
        <div className="border hidden container mx-auto md:flex items-center  px-4 py-2 rounded-md gap-4">
          <Search />
          <Input
            inputMode="text"
            className="border-none text-lg px-4 py-2"
            type="text"
            placeholder="Search for Products, Brands and Products"
          />
        </div>
        <div className="flex items-center gap-3">
          <CircleUser />
          <ShoppingCart />
        </div>
      </div>
      {isOpen && <SideBar />}
    </nav>
  );
}

"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { NavItems } from "@/data/NavItems";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { Label } from "./ui/label";
import { ProfileDropDown } from "./ProfileDropDown";
import Link from "next/link";

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
  const [isOpen, setIsOpen] = useState(false);
  const [productValue, setProductValue] = useState("");

  return (
    <nav className="sticky top-0 z-[40] bg-slate-900 w-full mx-auto py-2 shadow-slate-900 shadow-lg">
      <div className="w-full max-w-[90rem] mx-auto px-4 py-2 flex items-center justify-between gap-5">
        <div id="toggleBtn" className="flex items-center gap-3">
          {/* Menu Icon */}
          <Menu
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden cursor-pointer"
          />
          <h1 className="font-semibold text-2xl italic">
            <Link href="/">
              Amaze<span className="text-orange-500">Mart</span>
            </Link>
          </h1>
        </div>
        <form className="border hidden container mx-auto md:flex items-center  px-4 py-2 rounded-md gap-4">
          <Search />
          <Input
            inputMode="text"
            className="border-none text-lg px-4 py-2"
            type="text"
            value={productValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setProductValue(e?.target?.value)
            }
            placeholder="Search for Products, Brands and Products"
          />
        </form>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <ProfileDropDown />
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="cart" className="text-lg">
              Cart
            </Label>
            <ShoppingCart />
          </div>
        </div>
      </div>
      {isOpen && <SideBar />}
    </nav>
  );
}

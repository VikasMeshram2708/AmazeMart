"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser, Gift, UserRound } from "lucide-react";
import Link from "next/link";

export function ProfileDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex gap-2 items-center">
          <CircleUser />
          Login
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          New Customer ?
          <Link href="/" className="ml-5 hover:underline underline-offset-4">
            Sign Up
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem className="cursor-pointer flex items-center gap-4">
          <UserRound size={20} />
          My Profile
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem className="cursor-pointer flex items-center gap-4">
          <Gift size={20} />
          Rewards
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

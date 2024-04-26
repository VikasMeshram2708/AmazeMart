import { CategoryItems } from "@/data/CategoryItems";
import Image from "next/image";
import React from "react";

export default function Categories() {
  return (
    <section className="bg-slate-900 rounded-md w-full max-w-[90rem] mx-auto">
      <div className="flex items-center flex-wrap justify-between px-4 py-4 gap-3 md:gap-7">
        {CategoryItems?.map((item) => (
          <div key={item?.id} className="grid gap-2 place-items-center">
            <p>{item?.icon}</p>
            <p>{item?.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

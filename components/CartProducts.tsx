import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { SampleProducts } from "@/data/SampleProducts";
import { IndianRupee } from "lucide-react";

export default function CartProducts() {
  return (
    <section className="bg-slate-950">
      <div className="max-w-[90rem] mx-auto overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="flex flex-grow">Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {SampleProducts?.slice(0, 5)?.map((item) => (
              <TableRow key={item?.id}>
                <TableCell className="flex gap-4 items-center">
                  <div className="relative w-16 h-16 sm:w-36 sm:h-36">
                    <Image
                      fill
                      className="bg-cover w-full h-full rounded-md"
                      src="https://is.gd/EExDIf"
                      alt="testing"
                    />
                  </div>
                  <p className="hidden sm:block">{item?.title}</p>
                </TableCell>
                <TableCell>{item?.price}</TableCell>
                <TableCell>0</TableCell>
                <TableCell>
                  <span className="flex items-center">
                    <IndianRupee size={15} />
                    999
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

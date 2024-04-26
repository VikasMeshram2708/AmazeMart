// import { CartProducts } from "@/components/CartProducts";
import CartProducts from "@/components/CartProducts";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <section className="min-h-screen">
      <div className="max-w-[90rem] mx-auto mt-10">
        <div className="flex flex-wrap gap-5 justify-center">
          <CartProducts />
          <Card className="w-80 h-80">
            <CardHeader>
              <h1 className="text-lg sm:text-xl  font-semibold uppercase text-center">
                cart totals
              </h1>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex items-center justify-between p-2 bg-slate-900 rounded-md">
                <h1>Subtotal</h1>
                <p>999</p>
              </div>
              <div className="flex items-center justify-between p-2 bg-slate-900 rounded-md">
                <h1>Total</h1>
                <p>333</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Check />
                Proceed to Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

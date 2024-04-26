import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import GetSingleProduct from "@/lib/GetSingleProduct";
import {
  Heart,
  IndianRupee,
  ShoppingCart,
  Star,
  Zap,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function SingleProductPage({
  params,
}: {
  params: { id: number };
}) {
  const Products: Promise<Product> = GetSingleProduct(params?.id);
  const productItem = await Products;
  return (
    <section className="min-h-screen bg-slate-950 font-Poppins">
      <div className="max-w-[90rem] mx-auto mt-10 flex gap-10 flex-wrap lg:flex-nowrap">
        {/* Left Side */}
        <aside className="container w-[30rem]">
          <Card>
            <CardHeader>
              <div className="relative">
                <Heart className="absolute right-0 top-0" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-square">
                <Image
                  fill
                  className="object-contain w-full h-full"
                  src={productItem?.image}
                  alt={productItem?.title}
                />
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between gap-5">
              <Button>
                <ShoppingCart />
                Add to Cart
              </Button>
              <Button>
                <Zap />
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </aside>
        {/* Right Side */}
        <aside className="w-full container">
          <Card className="">
            <CardHeader className="grid gap-3">
              <h1 className="text-sm md:text-xl">{productItem?.title}</h1>
              <p className="text-sm md:text-lg">{productItem?.description}</p>
              <div className="flex items-center gap-4">
                <div className="bg-green-700 rounded-md w-20 flex items-center justify-center gap-3 p-1">
                  <p className="text-sm">{productItem?.rating.rate}</p>
                  <Star size="15" color="white" />
                </div>
                <p className="text-sm md:text-lg">
                  {productItem?.rating.count} reviews
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <Button variant="outline">
                <p className="flex items-center gap-2">
                  <IndianRupee size="18" />
                  <span className="text-sm lg:text-lg font-semibold">
                    {productItem?.price}
                  </span>
                </p>
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </section>
  );
}

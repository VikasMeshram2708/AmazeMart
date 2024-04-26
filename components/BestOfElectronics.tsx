import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import GetElectronicsProducts from "@/lib/GetElectronicsProducts";
import Link from "next/link";

export async function BestOfElectronics() {
  const AllProducts: Promise<Product[]> = GetElectronicsProducts();
  const Products = await AllProducts;

  return (
    <section className="w-full max-w-[90rem] mx-auto">
      <h1 className="my-5 text-lg sm:text-2xl font-semibold">
        Best Of Electronics
      </h1>
      <div className="container mx-auto flex gap-3 sm:gap-16">
        <Carousel className="w-full max-w-[90rem] mx-auto">
          <CarouselContent className="-ml-1">
            {Products.map((item) => (
              <CarouselItem
                key={item?.id}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="relative flex aspect-square items-center justify-center p-6">
                      <Link href={`/${item?.id}`}>
                        <Image
                          fill
                          className="w-full h-full object-contain"
                          src={item?.image}
                          alt={item?.title}
                        />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* static discount offer */}
        <div className="hidden lg:block relative z-[-999] w-96 h-80 rounded-md">
          <Image
            fill
            className="bg-cover w-full max-w-md h-full"
            src="https://is.gd/QUt6vP"
            alt="discount and offers"
          />
        </div>
      </div>
    </section>
  );
}

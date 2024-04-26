"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BannerData } from "@/data/BannerData";
import Image from "next/image";

export function ProductSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <section className="container mx-auto">
      <Carousel
        plugins={[plugin.current]}
        className="w-full mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="carousel-content px-4 md:px-0">
          {BannerData.map((item, index) => (
            <CarouselItem key={item.id} className="carousel-item">
              <Card>
                <CardContent className="relative h-64 md:h-96">
                  <Image
                    src={item.imgSrc}
                    alt="banner, discounts & offers"
                    className="w-full h-full bg-cover"
                    fill
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="carousel-prev text-4xl">
          &#8249;
        </CarouselPrevious>
        <CarouselNext className="carousel-next text-4xl">&#8250;</CarouselNext>
      </Carousel>
    </section>
  );
}

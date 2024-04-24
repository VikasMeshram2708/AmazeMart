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
import Image from "next/image";

export function ProductSlider() {
  const BannerData: Banner[] = [
    {
      id: 1,
      imgSrc: "https://is.gd/1yk9YZ",
    },
    {
      id: 2,
      imgSrc: "https://is.gd/NsYN6m",
    },
    {
      id: 3,
      imgSrc: "https://is.gd/eAI1q7",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-[90%] mx-auto p-6"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {BannerData?.map((item) => (
          <CarouselItem key={item?.id}>
            <div className="">
              <Card>
                <CardContent className="flex">
                  <Image
                    src={item?.imgSrc}
                    className="w-full h-96 bg-cover"
                    alt="grab hot deals on 50% discount"
                    width={500}
                    height={500}
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = "https://is.gd/McqRnk";
                    }}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

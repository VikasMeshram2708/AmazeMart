import { BestOfElectronics } from "@/components/BestOfElectronics";
import Categories from "@/components/Categories";
import { ProductSlider } from "@/components/ProductSlider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GetAllProducts from "@/lib/GetAllProducts";
import { Heart, IndianRupee, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const AllProducts: Promise<Product[]> = GetAllProducts();
  const Products = await AllProducts;
  return (
    <main className="min-h-screen font-Poppins">
      {/* Categories Section */}
      <div className="container mx-auto mt-5">
        <Categories />
      </div>
      {/* Slider */}
      <div className="mt-10 container mx-auto">
        <ProductSlider />
      </div>
      {/* Best OF Electronics */}
      <div className="mt-10 container mx-auto">
        <BestOfElectronics />
      </div>
      {/* All Products */}
      <div className="container mx-auto mt-10">
        <h1 className="my-5 text-lg sm:text-2xl font-semibold">
          Best Deal of the day
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Products?.map((item) => (
            <Card key={item?.id} className="grid gap-5">
              <CardHeader className="relative">
                <div className="absolute right-5 top-3">
                  <Heart />
                </div>
              </CardHeader>
              <CardContent className="grid gap-5">
                <div className="relative aspect-square">
                  <Link href={`/${item?.id}`}>
                    <Image
                      fill
                      src={item?.image}
                      alt={item?.title}
                      className="object-contain w-full h-full"
                    />
                  </Link>
                </div>
                <CardTitle className="text-sm sm:text-lg line-clamp-2">
                  {item?.title}
                </CardTitle>
                <div className="bg-green-700 rounded-md w-20 flex items-center justify-center gap-3 p-1">
                  <p className="text-sm">{item?.rating.rate}</p>
                  <Star size="15" color="white" />
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap items-center justify-between">
                <Button>
                  <IndianRupee />
                  {item?.price}
                </Button>
                <Button variant="link">
                  <Link href={`/${item?.id}`}>See Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

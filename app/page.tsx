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
import { IndianRupee } from "lucide-react";
import Image from "next/image";

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
            <Card key={item?.id}>
              <CardHeader>
                <CardTitle className="text-sm line-clamp-1">
                  {item?.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-square">
                  <Image
                    fill
                    src={item?.image}
                    alt={item?.title}
                    className="object-contain w-full h-full"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap items-center justify-between">
                <Button>
                  <IndianRupee />
                  {item?.price}
                </Button>
                <Button variant="link">See Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

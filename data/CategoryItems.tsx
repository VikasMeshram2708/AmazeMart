import {
  AppWindowMac,
  Bike,
  Blocks,
  Cable,
  Home,
  MonitorSmartphone,
  Navigation,
  Shirt,
  ShoppingBasket,
} from "lucide-react";

interface CategoryItem {
  id: number;
  title: string;
  icon: JSX.Element;
}

export const CategoryItems: CategoryItem[] = [
  {
    id: 1,
    title: "Grocery",
    icon: <ShoppingBasket />,
  },
  {
    id: 2,
    title: "Mobiles",
    icon: <MonitorSmartphone />,
  },
  {
    id: 3,
    title: "Fashion",
    icon: <Shirt />,
  },
  {
    id: 4,
    title: "Electronics",
    icon: <Cable />,
  },
  {
    id: 5,
    title: "Home & Furniture",
    icon: <Home />,
  },
  {
    id: 6,
    title: "Appliances",
    icon: <AppWindowMac />,
  },
  {
    id: 7,
    title: "Travel",
    icon: <Navigation />,
  },
  {
    id: 8,
    title: "Beauty, Toys and More",
    icon: <Blocks />,
  },
  {
    id: 9,
    title: "Two Wheelers",
    icon: <Bike />,
  },
];

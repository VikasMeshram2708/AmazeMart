import { Handshake, Home, Package, ReceiptText, Siren, Store } from "lucide-react";

interface NavItem {
  id: number;
  title: string;
  redirectUrl: string;
  icon: JSX.Element;
}

export const NavItems: NavItem[] = [
  {
    id: 1,
    title: "home",
    redirectUrl: "/",
    icon: <Home />,
  },
  {
    id: 2,
    title: "products",
    redirectUrl: "/products",
    icon: <Package />,
  },
  {
    id: 3,
    title: "about",
    redirectUrl: "/about",
    icon:<Store />
  },
  {
    id: 4,
    title: "contact",
    redirectUrl: "/contact",
    icon:<ReceiptText />
  },
  {
    id: 5,
    title: "privacy policy",
    redirectUrl: "/privacy",
    icon:<Siren />
  },
  {
    id: 6,
    title: "terms",
    redirectUrl: "/terms",
    icon:<Handshake />
  },
];

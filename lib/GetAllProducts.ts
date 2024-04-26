export default async function GetAllProducts() {
  const response = await fetch(process.env.NEXT_PUBLIC_PRODUCT_BASE_URL!);
  if (!response.ok) throw new Error("Failed to fetch the products");
  return response.json();
}

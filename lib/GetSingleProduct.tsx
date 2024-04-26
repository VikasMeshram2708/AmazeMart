export default async function GetSingleProduct(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_PRODUCT_BASE_URL!}/${id}`
  );
  if (!response.ok) throw new Error("Failed to fetch the products");
  return response.json();
}

export default async function GetElectronicsProducts() {
  const response = await fetch(process.env.NEXT_PUBLIC_PRODUCT_BASE_URL!);
  if (!response.ok) throw new Error("Failed to fetch the products");
  const result =  await  response.json() as Product[];
  const electronicsProducts = result?.filter(item => item?.category === 'electronics')
  return electronicsProducts;
}

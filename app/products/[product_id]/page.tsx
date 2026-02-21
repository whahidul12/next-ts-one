import GetType from "@/utils/GetType";

export default async function Products({
  params,
}: {
  params: Promise<{ product_id: string }>;
}) {
  const productId = (await params).product_id;
  return (
    <>
      <h1>Products {productId} tt</h1>
    </>
  );
}

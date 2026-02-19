import GetType from "@/utils/GetType";

export default async function Products(props: {
  params: Promise<{ product_id: string }>;
}) {
  console.log(GetType(props));
  console.log(GetType(props.params));
  console.log("params :>> ", await props.params);
  return (
    <>
      <h1>Products</h1>
    </>
  );
}

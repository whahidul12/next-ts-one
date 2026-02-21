import { notFound } from "next/navigation";

export default async function ProductReview({
  params,
}: {
  params: Promise<{ product_id: string; review_id: string }>;
}) {
  const { product_id, review_id } = await params;
  if (parseInt(review_id) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>
        this is the review_id {review_id} for product {product_id}
      </h1>
    </>
  );
}

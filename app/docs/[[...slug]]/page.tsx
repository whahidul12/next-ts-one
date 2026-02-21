export default async function Docs({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const url = slug?.join("/") ?? "";
  console.log(url);
  console.log(slug);
  return (
    <>
      <h1>Docs</h1>
    </>
  );
}

import Link from "next/link";

export default async function Article({
  params,
  searchParams,
}: {
  params: Promise<{ article_id: string }>;
  searchParams: Promise<{ lang?: "eng" | "ban" | "arb" }>;
}) {
  const { article_id } = await params;
  const { lang = "eng" } = await searchParams;
  return (
    <>
      <h1>article ID is {article_id}</h1>
      <h1>article language is {lang}</h1>
      <br />
      <Link href={`/articles/${article_id}?lang=eng`}>English</Link>
      <br />
      <Link href={`/articles/${article_id}?lang=ban`}>Bangla</Link>
      <br />
      <Link href={`/articles/${article_id}?lang=arb`}>Arabic</Link>
      <br />
      <br />
      <Link href={"/"}>Home</Link>
    </>
  );
}

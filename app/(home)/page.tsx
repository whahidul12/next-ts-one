import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/products">Products</Link>
      <br />
      <br />
      <p>Articale-123</p>
      <br />
      <Link href="/articles/news-123?lang=eng">Read in english</Link>
      <br />
      <Link href="/articles/news-123?lang=ban">Read in Bangla</Link>
      <br />
      <Link href="/articles/news-123?lang=arb">Read in Arabic</Link>
      <br />
      <br />
      <br />
      <p>Articale-xyz</p>
      <br />
      <Link href="/articles/news-xyz?lang=eng">Read in english</Link>
      <br />
      <Link href="/articles/news-xyz?lang=ban">Read in Bangla</Link>
      <br />
      <Link href="/articles/news-xyz?lang=arb">Read in Arabic</Link>
      <br />
      <br />
      <br />
      <Link className="bg-amber-200 text-black" href={"/order"}>
        view Products
      </Link>
    </>
  );
}

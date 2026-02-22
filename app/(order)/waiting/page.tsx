"use client";

import { useRouter } from "next/navigation";

export default function Wating() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 3000);
  return (
    <>
      <h1>wating....</h1>
    </>
  );
}

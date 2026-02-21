"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <>
      <h1>404 || review not found</h1>
    </>
  );
}

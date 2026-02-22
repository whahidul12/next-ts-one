"use client";

import { useRouter } from "next/navigation";

export default function Order() {
  const route = useRouter();
  const handleOrder = () => {
    console.log("placing the order");
    route.push("/waiting");
  };
  return (
    <>
      <h1>product</h1>
      <p>order now</p>
      <button className="bg-amber-200 text-black" onClick={handleOrder}>
        Order Now
      </button>
    </>
  );
}

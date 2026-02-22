"use client";
export default function ErrorHandle({ error }: { error: Error }) {
  return (
    <>
      <h1>{error.message}</h1>
    </>
  );
}

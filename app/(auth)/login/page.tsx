"use client";
import { useState } from "react";

export default function Login() {
  const [input, setImput] = useState("");
  return (
    <>
      <input
        className="border"
        value={input}
        onChange={(e) => setImput(e.target.value)}
      ></input>
    </>
  );
}

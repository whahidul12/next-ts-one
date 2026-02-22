"use client";
import { usePathname } from "next/navigation";
import "../globals.css";
import Link from "next/link";
import { useState } from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const [input, setImput] = useState("");
  const authLinks = [
    {
      name: "login",
      link: "/login",
    },
    {
      name: "register",
      link: "/register",
    },
    {
      name: "forget-password",
      link: "/forget-password",
    },
  ];
  return (
    <html>
      <body>
        {children}
        <br />
        <br />
        <input
          className="border"
          value={input}
          onChange={(e) => setImput(e.target.value)}
        ></input>
        <br />
        <br />
        {authLinks.map((link, index) => {
          const isActive =
            pathName === link.link ||
            (pathName.startsWith(link.link) && pathName !== "/");
          return (
            <>
              <Link
                className={isActive ? "font-bold mr-2 text-red-700" : "mr-2"}
                href={link.link}
                key={index}
              >
                {link.name}
              </Link>
            </>
          );
        })}
      </body>
    </html>
  );
}

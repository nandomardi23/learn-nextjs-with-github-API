// import { url } from "inspector";
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../src/styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <html>
      <head />
      <body>
        {/* <>Header</> */}
        <ul>
          <li>
            {" "}
            <Link href="/">Home</Link>{" "}
          </li>
          <li>
            <Link href={"/dashboard"}>Dasboard</Link>
          </li>
          <li>
            <Link href={"/settings"}>Settings</Link>
          </li>
          <li>
            <Link href={"/calculator"}>Calculator</Link>
          </li>
          <li>
            <Link href={"/cari"}>Cari orang</Link>
          </li>
        </ul>
        {children}
        <>footer</>
      </body>
    </html>
  );
}

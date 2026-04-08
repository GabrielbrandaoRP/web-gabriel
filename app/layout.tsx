import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./_components/nav-bar";
import { AosInit } from "./_components/aos-init";
import { Raleway } from 'next/font/google'
import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  title: "Gabriel Brandão - Desenvolvedor Front-end",
  description: "Front-end Developement",
};

export const raleway = Raleway({ 
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(raleway.className, "font-mono")}>
      <body>
        <NavBar/>
        {children}
        <AosInit />
      </body>
    </html>
  );
}

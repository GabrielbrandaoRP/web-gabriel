import type { Metadata } from "next";
import "./globals.css";
import { jetbrainsMono } from './fonts';
import NavBar from "./_components/nav-bar";
import { AosInit } from "./_components/aos-init";
import { Tektur} from 'next/font/google'

export const metadata: Metadata = {
  title: "Gabriel Brandão - Desenvolvedor Front-end",
  description: "Front-end Developement",
};

export const tektur = Tektur({ 
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={tektur.className}>
      <body>
        <NavBar/>
        {children}
        <AosInit />
      </body>
    </html>
  );
}

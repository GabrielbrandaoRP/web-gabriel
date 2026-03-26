import type { Metadata } from "next";
import "./globals.css";
import { jetbrainsMono } from './fonts';
import NavBar from "./_components/nav-bar";
import { AosInit } from "./_components/aos-init";
import { Raleway} from 'next/font/google'

export const metadata: Metadata = {
  title: "Gabriel Brandão - Desenvolvedor Front-end",
  description: "Front-end Developement",
};

// export const tektur = Tektur({ 
//   subsets: ['latin'],
//   display: 'swap',
// });
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
    <html lang="en" className={raleway.className}>
      <body>
        <NavBar/>
        {children}
        <AosInit />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/shared/nav-bar";
import { AosInit } from "../components/shared/aos-init";
import { Raleway, Inter } from 'next/font/google'
import { cn } from "@/lib/utils";
import PageLoader from "../components/shared/page-loader";
import { ToggleModeColor } from "../components/shared/toggle-mode-color";


export const metadata: Metadata = {
  title: "Gabriel Brandão - Desenvolvedor Front-end",
  description: "Front-end Developement",
  icons: {
      icon: [
        {
          url: "@/app/assets/logo-branco@4x-8.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "@/app/assets/logo-preto@4x-8.png",
          media: "(prefers-color-scheme: dark)",
        },
      ],
    },

};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const raleway = Raleway({ 
  subsets: ['latin'],
  variable: '--font-raleway',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(raleway.variable, inter.variable)}>
      <body className="font-raleway">
         
        {/*<PageLoader />*/}
        <NavBar/>
        {children}
        <ToggleModeColor/>
        <AosInit />
      </body>
    </html>
    );
  }

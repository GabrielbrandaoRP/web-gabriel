"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logoWhite from "@/app/assets/logo-branco@4x-8.png";
import logoDark from "@/app/assets/logo-preto@4x-8.png";
export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [finish, setFinish] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 25;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          setFinish(true);
        }, 400); // tempo pra animação final
      }

      setProgress(value);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (finish) return null;

  return (
    <div className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden">
      <Image
        src={isDark ? logoWhite : logoDark} 
        alt="Logo"
        width={150}
        height={150}
        className=" animate-loader"
      />

      <div className="absolute bottom-10 w-2/3 h-1 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-black dark:bg-white transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import pepe from "../../public/images/pepe-annabelle-removebg.png";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const randomDelay = () => Math.floor(Math.random() * 3000) + 1000;
    let timeoutId: number;

    const showAndHide = () => {
      if (imgRef.current) {
        imgRef.current.style.display = "block";
        imgRef.current.style.transition = "transform 5s ease-in-out";
        imgRef.current.style.transform = "translateX(-100%)";
      }
      setTimeout(() => {
        if (imgRef.current) {
          imgRef.current.style.transform = "translateX(0)";
        }
        timeoutId = window.setTimeout(showAndHide, randomDelay());
      }, 3000);
    };
    timeoutId = window.setTimeout(showAndHide, randomDelay());

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <main className="relative flex grow flex-col">{children}</main>
      <Image ref={imgRef} src={pepe} alt="pepe" className="pepe hidden fixed bottom-0" />
      <Footer />
    </>
  );
}

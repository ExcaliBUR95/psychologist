"use client";
import React from "react";
import { Requests } from "../shared/Requests";
import { About } from "@/shared/About";
import { Price } from "@/shared/Price";
import { Header } from "@/shared/Header";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useRef } from "react";
import { Footer } from "@/shared/Footer";

export function Main() {
  gsap.registerPlugin(ScrollToPlugin);

  const artRef1 = useRef<HTMLDivElement>(null);
  const artRef2 = useRef(null);
  const artRef3 = useRef(null);

  const scrollTo = (target: any) => {
    if (target.current) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: target.current.offsetTop, autoKill: true },
      });
    }
    return;
  };
  return (
    <div className="box-border">
      <Header
        scrollTo={scrollTo}
        artRef1={artRef1}
        artRef2={artRef2}
        artRef3={artRef3}
      />
      <div className="flex flex-col">
        <About artRef1={artRef1} />
        <Requests artRef2={artRef2} />
        <Price artRef3={artRef3} />
      </div>
      <Footer />
    </div>
  );
}

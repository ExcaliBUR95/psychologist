"use client";
import React from "react";
import { Requests } from "../shared/Requests";
import { About } from "@/shared/About";
import { Price } from "@/shared/Price";
import { Header } from "@/shared/Header";
import { useRef } from "react";
import { Footer } from "@/shared/Footer";

export function Main() {
  const artRef1 = useRef<HTMLDivElement>(null);
  const artRef2 = useRef(null);
  const artRef3 = useRef(null);

  const scrollTo = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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

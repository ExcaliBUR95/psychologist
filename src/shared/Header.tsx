import Link from "next/link";
import React from "react";
import { Telegram } from "./assets/Telegram";
import { Whatsapp } from "./assets/Whatsapp";

interface HeaderProps {
  scrollTo: (target: React.RefObject<HTMLElement>) => void;
  artRef1: React.RefObject<HTMLElement>;
  artRef2: React.RefObject<HTMLElement>;
  artRef3: React.RefObject<HTMLElement>;
}

export function Header({ scrollTo, artRef1, artRef2, artRef3 }: HeaderProps) {
  return (
    <header className="flex flex-row gap-2 justify-between text-2xl fixed bg-black w-full z-20 text-white p-4">
      <nav className="flex flex-row gap-4">
        <ul className="cursor-pointer" onClick={() => scrollTo(artRef1)}>
          Обо мне
        </ul>
        <ul className="cursor-pointer" onClick={() => scrollTo(artRef2)}>
          Запросы
        </ul>
        <ul className="cursor-pointer" onClick={() => scrollTo(artRef3)}>
          Цена
        </ul>
      </nav>
      <p>Clinical psychologist RAYAN</p>
      <div className="flex flex-row gap-4">
        <p>email: Rayana8929@bk.ru</p>
        <Link
          href={"https://t.me/dzhamalh1"}
          target="_blank"
          className="flex gap-2 items-center"
        >
          <Telegram />
        </Link>
        {/* <Link
          href={
            "https://api.whatsapp.com/send/?phone=799991927953&text=Здравствуйте%21+Мой+запрос.&type=phone_number&app_absent=0"
          }
          target="_blank"
          className="flex gap-2 items-center"
        >
          <Whatsapp />
        </Link> */}
      </div>
    </header>
  );
}

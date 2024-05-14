import Link from "next/link";
import React from "react";
import { Telegram } from "./assets/Telegram";
import { Whatsapp } from "./assets/Whatsapp";

export function Footer() {
  return (
    <footer>
      <div className="flex items-center flex-col gap-3 pt-4 text-4xl font-light text-white bg-black">
        <h1>Контакты:</h1>
        <Link
          href={"https://t.me/dzhamalh1"}
          target="_blank"
          className="flex gap-2 items-center"
        >
          <Telegram /> Telegram: @dzhamalh1
        </Link>
        {/* <Link
          href={
            "https://api.whatsapp.com/send/?phone=799991927953&text=Здравствуйте%21+Мой+запрос.&type=phone_number&app_absent=0"
          }
          target="_blank"
          className="flex gap-2 items-center"
        >
          <Whatsapp /> Whatsapp: +7 999 919 2795
        </Link> */}
      </div>
    </footer>
  );
}

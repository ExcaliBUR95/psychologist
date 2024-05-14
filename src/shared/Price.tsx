import React, { LegacyRef } from "react";

interface PriceProps {
  artRef3: LegacyRef<HTMLDivElement> | null;
}

export function Price({ artRef3 }: PriceProps) {
  return (
    <>
      <div
        ref={artRef3}
        className="h-screen m-auto items-center flex gap-4 mt-10 "
      >
        <div className="flex gap-4 justify-center items-center relative">
          <h1 className="absolute top-[-70px] left-0 z-10 text-5xl text-blue-600">
            Стоимость
          </h1>
          <div className="border-2 rounded-xl p-4 pb-4 border-blue-500">
            <h2 className="text-4xl p-4">Очные консультации в Москве</h2>
            <p className="p-4">50/55 минут</p>
            <h3 className="text-4xl text-blue-500 p-4">5000 ₽</h3>
            <p className="p-4">метро Лубянка / Кузнецкий мост</p>
          </div>
          <div className="border-2 rounded-xl p-4 pb-4 border-blue-500">
            <h4 className="text-4xl p-4">Онлайн консультации</h4>
            <p className="p-4">50/55 минут</p>
            <h5 className="text-4xl text-blue-500 p-4">3500 ₽</h5>
            <p className="p-4">
              В Zoom, Skype и любом другом удобном мессенджере
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

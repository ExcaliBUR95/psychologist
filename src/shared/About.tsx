import React, { LegacyRef } from "react";

interface AboutProps {
  artRef1: LegacyRef<HTMLDivElement> | null;
}

export function About({ artRef1 }: AboutProps) {
  return (
    <div
      className="rounded-xl p-36 flex flex-col bg-white text-2xl w-1/2 items-start justify-start mt-36 h-screen"
      ref={artRef1}
    >
      <h1 className="text-4xl font-bold">Обо мне</h1>
      <br />
      <p className="leading-10">
        Меня зовут Раяна Мухтаровна Джамалхановна. Я - клинический психолог,
        когнитивно-поведенческий терапевт, выпускница Московского
        государственного университета имени М.В. Ломоносова. Работаю в области
        когнитивно-поведенческой терапии, являясь членом Ассоциации
        когнитивно-поведенческой психотерапии. Моя цель — помочь людям обрести
        гармонию в жизни, поддерживая их на пути к лучшему пониманию себя и
        окружающего мира.
      </p>
    </div>
  );
}

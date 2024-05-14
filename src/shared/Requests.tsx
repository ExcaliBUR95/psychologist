import { Skills } from "@/shared/Skills";
import React, { LegacyRef } from "react";

interface RequestsProps {
  artRef2: LegacyRef<HTMLDivElement> | null;
}

export function Requests({ artRef2 }: RequestsProps) {
  return (
    <div ref={artRef2} className="h-screen items-center m-auto">
      <div className="mt-10 flex justify-center mb-10 mt-20">
        <h1 className="text-3xl mr-2">ЗАПРОСЫ</h1>
        <div className="w-[520px] items-center border rounded-xl m-2 border-blue-300">
          <Skills>Зависимое поведение</Skills>
          <Skills>Низкий уровень самооценки</Skills>
          <Skills>Кризис расставания, развод</Skills>
          <Skills>Одинoчecтвo, пoиск себя, cвoего мecтa в жизни</Skills>
          <Skills>Потеря мотивации, прокрастинация</Skills>
          <Skills>Панические атаки</Skills>
          <Skills>Гнев, агрессия и другие сложные чувства</Skills>
          <Skills>Пеpeживaние утpaты, потеpя цeли и смыcлa жизни</Skills>
          <Skills>Cтpecсовые состояния</Skills>
          <Skills>
            Потеря будущего, потеря безопасности, потеря значимого окружения
            (развод, расставание, увольнение, кризисы, горе)
          </Skills>
          <Skills>Синдром дефицита внимания и гиперактивности (СДВГ)</Skills>
          <Skills>В моей жизни что-то не так, но не понимаю что</Skills>
        </div>
      </div>
      <p className="text-gray-400 m-auto">
        Вы можете написать мне, если не нашли среди запросов свой. И, если
        запрос не будет входить в зону моей компетенции, я смогу порекомендовать
        вам коллег, которым доверяю
      </p>
    </div>
  );
}

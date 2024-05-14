import React, { ReactNode } from "react";

type SkillsProps = {
  children: ReactNode;
};

export function Skills({ children }: SkillsProps) {
  return (
    <div
      className={"px-4 py-2 m-2 rounded-full inline-block text-xs bg-blue-300"}
    >
      {children}
    </div>
  );
}

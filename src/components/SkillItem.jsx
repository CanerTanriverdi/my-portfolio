import React from "react";

export default function SkillItem({ name, icon }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={icon}
        alt={name}
        className="w-14 h-14 transition-all duration-300 hover:scale-125"
      />
      <p className="mt-2 text-lg font-medium">{name}</p>
    </div>
  );
}

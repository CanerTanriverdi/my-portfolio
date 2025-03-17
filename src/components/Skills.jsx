import React from "react";
import skillsData from "../data/skillsData";
import SkillItem from "./SkillItem";

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold border-4 border-primary px-6 py-2 mb-10 tracking-widest">SKILLS</h1>
      <div>
        <div>
          <h2 className="w-full text-left text-2xl font-bold mb-4 py-10">USING NOW:</h2>
          <div className="grid grid-cols-4 gap-10 mb-10">
            {skillsData.usingNow.map((skill) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="w-full text-left text-2xl font-bold mb-4 py-10">LEARNING:</h2>
          <div className="grid grid-cols-4 gap-10 mb-10">
            {skillsData.learning.map((skill) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="w-full text-left text-2xl font-bold mb-4 py-10">OTHER SKILLS:</h2>
          <div className="grid grid-cols-4 gap-10 mb-10">
            {skillsData.otherSkills.map((skill) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

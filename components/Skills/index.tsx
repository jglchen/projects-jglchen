"use client";
import React, { useState } from "react";
import SingleSkill from "./SingleSkill";
import skillData from "./skillData";
import { Projects } from 'contentlayer/generated';
import ProjectsDisplay from "../Projects/ProjectsDisplay";


const Skills = ({ projects, locale }:{ projects: Projects[]; locale: string;}) => {
  const [skillSelected, setSkillSelected] = useState('');
  const projectsList = skillSelected ? projects.filter(project => project.skills?.includes(skillSelected)): [];

  function selectSkill(skill: string){
    setSkillSelected(skill);
  }

  return (
    <>
      <section className="bg-alabaster dark:bg-black border border-x-0 border-y-stroke dark:border-y-strokedark">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-x-7.5 gap-y-7.5 lg:gap-x-12.5 xl:gap-x-29 justify-center items-center">
            {skillData.map(skill => (
              <SingleSkill 
                key={skill.srno}
                skill={skill} 
                selectSkill={selectSkill} 
                skillSelected={skillSelected}
                />
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-c-1280 px-4 md:px-8 2xl:px-0 mt-14 xl:mt-18">
        <section className="pb-20 pt-20">
          <div className="container">
            <ProjectsDisplay
              projects={projectsList}
              locale={locale}
            />
          </div>
        </section>
      </div> 
    </>
  );

};

export default Skills;
